// Make the app dynamic!
// You have two elements: text input = item ID, and add button with add ID
// First, like you're doing, add some const to make reference to the UI elements
// Please ask any question that you might have :)
// Ul reference
const todoList = doument.getElementById('list');
// Button reference
const addItem = document.getElementById('add');
// Text input reference
const item = document.getElementById('item');
// Items array
let myToDos = [];


additem.addEventListener('click', function (e) {
  // do stuff when the button is clicked...right Ronny? Yep
  // remember, item is the reference to the input, so once you click the btn, add the input to the list.
  // Or push it to your array to keep them safe
  // I would check the input to not be empty, like this:
  if (!item.value) {
    myToDos.push(item.value);
    alert(`Your ToDo was saved!`);
    item.value = "";
    item.focus();
  } else {
    alert("We don't allow empty items");
    item.focus();
  }
});