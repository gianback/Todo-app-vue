<template>
  <div class="header" :class="setThemeResponsive"></div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      width: "",
    };
  },
  computed: {
    ...mapState(["theme"]),
    setThemeResponsive() {
      return {
        headerDarkDesktop: this.theme === "dark" && window.innerWidth >= 768,
        headerLightDesktop: this.theme === "light" && window.innerWidth >= 768,
        headerDarkMobile: this.theme === "dark" && window.innerWidth < 768,
        headerLightMobile: this.theme === "light" && window.innerWidth < 768,
      };
    },
  },
  mounted() {
    this.width = window.innerWidth;
  },
};
/* window.addEventListener("resize", () => {
  this.width = window.innerWidth;
  console.log(width);
}); */
</script>

<style>
.header {
  height: 35vh;
  width: 100%;
}
.headerLightMobile {
  background: url("../assets/bg-mobile-light.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.headerDarkMobile {
  background: url("../assets/bg-mobile-dark.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.headerDarkDesktop {
  background: url("../assets/bg-desktop-dark.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
.headerLightDesktop {
  background: url("../assets/bg-desktop-light.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
