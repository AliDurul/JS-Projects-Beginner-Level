//? SELECTORS
const toDoInput = document.querySelector("#inputText");
const addBtn = document.querySelector("#addBtn");
const form = document.querySelector("#addForm");
const ul = document.querySelector("#todos");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);
  createElements();
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest("li").remove();
  } else if (e.target.classList.contains("form-check-input")) {
    if (e.target.checked) {
      e.target.nextSibling.classList.add("text-decoration-line-through");
    } else {
      e.target.nextSibling.classList.remove("text-decoration-line-through");
    }
  } else if (e.target.id === "removeAll") {
    while (ul.firstChild) {
      if (ul.children.length === 1) {
        break;
      } else {
        ul.lastChild.remove();
      }
    }
  }
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
  i.setAttribute("class", "fa-solid fa-trash-can");

  toDoInput.value = "";
};
