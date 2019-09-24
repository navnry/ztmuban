<template>
  <div class="content">
    <div class="container">
      <el-row :gutter="10">
        <el-col
          :xs="24"
          :sm="12"
          :md="8"
          :lg="8"
          v-for="item in resultData"
          class="content-item"
        >
          <a :href="item.url" target="_blank">
            <img :src="item.thumb" alt="">
            <h3> {{item.title}}</h3>
          </a>
        </el-col>
      </el-row>
      <div>
        <el-button type="danger" icon="el-icon-refresh" :loading="btnIsLoading" @click="loadMore()">{{loadingActive}}</el-button>
      </div>
    </div>
    <el-backtop target="#app"></el-backtop>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    name: 'Content',
    data () {
      return {
        contentId: 18,
        resultData: [],
        pageNum: 1,
        loadingActive: '加载更多',
        btnIsLoading:false
      }
    },
    created () {
      this._getContent()
      eventBus.$on('tabTo', (message) => {
        this.contentId = message
        this.pageNum = 1
        this.resultData = []
        this.loadingActive = '加载更多'
        this._getContent()
      })
    },
    methods: {
      _getContent () {
        this.$axios({
          method: 'get',
          url: '/api',
          params: {
            op: 'autoload',
            catid: this.contentId,
            page: this.pageNum,
          }
        }).then(res => {
          if (res.data == '') {
            this.loadingActive = '加载完毕'
          } else {
            this.loadingActive = '加载更多'
            // console.log(res.data)
            // console.log(this.resultData)
            // this.resultData = this.resultData.concat(res.data).reverse()
            this.resultData = this.resultData.concat(res.data)
          }

        })
      },
      loadMore () {
        this.btnIsLoading=true
        this.loadingActive = '正在加载'
        setTimeout(() => {
          this.pageNum += 1
          this._getContent()
          this.btnIsLoading=false
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="less">
  .container {
    max-width: 1200px;
    margin: auto;

    .el-row {
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
  }

  .content-item {
    a {
      display: block;

      h3 {
        font-size: 16px;
        font-weight: bold;
        color: #333;
        text-align: center;
        line-height: 24px;
        height: 48px;
        overflow: hidden;
      }

      img {
        width: 100%;
      }
    }
  }

</style>
