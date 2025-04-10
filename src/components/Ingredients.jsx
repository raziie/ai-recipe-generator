function Ingredients(props) {
    const ingredientsItems = props.ingredients.map((ingredient) => 
        <li key={ingredient}>{ingredient}</li>
    )
    return (
        <section>
            <h2 className='ingredient-list-header'>Ingredients on hand:</h2>
            <ul className='ingredients-list'>
                {ingredientsItems}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div ref={props.ref} className="explain-container">
                    <h3 className='recipe-header'>Ready for a recipe?</h3>
                    <p className='recipe-content'>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className='recipe-button' onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    )
}

export default Ingredients