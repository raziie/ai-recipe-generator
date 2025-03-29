import Form from './Form'
import { useState } from 'react'

function Body() {
    const [ingredients, setIngredients] = useState([])
    const ingredientsItems = ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmit(event) {
        event.preventDefault()
        // const inputIngredient = event.target.ingredient.value
        const formData = new FormData(event.currentTarget)
        const inputIngredient = formData.get("ingredient") 
        setIngredients(prevIngredients => [...prevIngredients, inputIngredient])
    }

    return (
        <main>
            <Form
            handleSubmit = {handleSubmit}
            />
            <ul>
                {ingredientsItems}
            </ul>
        </main>
    )
}

export default Body