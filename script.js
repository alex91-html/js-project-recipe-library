document.addEventListener("DOMContentLoaded", () => {
  const recipeContainer = document.getElementById("recipeAPI");
  const messageSection = document.getElementById("message-section");
  const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const radios = document.querySelectorAll('.sort-group input[type="radio"]');
  const randomBtn = document.getElementById("random-btn");

  const URL = `https://api.spoonacular.com/recipes/random?number=15&apiKey=98b7665281e94cf1b1803b2556236fdc`;

  let recipes = []; // stored recipes

  // Fetch recipes
  const fetchData = () => {
    fetch(URL)
      .then((response) => response.json()) // Convert to JSON
      .then((data) => {
        console.log("API Response:", data);
        recipes = data.recipes;
        loadRecipes(recipes);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };


  // dynamic recipes
  const loadRecipes = (recipes) => {
    recipeContainer.innerHTML = "";
    recipes.forEach(recipe => {
      const ingredientsList = recipe.extendedIngredients
        ?.map(ingredient => `<li>${ingredient.original}</li>`)
        .join("") || "Unknown ingredients";

      const dietList = recipe.diets.length > 0
        ? recipe.diets.slice(0, 2).join(", ") + (recipe.diets.length > 2 ? "..." : "")
        : "No particular diet";

      const recipeCard = `
        <a href="${recipe.sourceUrl}" target="_blank">
          <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2 class="title">${recipe.title}</h2>
            <hr class="divider">
            <div class="recipe-info">
              <div class="info-item">
                <span class="label">Diet: </span>
                <span class="value">${dietList}</span>
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

  // Filtering
  const filterRecipes = () => {
    let filteredRecipes = [...recipes];

    const selectedFilters = Array.from(checkboxes)
      .filter(checkbox => checkbox.checked && checkbox.id !== "filter-all")
      .map(checkbox => checkbox.value.toLowerCase());

    const isRandom = document.getElementById("filter-random")?.checked;

    if (selectedFilters.length > 0) {
      filteredRecipes = filteredRecipes.filter(recipe =>
        selectedFilters.every(filter => {
          switch (filter) {
            case "vegan":
              return recipe.vegan || recipe.diets.includes("vegan");
            case "vegetarian":
              return recipe.vegetarian || recipe.diets.includes("vegetarian");
            case "gluten free":
              return recipe.glutenFree || recipe.diets.includes("gluten free");
            case "dairy-free":
              return recipe.dairyFree || recipe.diets.includes("dairy free");
            case "pescatarian":
              return recipe.pescatarian || recipe.diets.includes("pescatarian");
            default:
              return true;
          }
        })
      );
    }

    if (isRandom && filteredRecipes.length > 0) {
      filteredRecipes = [filteredRecipes[Math.floor(Math.random() * filteredRecipes.length)]];
    }

    // Sorting
    let selectedSort;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedSort = radios[i].value;
        break;
      }
    }

    if (selectedSort === "Shortest") {
      filteredRecipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes);
    } else if (selectedSort === "Longest") {
      filteredRecipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes);
    }

    filteredRecipes.length ? loadRecipes(filteredRecipes) : showEmptyState();

  };

  // mpty state
  const showEmptyState = () => {
    messageSection.innerHTML = `
      <h2 style="color:#0F18A4; text-decoration: underline; text-decoration-color: #DE788B;">
        .... hmm, is there such a thing? I don't have that, sorry! Try something else?
      </h2>
    `;
  };

  // dynamic messages
  const updateMessage = () => {
    let message = "";
    const isAllSelected = document.getElementById("filter-all")?.checked;

    if (isAllSelected) {
      message = "You greedy pig!";
      clearSelections();
    } else {
      if (document.getElementById("filter-vegan")?.checked)
        message += "Oh I see, what about fish or eggs sometimes? Are you sure you are not Vegetarian?";
      if (document.getElementById("filter-vegetarian")?.checked)
        message += "<br>Good choice, better cutting on all that meat!";
      if (document.getElementById("filter-gluten-free")?.checked)
        message += "<br>I'm with you, gluten is poison!";
      if (document.getElementById("filter-dairy-free")?.checked)
        message += "<br>Are you sure you can give up cheese?";
      if (document.getElementById("filter-meat-based")?.checked)
        message += "<br>Sometimes it's okay to have some meat.";
      if (document.getElementById("sort-shortest")?.checked)
        message += "<br>Trying to impress someone with little time?";
      if (document.getElementById("sort-longest")?.checked)
        message += "<br>Do you really want to spend hours in the kitchen?";
    }

    messageSection.innerHTML = message || "Hey, welcome! Please pick a recipe of your liking";
  };


  const clearSelections = () => {
    checkboxes.forEach(checkbox => (checkbox.checked = false));
    radios.forEach(radio => (radio.checked = false));
  };


  const init = () => {
    fetchData();

    checkboxes.forEach(checkbox =>
      checkbox.addEventListener("change", () => {
        updateMessage();
        filterRecipes();
      })
    );

    radios.forEach(radio =>
      radio.addEventListener("change", () => {
        updateMessage();
        filterRecipes();
      })
    );

    randomBtn?.addEventListener("click", () => {
      document.getElementById("filter-random").checked = true;
      filterRecipes();
    });

    updateMessage();
  };

  init();
});
