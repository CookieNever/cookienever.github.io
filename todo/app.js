const addBtn = document.querySelector(".addBtn");
let totalItems = 0;
let checkListTotal = 0;
const todoList = document.querySelector(".itemsStorage");
const inputText = document.getElementById("addToTodo");

// Charger les données depuis le local storage lors du chargement de la page
window.addEventListener("load", function () {
    const savedItems = JSON.parse(localStorage.getItem("todoItems")) || [];

    if (savedItems.length > 0) {
        savedItems.forEach(item => {
            const todoDiv = createTodoElement(item.text, item.checked);
            todoList.appendChild(todoDiv);
        });

        updateTotalItems();
    }
});

addBtn.addEventListener("click", function () {

    if (inputText.value === "") {
        return;
    }

    const todoDiv = createTodoElement(inputText.value, false);
    todoList.appendChild(todoDiv);

    // Sauvegarder les données dans le local storage
    saveTodoItems();

    inputText.value = "";
});

inputText.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Empêcher le comportement par défaut du formulaire
        event.preventDefault();

        // Appeler la même logique que pour le bouton "Add"
        addTodo();
    }
});

function addTodo() {
    const inputText = document.getElementById("addToTodo");

    if (inputText.value === "") {
        return;
    }

    const todoDiv = createTodoElement(inputText.value, false);
    todoList.appendChild(todoDiv);

    // Sauvegarder les données dans le local storage
    saveTodoItems();

    inputText.value = "";
}

function createTodoElement(text, checked) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todoList");

    const todoCheckbox = document.createElement("input");
    todoCheckbox.classList.add("firstTodo");
    todoCheckbox.type = "checkbox";
    todoCheckbox.checked = checked;

    const todoLabel = document.createElement("label");
    todoLabel.htmlFor = "firstTodo";
    todoLabel.innerText = text;
    if (checked) {
        todoLabel.classList.add("checked");
    }

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeBtn.innerText = "x";

    const sep = document.createElement("hr");
    sep.classList.add("separation");

    todoDiv.appendChild(todoCheckbox);
    todoDiv.appendChild(todoLabel);
    todoDiv.appendChild(removeBtn);
    todoDiv.appendChild(sep);

    todoCheckbox.addEventListener("click", function () {
        if (todoCheckbox.checked) {
            todoLabel.classList.add("checked");
            totalItems--;
        } else {
            todoLabel.classList.remove("checked");
            totalItems++;
        }
        updateTotalItems();
        saveTodoItems();
    });

    removeBtn.addEventListener("click", function () {

        if (todoCheckbox.checked) {
            todoList.removeChild(todoDiv);
            saveTodoItems();
        } else {
            todoList.removeChild(todoDiv);
            totalItems--;
            updateTotalItems();
            saveTodoItems();
        }
    });

    checkListTotal++;
    totalItems++;
    updateTotalItems();

    return todoDiv;
}

function updateTotalItems() {
    const infos = document.querySelector(".infos");
    infos.innerHTML = `<p>${totalItems} item${totalItems !== 1 ? 's' : ''} left</p>`;
}

function saveTodoItems() {
    const todoItems = [];
    const todoElements = document.querySelectorAll(".todoList");

    todoElements.forEach(todoElement => {
        const todoCheckbox = todoElement.querySelector(".firstTodo");
        const todoLabel = todoElement.querySelector("label");

        todoItems.push({
            text: todoLabel.innerText,
            checked: todoCheckbox.checked
        });
    });

    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

const lightModeBtn = document.querySelector(".lightModeBtn")

function applyStylesToElement(element) {

        const lightBody = document.querySelector("body")
        const lightTodo = document.querySelector(".addTodo")
        const lightAddBtn = document.querySelector(".addBtn")
        const lightEmptyTodo = document.querySelector(".todoEmpty")
        const lightRemoveBtn = document.querySelectorAll(".removeBtn")
        const lightTodoList = document.querySelectorAll(".todoList")
        const lightFirstTodo = document.querySelectorAll(".firstTodo")
        const lightSep = document.querySelectorAll(".separation")
        const lightImg = document.querySelector(".topBanner")

        lightBody.style.color = "hsl(236, 23%, 77%)"
        lightBody.style.backgroundColor = "hsl(236, 33%, 92%)"

        lightTodo.style.color = "hsl(235, 24%, 19%)"
        lightTodo.style.backgroundColor = "hsl(0, 0%, 98%)"

        lightAddBtn.style.color = "hsl(236, 23%, 77%)"
        lightAddBtn.style.backgroundColor = "hsl(236, 33%, 92%)"

        lightEmptyTodo.style.backgroundColor = "hsl(0, 0%, 98%)"

        lightRemoveBtn.forEach(btn => {
            btn.style.color = "hsl(236, 23%, 77%)";
        });
        
        lightTodoList.forEach(todo => {
            todo.style.backgroundColor = "hsl(0, 0%, 98%)";
        });

        lightFirstTodo.forEach(first => {
            first.style.backgroundColor = "hsl(0, 0%, 98%)"
            first.style.border = "1px solid hsl(236, 23%, 77%)"
        })

        lightSep.forEach(sep => {
            sep.style.border = "1px solid hsl(236, 33%, 92%)"
        })

        lightImg.style.background = "url('images/bg-desktop-light.jpg')"
        lightImg.style.height = "300px"
}

lightModeBtn.addEventListener("click", function () {
    const todoDiv = document.querySelector(".todoList");
    applyStylesToElement(todoDiv);
});