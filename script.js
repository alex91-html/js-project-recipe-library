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
    diets: [],
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
  }
]























const messageSection = document.getElementById('message-section');
const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
const radios = document.querySelectorAll('.sort-group input[type="radio"]');

// here starts the magic, the function that will update the message
// based on the user's selections
const updateMessage = () => {
  let message = '';

  const isAllSelected = document.getElementById('filter-all').checked;

  if (isAllSelected) {
    message = 'You greedy pig!';
    clearSelections();
  } else {

    if (document.getElementById('filter-vegan').checked) {
      message += 'Oh I see,what about the fish and some good tasty egss from time to time? Are you sure you are not Vegetarian? Maybe?';
    }
    if (document.getElementById('filter-vegetarian').checked) {
      message += '<br><br>Good choice, better cutting on all that meat!';
    }
    if (document.getElementById('filter-gluten-free').checked) {
      message += '<br><br>I\'m with you, gluten it\'s poisoned!';
    }
    if (document.getElementById('filter-dairy-free').checked) {
      message += '<br><br>hmm are you sure cheese is something you can fully give up?';
    }
    if (document.getElementById('sort-shortest').checked) {
      message += '<br><br>Trying to impress someone with little time?';
    } else if (document.getElementById('sort-longest').checked) {
      message += '<br><br>Do you really want to spend hours in the kitchen?';
    }
  }

  messageSection.innerHTML = message || 'Hey hey hey welcome!';
};
// here it ends

const clearSelections = () => {
  checkboxes.forEach(checkbox => checkbox.checked = false);
  radios.forEach(radio => radio.checked = false);
};

const addEventListeners = () => {
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateMessage);
  });

  radios.forEach(radio => {
    radio.addEventListener('change', updateMessage);
  });
};

const init = () => {
  addEventListeners();
  updateMessage();
};


init();
