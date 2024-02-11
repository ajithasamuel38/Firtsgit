let ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
function handleformsubmit(event){
    event.preventDefault();
    const username = event.target.username.value;
    const rating = event.target.rating.value;
    const userdetails = {
        username: username,
        ratingvalue: rating
    };
    
   axios.post("https://crudcrud.com/api/56fba222a83443869433e71c1505bd75/userratings", userdetails)
   .then((resolve)=>{
    console.log(resolve)
    ratingCounts[rating]++;
    showRatings();
   })
   .catch((err)=>{
    console.log(err);
   });
   showuseronscreen(userdetails);
   
}
window.addEventListener("DOMContentLoaded", function(){
    axios.get("https://crudcrud.com/api/56fba222a83443869433e71c1505bd75/userratings")
    .then((result)=>{
        console.log(result);
        // Update the ratingCounts object with the fetched data
        result.data.forEach((rating) => {
            ratingCounts[rating.ratingvalue]++;
        });
        // Display the updated ratings
        showRatings();
        // Show each user's ratings on the screen
        result.data.forEach((user) => {
            showuseronscreen(user);
        });
    })
    .catch((err)=>console.log(err));
});

function showuseronscreen(obj){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `${obj.username} - Rating: ${obj.ratingvalue} `;
    const button = document.createElement('button');
    const text = document.createTextNode('Delete');
    button.appendChild(text);
    const edit = document.createElement('button');
    const text2 = document.createTextNode('Edit');
    edit.appendChild(text2);
    button.addEventListener('click', function (){
        axios.delete(`https://crudcrud.com/api/56fba222a83443869433e71c1505bd75/userratings/65c8bc106227a803e824ba1f`)
            .then((resolve)=>{
                console.log(resolve);
                // Decrease the rating count for the deleted rating
                ratingCounts[obj.ratingvalue]--;
                // Remove the rating from the list
                li.remove();
                // Update the displayed ratings
                showRatings();
            })
            .catch((err)=>{
                console.log(err);
            });
    });
    edit.addEventListener('click', function() {
        const usernameInput = document.getElementById('username');
        const ratingeditInput = document.getElementById('rating');
        
       
        usernameInput.value = obj.username;
        ratingeditInput.value = obj.ratingvalue;
        
       
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.textContent = 'Edit Rating';
        
        submitButton.onclick = function () {
            const editedUsername = usernameInput.value;
            const editedRating = ratingeditInput.value;
            
            
            ratingCounts[obj.ratingvalue]--;
           
            ratingCounts[editedRating]++;
            
           
            li.remove();
            
            showRatings();
            
            submitButton.textContent = 'Submit';
            submitButton.onclick = handleformsubmit;
        }
    });

    li.appendChild(button);
    li.appendChild(edit);
    ul.appendChild(li);
}
function showRatings() {
    const ratingsContainer = document.getElementById('ratings-container');
    ratingsContainer.innerHTML = ''; // Clear previous content
    
    for (let rating = 1; rating<= 5; rating++) {
      const ratingElement = document.createElement('div');
      const stars = '*'.repeat(rating);
      const count = ratingCounts[rating];
      ratingElement.textContent = `${stars} ${count}`;
      ratingsContainer.appendChild(ratingElement);
    }
  }
  
  // Call showRatings to display initial ratings
  showRatings();