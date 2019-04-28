<template>
  <div class="commodity-card">
    <div class="card-header">
      <span>HUAWEI</span>
      <svg-icon icon-class="shoppingcart"/>
    </div>
    <div class="card-img">
      <img src="./../images/eb12c480030de780.jpg" alt="商品图片">
    </div>
    <div class="card-bottom">
      <p class="card-bottom-p-1">HUAWEI nova 4</p>
      <p class="card-bottom-p-2">4800万超广角三摄</p>
      <p class="card-bottom-p-3">3099.00 元</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommodityCard"
};
</script>

<style scoped lang="scss">
.commodity-card {
  width: 23rem;
  height: 33rem;
  background-color: #ffffff;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
  border-radius: 0.3rem;
  margin-bottom: 2rem;
  transition: all 0.2s;
  cursor: pointer;
  .card-header {
    font-size: 1.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    svg {
      font-size: 2.2rem;
      color: #e6391d;
      transition: all 0.2s;
    }
    svg:hover {
      transform: scale(1.2);
    }
  }
  .card-img {
    width: 18rem;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
  .card-bottom {
    p {
      margin: 0.8rem;
    }
    .card-bottom-p-1 {
      font-size: 1.9rem;
    }
    .card-bottom-p-2 {
      color: #8d8d8d;
      font-size: 1.4rem;
    }
    .card-bottom-p-3 {
      color: #e6391d;
      font-size: 1.9rem;
    }
  }
}
.commodity-card:hover {
  transform: scale(1.04);
}
</style>
