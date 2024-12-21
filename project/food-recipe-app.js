
const recipeInput = document.getElementById('recipe-name');
const addRecipeButton = document.getElementById('add-recipe');
const recipeList = document.getElementById('recipe-list');


const recipeLinks = {
    'Pasta': 'https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/',
    'Pizza': 'https://www.allrecipes.com/recipe/257198/thin-crust-pizza/',
    'Burger': 'https://www.allrecipes.com/recipe/25473/the-perfect-basic-burger/',
    'Salad': 'https://www.allrecipes.com/recipe/14469/jamies-cranberry-spinach-salad/',
    'Soup': 'https://www.allrecipes.com/recipe/13218/beef-barley-vegetable-soup/'
};

addRecipeButton.addEventListener('click', () => {
    const recipe = recipeInput.value.trim();

    if (recipe) {
        const listItem = document.createElement('li');

        // Check if a link exists for the recipe
        const link = recipeLinks[recipe] || `https://www.google.com/search?q=${encodeURIComponent(recipe)}+recipe`;

        listItem.innerHTML = `
            <a href="${link}" target="_blank">${recipe}</a>
            <button class="remove-btn">Remove</button>
        `;

        const removeButton = listItem.querySelector('.remove-btn');
        removeButton.addEventListener('click', () => {
            recipeList.removeChild(listItem);
        });

        recipeList.appendChild(listItem);
        recipeInput.value = '';
    } else {
        alert('Please enter a recipe name.');
    }
});
