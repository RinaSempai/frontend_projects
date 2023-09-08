// Добавляем таску
let addForm = document.querySelector('.add-task-form');
let taskText = document.querySelector('#taskText');
let addButton = document.querySelector('.add-button');
let toDo = document.querySelector("#to-do")

addForm.onsubmit = function (event) {
  event.preventDefault();

  let newTask = document.createElement('li');
  newTask.classList.add('task');
  newTask.textContent = taskText.value;
  newTask.draggable = true;
  newTask.ondragstart = function () {
    currentDrag = newTask;
    };
  toDo.append(newTask);
  taskText.value = '';
};

// Чистим корзину
let deleteButton = document.querySelector('.delete-button');
let trash = document.querySelector('#trash');

deleteButton.onclick = function () {
  trash.innerHTML = '';
};

// Перетаскиваем таски
let tasks = document.querySelectorAll('.task');
let taskLists = document.querySelectorAll('.task-list');
let currentDrag = '';

for (let task of tasks) {
  task.draggable = true;
  task.ondragstart = function () {
  currentDrag = task;
  };
}

for (let taskList of taskLists) {
  taskList.ondragover = function (event) {
    event.preventDefault();
  };

  taskList.ondrop = function () {
    taskList.append(currentDrag);
  }
}
