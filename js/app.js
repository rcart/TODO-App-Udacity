// Make the app dynamic!
// You have two elements: text input = item ID, and add button with add ID
// First, like you're doing, add some const to make reference to the UI elements
// Please ask any question that you might have :)
// Ul reference
const todoList = document.getElementById('list');
// Button reference
const addItem = document.getElementById('add');
// Text input reference
const item = document.getElementById('item');
// Items array
let myToDos = [];


addItem.addEventListener('click', function (e) {
  if (!!item.value) {  //What is this double ! means?
    myToDos.push(item.value);
    displayTodo();
    alert(`Your ToDo was saved!`);
    item.value = "";
    item.focus();
  } else {
    alert("We don't allow empty items");
    item.focus();
  }
});

function displayTodo() {
  let li = document.createElement('li');
  const newItem = document.createTextNode(item.value);
  li.appendChild(newItem);
  todoList.appendChild(li);
  } 