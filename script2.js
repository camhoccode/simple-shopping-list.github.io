let ul = document.querySelector("ul");
let buttonEnter = document.getElementById("enter");
let buttonDelete = document.getElementsByClassName("deleteItem");
let input = document.getElementById("userinput");
let checkboxes = document.getElementsByClassName("toggle");
// console.log(checkboxes);

// console.log(buttonDelete);

function inputLength() {
  return input.value.length;
}

function createListEmelent() {
  var li = document.createElement("li");
  let label = document.createElement("label");
  let checkbox = document.createElement("input");
  checkbox.className = "toggle";
  checkbox.type = "checkbox";
  checkbox.addEventListener("click", moveToEnd);
  let text = document.createTextNode(`${input.value} - `);
  let button = document.createElement("button");
  button.innerText = "Delete";
  button.className = "deleteItem";
  button.addEventListener("click", deleteElementAfterClick);
  label.appendChild(checkbox);
  label.appendChild(text);
  label.appendChild(button);
  li.appendChild(label);
  ul.appendChild(li);
  input.value = "";
}

function addElementAfterclick() {
  if (inputLength() > 0) {
    createListEmelent();
  }
}

function deleteElementAfterClick() {
  var listItem = this.closest("li");
  listItem.parentNode.removeChild(listItem);
}

function addElementAfterEnter(event) {
  if (inputLength() > 0 && event.key == "Enter") {
    createListEmelent();
  }
}
function moveToEnd() {
  var checkbox = this;
  var listItem = checkbox.closest("li");
  if (checkbox.checked) {
    listItem.parentNode.appendChild(listItem);
  }
}

function main() {
  buttonEnter.addEventListener("click", addElementAfterclick);
  input.addEventListener("keydown", addElementAfterEnter);
  for (let item of buttonDelete) {
    item.addEventListener("click", deleteElementAfterClick);
  }
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("click", moveToEnd);
  }
}
main();

// console.log(input);
