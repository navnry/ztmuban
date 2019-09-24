<template>
  <div class="about">
    <div class="infinite-list-wrapper" style="overflow:auto">
      <div v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <el-row :gutter="10">
          <el-col
            :xs="24"
            :sm="12"
            :md="8"
            :lg="8"
            v-for="item in resultData"
          >
            <a :href="item.url">
              <img :src="item.thumb" alt="">
              <h3> {{item.title}}</h3>
            </a>
          </el-col>
        </el-row>

      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data () {
      return {
        resultData: [],
        dataId: 18,
        pageNum: 1,
        loading: false
      }
    },
    mounted () {
      this._getData()
    },
    computed: {
      noMore () {
        return this.pageNum > 5
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.pageNum++
          this.loading = false
          this._getData()
        }, 2000)
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
          this.resultData = this.resultData.concat(res.data)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .about {
    max-width: 1200px;
    margin: auto;
  }

  img {
    width: 100%;
  }

  .infinite-list-wrapper {
    /*height: 500px*/
  }
</style>
