<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <el-tabs v-model="editableTabsValue" @tab-click="handleClick">
          <el-tab-pane
            v-for="(item, index) in tabsData"
            :key="item.name"
            :label="item.title"
            :name="item.name"
            :id="item.id"
          >

            <!--{{item.title}}-->
          </el-tab-pane>
        </el-tabs>

        <div class="col-md-4 col-sm-6 col-xs-12 content-item" v-for="item in resultData">
          <a :href="item.url">
            <img :src="item.thumb" alt="">
            <h3> {{item.title}}</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        resultData: [],
        editableTabsValue: 'first',
        activeName: 'second',
        tabsData: [
          {
            title: "通用版",
            id: 18,
            name: "first"
          },
          {
            title: "婚纱/摄影",
            id: 2,
            name: "second"
          },
          {
            title: "餐饮/美食",
            id: 3,
            name: "third"
          },
          {
            title: "教育/培训",
            id: 4,
            name: "fourth"
          },
          {
            title: "旅游/酒店",
            id: 5,
            name: "fifth"
          }
        ],
        dataId: 18,
        pageNum:1
      }
    },
    methods: {
      handleClick(tab) {
        // console.log(tab.$attrs.id);
        this.dataId = tab.$attrs.id
        this._getData()
      },
      _getData:function () {
        this.$axios({
          method: "get",
          url: "/api",
          params: {
            op: "autoload",
            catid: this.dataId,
            page: this.pageNum,
          }
        }).then(res => {
          console.log(res.data)
          this.resultData = res.data
        })
      }
    },
    created() {
     this._getData()
    }
  }
</script>
<style lang="less">
  .el-tabs {
    width: 100%;
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
