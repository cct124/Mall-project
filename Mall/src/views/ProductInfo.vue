<template>
  <div class="product-info">
    <top-nav class="product-info-nav"/>
    <div class="product-info-content">
      <div class="product-info-content-left">
        <div class="product-info-content-left-title">
          <h1>{{commodityCardData[0].name}}</h1>
        </div>
        <div class="product-info-content-left-img">
          <img src="./../images/HUAWEI_Nova4_800_800_1551093670566mp.png" alt="商品图片">
        </div>
        <div class="product-info-content-left-min-img">
          <span @click="nextMinImg('left')">
            <svg-icon class="ele-reverse" icon-class="arrow"/>
          </span>
          <div ref="leftMinImg" class="left-min-img-div" :style="{ height: ulHeight +'px'}">
            <ul ref="leftMinImgUl" :style="{ width: ulWidth +'px'}">
              <li
                v-for="(item, index) in commodityCardData[0].product_color_list[1].images_path"
                :key="index"
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
      <div class="product-info-content-right">
        <h1></h1>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from "./../components/TopNav";
import { throttler, buffer } from "./../assets/js/animation.js";
import commodityCardData from "./../assets/dataBase.js";

export default {
  name: "ProductInfo",
  components: {
    TopNav
  },
  data() {
    return {
      ulHeight: null,
      ulWidth: null,
      minImgWidth: null,
      commodityCardData
    };
  },
  mounted() {
    window.addEventListener(
      "resize",
      throttler(this.getMinImgClientWidth),
      false
    );
    this.getMinImgClientWidth();
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
            this.minImgWidth * this.$refs.leftMinImgUl.children.length;
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
        left > -(element.offsetWidth - elementDiv.offsetWidth) &&
        value == "right"
      ) {
        buffer(element, { left: left - this.minImgWidth }, 0.2);
      }
      // 缩略图左侧按钮
      if (left < 0 && value == "left") {
        buffer(element, { left: left + this.minImgWidth }, 0.2);
      }
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.product-info {
  .product-info-nav {
    margin: 3.5rem 15rem;
  }
  .product-info-content {
    width: 70%;
    margin: 6rem auto;
    display: flex;

    // 商品详情页左栏样式
    .product-info-content-left,
    .product-info-content-right {
      background-color: #ffffff;
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
      border-radius: 0.5rem;
    }
    .product-info-content-left {
      width: 33%;

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
    .product-info-content-right {
      width: 64%;
      margin-left: 3%;
    }
  }
}
</style>