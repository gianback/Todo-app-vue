<template>
  <div class="app" :class="theme === 'dark' ? 'darkTheme' : 'lightTheme'">
    <Header />
    <TodoContainer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import TodoContainer from "./components/TodoContainer.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    TodoContainer,
  },
  computed: {
    ...mapState(["pendientes", "theme"]),
  },

  methods: {
    ...mapActions(["accionCargarLS", "accionPendientes", "accionCargarTheme"]),
  },
  created() {
    this.accionCargarLS();
    this.pendientes = this.accionPendientes();
    this.accionCargarTheme();
  },
};
</script>

<style>
:root {
  /* THEME-DARK */
  --main-bg: hsl(235, 21%, 11%);
  --todo-bg: hsl(235, 24%, 19%);
  --todo-shadow: hsl(235, 21%, 11%);
  --font-color: hsl(234, 39%, 85%);
  --font-color-hover: #fff;
}
html {
  font-size: 62.5%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

.app {
  height: 100vh;
  font-family: "Josefin Sans", sans-serif;
}
.app.darkTheme {
  background-color: hsl(235, 21%, 11%);
}
.app.lightTheme {
  background-color: hsl(236, 33%, 92%);
}
.container {
  max-width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  #header {
    background: url("./assets/bg-mobile-dark.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .app-container {
    width: 90%;
  }
  .todo-container {
    grid-auto-columns: 10% 80% 10%;
  }
  .body-header .title {
    font-size: 2.5rem;
  }
}
@media (min-width: 768px) {
  .filters-movil {
    display: none;
  }
}
</style>
