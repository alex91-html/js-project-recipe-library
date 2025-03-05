const messageSection = document.getElementById('message-section');
const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
const radios = document.querySelectorAll('.sort-group input[type="radio"]');


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
