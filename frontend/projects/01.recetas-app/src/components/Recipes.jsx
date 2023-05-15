import React from 'react'

function ListOfRecipes({ recipes }) {

  const hasRecipes = recipes?.length > 0

  return (
    <div className='gallery' >
      {
        recipes.map((recipe) => (
          <article className='card' key={recipe.id}>
            <div className="card__img">
              <h3>{recipe.name}</h3>
              <img src={recipe.thumbnail} alt={recipe.name} />
            </div>
            <h4 className="card__title">
              <a href={recipe.href} target='_blank'>{recipe.category}</a>
            </h4>
            <ol>

            </ol>
            {/* <p>
              {recipe.instructions}
            </p> */}

          </article>
        ))
      }
    </div >
  )
}

function NoRecipesResults() {
  return (
    <p>No se encontraron resultados</p>
  )
}

export function RecipesList({ recipes }) {
  return (
    recipes?.length > 0
      ? <ListOfRecipes recipes={recipes} />
      : <NoRecipesResults />
  )
}
