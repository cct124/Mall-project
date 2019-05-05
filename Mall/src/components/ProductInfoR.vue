<template>
  <div class="product-info-right">
    <div class="product-info-r-title">
      <h1>{{ productVersionInfo.titleH1 }}</h1>
      <h2>{{ productVersionInfo.titleH2 }}</h2>
    </div>
    <div class="product-info-r-price">
      <span>价格</span>
      <span class="price-min">{{ productVersionInfo.priceMin | productPrice }}</span>
      <span class="price-max">{{ productVersionInfo.priceMax | productPrice }}</span>
    </div>
    <div class="product-info-r-color">
      <span>选择颜色</span>
      <ul>
        <li
          v-for="(item, index) in productCardData.product_color_list"
          :key="index"
          :class="{ current: currentShowColor  === index  }"
          @click="setCurrentShowColor(index)"
        >{{ item.value }}</li>
      </ul>
    </div>
    <div class="product-info-r-version">
      <span>选择版本</span>
      <ul>
        <li
          v-for="(item, index) in productCardData.goods_ids"
          :key="index"
          :class="{ current: currentShowVersion  === index  }"
          @click="setCurrentShowVersion(index)"
        >{{ item.product_title }}</li>
      </ul>
    </div>
    <div class="product-info-r-shopping">
      <div class="product-info-r-shopping-add">
        <input type="number" v-model="productQuantity">
        <span @click="productQuantityAdd">+</span>
      </div>
      <button class="add-cart">加入购物车</button>
      <button class="order">立即下单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductInfoR",
  data() {
    return {
      currentShowColor: null,
      currentShowVersion: null,
      productQuantity: 1,
      productVersionInfo: {
        titleH1: "",
        titleH2: "",
        priceMin: null,
        priceMax: null
      }
    };
  },

  // 默认选中的版本和颜色信息
  beforeMount() {
    this.getDefault();
    this.updateProductVersionInfo();
  },
  props: {
    productCardData: Object,
    productInfoImg: Function
  },
  computed: {},
  methods: {
    // 计算存默认选中索引
    getDefault() {
      this.currentShowColor = this.productCardData.product_color_list.findIndex(
        item => {
          return item.default_show || false;
        }
      );
      this.currentShowVersion = this.productCardData.goods_ids.findIndex(
        item => {
          return item.default_show || false;
        }
      );
    },

    // 更新页面商品信息
    updateProductVersionInfo() {
      this.productVersionInfo = {
        titleH1:
          this.productCardData.name +
          this.productCardData.goods_ids[this.currentShowVersion].product_title,
        titleH2: this.productCardData.goods_ids[this.currentShowVersion]
          .product_feature_info,
        priceMin: this.productCardData.goods_ids[this.currentShowVersion]
          .price_min,
        priceMax: this.productCardData.goods_ids[this.currentShowVersion]
          .price_max
      };
    },

    // 颜色
    setCurrentShowColor(index) {
      this.currentShowColor = index;
      this.productInfoImg(index);
    },

    // 版本
    setCurrentShowVersion(index) {
      this.currentShowVersion = index;
      this.updateProductVersionInfo();
    },
    productQuantityAdd() {
      this.productQuantity++;
    }
  },
  filters: {
    productPrice(value) {
      return "￥" + value.toFixed(2);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-info-right {
  // 头部标题样式
  .product-info-r-title {
    text-align: left;
    margin: 2rem;
    h1 {
      font-size: 1.8rem;
      font-weight: inherit;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.2rem;
      font-weight: inherit;
    }
  }

  .product-info-r-price,
  .product-info-r-color,
  .product-info-r-version {
    margin: 5rem 4rem;
    ul {
      padding-left: 3.9rem;
    }
  }

  // 价格样式
  .product-info-r-price {
    text-align: left;
    .price-min {
      color: #e6391d;
      font-size: 3rem;
      margin: 0 1.5rem;
    }
    .price-max {
      font-size: 1.9rem;
      color: #9e9e9e;
      text-decoration: line-through;
    }
  }

  // 选择颜色样式
  .product-info-r-color,
  .product-info-r-version,
  .product-info-r-shopping,
  ul {
    display: flex;
    justify-content: left;
    align-items: center;
    li {
      line-height: 3.75rem;
    }
  }
  .product-info-r-color {
    span {
      display: inline-block;
      width: 12rem;
      height: 3.75rem;
      line-height: 3.75rem;
      font-size: 1.7rem;
    }
    ul {
      flex-wrap: wrap;
      li {
        margin-right: 2.3rem;
        width: 10.5rem;
        height: 3.75rem;
        border-radius: 0.4rem;
        border: 1px solid #707070;
        cursor: pointer;
        margin-bottom: 1rem;
      }
    }
  }

  // 选择版本样式
  .product-info-r-version {
    align-items: flex-start;
    span {
      display: inline-block;
      width: 12rem;
      height: 3.75rem;
      line-height: 3.75rem;
      font-size: 1.7rem;
    }
    ul {
      flex-wrap: wrap;
      li {
        font-size: 1.2rem;
        margin-right: 1rem;
        margin-bottom: 1.75rem;
        width: 24rem;
        height: 3.75rem;
        border-radius: 0.4rem;
        border: 1px solid #707070;
        cursor: pointer;
      }
    }
  }

  // 选中的样式
  .current {
    border: 1px solid #368bd6 !important;
  }

  // 加入购物车样式
  .product-info-r-shopping {
    margin: 10rem 5rem 5rem;
    .product-info-r-shopping-add {
      border: 1px solid #707070;
      border-radius: 0.4rem;
      width: 9.25rem;
      height: 6.41rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 4rem;
      input {
        width: 100%;
        flex: 3;
        text-align: center;
        -moz-appearance: textfield;
        outline: none;
        border: none;
        font-size: 3rem;
        color: #535353;
      }
      span {
        flex: 2;
        display: inline-block;
        font-size: 3rem;
        height: 100%;
        line-height: 6.41rem;
        border-left: 1px solid;
        cursor: pointer;
      }
      input::-webkit-inner-spin-button,
      input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
    .add-cart,
    .order {
      border: none;
      margin-left: 3rem;
      width: 22rem;
      height: 7.5rem;
      border-radius: 0.4rem;
      font-size: 2.9rem;
      color: #ffffff;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      transition: all 0.1s;
    }
    .add-cart {
      background-color: #ef624b;
    }
    .add-cart:hover {
      transform: scale(1.02);
    }
    .order:hover {
      transform: scale(1.02);
    }
    .order {
      background-color: #ef4b4b;
    }
  }
}
</style>
