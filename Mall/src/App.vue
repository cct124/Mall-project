<template>
  <div id="app">
    <transition name="fade">
      <login v-if="loginShow"/>
    </transition>
    <router-view/>
  </div>
</template>

<script>
import Login from "./components/Login";
import { mapState } from "vuex";
export default {
  name: "app",
  data() {
    return {
      getScrollTop: null
    };
  },
  components: {
    Login
  },
  computed: {
    ...mapState({
      loginShow: state => state.userData.loginShow
    })
  },
  methods: {
    setScrollTp() {
      document.documentElement.scrollTop = this.getScrollTop;
    }
  },
  watch: {
    loginShow() {
      this.getScrollTop = document.documentElement.scrollTop;
      if (this.loginShow) {
        window.addEventListener("scroll", this.setScrollTp);
      } else {
        window.removeEventListener("scroll", this.setScrollTp);
      }
    }
  }
};
</script>

<style lang="scss">
html {
  font-size: 12px;
  background-color: #efefef;
}
@import "./assets/css/style.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #efefef;
  color: #535353;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
.overflowapp {
  overflow: hidden;
}
#nav {
  padding: 3rem;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.clear-height:after {
  display: block;
  content: ".";
  clear: both;
  line-height: 0;
  visibility: hidden;
}
.ele-reverse {
  transform: rotate(180deg);
}
</style>
