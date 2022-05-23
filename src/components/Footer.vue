<template>
  <div>
    <div id="footer" :class="theme === 'dark' ? 'footerDark' : 'footerLight'">
      <p>{{ pendientes }} Items left</p>

      <FooterFilters />

      <button
        @click="accionBorrarCompletado"
        :class="theme === 'dark' ? 'footerDark' : 'footerLight'"
      >
        Clear Completed
      </button>
    </div>
    <div
      class="filters-movil"
      :class="theme === 'dark' ? 'footerDark' : 'footerLight'"
    >
      <button
        :class="[
          { marked: currentFilter === 'all' || currentFilter === '' },
          theme === 'dark' ? 'footerDark' : 'footerLight',
        ]"
        @click="accionSetValueFilter('all')"
      >
        All
      </button>
      <button
        :class="[
          { marked: currentFilter === 'active' },
          theme === 'dark' ? 'footerDark' : 'footerLight',
        ]"
        @click="accionSetValueFilter('active')"
      >
        Active
      </button>
      <button
        :class="[
          { marked: currentFilter === 'completed' },
          theme === 'dark' ? 'footerDark' : 'footerLight',
        ]"
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
.footerDark.marked {
  color: hsl(220, 98%, 61%);
}
.footerLight.marked {
  color: hsl(220, 98%, 61%);
}
.footerDark {
  color: rgb(202, 205, 232, 0.5);
  font-weight: 700;
}

p,
button {
  background-color: transparent;
  font-weight: 700;
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
  color: rgb(202, 205, 232, 0.5);
  font-weight: 700;
}
.footerLight {
  color: #9394a5;
  background-color: hsl(0, 0%, 98%);
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
