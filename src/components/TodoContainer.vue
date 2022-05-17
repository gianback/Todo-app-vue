<template>
  <div class="app-container">
    <div class="body-header">
      <h1 class="title">TODO</h1>
      <button
        class="btn"
        @click="accionCambiarTheme"
        :class="theme === 'dark' ? 'img-dark' : 'img-light'"
      ></button>
    </div>
    <TodoInput />
  </div>
</template>

<script>
import TodoInput from "@/components/TodoInput.vue";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    TodoInput,
  },
  computed: {
    ...mapState(["theme"]),
  },
  methods: {
    ...mapActions(["accionCambiarTheme"]),
  },
};
</script>

<style scoped>
.app-container {
  max-width: 70rem;
  margin: 0 auto;
}
.body-header {
  margin-top: -25rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 8rem;
}
.body-header .btn {
  width: 3rem;
  height: 3rem;
  align-self: center;
  border: none;
  cursor: pointer;
}
.body-header .btn.img-dark {
  background-image: url("../assets/icon-sun.svg");
  background-repeat: no-repeat;
  background-color: transparent;
}
.body-header .btn.img-light {
  background-image: url("../assets/icon-moon.svg");
  background-repeat: no-repeat;
  background-color: transparent;
}
.body-header .title {
  font-size: 5rem;
  font-weight: 700;
  color: white;
  letter-spacing: 3rem;
}
</style>
