import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
    pendientes: 0,
    //currentFilter = all || completed || active
    currentFilter: "",
    theme: "",
  },
  getters: {},
  mutations: {
    cambiarTheme(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
      localStorage.setItem("theme", state.theme);
    },
    theme(state, payload) {
      state.theme = payload;
    },
    cargarTodos(state, payload) {
      state.todos = payload;
    },
    set(state, payload) {
      state.todos.unshift(payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    filtrarPendientes(state) {
      state.pendientes = state.todos.filter(
        (todo) => todo.completed === false
      ).length;
    },
    setPendientes(state, payload) {
      state.listaPendientes = payload.filter(
        (todo) => todo.completed === false
      );
    },
    setValueFilter(state, payload) {
      state.currentFilter = payload;
    },
    filtrarTodos(state) {
      switch (state.currentFilter) {
        case "all":
          return state.todos;

        case "active":
          return state.todos.filter((todo) => todo.completed === false);

        case "completed":
          return state.todos.filter((todo) => todo.completed === true);
        default:
          return state.todos;
      }
    },
    borrarTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    borrarCompletados(state) {
      state.todos = state.todos.filter((todo) => todo.completed === false);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  actions: {
    setTarea({ commit }, todo) {
      commit("set", todo);
    },
    accionPendientes({ commit }) {
      commit("filtrarPendientes");
    },
    listarPendientes({ commit }, todos) {
      commit("setPendientes", todos);
    },
    accionSetValueFilter({ commit }, value) {
      commit("setValueFilter", value);
    },
    accionFiltrarTodos({ commit }) {
      commit("filtrarTodos");
    },
    accionBorrarTodo({ commit }, id) {
      commit("borrarTodo", id);
      commit("filtrarPendientes");
    },
    accionBorrarCompletado({ commit }) {
      commit("borrarCompletados");
    },
    accionCargarLS({ commit }) {
      if (localStorage.getItem("todos")) {
        commit("cargarTodos", JSON.parse(localStorage.getItem("todos")));
        return;
      }
      localStorage.setItem("todos", JSON.stringify([]));
    },
    accionCargarTheme({ commit }) {
      if (localStorage.getItem("theme")) {
        commit("theme", localStorage.getItem("theme"));
        return;
      }
      localStorage.setItem("theme", "light");
    },
    accionCambiarTheme({ commit }) {
      commit("cambiarTheme");
    },
  },

  modules: {},
});
