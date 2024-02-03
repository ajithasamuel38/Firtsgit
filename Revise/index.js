function buttonclick(element){
    const editbutton = document.createElement('button');
    const edittext = document.createTextNode('Edit');
     editbutton.appendChild(edittext);
     element.appendChild(editbutton);
}
const listItems = document.querySelectorAll('.fruit');
for(let i=0; i<listItems.length; i++)
{
    buttonclick(listItems[i]);
    
    
}


const formelement = document.querySelector('form');
formelement.addEventListener('submit', function(event){
    event.preventDefault();
    const fruitToAdd=document.getElementById('fruit-to-add').value;
    addnewfruit(fruitToAdd);

});

function addnewfruit(fruit)
{
    const fruitsclass = document.querySelector('.fruits');
    const add=document.createElement('li');
    add.textContent =fruit;
    const buttonelement = document.createElement('button');
    const buttontext = document.createTextNode('x');
    buttonelement.appendChild(buttontext);
    buttonelement.className = 'delete-btn';
    add.appendChild(buttonelement);
    fruitsclass.appendChild(add);
    buttonclick(add);
    
}

const deleteclick = document.querySelector('.fruits');
deleteclick.addEventListener('click', function(event){
    if(event.target.classList.contains('delete-btn'))
    {
        const fruittodelete = event.target.parentElement;
        deleteclick.removeChild(fruittodelete);
    }
});