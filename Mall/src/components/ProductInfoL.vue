<template>
  <div class="product-info-left">
    <div class="product-info-content-left-title">
      <h1>{{productInfoTitle}}</h1>
    </div>
    <div class="product-info-content-left-img">
      <img :src="imgPath" alt="商品图片">
    </div>
    <div class="product-info-content-left-min-img">
      <span @click="nextMinImg('left')">
        <svg-icon class="ele-reverse" icon-class="arrow"/>
      </span>
      <div ref="leftMinImg" class="left-min-img-div" :style="{ height: ulHeight +'px'}">
        <ul ref="leftMinImgUl" :style="{ width: ulWidth +'px'}">
          <li
            v-for="(item, index) in productInfoImgIndex.images_path"
            :key="index"
            @click="imgPath = item"
          >
            <img :src="item">
          </li>
        </ul>
      </div>
      <span @click="nextMinImg('right')">
        <svg-icon icon-class="arrow"/>
      </span>
    </div>
  </div>
</template>

<script>
import { throttler, buffer } from "./../assets/js/animation.js";
export default {
  name: "ProductInfoL",
  data() {
    return {
      ulHeight: null,
      ulWidth: null,
      minImgWidth: null,
      imgPath: this.productInfoImgIndex.images_path[0]
    };
  },
  props: {
    productInfoImgIndex: Object,
    productInfoTitle: String
  },
  watch: {
    productInfoImgIndex: function() {
      this.getMinImgClientWidth();
      this.imgPath = this.productInfoImgIndex.images_path[0];
      let element = this.$refs.leftMinImgUl;
      buffer(element, { left: 0 }, 0.2);
    }
  },
  mounted() {
    window.addEventListener(
      "resize",
      throttler(this.getMinImgClientWidth),
      false
    );
    setTimeout(() => {
      this.getMinImgClientWidth();
    });
  },
  methods: {
    // 响应式计算缩略图大小
    getMinImgClientWidth() {
      this.minImgWidth = parseInt(this.$refs.leftMinImg.offsetWidth / 3);
      let nodeList = this.$refs.leftMinImgUl.children;
      [...nodeList].forEach(element => {
        element.style.width = this.minImgWidth + "px";
      });
      // 动态设置ul父元素的高度，防止高度坍塌
      setTimeout(() => {
        // 异步计算，防止元素未加载完成计算其高度
        // eslint-disable-next-line
        new Promise((resolve, reject) => {
          this.ulWidth =
            this.minImgWidth * this.$refs.leftMinImgUl.children.length + 10;
          resolve();
        }).then(() => {
          this.ulHeight = this.$refs.leftMinImgUl.offsetHeight;
        });
      });
    },
    // 缩略图按钮
    nextMinImg(value) {
      let element = this.$refs.leftMinImgUl;
      let elementDiv = this.$refs.leftMinImg;
      let left = element.offsetLeft;
      // 缩略图右侧按钮
      if (
        left >
          -(element.offsetWidth - elementDiv.offsetWidth) +
            this.minImgWidth / 2 &&
        value == "right"
      ) {
        buffer(element, { left: left - this.minImgWidth }, 0.2);
      }
      // 缩略图左侧按钮
      if (left < -(this.minImgWidth / 2) && value == "left") {
        buffer(element, { left: left + this.minImgWidth }, 0.2);
      }
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.product-info-left {
  // 商品名称样式
  .product-info-content-left-title {
    width: 100%;
    height: 6.5rem;
    h1 {
      font-size: 2.5rem;
      font-weight: inherit;
      height: 100%;
      line-height: 6.5rem;
      float: left;
      color: #2a80cc;
      padding-left: 2rem;
      border-bottom: 1px solid #2a80cc;
    }
  }

  // 商品图片
  .product-info-content-left-img {
    width: 100%;
    margin: 3.5rem auto;
    img {
      width: 100%;
    }
  }

  // 缩略图
  .product-info-content-left-min-img {
    margin-bottom: 4rem;
    display: flex;
    align-items: center;
    svg {
      flex: 1;
      font-size: 3rem;
      color: #368bd6;
      cursor: pointer;
    }
    .left-min-img-div {
      overflow: hidden;
      position: relative;
      width: 90%;
      margin: 0 auto;
      flex: 10;
      ul {
        position: absolute;
        background-color: #fff;
        li {
          width: 9rem;
          float: left;
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
