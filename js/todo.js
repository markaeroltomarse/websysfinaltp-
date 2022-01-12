let todotitle = document.getElementById('todotitle')

let todoForm = document.getElementById('submitTodo')

let todolist = document.getElementById('list')

let todos = []

todoForm.addEventListener('submit', e => {
    e.preventDefault()
    
    let val = todotitle.value

    if(val == '' || todos.some(todo => todo.title.toLowerCase() == val.toLowerCase())) {
        return 
    }

    todos.push({
       
        title:val,
        date: new Date().getUTCFullYear() + '/' + ((+new Date().getUTCMonth()) + 1 ) + '/' + new Date().getUTCDay()
    })

    refreshTodos()
    
    
    

    todotitle.value = ''
})


function removeTodo(index) {
    delete todos[index]

    refreshTodos()
}

function refreshTodos() {
    todolist.innerHTML = ''


    todos.forEach((todo, i) => {
        todolist.insertAdjacentHTML('beforeend', `
        <div class="todo">
            <div>
                <strong>
                    ${todo.title}
                </strong>

                <p>
                <small>Date Created: ${todo.date}</small> 
                </p>
            </div>

            <div>
                <button onclick="removeTodo(${i})">DELETE</button>
            </div>
        </div>
        `)
    })
}

// const btn1 = document.getElementById('btn1')

// window.onload = () => {
//     alert("THIS PAGE IS SUCCESS FULLY LOADED")
// }

// btn1.onclick = () => {
//     alert("THIS BUTTON IS CLICKED")
// }