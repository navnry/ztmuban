<template>
  <div class="home">

    <!--<div class="tabs">-->
    <!--<div class="container">-->
    <!--<div class="row">-->
    <!--<el-tabs v-model="editableTabsValue" @tab-click="handleClick">-->
    <!--<el-tab-pane-->
    <!--v-for="item in tabsData"-->
    <!--:key="item.name"-->
    <!--:label="item.title"-->
    <!--:name="item.name"-->
    <!--:id="item.id"-->
    <!--@click="goTo()"-->
    <!--&gt;-->
    <!--</el-tab-pane>-->
    <!--</el-tabs>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

    <!--<div class="box">-->
    <!--<div class="container">-->
    <!--<div class="row">-->
    <!--<div class="col-md-4 col-sm-6 col-xs-12 content-item" v-for="item in resultData">-->
    <!--<a :href="item.url">-->
    <!--<img :src="item.thumb" alt="">-->
    <!--<h3> {{item.title}}</h3>-->
    <!--</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>

  export default {
    name: 'Home',
    data () {
      return {
        resultData: [],
        editableTabsValue: 'first',
        activeName: 'second',
        tabsData: [
          {
            title: '通用版',
            id: 18,
            name: 'first'
          },
          {
            title: '婚纱/摄影',
            id: 2,
            name: 'second'
          },
          {
            title: '餐饮/美食',
            id: 3,
            name: 'third'
          },
          {
            title: '教育/培训',
            id: 4,
            name: 'fourth'
          },
          {
            title: '旅游/酒店',
            id: 5,
            name: 'fifth'
          },
          {
            title: '房产/汽车',
            id: 6,
            name: 'sixth'
          },
          {
            title: '养生/护理',
            id: 7,
            name: 'seventh'
          },
          {
            title: '营销/网络',
            id: 8,
            name: 'eighth'
          }
        ],
        dataId: 18,
        pageNum: 1
      }
    },
    methods: {
      handleClick (tab) {
        this.dataId = tab.$attrs.id
        this._getData()
        this.goTo(tab.$attrs.id)
      },
      _getData: function () {
        this.$axios({
          method: 'get',
          url: '/api',
          params: {
            op: 'autoload',
            catid: this.dataId,
            page: this.pageNum,
          }
        }).then(res => {
          console.log(res.data)
          this.resultData = res.data
        })
      },
      goTo (id) {
        this.$router.push({
          name: 'content',
          params: {
            id: id
          }
        })
      }
    },
    created () {
      this._getData()
    }
  }
</script>
<style lang="less">
  .tabs {
    position: relative;
    height: 50px;
    line-height: 50px;
    left: 0;
    right: 0;
    top: -50px;
    margin: auto;
    background-color: rgba(0, 0, 0, .2);
  }

  .el-tabs {
    width: 100%;

    .el-tabs__active-bar {
      background-color: #f00;
    }

    .el-tabs__item {
      font-size: 16px;
      color: #fff;
      text-align: center;
    }

    .el-tabs__item:hover {
      color: #f00;
    }

    .el-tabs__item.is-active {
      /*background-color: #f00;*/
      color: #f00;
    }
  }

  .el-tabs__nav-wrap::after {
    display: none;
  }

  .content-item {
    img {
      width: 100%;
      display: block;
    }

    h3 {
      font-size: 16px;
      font-weight: bold;
      color: #333;
      text-align: center;
      line-height: 24px;
      height: 48px;
      overflow: hidden;
    }
  }
</style>
