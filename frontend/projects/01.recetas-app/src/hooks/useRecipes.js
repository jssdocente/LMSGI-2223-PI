import { useEffect, useState } from "react";
import { searchRecipes } from "../services/recipes";


export function useRecipes() {

    const [recipes, setRecipes] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);

    const getRecipes = async ({ search }) => {
        console.log(`useRecipes hootk rendering... ${search}`)
        const newRecipes = await searchRecipes({ search });
        setRecipes(newRecipes)
    }


    // useEffect(async () => {

    //     if (search === '') return;

    //     try {
    //         setLoading(true)
    //         setError(null)

    //         //const newRecipes = await searchRecipes({ search });
    //         const newRecipes = []
    //         setRecipes(newRecipes)

    //     } catch (err) {
    //         setError(err.message);
    //     } finally {
    //         setLoading(false);
    //     }

    // }, [search]);

    return { recipes, getRecipes }
}