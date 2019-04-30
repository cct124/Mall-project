<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
