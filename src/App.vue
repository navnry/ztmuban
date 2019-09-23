<template>
  <div id="app">
    <Header></Header>
    <Banner></Banner>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from '@/components/Header'
  import Banner from '@/components/Banner'
  import Footer from '@/components/Footer'

  export default {
    components: {
      Header,Banner,Footer
    },
    data() {
      return {}
    },

  }

</script>
<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
