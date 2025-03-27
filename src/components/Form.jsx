function Form() {
    return (
        <form className="ingredient-form" action="">
            <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" />
            <button type="submit">Add ingredient</button>
        </form>
    )
}

export default Form