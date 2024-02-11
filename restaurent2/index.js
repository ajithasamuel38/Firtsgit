function handleformsubmit(event) {
    event.preventDefault();
    const price = event.target.price.value;
    const dish = event.target.dish.value;
    const table = event.target.table.value;
    const myobj = {
        price: price,
        dish:dish,
        table: table,
    }
    axios.post("https://crudcrud.com/api/bf95bf19bf2f4a14a203e12f97355c4d/orderdetails", myobj)
    .then((response)=>{
        myobj.id = response.data._id;
        showuseronscreen(myobj);
    })
    .catch(err => {
        console.log(err);
    });
}
window.addEventListener("DOMContentLoaded", function(){
    axios.get("https://crudcrud.com/api/bf95bf19bf2f4a14a203e12f97355c4d/orderdetails")
    .then((result)=>{
        console.log(result);
        for(var i=0; i<result.data.length; i++){
            showuseronscreen(result.data[i]);
           }
        })
    .catch((err)=>console.log(err));
});

function showuseronscreen(obj){
    const ul = document.getElementById(obj.table);
    const li = document.createElement('li');
    li.innerHTML = `${obj.price}-${obj.table}-${obj.dish}`;
    const button = document.createElement('button');
    const createText = document.createTextNode('Delete Order');

    button.addEventListener('click', function(){
        axios.delete(`https://crudcrud.com/api/bf95bf19bf2f4a14a203e12f97355c4d/orderdetails/${obj.id}`)
        .then((resolve)=>{
           
                    console.log(resolve);
                    li.remove();
                
        })
        .catch((err)=>{
            console.log(err);
        })
    });
    button.appendChild(createText);
    li.appendChild(button);
    ul.appendChild(li);
}
