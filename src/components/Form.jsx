function Form(props) {
    return (
        <form action={props.action} className="ingredient-form">
            <input name="ingredient" type="text" placeholder="e.g. oregano" aria-label="Add ingredient" />
            <button type="submit">Add ingredient</button>
        </form>
    )
}

export default Form