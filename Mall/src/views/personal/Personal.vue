<template>
  <div class="personal">
    <div class="personal-left">
      <div class="avatar">
        <img src="../../images/Avatar.png" alt="头像">
        <span>头像</span>
      </div>
    </div>
    <div class="personal-right"></div>
  </div>
</template>

<script>
export default {
  name: "personal"
};
</script>
<style lang="scss" scoped>
.personal {
  width: 78.58rem;
  height: 43rem;
  background-color: #ffffff;
  border-radius: 0.4rem;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.05);
  display: flex;
  .personal-left {
    flex: 1;
    .avatar {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 3rem;
      img {
        width: 14.5rem;
        height: 14.5rem;
        border-radius: 50%;
        margin-bottom: 2rem;
      }
    }
  }
  .personal-right {
    flex: 2;
  }
}
</style>