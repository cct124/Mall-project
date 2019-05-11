<template>
  <div class="product-info">
    <top-nav class="product-info-nav"/>
    <div class="product-info-content">
      <div class="product-info-content-left">
        <product-info-left
          :productInfoImgIndex="productInfoImgIndex"
          :productInfoTitle="productInfoTitle"
        />
      </div>
      <div class="product-info-content-right">
        <product-info-right :productCardData="productCardData" :productInfoImg="productInfoImg"/>
      </div>
    </div>
    <web-footer/>
  </div>
</template>

<script>
import TopNav from "./../components/TopNav";
import commodityCardData from "./../assets/dataBase.js";
import ProductInfoLeft from "./../components/ProductInfoL";
import ProductInfoRight from "./../components/ProductInfoR";
import WebFooter from "./../components/WebFooter";

export default {
  name: "ProductInfo",
  components: {
    TopNav,
    ProductInfoLeft,
    ProductInfoRight,
    WebFooter
  },
  data() {
    return {
      commodityCardData,
      productCardData: commodityCardData[0],
      productInfoImgIndex: null,
      productInfoTitle: ""
    };
  },
  created() {
    this.productInfoImg("mounted");
  },
  methods: {
    productInfoImg(props) {
      if (props === "mounted") {
        let index = this.productCardData.product_color_list.findIndex(item => {
          return item.default_show || false;
        });
        this.productInfoImgIndex = this.productCardData.product_color_list[
          index
        ];
        this.productInfoTitle = this.productCardData.name;
        return;
      }
      this.productInfoImgIndex = this.productCardData.product_color_list[props];
    }
  }
};
</script>
<style lang="scss" scoped>
.product-info {
  .product-info-content {
    width: 70%;
    margin: 6rem auto;
    display: flex;

    // 商品详情页左栏样式
    .product-info-content-left,
    .product-info-content-right {
      background-color: #ffffff;
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
      border-radius: 0.2rem;
    }
    .product-info-content-left {
      width: 33%;
    }
    .product-info-content-right {
      width: 64%;
      margin-left: 3%;
    }
  }
}
</style>