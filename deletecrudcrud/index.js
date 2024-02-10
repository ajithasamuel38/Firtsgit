
function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const userdetails =
      {
        username: username,
        email: email,
        phone: phone
      };
      /*axios.post("https://crudcrud.com/api/a2e420a5e0394cf8bb3bcbcd353b6a6b/userdetails", userdetails)
      .then((result) => {
          console.log(result);
          showuseronscreen(userdetails);
      })
      .catch((err) => {
          console.log(err);
      });*/
  }
 window.addEventListener("DOMContentLoaded", function(){
    axios.get("https://crudcrud.com/api/a2e420a5e0394cf8bb3bcbcd353b6a6b/userdetails")
    .then((result)=>{
       console.log(result);
       for(var i=0; i<result.data.length; i++){
        showuseronscreen(result.data[i]);
       }
    })
    .catch((err)=>console.log(err));
  })
  function showuseronscreen(obj){
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `${obj.username} - ${obj.email} - ${obj.phone}`;
    const button = document.createElement('button');
    const text = document.createTextNode('Delete');
    button.appendChild(text);
    
    const edit = document.createElement('button');
    const textedit = document.createTextNode("Edit");
    edit.appendChild(textedit);
    li.appendChild(button);
    button.addEventListener('click', function(){
      axios.delete("https://crudcrud.com/api/a2e420a5e0394cf8bb3bcbcd353b6a6b/userdetails/65c7cc1b6227a803e824b947")
      .then((resolve)=>{
        console.log(resolve);
        li.remove();
      })
      .catch((err)=>{
        console.log(err);
      })
    })
    li.appendChild(edit);
    ul.appendChild(li);
  }
  
  
  
  