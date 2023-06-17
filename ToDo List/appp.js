//*======== SELECTORS =====================
const addBtn = document.getElementById("addBtn");
const inputText = document.getElementById("inputText");
const addForm = document.getElementById("addForm");
const todos = document.getElementById("todos");
const removeAll = document.getElementById("removeAll");
//*========== VARIABLES ===============
let todoArr = [];

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

window.addEventListener("load", () => {
  checkLocalStorage();
  todoArr.forEach((todo) => {
    createLi(todo);
  });
});

removeAll.addEventListener("click", (e) => {
  const todoList = document.querySelectorAll(".list-group-item");
  if (todoList.length > 0) {
    todoList.forEach((todo) => {
      todo.remove();
    });
  }
  todoArr = [];

  localStorage.setItem("todoArr", JSON.stringify(todoArr));
});

const addTodo = (e) => {
  let text = inputText.value.trim().toUpperCase();
  createLi(text);
  addLocalStorage(text);
};

//* ======= Create new todo =======
const createLi = (newTodo) => {
  //*=========Create elements ===========
  const todoLi = document.createElement("li");
  const todoInput = document.createElement("input");
  const todoLabel = document.createElement("label");
  const todoIcon = document.createElement("i");
  //*=======Append elements each other=========

  todoLabel.textContent = newTodo;
  todoLi.appendChild(todoInput);
  todoLi.appendChild(todoLabel);
  todoLi.appendChild(todoIcon);
  todos.appendChild(todoLi);

  //* =======Add class elements==============
  todoLi.classList.add("list-group-item");
  todoInput.classList.add("form-check-input", "me-2");
  todoInput.type = "checkbox";
  todoLabel.classList.add("form-check-label");
  todoIcon.classList.add("fa-solid", "fa-trash-can");
  inputText.value = "";
};

//*====== Add item local storage ===========
const addLocalStorage = (newTodo) => {
  checkLocalStorage();
  todoArr.unshift(newTodo);
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
//* ====== Check Local Storage =======
const checkLocalStorage = () => {
  if (localStorage.getItem("todoArr") === null) {
    todoArr = [];
  } else {
    todoArr = JSON.parse(localStorage.getItem("todoArr"));
  }
};

//  animate__backOutLeft
//*===========Remove Item UI ==================
todos.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    const todo = e.target.parentElement;
    todo.remove();
    removeTodoStorage(todo.textContent);
  }
  //* ============== CheckBox control =============
  else if (e.target.classList.contains("form-check-input")) {
    if (e.target.checked === true) {
      e.target.nextSibling.style.textDecoration = "line-through";
      e.target.parentElement.style.backgroundColor = "LightGrey";
      e.target.parentElement.style.color = "FireBrick";
    } else {
      e.target.nextSibling.style.textDecoration = "none";
      e.target.parentElement.style.backgroundColor = "white";
      e.target.parentElement.style.color = "black";
    }
  }
});

//* ============ Remove TODO storage ===================
const removeTodoStorage = (removeTodo) => {
  checkLocalStorage();
  todoArr.forEach((todo, index) => {
    if (removeTodo === todo) {
      todoArr.splice(index, 1);
    }
  });
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
};
