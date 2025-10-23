// State of the app
const todo = ['Walk the dog', 'Water the plants', 'Sand the chairs']

// HTML element references
const add_todo_input = document.getElementById('todo-input')
const add_todo_btn = document.getElementById('add-todo-btn')
const todos_list = document.getElementById('todos-list')


// Initialize the view
for (const todo of todo) {
  todos_list.append(render_todo_in_read_mode(todo))
}

add_todo_input.addEventListener('input', () => {
  add_todo_btn.disabled = add_todo_input.value.length < 3
})

add_todo_input.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter' && add_todo_input.value.length >= 3) {
    add_todo()
  }
})

add_todo_btn.addEventListener('click', () => {
  add_todo()
})

// Functions
function render_todo_in_read_mode(_todo) {
  // TODO: implement me!
}

function add_todo() {
  // TODO: implement me!
}
