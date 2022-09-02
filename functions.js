// Add todos to the list when the "add" button is clicked
function newTodo() {
  // Creates a new list item populated with the input value
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  // Alerts the user if the input isn't valid
  if (inputValue === "") {
    alert("Your todo is empty :(");
    return;
  } else {
    document.getElementById("todos").appendChild(li);
  }
  // Clear the input
  document.getElementById("todoInput").value = "";

  // Make a button to delete the list item
  var closeButton = document.createElement("SPAN");
  var x = document.createTextNode("\u00D7");
  closeButton.className = "close";
  closeButton.appendChild(x);
  li.appendChild(closeButton);

  // Adding an event listener to change the className of the list item on click
  li.onclick = function () {
    this.className = this.className === "checked" ? "unchecked" : "checked";
  };

  // Adding an event listener to delete the list item on click of the close button
  closeButton.onclick = function () {
    this.parentElement.style.display = "none";
  };
}

// Grabbing all list items
var todos = document.getElementsByTagName("LI");

// Deleting all list items with the className "checked"
function deleteDone() {
  for (i = 0; i < todos.length; i++) {
    if (todos[i].className === "checked") {
      todos[i].style.display = "none";
    }
  }
}
