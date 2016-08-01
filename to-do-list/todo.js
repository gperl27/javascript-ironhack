
window.onload = function() {

// the following code adds event listeners to the buttons
// you'll learn more about this later
// for this exercise, you are going to write the functions for
// what happens when the user clicks on the buttons.
  var saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', addToDoItem, false);

  var doneButton = document.getElementById('done-button');
  doneButton.addEventListener('click', markAsDone, false);


  function addToDoItem() {
    // add your code here
    // this should create a new list item in the to-do list
    // and set the text as the input from the todo-input field
    var insertArea = document.querySelector(".todo-list-items");
    var listItem = document.createElement('LI');
    var input = document.getElementById("todo-input").value;
    var textnode = document.createTextNode(input);

    //console.log(insertArea);
    listItem.appendChild(textnode);
    insertArea.appendChild(listItem);
  }

  function markAsDone() {
    doneButton.classList.add('liked');
    doneButton.innerHTML = "Liked!";
    document.querySelector('h1').style.color = "red";
    /*
    var list = document.querySelector("ul:nth-of-type(1)");
    var firstItem = list.getElementsByTagName('li')[0];
    //var newItem = firstItem;
    list.removeChild(firstItem);

    var insertArea = document.getElementsByClassName("done-list-items");
    console.log(insertArea);
    insertArea.appendChild(firstItem);
    */

    var list = document.querySelector("ul:nth-of-type(1)");
    var firstItem = list.getElementsByTagName('li')[0];

    var ulArea = document.querySelector(".done-list-items");
    var insertArea = ulArea.getElementsByTagName('li')[0];

    //console.log(insertArea);
    insertArea.parentNode.insertBefore(firstItem, insertArea);
    firstItem.className = "done";
  }
  
}
