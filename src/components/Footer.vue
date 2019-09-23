<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="btm_tel">
          <div class="tel_lt fl">
            <a style="color: #ffffff">400-838-0901</a>
            <a style="color: #ffffff">0731-83082901</a>
            <div>（周一到周日：9：00-21：30)</div>
            &nbsp;&nbsp;<span>邮箱：sem@zhitouweilai.com</span>&nbsp;

          </div>
          <div class="btm_weixin fr">
            <img src="http://moban.zhitouweilai.com/statics/Public/Home/images/385563702699197213.jpg" alt="" id="Img1">
          </div>
        </div>

      </div>
    </div>
    <div class="firendlink">
      <p>
        友情链接：
        <a href="http://www.zhitouweilai.com">长沙网络推广</a>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style lang="less" scoped>
  .footer {
    background: #192f42;
  }

  .btm_tel {
    width: 100%;
    height: auto;
    overflow: hidden;
    clear: both;
    padding: 15px 0;
    font-size: 14px;
    color: #fff;

  }

  .btm_tel .tel_lt, .btm_tel .btm_weixin {
    width: 50%;
    text-align: center !important;
  }

  .btm_tel .tel_lt {
    /*width: 100%;*/
    line-height: 24px;
    text-align: left;
    float: left;
  }

  .btm_tel .tel_lt a {
    color: white;
  }

  .btm_tel .tel_lt a:hover {
    text-decoration: none;
  }

  .btm_tel .btm_weixin {
    /*width: 10%;*/
    float: right;
  }

  .btm_tel .btm_weixin img {
    width: 100px;
    height: 90px;
  }

  .firendlink {
    width: 100%;
    background: #1a2835;

    p {
      padding: 0;
      line-height: 42px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      margin: 0;

      a {
        color: #fff;
        font-size: 12px;
        padding: 0 5px;
      }
    }
  }
</style>
