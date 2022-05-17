<template>
  <div class="filters" :class="theme === 'dark' ? 'footerDark' : 'footerLight'">
    <button
      :class="{ marked: currentFilter === 'all' || currentFilter === '' }"
      @click="accionSetValueFilter('all')"
    >
      All
    </button>
    <button
      :class="{ marked: currentFilter === 'active' }"
      @click="accionSetValueFilter('active')"
    >
      Active
    </button>
    <button
      :class="{ marked: currentFilter === 'completed' }"
      @click="accionSetValueFilter('completed')"
    >
      Completed
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["currentFilter", "theme"]),
  },
  methods: {
    ...mapActions(["accionSetValueFilter", "accionBorrarCompletado"]),
  },
};
</script>

<style scoped>
p,
button {
  background-color: transparent;
  font-weight: 700;
  color: rgb(202, 205, 232, 0.5);
}
.marked {
  color: hsl(220, 98%, 61%);
}
.footerDark {
  background-color: var(--todo-bg);
  color: var(--font-color);
  font-weight: 700;
}
.footerLight {
  background-color: hsl(0, 0%, 98%);
  color: hsl(235, 19%, 35%);
  font-weight: 700;
}
</style>
