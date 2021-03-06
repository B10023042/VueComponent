Vue.component('cloud', {
  data () {
    return {
      newTodo: '',
      todos: []}
  },
  methods: {
    addTodo () {
      const todo = this.newTodo && this.newTodo.trim()
      if (!todo) { return }
      this.todos.push({title: todo, completed: false})
      this.newTodo = ''
    }
  }  ,
  template:`<div id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus autocomplete="off"
        placeholder="What needs to be done?"
        v-model="newTodo"
        @keyup.enter="addTodo">
    </header>
    <section class="main" v-show="todos.length" v-cloak>
      <ul class="todo-list">
        <li class="todo"
          v-for="todo in todos" :key="todo.title">
          <div class="view">
            <label>{{todo.title}}</label>
          </div>
        </li>
      </ul>
    </section>
  </div>`
})
