import ReactMarkdown from 'react-markdown'

function Recipe(props) {
    return (
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
    )
}

export default Recipe