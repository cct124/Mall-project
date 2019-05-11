<template>
  <div class="home">
    <div class="top-carousel">
      <div class="top-carousel-nav">
        <div class="top-carousel-nav-content">
          <span @click="setLoginShow" title="登陆-注册">
            <svg-icon icon-class="login_user"/>
          </span>
          <div class="top-carousel-nav-right">
            <ul>
              <li>首页</li>
              <li>iPhone</li>
              <li>HUAWEI</li>
              <li>VIVO</li>
              <li>
                <svg-icon icon-class="shoppingcart"/>
              </li>
              <search-input/>
            </ul>
          </div>
        </div>
      </div>
      <!-- 轮播图 -->
      <el-carousel :height="`${viewport}px`">
        <el-carousel-item v-for="item in carouselArr" :key="item.id">
          <img style="width:100%" :src="item.src">
        </el-carousel-item>
      </el-carousel>
      <!-- /轮播图 -->
    </div>
    <div class="content">
      <top-nav/>
      <div class="content-center">
        <div class="content-center-left">
          <web-filter/>
        </div>
        <div class="content-center-right">
          <commodity-card
            :productInfo="productInfo"
            v-for="(item, index) in commodityCardData"
            :key="index"
            :item="item"
          />
        </div>
      </div>
      <button class="content-button-more">加载更多</button>
    </div>
    <!-- 底部 -->
    <web-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import { throttler } from "./../assets/js/animation.js";
import TopNav from "./../components/TopNav";
import CommodityCard from "./../components/CommodityCard";
import SearchInput from "./../components/SearchInput";
import WebFooter from "./../components/WebFooter";
import WebFilter from "./../components/WebFilter";
import commodityCardData from "./../assets/dataBase.js";

export default {
  name: "home",
  components: {
    TopNav,
    CommodityCard,
    SearchInput,
    WebFooter,
    WebFilter
  },
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
      commodityCardData,
      viewport: parseInt((document.documentElement.clientWidth * 9) / 16) - 100
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
    ...mapActions(["setLoginShow"]),
    // 监听resize事件
    getViewport() {
      window.addEventListener(
        "resize",
        throttler(this.actualResizeHandler),
        false
      );
    },
    // 获取视口大小，响应式调整轮播图尺寸
    actualResizeHandler() {
      this.viewport =
        parseInt((document.documentElement.clientWidth * 9) / 16) - 90;
    },
    productInfo() {
      this.$router.push({ name: "productinfo" });
    }
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
        span {
          display: block;
          width: 3.5rem;
          height: 3.5rem;
          border: 1px solid rgba(255, 255, 255, 0.45);
          border-radius: 50%;
          transition: all 0.1s;
        }
        svg {
          font-size: 2.5rem;
          cursor: pointer;
          margin-top: 0.4rem;
        }
        span:hover {
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 1);
          transform: scale(1.05);
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
      border-radius: 0.2rem;
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
        border-radius: 0.2rem;
        float: left;
      }

      // ccentent右侧样式
      .content-center-right {
        width: 67.8%;
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
      border-radius: 0.2rem;
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
}
</style>


