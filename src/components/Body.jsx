import Form from './Form'
import Ingredients from './Ingredients'
import Recipe from './Recipe'
import { getRecipeFromMistral } from '../AI'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Body() {
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState("")
    const recipeSection = useRef(null)

    useEffect(() => {
        if (recipe && recipeSection.current) recipeSection.current.scrollIntoView({behavior: "smooth"})
    }, [recipe])

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
                ref={recipeSection}
            />}
            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}

export default Body