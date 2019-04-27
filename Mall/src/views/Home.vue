<template>
  <div class="home">
      <svg-icon icon-class="telegram" class="icon-size"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.icon-size {
  font-size: 20px;
}
</style>

