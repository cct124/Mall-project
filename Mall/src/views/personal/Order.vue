<template>
  <div class="order">
    <ul>
      <li v-for="(item, index) in orderData" :key="index">
        <div class="product-img">
          <img :src="item.imagePath[0]">
        </div>
        <div class="order-info">
          <h1 class="order-id">
            <span>id:</span>
            {{ item.id }}
          </h1>
          <h2 class="order-product-info">{{item.product_title}}</h2>
          <ul class="info">
            <li>{{item.name}}</li>
            <li>
              共
              <span>&nbsp;{{item.quantity}}&nbsp;</span>件商品
            </li>
            <li>
              应付款&nbsp;&nbsp;
              <span>{{item.price | productPrice}}</span>
            </li>
            <li>{{ item.status }}</li>
          </ul>
        </div>
        <div class="Order-button">
          <div class="order-cancel">取消订单</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      orderData: [
        {
          id: 19200511353680863,
          product_id: [[3536, 3536000010, 3536002]],
          price: 2699.0,
          quantity: 1,
          status: "发货中",
          name: "HUAWEI nova 4 ",
          product_title: "2000万超广角三摄 6GB+128GB 全网通",
          imagePath: [
            require("./../../images/HUAWEI_Nova4_800_800_1551093670566mp.png")
          ]
        },
        {
          id: 19200511353680863,
          product_id: [[3536, 3536000010, 3536002]],
          price: 2699.0,
          quantity: 1,
          status: "发货中",
          name: "HUAWEI nova 4 ",
          product_title: "2000万超广角三摄 6GB+128GB 全网通",
          imagePath: [
            require("./../../images/HUAWEI_Nova4_800_800_1551093670566mp.png")
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.order {
  height: 43rem;
  background-color: #ffffff;
  border-radius: 0.2rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
  padding: 3.3rem 2.9rem;
  > ul {
    > li:hover {
      transform: scale(1.02);
    }
    > li {
      display: flex;
      justify-content: flex-start;
      margin-bottom: 4rem;
      border-bottom: 1px solid #e3e3e3;
      transition: all 0.2s;
      .product-img {
        img {
          width: 10rem;
        }
      }
      .order-info {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        margin-left: 2rem;
        h1,
        h2 {
          font-weight: normal;
          font-size: 1.5rem;
        }
        h1 {
          color: #868686;
        }
        .info {
          display: flex;
          li {
            height: 2rem;
            line-height: 2rem;
            margin-right: 4rem;
            span {
              color: #ef624b;
            }
          }
        }
      }
      .Order-button {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0.5rem 0;
        .order-cancel {
          width: 11rem;
          height: 2.5rem;
          background-color: #dddddd;
          font-size: 1.4rem;
          line-height: 2.6rem;
          border-radius: 0.2rem;
          cursor: pointer;
        }
        .order-cancel:hover {
          background-color: #e6e6e6;
        }
      }
    }
  }
}
</style>