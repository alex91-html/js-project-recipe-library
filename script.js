const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: ["meat-based"],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  },
  {
    id: 8,
    title: "Vegan & Gluten-Free Sweet Potato Curry",
    image: "./sweet-potato-curry.webp",
    readyInMinutes: 40,
    servings: 4,
    sourceUrl: "https://example.com/vegan-gluten-free-sweet-potato-curry",
    diets: ["vegan", "gluten-free"],
    cuisine: "Indian",
    ingredients: [
      "sweet potatoes",
      "coconut milk",
      "spinach",
      "onion",
      "garlic",
      "curry powder",
      "chickpeas",
      "ginger",
      "vegetable broth",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 9,
    title: "Vegetarian & Dairy-Free Stuffed Peppers",
    image: "./stuffed-peppers.webp",
    readyInMinutes: 45,
    servings: 4,
    sourceUrl: "https://example.com/vegetarian-dairy-free-stuffed-peppers",
    diets: ["vegetarian", "dairy-free"],
    cuisine: "Mediterranean",
    ingredients: [
      "bell peppers",
      "quinoa",
      "black beans",
      "tomato",
      "onion",
      "garlic",
      "spices",
      "avocado",
      "olive oil",
      "lime juice"
    ],
    pricePerServing: 4.2,
    popularity: 85
  },
  {
    id: 10,
    title: "Paleo & Keto Beef Stir-Fry",
    image: "./beef-stir-fry.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/paleo-keto-beef-stir-fry",
    diets: ["paleo", "keto"],
    cuisine: "Asian",
    ingredients: [
      "beef strips",
      "broccoli",
      "bell pepper",
      "zucchini",
      "ginger",
      "garlic",
      "sesame oil",
      "coconut aminos",
      "green onion",
      "almond flour"
    ],
    pricePerServing: 6.0,
    popularity: 90
  },
  {
    id: 11,
    title: "Gluten-Free & Dairy-Free Chocolate Cake",
    image: "./chocolate-cake.webp",
    readyInMinutes: 60,
    servings: 8,
    sourceUrl: "https://example.com/gluten-free-dairy-free-chocolate-cake",
    diets: ["gluten-free", "dairy-free"],
    cuisine: "Dessert",
    ingredients: [
      "gluten-free flour",
      "cocoa powder",
      "baking soda",
      "apple cider vinegar",
      "coconut oil",
      "almond milk",
      "vanilla extract",
      "maple syrup",
      "sea salt"
    ],
    pricePerServing: 3.5,
    popularity: 95
  },
  {
    id: 12,
    title: "Vegan, Gluten-Free & Soy-Free Stir-Fry",
    image: "./stir-fry.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-gluten-free-soy-free-stir-fry",
    diets: ["vegan", "gluten-free", "soy-free"],
    cuisine: "Asian",
    ingredients: [
      "tofu (soy-free alternative)",
      "carrots",
      "bell pepper",
      "snow peas",
      "ginger",
      "garlic",
      "coconut aminos",
      "sesame oil",
      "green onion",
      "rice noodles"
    ],
    pricePerServing: 4.0,
    popularity: 88
  },
  {
    id: 13,
    title: "Keto & Dairy-Free Avocado Salad",
    image: "./avocado-salad.webp",
    readyInMinutes: 10,
    servings: 2,
    sourceUrl: "https://example.com/keto-dairy-free-avocado-salad",
    diets: ["keto", "dairy-free"],
    cuisine: "Mediterranean",
    ingredients: [
      "avocado",
      "cherry tomatoes",
      "cucumber",
      "red onion",
      "olive oil",
      "lemon juice",
      "chopped parsley",
      "sea salt"
    ],
    pricePerServing: 2.5,
    popularity: 80
  },
  {
    id: 14,
    title: "Paleo & Vegan Sweet Potato & Kale Salad",
    image: "./sweet-potato-kale-salad.webp",
    readyInMinutes: 20,
    servings: 4,
    sourceUrl: "https://example.com/paleo-vegan-sweet-potato-kale-salad",
    diets: ["paleo", "vegan"],
    cuisine: "American",
    ingredients: [
      "sweet potatoes",
      "kale",
      "avocado",
      "pumpkin seeds",
      "olive oil",
      "lemon juice",
      "sea salt",
      "black pepper"
    ],
    pricePerServing: 3.2,
    popularity: 87
  },
  {
    id: 15,
    title: "Gluten-Free Beef and Vegetable Skillet",
    image: "./beef-vegetable-skillet.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/gluten-free-beef-vegetable-skillet",
    diets: ["gluten-free", "meat-based"],
    cuisine: "American",
    ingredients: [
      "ground beef",
      "zucchini",
      "bell peppers",
      "onion",
      "garlic",
      "tomato",
      "olive oil",
      "spices (paprika, cumin, chili powder)",
      "green beans",
      "fresh parsley",
      "salt",
      "black pepper"
    ],
    pricePerServing: 4.5,
    popularity: 90
  }
]


document.addEventListener("DOMContentLoaded", () => {
  const recipeContainer = document.getElementById('recipeAPI');
  const messageSection = document.getElementById('message-section');
  const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const radios = document.querySelectorAll('.sort-group input[type="radio"]');
  const randomBtn = document.getElementById('random-btn');

  // Dynamic template:
  const loadRecipes = (recipes) => {
    recipeContainer.innerHTML = '';
    recipes.forEach(recipe => {
      const ingredientsList = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');

      const recipeCard = `
        <a href="${recipe.sourceUrl}">
          <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2 class="title">${recipe.title}</h2>
            <hr class="divider">
            <div class="recipe-info">
              <div class="info-item">
                <span class="label">Cuisine: </span>
                <span class="value">${recipe.cuisine}</span>
              </div>
              <div class="info-item">
                <span class="label">Time:</span>
                <span class="value">${recipe.readyInMinutes} minutes</span>
              </div>
              <div class="info-item">
                <span class="label">Servings:</span>
                <span class="value">${recipe.servings}</span>
              </div>
            </div>
            <hr class="divider">
            <div class="ingredients">
              <h3>Ingredients:</h3>
              <ul>${ingredientsList}</ul>
            </div>
          </article>
        </a>
      `;

      recipeContainer.innerHTML += recipeCard;
    });
  };

  // Filter:
  const filterRecipes = () => {
    let filteredRecipes = recipes;

    const selectedFilters = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked && checkbox.id !== 'filter-all') {
        selectedFilters.push(checkbox.value);
      }
    });

    // If the "random" filter is checked, pick a random recipe
    const isRandom = document.getElementById('filter-random')?.checked;  // Make sure you have an id filter for random

    if (isRandom) {
      // If random filter is selected, show a random recipe
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      filteredRecipes = [randomRecipe]; // Only show one random recipe
    } else if (selectedFilters.length > 0) {
      // Otherwise, apply filters based on the selected options
      filteredRecipes = recipes.filter(recipe =>
        selectedFilters.every(filter => recipe.diets.includes(filter)) // Ensure all selected filters are met
      );
    }

    // Sorting:
    const selectedSort = Array.from(radios).find(radio => radio.checked)?.value;

    if (selectedSort === 'Shortest') {
      filteredRecipes = filteredRecipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else if (selectedSort === 'Longest') {
      filteredRecipes = filteredRecipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes);
    }

    if (filteredRecipes.length === 0) {
      showEmptyState();
    } else {
      loadRecipes(filteredRecipes); // Load the filtered recipes
    }
  };

  const showEmptyState = () => {
    messageSection.innerHTML = `
        <h2 style="color:#0F18A4; text-decoration: underline;
  text-decoration-color: red;" >.... hmm is it there such a thing? I dont have that sorry, what about trying something else?</h2>
    `;
  };

  const updateMessage = () => {
    let message = '';

    const isAllSelected = document.getElementById('filter-all').checked;

    if (isAllSelected) {
      message = 'You greedy pig!';
      clearSelections();
    } else {
      if (document.getElementById('filter-vegan').checked) {
        message += 'Oh I see, what about the fish and some tasty eggs from time to time? Are you sure you are not Vegetarian? Maybe?';
      }
      if (document.getElementById('filter-vegetarian').checked) {
        message += '<br>Good choice, better cutting on all that meat!';
      }
      if (document.getElementById('filter-gluten-free').checked) {
        message += '<br>I\'m with you, gluten is poisoned!';
      }
      if (document.getElementById('filter-dairy-free').checked) {
        message += '<br>Hmm, are you sure cheese is something you can fully give up?';
      }
      if (document.getElementById('filter-meat-based').checked) {
        message += '<br>Sometimes it\'s ok, with some meat.';
      }
      if (document.getElementById('sort-shortest').checked) {
        message += '<br>Trying to impress someone with little time?';
      } else if (document.getElementById('sort-longest').checked) {
        message += '<br>Do you really want to spend hours in the kitchen?';
      }
    }

    messageSection.innerHTML = message || 'Hey, welcome! Please pick a recipe of your liking';
  };

  const clearSelections = () => {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    radios.forEach(radio => radio.checked = false);
  };

  const init = () => {
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        updateMessage();
        filterRecipes();
      });
    });

    radios.forEach(radio => {
      radio.addEventListener('change', () => {
        updateMessage();
        filterRecipes();
      });
    });

    updateMessage();
    loadRecipes(recipes);
  };

  init();
});