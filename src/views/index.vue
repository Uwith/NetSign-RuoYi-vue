<template>
  <div class="index-page">
    <div class="index-code">网签<span>备案</span>系统</div>
  </div>
</template>

<style scoped="scoped">
.index-page{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
.index-code{
  line-height: 1;
  font-size: 150px;
  font-weight: bolder;
  color: #2d8cf0;
  margin: 200px auto;
  animation: myfirst 1s infinite;
}
.index-code span{
  color: #00a854;
}
@keyframes myfirst {
  0% {
    letter-spacing: 8px;
    transform: translate(0px, 0px);
  }
  50% {
    letter-spacing: 10px;
    transform: translate(0px, -5px);
  }
  100% {
    letter-spacing: 8px;
    transform: translate(0px, 0px);
  }
}
</style>
