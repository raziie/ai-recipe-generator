function Form(props) {
    return (
        <form onSubmit={props.handleSubmit} className="ingredient-form" action="">
            <input name="ingredient" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" />
            <button type="submit">Add ingredient</button>
        </form>
    )
}

export default Form