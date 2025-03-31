function Ingredients(props) {
    return (
        <section>
            <h2 className='ingredient-list-header'>Ingredients on hand:</h2>
            <ul className='ingredients-list'>
                {props.ingredientList}
            </ul>
            <div className="get-recipe-container">
                <div className="explain-container">
                    <h3 className='recipe-header'>Ready for a recipe?</h3>
                    <p className='recipe-content'>Generate a recipe from your list of ingredients.</p>
                </div>
                <button className='recipe-button'>Get a recipe</button>
            </div>
        </section>
    )
}

export default Ingredients