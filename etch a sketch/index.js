const gridContainer = document.getElementById('grid-container');



const gridItems = document.getElementsByClassName('grid-item');

for (let i = 0; i < gridItems.length; i++) {
  gridItems[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = '#F59CA9'; // replace 'color' with the color you want
  });
}


let answer;

function gridSelector(){
  document.getElementById('myBtn').addEventListener("click", function(){
    let answer = window.prompt("Select the number of square per grid");

    if(answer < 2 || answer >= 100){
      console.log("error");
    } 
    else{
      
      createGrid(answer);
      addHoverEffect();
    }
  });
}

gridSelector();

function createGrid(size) {
  const gridContainer = document.getElementById('grid-container');
  gridContainer.innerHTML = ''; // Clear any existing grid items

  for (let i = 0; i < size*size; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
  }
}

function addHoverEffect() {
  const gridItems = document.getElementsByClassName('grid-item');

  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', function() {
      this.style.backgroundColor = '#F59CA9';
    });
  }
}