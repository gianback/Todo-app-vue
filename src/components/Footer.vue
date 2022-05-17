<template>
  <div>
    <div id="footer" :class="theme === 'dark' ? 'footerDark' : 'footerLight'">
      <p>{{ pendientes }} Items left</p>

      <FooterFilters />

      <button @click="accionBorrarCompletado">Clear Completed</button>
    </div>
    <div
      class="filters-movil"
      :class="theme === 'dark' ? 'footerDark' : 'footerLight'"
    >
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
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FooterFilters from "@/components/FooterFilters";
export default {
  components: {
    FooterFilters,
  },
  computed: {
    ...mapState(["pendientes", "currentFilter", "theme"]),
  },
  methods: {
    ...mapActions(["accionSetValueFilter", "accionBorrarCompletado"]),
  },
};
</script>

<style scoped>
#footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  font-size: 1.8rem;
  font-weight: 700;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
#footer .filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.marked {
  color: hsl(220, 98%, 61%);
}

p,
button {
  background-color: transparent;
  font-weight: 700;
  color: rgb(202, 205, 232, 0.5);
}
.filters-movil {
  background-color: var(--todo-bg);
  margin-top: 2rem;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
}
.filters-movil > button {
  margin: 0 1rem;
}
.footerDark {
  background-color: var(--todo-bg);
  color: var(--font-color);
  font-weight: 700;
}
.footerLight {
  background-color: hsl(0, 0%, 98%);
  color: hsl(236, 9%, 61%);
  font-weight: 700;
}
@media (max-width: 767px) {
  #footer .filters {
    display: none;
  }
  #footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
