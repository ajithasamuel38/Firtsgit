const fruitsList = document.querySelectorAll('.fruit');
fruitsList.forEach((fruit) => {
  const editButton = document.createElement('button');
  editButton.className = 'edit-btn';
  editButton.textContent = 'Edit';

  // Add the click event handler for the edit button
  editButton.addEventListener('click', () => {
    // Handle edit functionality here
    console.log('Edit button clicked for:', fruit.textContent);
  });

  // Append the edit button to the li element
  fruit.appendChild(editButton);
});

const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add').value;
  const newLi = document.createElement('li');
   newLi.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
  
  fruits.appendChild(newLi);
  // Clear the input field after adding a fruit
  
});

fruits.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  };
});