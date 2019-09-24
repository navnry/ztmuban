<template>
  <header>
    <div class="container">
      <el-row :gutter="10">
        <el-col
          :xs="8"
          :sm="8"
          :md="4"
          :lg="4"
          class="logo">
          <img src="../assets/logo.png" alt="">
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="less" scoped>

  @media screen and (max-width: 876px){
    header{
      height: 50px;
    }
  }
  header{


  .container {
    height: 100%;
    padding: 0;

    .el-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }

    .logo {
      padding: 8px 0;
      /*float: left;*/
      img{
        width: 100%;
      }
    }
  }
  }
</style>
