import Form from './Form'
import Ingredients from './Ingredients'
import { useState } from 'react'

function Body() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsItems = ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(formData) {
        const inputIngredient = formData.get("ingredient") 
        if (inputIngredient) {
            setIngredients(prevIngredients => [...prevIngredients, inputIngredient])
        }
    }

    return (
        <main>
            <Form
            action={addIngredient}
            />
            {ingredientsItems.length > 0 && <Ingredients
            ingredientList={ingredientsItems}
            />}
        </main>
    )
}

export default Body