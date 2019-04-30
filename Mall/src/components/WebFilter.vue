<template>
  <div class="filter">
    <div class="filter-title">
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
</template>

<script>
export default {
  name: "WebFilter"
};
</script>

<style scoped lang="scss">
.filter {
  // 筛选样式
  .filter-title {
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
          padding-left: 0.4rem;
        }
      }
    }
  }
  .key-word {
    margin-bottom: 5rem;
  }
}
</style>
