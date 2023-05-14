import './App.css'
import recetasQueryResults from './mocks/recetas-results.json'
import recetasQueryNoResults from './mocks/recetas-no-results.json'


function App() {
  const recipes = recetasQueryResults.recetas
  const hasRecipes = recipes?.length > 0

  const handleSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData)
    console.log(formValues)

    // console.log(e.target)
  }

  return (
    <div className="page">
      <header>
        <h1>Recetas App</h1>
        <form name='frmsearch' className="app__searchForm" onSubmit={handleSubmit}>
          <input name="query" type="text" className="app__input" placeholder='tienes hambre? busca una comida' autoComplete='Off' />
          <input type="submit" className="app__submit" value="buscar" />
        </form>
      </header>

      <main>
        {
          hasRecipes && (
            <ul>
              {
                recipes.map((recipe) => (
                  <li key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <img src={recipe.thumbnail} alt={recipe.name} />
                  </li>
                ))
              }
            </ul>
          )
        }
      </main>

    </div>
  )
}

export default App
