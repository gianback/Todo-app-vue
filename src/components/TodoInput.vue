<template>
  <div class="container">
    <input
      type="text"
      placeholder="Create a new todo..."
      class="todoInput"
      :class="theme === 'dark' ? 'inputDark' : 'inputLight'"
      @keyup="procesarTodo"
      v-model.trim="todo.title"
    />
    <TodoList :todos="filtrarTodos()" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import { mapActions, mapState } from "vuex";
const shortid = require("shortid");
export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todo: {
        id: "",
        title: "",
        completed: false,
      },
    };
  },
  computed: {
    ...mapState(["todos", "pendientes", "currentFilter", "theme"]),
  },
  methods: {
    ...mapActions(["setTarea", "accionPendientes", "accionSetValueFilter"]),
    procesarTodo(e) {
      if (this.todo.title.trim() === "") {
        return;
      }
      if (e.keyCode === 13) {
        //generar id
        this.todo.id = shortid.generate();
        //agregamos al array todos
        console.log(this.todo.id);
        this.setTarea(this.todo);
        //reiniciamos el objeto todo
        this.todo = {
          id: "",
          title: "",
          completed: false,
        };
        this.accionPendientes(this.todos);
      }
    },

    filtrarTodos() {
      switch (this.currentFilter) {
        case "all":
          return this.todos;

        case "active":
          return this.todos.filter((todo) => todo.completed === false);

        case "completed":
          return this.todos.filter((todo) => todo.completed === true);

        default:
          return this.todos;
      }
    },
  },
};
</script>

<style>
.todoInput {
  width: 100%;
  padding: 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  border: none;
  outline: none;
  margin-bottom: 2rem;
  font-weight: 400;
}
.inputDark {
  background-color: var(--todo-bg);
  color: var(--font-color);
}
.inputLight {
  background-color: hsl(0, 0%, 98%);
  color: hsl(236, 9%, 61%);

  color: hsl(0, 0%, 98%);
  color: hsl(236, 33%, 92%);
  color: hsl(233, 11%, 84%);
  color: hsl(236, 9%, 61%);
  color: hsl(235, 19%, 35%);
}
</style>
