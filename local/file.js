// Write your code below:
function handleFormSubmit(event) {
  event.preventDefault();

  // Extract user details from the form
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  // Create an object to store user details
  let userDetails = {
    username: username,
    email: email,
    phone: phone
  };

  // Convert the object to a JSON string and store it in local storage
  localStorage.setItem('User Details', JSON.stringify(userDetails));
}