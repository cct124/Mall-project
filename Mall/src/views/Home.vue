<template>
  <div class="home">
    <div class="top-carousel">
      <div class="top-carousel-nav">
        <div class="top-carousel-nav-content">
          <svg-icon icon-class="category"/>
          <div class="top-carousel-nav-right">
            <ul>
              <li>首页</li>
              <li>iPhone</li>
              <li>HUAWEI</li>
              <li>VIVO</li>
              <li>
                <svg-icon icon-class="shoppingcart"/>
              </li>
              <li>
                <svg-icon icon-class="search"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <el-carousel :height="`${viewport}px`">
        <el-carousel-item v-for="item in carouselArr" :key="item.id">
          <img style="width:100%" :src="item.src">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <top-nav/>
      <div class="content-center">
        <div class="content-center-left">
          <div class="filter">
            <svg-icon icon-class="filter"/>
            <span>筛选</span>
          </div>
          <div class="brand bottom-after">
            <p>品牌</p>
            <ul>
              <li class="click-current">全部</li>
              <li>HUAWEI</li>
              <li>VIVO</li>
              <li>小米</li>
              <li>iPhone</li>
              <li>OPPO</li>
              <li>NOKIA</li>
              <li>SAMSUNG</li>
              <li>SONY</li>
            </ul>
          </div>
          <div class="brand bottom-after price">
            <p>价格</p>
            <ul>
              <li class="click-current">全部</li>
              <li>0 - 1999</li>
              <li>1999 - 2999</li>
              <li>2999 - 3999</li>
              <li>3999 - 4999</li>
              <li>4999 - 5999</li>
            </ul>
            <div class="price-interval">
              <p>价格区间</p>
              <div class="price-interval-input">
                <input type="text" name="priceIntervalMin">
                <span>-</span>
                <input type="text" name="priceIntervalMax">
              </div>
            </div>
          </div>
          <div class="brand key-word">
            <p>关键字</p>
            <ul>
              <li>高通</li>
              <li>5G</li>
              <li>三摄</li>
              <li>全面屏</li>
              <li>高清摄像</li>
            </ul>
          </div>
        </div>
        <div class="content-center-right">
          <commodity-card/>
          <commodity-card/>
          <commodity-card/>
          <commodity-card/>
          <commodity-card/>
          <commodity-card/>
        </div>
      </div>
      <button class="content-button-more">加载更多</button>
    </div>
    <div class="footer">
      <div class="web-information">
        <ul>
          <li>关于本网站&nbsp;></li>
          <li>网站简介</li>
          <li>开发者</li>
          <li>网站说明</li>
        </ul>
        <ul>
          <li>网站功能&nbsp;></li>
          <li>购物车</li>
          <li>订单管理</li>
          <li>其他</li>
        </ul>
        <ul>
          <li>项目地址&nbsp;></li>
          <li>
            <svg-icon icon-class="GitHub"/>&nbsp;&nbsp;Github
          </li>
        </ul>
      </div>
      <div class="web-bottom"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import TopNav from "./../components/TopNav";
import CommodityCard from "./../components/CommodityCard";

export default {
  name: "home",
  data() {
    return {
      carouselArr: [
        {
          id: 1,
          src: require("./../images/index1.jpg")
        },
        {
          id: 2,
          src: require("./../images/index2.jpg")
        },
        {
          id: 3,
          src: require("./../images/index3.jpg")
        },
        {
          id: 4,
          src: require("./../images/index4.jpg")
        }
      ],
      viewport: parseInt((document.documentElement.clientWidth * 9) / 16) - 100,
      resizeTimeout: null
    };
  },
  mounted() {
    // 获取视口大小，响应式调整轮播图尺寸
    this.getViewport();
  },
  computed: {
    ...mapState({
      vue: store => store.data.vue,
      user: store => store.userData.user
    })
  },
  methods: {
    // 监听resize事件
    getViewport() {
      window.addEventListener("resize", this.resizeThrottler, false);
    },
    // 节流函数
    resizeThrottler() {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(() => {
          this.resizeTimeout = null;
          this.actualResizeHandler();
        }, 66);
      }
    },
    // 获取视口大小，响应式调整轮播图尺寸
    actualResizeHandler() {
      this.viewport =
        parseInt((document.documentElement.clientWidth * 9) / 16) - 90;
    }
  },
  components: {
    TopNav,
    CommodityCard
  }
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #efefef;

  // 顶部轮播图样式
  .top-carousel {
    position: relative;

    // 导航栏
    .top-carousel-nav {
      position: relative;
      display: flex;
      justify-content: center;
      top: 4.3rem;
      .top-carousel-nav-content {
        display: flex;
        justify-content: space-between;
        width: 90%;
        position: absolute;
        color: rgba(255, 255, 255, 0.45);
        z-index: 3;
        svg {
          font-size: 4rem;
          cursor: pointer;
        }
        svg:hover {
          color: #ffffff;
        }
        .top-carousel-nav-right {
          ul {
            display: flex;
            flex-direction: row;
            font-size: 2.5rem;
            line-height: 4rem;
            li {
              cursor: pointer;
              margin: 0 2rem;
              svg {
                font-size: 4rem;
              }
            }
            li:hover {
              color: #ffffff;
            }
          }
        }
      }
    }

    // 轮播图
    .el-carousel {
      height: 100%;
      .swipet {
        font-size: 3rem;
      }
    }
    .el-carousel__item h3 {
      color: #ffffff;
      font-size: 5rem;
      opacity: 0.75;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -2.5rem;
      margin-left: -25rem;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #6c7c92;
    }
    .el-carousel__item:nth-child(2n + 1) {
      background-color: #6a678b;
    }
    .el-carousel__container {
      height: 100%;
    }
  }

  // 中部内容样式
  .content {
    .top-nav {
      margin: 3.5rem 15rem;
      border-radius: 0.5rem;
      box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
    }
    // 清除高度塌陷
    .content-center:after {
      display: block;
      content: ".";
      clear: both;
      line-height: 0;
      visibility: hidden;
    }
    .content-center {
      margin: auto;
      width: 80%;

      // 左侧筛选栏
      .content-center-left {
        width: 27%;
        background-color: #ffffff;
        box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
        border-radius: 0.5rem;
        float: left;
        // 筛选样式
        .filter {
          color: #535353;
          font-size: 2.5rem;
          margin: 0 auto;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-align: center;
          align-items: center;
          border-bottom: 1px solid rgba(112, 112, 112, 0.3);
          padding: 1.5rem 0 0.8rem 0;
          margin: 0 2.5rem;
          svg {
            font-size: 3rem;
          }
        }
        // 筛选-品牌样式
        .brand {
          font-size: 1.8rem;
          color: #7e7e7e;
          p {
            text-align: left;
            color: #535353;
            padding: 2.8rem 0 1rem 3.7rem;
          }
          ul {
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            padding: 0 1.5rem 0 3.7rem;
            align-items: center;
            li {
              margin: 0.8rem 1.5rem;
              cursor: pointer;
            }
          }
        }
        .bottom-after::after {
          content: "";
          width: 9.7rem;
          border-bottom: 1px solid #dbdbdb;
          display: block;
          position: relative;
          left: 2.5rem;
        }
        // 价格
        .price {
          ul {
            padding: 0 1.5rem 0 3.7rem;
            :first-child {
              margin-right: 2rem;
            }
            li {
              margin: 1.5rem 1rem;
            }
          }
          .price-interval {
            margin-bottom: 1.2rem;
            p {
              font-size: 2rem;
            }
            .price-interval-input {
              display: flex;
              justify-content: center;
              input {
                outline: none;
                width: 8rem;
                height: 2.5rem;
                border: 1px solid #707070;
                border-radius: 0.5rem;
                margin: 0 1.2rem;
              }
            }
          }
        }
        .key-word {
          margin-bottom: 5rem;
        }
      }

      // ccentent右侧样式
      .content-center-right {
        width: 67.8%;
        height: 50rem;
        float: left;
        margin-left: 4%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    // 加载更多按钮
    .content-button-more {
      width: 24rem;
      height: 4rem;
      border: none;
      background-color: #fefefe;
      box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.03);
      font-size: 1.4rem;
      color: #9b9b9b;
      letter-spacing: 0.5rem;
      cursor: pointer;
      border-radius: 0.4rem;
      margin: 50px 0;
    }
    .content-button-more:hover {
      color: #5f5f5f;
      background-color: #ffffff;
    }
  }
  // 筛选项目选中的样式
  .click-current {
    color: #535353;
  }

  // 底部样式
  .footer {
    background-color: #e4e4e4;
    .web-information {
      width: 60%;
      margin: 0 auto;
      display: flex;
      padding: 3rem 0 1.5rem 0;
      ul {
        margin-right: 12rem;
        li {
          margin-bottom: 1.5rem;
          text-align: left;
          font-size: 1.3rem;
          cursor: pointer;
        }
        :first-child {
          color: #585858;
          font-size: 2rem;
          font-weight: bolder;
        }
      }
    }
    .web-bottom {
      height: 3.5rem;
      background-color: #2b3457;
    }
  }
}
</style>


