<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <Tabs></Tabs>
    <router-view></router-view>
    <Footer></Footer>
    <el-backtop target="#app"></el-backtop>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Tabs from '@/components/Tabs'
  import Banner from '@/components/Banner'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,Tabs,Banner,Footer
    },
    data() {
      return {}
    },

  }

</script>
<style lang="less">
  *{
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
  }
  a,
  a:hover{
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
    overflow-y: scroll;
    .el-backtop{
      color: #e62129;
    }
  }
  .container{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding-bottom: 30px;
  }

</style>
