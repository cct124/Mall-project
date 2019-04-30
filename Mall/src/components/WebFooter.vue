<template>
  <div class="web-footer">
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
    <div class="web-bottom">
      <svg-icon icon-class="github2"/>
      <svg-icon icon-class="wechat"/>
      <svg-icon icon-class="weibo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebFooter"
};
</script>

<style scoped lang="scss">
.web-footer {
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

  // 底部Github wechat weibo样式
  .web-bottom {
    height: 3.5rem;
    background-color: #2b3457;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 5rem;
    svg {
      color: #ffffff;
      font-size: 2rem;
      margin: 0 1rem;
      cursor: pointer;
    }
  }
}
</style>
