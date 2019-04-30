<template>
  <li class="search-input" ref="mouseSearch">
    <input
      ref="searchInput"
      @focus="searchInputFocusFn(true)"
      @blur="searchInputFocusFn(false)"
      type="text"
    >
    <span>
      <svg-icon icon-class="search"/>
    </span>
  </li>
</template>

<script>
import { buffer } from "./../assets/js/animation.js";
export default {
  name: "SearchInput",
  data() {
    return {
      searchShow: false,
      searchInputFocus: false
    };
  },
  mounted() {
    this.$refs.mouseSearch.addEventListener("mouseover", this.isSearchShow);
    this.$refs.mouseSearch.addEventListener("mouseout", this.isSearchShow);
  },
  methods: {
    searchInputFocusFn(boolean) {
      this.searchInputFocus = boolean;
      this.isSearchShow();
    },
    isSearchShow() {
      if (!this.searchInputFocus) {
        this.searchShow = !this.searchShow;
        let input = this.$refs.searchInput;
        if (this.searchShow) {
          input.style.display = "inline-block";
          buffer(
            input,
            { width: 200, opacity: 1, marginRight: 12, paddingLeft: 7 },
            0.3
          );
        } else {
          buffer(
            input,
            { width: 0, opacity: 0, marginRight: 0, paddingLeft: 0 },
            0.3,
            () => {
              input.style.display = "none";
            }
          );
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    position: relative;
    outline: none;
    width: 0;
    height: 2.6rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #a2a2a2;
    padding-left: 0.6rem;
    display: none;
    background-color: transparent;
  }
  span {
    svg {
      font-size: 4rem;
    }
  }
}
</style>
