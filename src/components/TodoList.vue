<template>
  <div class="todolist-container">
    <div v-for="(item, index) of todos" :key="index">
      <Todo
        :todo="item"
        @completar="item.completed = $event"
        :class="theme === 'dark' ? 'todos-dark' : 'todos-light'"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import Footer from "@/components/Footer";
import { mapState } from "vuex";

export default {
  components: {
    Todo,
    Footer,
  },
  props: {
    todos: Object,
  },
  computed: {
    ...mapState(["theme"]),
  },
};
</script>
<style>
.todolist-container {
  border-radius: 1rem;
  overflow: hidden;
}
.todos-dark {
  background-color: var(--todo-bg);
  color: var(--font-color);
}
.todos-light {
  background-color: hsl(0, 0%, 98%);
  color: hsl(236, 9%, 61%);
}
</style>
