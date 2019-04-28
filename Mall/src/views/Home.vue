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
            <div class="filter-div">
              <svg-icon icon-class="filter"/>
              <span>筛选</span>
            </div>
          </div>
          <div class="brand"></div>
          <div class="price"></div>
          <div class="key-word"></div>
        </div>
        <div class="content-center-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import TopNav from "./../components/TopNav";

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
    TopNav
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
      top: 43px;
      .top-carousel-nav-content {
        display: flex;
        justify-content: space-between;
        width: 90%;
        position: absolute;
        color: rgba(255, 255, 255, 0.45);
        z-index: 3;
        svg {
          font-size: 40px;
          cursor: pointer;
        }
        svg:hover {
          color: #ffffff;
        }
        .top-carousel-nav-right {
          ul {
            display: flex;
            flex-direction: row;
            font-size: 25px;
            line-height: 40px;
            li {
              cursor: pointer;
              margin: 0 20px;
              svg {
                font-size: 40px;
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
        font-size: 30px;
      }
    }
    .el-carousel__item h3 {
      color: #ffffff;
      font-size: 50px;
      opacity: 0.75;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -25px;
      margin-left: -25px;
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
    height: 2000px;
    background-color: #efefef;
    .top-nav {
      margin: 35px 150px;
      border-radius: 5px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    }
    .content-center {
      margin: auto;
      width: 80%;

      // 左侧筛选栏
      .content-center-left {
        width: 356px;
        height: 943px;
        background-color: #ffffff;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        .filter {
          float: left;
          font-size: 25px;
          margin: 10px 30px;
          line-height: 36px;
          display: flex;
          align-items: center;
          svg {
            font-size: 30px;
          }
          .filter-div {
            width: 306px;
            text-align: left;
            border-bottom: 1px solid rgba(112, 112, 112, 0.3);
            padding: 8px 0;
          }
        }
      }
    }
  }
}
</style>


