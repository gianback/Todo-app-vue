<template>
  <div class="todo-container todo-dark">
    <button
      class="btn-check"
      :class="[
        { completed: todo.completed },
        theme === 'dark' ? 'btn-dark' : 'btn-light',
      ]"
      @click="marcarCompletado"
    ></button>
    <div class="title-container">
      <p class="todo-title" :class="{ parrafoCompletado: todo.completed }">
        {{ todo.title }}
      </p>
    </div>

    <button class="btn-cross" @click="accionBorrarTodo(todo.id)">
      <img src="../assets/icon-cross.svg" alt="" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      localCompleted: this.todo.completed,
    };
  },
  computed: {
    ...mapState(["todos", "pendientes", "theme"]),
  },
  methods: {
    ...mapActions(["accionPendientes", "accionBorrarTodo"]),
    marcarCompletado() {
      this.localCompleted = !this.localCompleted;
      this.$emit("completar", this.localCompleted);
      this.accionPendientes(this.todos);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    deleteTodo() {
      console.log("remover");
    },
  },
};
</script>

<style>
.todo-container {
  display: grid;
  grid-auto-columns: 5% 90% 5%;
  align-items: center;
  justify-content: space-between;
  font-size: 1.8rem;
  padding: 2rem;
  width: 100%;
  border-bottom: 1px solid hsl(234, 39%, 85%, 0.25);
}

.btn-check {
  grid-column: 1/2;
  border: none;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
}
.btn-check.btn-dark {
  background-color: var(--todo-bg);
  border: 1px solid rgb(255, 255, 255);
}
.btn-check.btn-light {
  background-color: white;
  border: 1px solid rgb(202, 205, 232);
}
.btn-check.completed {
  background: center url("../assets/icon-check.svg") no-repeat,
    linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  border: none;
}
.title-container {
  overflow: hidden;
}
.title-container .todo-title {
  grid-column: 2/3;
  width: 100%;
  padding: 0 2rem;
  text-align: start;
}
.parrafoCompletado {
  color: rgb(202, 205, 232);
  text-decoration: line-through;
}
.btn-cross {
  grid-column: 3/4;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  align-self: center;
}
</style>
