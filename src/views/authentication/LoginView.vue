<template>
<div class="main">
      <n-h1 style="--font-size: 60px; --font-weight: 100">App</n-h1>
    <n-card size="large" style="--padding-bottom: 30px">
      <n-h2 style="--font-weight: 400">Sign-in</n-h2>
      <n-form size="large">
        <n-form-item-row label="Username" path="username">
          <n-input placeholder="Input your username"/>
        </n-form-item-row>
        <n-form-item-row label="Password" path="password">
          <n-input type="password" placeholder="Input your password"/>
        </n-form-item-row>
      </n-form>
      <n-button type="primary" size="large" block>Sign in
      </n-button>
      <br/>
    </n-card>
</div>

</template>


<script setup lang="ts">

</script>


<style scoped lang="scss">
.main {
  background-image: url("../../assets/svg/background.svg");
  background-repeat: no-repeat;
  display: -webkit-flex;
  background-size: cover;
  min-height: 99.8vh;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  //border: 1px solid blue;
  //outline: 1px solid red;

  .n-h1 {
    font-size: 60px;
    font-weight: 100;
    margin: 20vh auto 20px;
    text-align: center;
    letter-spacing: 5px;
    opacity: 0.8;
  }

  .n-card {
    margin: 0 auto;
    max-width: 380px;
    box-shadow: var(--box-shadow);
  }
}
</style>