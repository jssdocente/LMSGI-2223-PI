import './App.css'
import recetasQueryResults from './mocks/recetas-results.json'
import recetasQueryNoResults from './mocks/recetas-no-results.json'
import { RecipesList } from './components/Recipes'

function App() {

  const recipes = recetasQueryResults.recetas

  const handleSubmit = (e) => {
    e.preventDefault()
    var formData = new FormData(e.target)
    const formValues = Object.fromEntries(formData)
    console.log(formValues)

    // console.log(e.target)
  }

  return (

    <main>
      <div className="page">
        <header>
          <h1>Recetas App</h1>
          <form name='frmsearch' className="app__searchForm" onSubmit={handleSubmit}>
            <input style={{ width: '25rem' }} name="query" type="text" className="app__input" placeholder='tienes hambre? busca una comida' autoComplete='Off' />
            <input type="submit" className="app__submit" value="buscar" />
          </form>
        </header>

        <RecipesList recipes={recipes} />

      </div>
    </main>

  )
}

export default App
