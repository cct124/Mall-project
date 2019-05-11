<template>
  <div class="shopping-cart">
    <top-nav class="shopping-cart-nav"/>
    <div class="shopping-cart-content">
      <div class="shopping-cart-content-center">
        <div class="left">
          <div class="shopping-cart-svg">
            <svg-icon icon-class="shoppingcart"/>
            <h1>购物车</h1>
          </div>
          <ul class="recommended">
            <li>
              <div class="recommended-title">
                <img src="./../images/800_800_1542935118441mp.png" alt="推荐商品图片">
                <h2>
                  荣耀经典耳机 USB Type-c版
                  <span>79.00元</span>
                </h2>
              </div>
              <svg-icon icon-class="shoppingcartAdd"/>
            </li>
            <li>
              <div class="recommended-title">
                <img src="./../images/800_800_1553776971724mp.png" alt="推荐商品图片">
                <h2>
                  华为10000 移动电源 SuperCharge
                  <span>120.00元</span>
                </h2>
              </div>
              <svg-icon icon-class="shoppingcartAdd"/>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul class="order-information">
            <li v-for="(item, index) in orderInformation" :key="index">
              <div class="order-information-button">
                <span class="select" :class="{ current:item.select }" @click="orderSelect(index)"></span>
                <span class="delete-order">
                  <svg-icon icon-class="close"/>
                </span>
              </div>
              <div class="order-information-img">
                <img src="./../images/HUAWEI_Nova4_800_800_1551093670566mp.png" alt="订单商品图片">
                <h2>
                  <span>{{ item.name.slice(0, item.name.indexOf(' ')) }}</span>
                  <span>{{ item.name.slice(item.name.indexOf(' ')) }}</span>
                  <span class="color-info">{{ item.color }}</span>
                </h2>
              </div>
              <div class="quantity-price">
                <p>数量</p>
                <div class="quantity-footer">
                  <div class="quantity-button">
                    <span @click="item.quantity > 0 ? item.quantity-- : 0">-</span>
                    <input type="number" name="quantity" id="quantity" v-model="item.quantity">
                    <span @click="item.quantity++">+</span>
                  </div>
                  <span class="price">{{ item.price | productPrice }}</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="settlement">
        <div class="select-all">
          <span>全选</span>
          <span class="select" :class="{ current:selectAll }" @click="selectAll = '1'"></span>
        </div>
        <div class="selected">
          <span>选中</span>
          <span class="selected-quantity">{{ selectedQuantity }}</span>
          <span class="separate">/</span>
          <span class="quantityAll">{{ quantityAll }}</span>
        </div>
        <div class="total-price">
          <span>总价</span>
          <span class="total-value">{{ totalPrice | productPrice }}</span>
        </div>
        <div class="settlement-button">
          <span>结算</span>
        </div>
      </div>
    </div>
    <web-footer/>
  </div>
</template>

<script>
import TopNav from "./../components/TopNav";
import WebFooter from "./../components/WebFooter";

export default {
  name: "ShoppingCart",
  data() {
    return {
      orderInformation: [
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.86,
          quantity: 1,
          select: true
        },
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.0,
          quantity: 1,
          select: false
        },
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.0,
          quantity: 1,
          select: false
        },
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.0,
          quantity: 1,
          select: false
        },
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.0,
          quantity: 1,
          select: false
        },
        {
          product_id: 3536,
          edition_id: 3536000011,
          color_id: 3536002,
          name: "HUAWEI nova 4 ",
          color: "苏音蓝",
          images_path: require("./../images/HUAWEI_Nova4_800_800_1551093670566mp.png"),
          price: 3099.0,
          quantity: 1,
          select: false
        }
      ]
    };
  },
  components: {
    TopNav,
    WebFooter
  },
  methods: {
    orderSelect(index) {
      this.orderInformation[index].select = !this.orderInformation[index]
        .select;
    }
  },
  computed: {
    selectAll: {
      get() {
        return this.orderInformation.every(item => {
          return item.select;
        });
      },
      set() {
        let bool = this.selectAll;
        this.orderInformation.forEach(item => {
          item.select = !bool;
        });
      }
    },
    selectedQuantity() {
      let quantity = 0;
      this.orderInformation.forEach(item => {
        if (item.select) {
          quantity++;
        }
      });
      return quantity;
    },
    quantityAll() {
      return this.orderInformation.length;
    },
    totalPrice() {
      let price = 0;
      this.orderInformation.forEach(item => {
        if (item.select) {
          price +=
            item.price *
            (item.quantity <= 0 ? (item.quantity = 0) : item.quantity);
        }
      });
      return price;
    }
  }
};
</script>
<style lang="scss" scoped>
// 购物车样式

// 公共样式
.shopping-cart-svg,
.settlement,
.recommended > li,
.order-information li {
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
}

.shopping-cart-content {
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;

  .shopping-cart-content-center {
    display: flex;
    // 左侧商品推荐栏
    .left {
      .shopping-cart-svg {
        width: 25rem;
        height: 8.3rem;
        line-height: 8.3rem;
        margin-bottom: 3rem;
        h1 {
          display: inline-block;
          font-size: 2.5rem;
          letter-spacing: 1rem;
          margin-left: 1rem;
        }
        svg {
          vertical-align: -0.2em;
          font-size: 3rem;
          color: #e6391d;
        }
      }
      .recommended {
        li:hover {
          transform: scale(1.02);
        }
        li {
          width: 25rem;
          height: 19rem;
          margin-bottom: 1.1rem;
          flex-direction: column;
          display: flex;
          justify-content: center;
          transition: all 0.2s;
          .recommended-title {
            width: 100%;
            display: flex;
            align-items: center;
            img {
              flex: none;
              width: 12.6rem;
              height: 12.6rem;
            }
            h2 {
              font-size: 1.6rem;
              font-weight: normal;
              span {
                color: #e6391d;
                padding-top: 1rem;
                display: inline-block;
              }
            }
          }
          svg {
            font-size: 3rem;
            align-self: flex-end;
            margin-top: -2rem;
            margin-bottom: -2rem;
            padding-right: 1rem;
            padding-top: 2rem;
            color: #e6391d;
          }
        }
      }
    }
    // 右侧订单列表
    .right {
      width: 76%;
      margin-left: 3%;
      .order-information {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li:hover {
          transform: scale(1.02);
        }
        li {
          width: 22rem;
          height: 25.4rem;
          margin-bottom: 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-right: 1rem;
          transition: all 0.2s;
          .order-information-button {
            display: flex;
            justify-content: space-between;
            margin: 1rem;
            .select {
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              border: 1px solid #707070;
              display: inline-block;
              cursor: pointer;
            }
            .delete-order {
              cursor: pointer;
            }
          }
          .order-information-img {
            display: flex;
            align-items: center;
            cursor: pointer;
            img {
              width: 13rem;
            }
            h2 {
              font-size: 2rem;
              font-weight: normal;
              .color-info {
                font-size: 1.4rem;
              }
              span {
                display: block;
              }
            }
          }
          .quantity-price {
            padding: 0.3rem 1rem 1.25rem 2.8rem;
            color: #bebebe;
            p {
              font-size: 1.5rem;
              text-align: left;
              margin-bottom: 0.5rem;
            }
            .quantity-footer {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .quantity-button {
                display: inline-block;
                border: 1px solid #bebebe;
                color: #bebebe;
                border-radius: 0.2rem;
                width: 6.9rem;
                height: 2.1rem;
                display: flex;
                justify-content: space-around;
                input {
                  width: 3.3rem;
                  text-align: center;
                  -moz-appearance: textfield;
                  outline: none;
                  border: none;
                  font-size: 1.5rem;
                  border-left: 1px solid #bebebe;
                  border-right: 1px solid #bebebe;
                }
                // 除去input Number按钮默认样式
                input::-webkit-inner-spin-button,
                input::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
                }
                span {
                  cursor: pointer;
                }
              }
              .price {
                font-size: 2rem;
                color: #e6391d;
              }
            }
          }
        }
      }
    }
  }

  // 结算
  .settlement {
    width: 60%;
    height: 7.5rem;
    align-self: flex-end;
    margin: 0 1rem 5rem 0;
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .select-all,
    .selected {
      flex: 1;
    }
    .select-all {
      .select {
        display: inline-block;
        width: 1.7rem;
        height: 1.7rem;
        border: 1px solid #707070;
        border-radius: 50%;
        margin-left: 1rem;
        cursor: pointer;
      }
    }
    .total-price {
      flex: 2;
    }
    .selected {
      font-size: 2rem;
    }
    .selected-quantity {
      margin-left: 1rem;
      font-size: 3rem;
      color: #e6391d;
    }
    .total-price {
      .total-value {
        font-size: 2.4rem;
        color: #e6391d;
        margin-left: 1rem;
      }
    }
    .settlement-button {
      flex: 1.5;
      color: #ffffff;
      font-size: 2.5rem;
      background-color: #ef624b;
      border-top-right-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      cursor: pointer;
      transition: all 0.2s;
      // letter-spacing: 1rem;
    }
    .settlement-button:hover {
      transform: scale(1.02);
    }
  }
  .current {
    background-color: #e6391d;
    border: 1px solid #e6391d !important;
  }
}
</style>