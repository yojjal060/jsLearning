<<<<<<< HEAD
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

//to save task even after browser is closed
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    const data = localStorage.getItem("data");
    if (data !== null) {
        listContainer.innerHTML = data;
    }
}

=======
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '\u00d7'
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

//to save task even after browser is closed
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    const data = localStorage.getItem("data");
    if (data !== null) {
        listContainer.innerHTML = data;
    }
}

>>>>>>> 2f5ce7e778b33d054f78e8e5012ede5dbded927a
showTask();