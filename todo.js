const todoList = () => {
    const todoLinkUrl = "https://jsonplaceholder.typicode.com/todos";
    fetch(todoLinkUrl)
        .then(res => res.json())
        .then(data => {
            displayTodo(data)
        })
}

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

const displayTodo = (todos) => {

      //1. get container
      const todoContainer = document.getElementById("todo-container");
        todoContainer.innerHTML = "";

    todos.forEach(todo => {
        // console.log(todo)
        //2. create Element
        const div = document.createElement("div");
        div.innerHTML = `
        <div class = "todo-style"> 
            <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i>`}</p>
        <h2>${todo.title}</h2>
        </div>

        `;

        //3. add child into parent container
        todoContainer.appendChild(div);
    })
}
//todoList()