let Todo = [];
let tab = document.getElementById(`added`);
let list = document.querySelector(`.orderlist`);
const searchInput = document.getElementById('searchInput');
const addButton = document.getElementById('add');

document.addEventListener('DOMContentLoaded', function() {
    const storedTodo = localStorage.getItem('todoList');
    if (storedTodo) {
        Todo = JSON.parse(storedTodo);
        display();
        updateTabVisibility();
    }
});

searchInput.addEventListener('keydown', function(keydown){
    if (keydown.key === 'Enter') {
        keydown.preventDefault();
        todo();
    }
});

function todo(){
    let kbh = {}
    let ip = document.getElementById(`searchInput`);
    if(ip.value != ""){ 
        let input = ip.value;
        let date = new Date();
        let day = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
        kbh[`to`] = input;
        kbh[`daat`] = day;
        Todo.push(kbh);
        ip.value = "";
        saveTodoList();
        display();
        updateTabVisibility();
    }
    else {
        window.alert(`Pls add a task`);
    }    
}

let HTML = "";
function display(){
    HTML = "";
    Todo.forEach((element,index) => {
        HTML += `<li id="txt">${element.to} <small id="date">Date:${element.daat}</small><button class="Cross" onclick="Remove(${index})">✖️</button></li>`
    });
    list.innerHTML = HTML;
}

function Remove(index){
    Todo.splice(index,1);
    saveTodoList();
    display();
    updateTabVisibility();
}

function updateTabVisibility() {
    tab.style.display = Todo.length === 0 ? 'none' : 'block';
}

function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(Todo));
}