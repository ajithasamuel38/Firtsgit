// Write your code below:
// Write your code below:
const subHeading = document.createElement('h3');
const subHeadingText = document.createTextNode('Buy high quality organic fruits online');
subHeading.appendChild(subHeadingText);
subHeading.style.fontStyle = 'italic';

// Get the main heading in the first div
const mainHeading = document.getElementById('main-heading');

// Insert the sub-heading after the main heading in the first div
mainHeading.parentNode.insertBefore(subHeading, mainHeading.nextSibling);

// Inside the second div, before the unordered list, add a paragraph tag
const divs=document.getElementsByTagName('div');
const secondDiv = divs[1];
const paraTotalFruits = document.createElement('p');
const paraTotalFruitsText = document.createTextNode('Total fruits: 4');
paraTotalFruits.appendChild(paraTotalFruitsText);

// Insert the paragraph before the unordered list
const fruitsList = secondDiv.querySelector('.fruits');
secondDiv.insertBefore(paraTotalFruits, fruitsList);

// Set an id of "fruits-total" to the paragraph
paraTotalFruits.id = 'fruits-total';
