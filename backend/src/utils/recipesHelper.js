import mockRecipes from '../mock/recetas.json' assert { type: "json" };
import { recipeModel } from '../models/index.js'
import dbConnect from '../config/mongodb.js'

// fectch data with fecch api
const fetchRecipes = async (query) => {
    try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        if (data.status !== 200)
            throw new Error('Error fetching data')

        // console.log(`data before json: ${data}`)
        return await data.json()
    } catch (error) {
        console.log(error);
        return null
    }
}

const fetchRecipesMock = async (query) => {
    return await mockRecipes;
}

const convertRecipesToModel = (remoteRecipes) => {

    const model = {
        id: remoteRecipes.idMeal,
        name: remoteRecipes.strMeal,
        category: remoteRecipes.strCategory,
        area: remoteRecipes.strArea,
        thumbnail: remoteRecipes.strMealThumb,
        sourceImage: remoteRecipes.strSource,
        tags: remoteRecipes.strTags?.split(',') ?? [],
        youtube: remoteRecipes.strYoutube,
        imageSource: remoteRecipes.strImageSource,
        instructions: remoteRecipes.strInstructions,
        ingredients: []
    }

    // Calcular y unificar ingredientes y medidas de los integredientes
    for (let i = 1; i <= 20; i++) {
        if (remoteRecipes[`strIngredient${i}`]) {
            model.ingredients.push({
                name: remoteRecipes[`strIngredient${i}`],
                measure: remoteRecipes[`strMeasure${i}`]
            })
        }
    }

    return model

}

// process recipes
let queryLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
// queryLetters = ['a']


//obtener recetas
async function transformOriginRecipesAndInsertModelToBD() {

    try {
        await dbConnect()
        console.log('MongoDB connected')
    } catch (error) {
        console.log(`Error connecting to MongoDB: ${error} `)
        return null
    }


    //Delete all recipes
    const result = await recipeModel.deleteMany({})
    console.log(`=== Deleted ${result.deletedCount} recipes ====\n`)

    // Obtener recetas de la API
    const modelRecipesArrayOfArray = await Promise.all(

        queryLetters.map(async (letter) => {
            const remoteRecipes = await fetchRecipes(letter)
            // const remoteRecipes = await fetchRecipesMock(letter)
            console.log(`recetas obtenidas con la letra '${letter}': ${remoteRecipes.meals.length}}`);

            const modelRecipes = remoteRecipes.meals.map((recipe) => convertRecipesToModel(recipe))

            // console.log(JSON.stringify(modelRecipes, null, 2))

            return modelRecipes;
        })
    )



    // MODEL RECIPES, es un array de arrays, cada array contiene las recetas de una letra
    // ==> Necesito aplanar el array para que sea un array de recetas
    // const modelRecipes = modelRecipes.flat()

    const modelRecipes = modelRecipesArrayOfArray.flat()

    // console.log(`modelRecipes: ${JSON.stringify(modelRecipes, null, 2)}`)

    console.log(`Recetas convertidas a modelo: ${modelRecipes.length} \n`)

    // Ahora las inserto en la BD
    await Promise.all(
        modelRecipes.flat().map(async (recipe) => {
            try {
                await recipeModel.create(recipe)
            } catch (error) {
                console.log(`Error inserting recipe ${recipe.id} / ${recipe.name}: ${error}`)
            }
            console.log(`Recipe ${recipe.id} / ${recipe.name} inserted`)
        })
    )
}


// Transformar recetas y guardarlas en la BD
await transformOriginRecipesAndInsertModelToBD()

console.log('Done!')




// console.log(recetas);
