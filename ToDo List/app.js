//? SELECTORS
const toDoInput = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#addForm");
const ul = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);
  console.log(toDoInput.value);
  createElements();
});

const createElements = () => {
  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  const i = document.createElement("i");
  const label = document.createElement("label");

  const labelText = document.createTextNode(toDoInput.value);

  li.appendChild(checkbox);
  label.appendChild(labelText);
  li.appendChild(label);
  li.appendChild(i);
  ul.appendChild(li);

  li.setAttribute("class", "list-group-item bg-white");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "form-check-input me-2");
  checkbox.setAttribute("id", "check");
  label.setAttribute("class", "form-check-label ");
  label.setAttribute("for", "check");
  i.setAttribute('class','fa-solid fa-trash-can')




  toDoInput.value = "";
};
