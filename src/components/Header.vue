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
        headerDarkDesktop: this.theme === "dark" && this.width >= 768,
        headerLightDesktop: this.theme === "light" && this.width >= 768,
        headerDarkMobile: this.theme === "dark" && this.width < 768,
        headerLightMobile: this.theme === "light" && this.width < 768,
      };
    },
  },
  mounted() {
    this.width = window.innerWidth;
  },
};
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
