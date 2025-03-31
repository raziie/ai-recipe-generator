import Form from './Form'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipeFromMistral } from '../AI'
import { useState } from 'react'

function Body() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")

    function addIngredient(formData) {
        const inputIngredient = formData.get("ingredient") 
        if (inputIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, inputIngredient])
        }
    }

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromMistral(ingredients)
        setRecipe(generatedRecipe)
    }

    return (
        <main>
            <Form
            action={addIngredient}
            />
            {ingredients.length > 0 && <Ingredients
                ingredients={ingredients}
                getRecipe={getRecipe}
            />}
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}

export default Body