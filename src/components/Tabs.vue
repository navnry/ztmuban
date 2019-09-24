<template>
  <div class="tabs">
    <div class="container">
      <el-tabs v-model="editableTabsValue" @tab-click="handleClick">
        <el-tab-pane
          v-for="item in tabsData"
          :key="item.name"
          :label="item.title"
          :name="item.name"
          :id="item.id"
        >
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    name: 'Tabs',
    data () {
      return {
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
      }
    },
    created () {
      // console.log(this.$route.query.id)
    },
    methods: {
      handleClick (tab) {
        eventBus.$emit('tabTo', tab.$attrs.id)
      },
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


    .el-tabs {
      width: 100%;

      .el-tabs__nav-wrap.is-scrollable {
        padding: 0 30px;

        .el-tabs__nav-next, .el-tabs__nav-prev {
          line-height: 50px;
          font-size: 28px;
          color: #fff;
        }
        .el-tabs__nav-next.is-disabled,
        .el-tabs__nav-prev.is-disabled{
          color: #999;
        }
      }

    }

    .el-tabs__header {
      margin: 0;
    }

    .el-tabs__active-bar {
      background-color: #e62129;
    }

    .el-tabs__item {
      font-size: 16px;
      color: #fff;
      text-align: center;
      padding: 0 15px;
    }

    .el-tabs__item:hover {
      color: #e62129;
    }

    .el-tabs__item.is-active {
      /*background-color: #f00;*/
      color: #e62129;
      font-weight: bold;
    }


    .el-tabs__nav-wrap::after {
      display: none;
    }
  }
</style>
