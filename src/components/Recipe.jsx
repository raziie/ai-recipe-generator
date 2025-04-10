import ReactMarkdown from 'react-markdown'

function Recipe(props) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <h2>Chef Claude Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}

export default Recipe


// Chef Claude Recommends:
// Sure, I'd be happy to help! Based on the ingredients you've provided, I would recommend making a simple and delicious Pesto Pasta with Parmesan. Here's a recipe that you can follow:

// Ingredients:

// 8 oz pasta (any type you like)
// 1/4 cup parmesan cheese, grated
// 1 cup fresh basil leaves
// 2 cloves garlic, minced
// 1/4 cup walnuts, chopped
// 1/2 cup olive oil
// Salt and pepper, to taste
// Instructions:

// Cook the pasta according to package instructions until al dente. Drain and set aside.
// In a food processor or blender, combine the basil leaves, minced garlic, chopped walnuts, and grated parmesan cheese. Pulse until a rough paste forms.
// With the motor running, slowly add the olive oil in a steady stream until the pesto is smooth and emulsified. Season with salt and pepper to taste.
// Toss the cooked pasta with the pesto until well coated. Serve immediately, garnished with additional basil leaves and parmesan cheese if desired.
// Enjoy your meal!