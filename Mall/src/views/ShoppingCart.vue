<template>
  <div class="shopping-cart">
    <top-nav class="shopping-cart-nav"/>
    <div class="shopping-cart-content"></div>
    <web-footer/>
  </div>
</template>

<script>
import TopNav from "./../components/TopNav";
import WebFooter from "./../components/WebFooter";

export default {
  name: "ShoppingCart",
  components: {
    TopNav,
    WebFooter
  }
};
</script>
<style lang="scss" scoped>
</style>