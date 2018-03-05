<template>
  <div class="movie-show">
       <div class="go-search">
      <div class="logo">
        <img src="./douban-logo.png" width="35" height="35">
      </div>
      <div class="search-content">
        <span class="icon-search"></span>
        <span>电影/影人/标签</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable.styl"
  .movie-show
    height: 100%
    .go-search
      height: 50px
      box-sizing: border-box
      padding: 10px 10px 5px 60px
      text-align: center
      .logo
        position: absolute
        left: 10px
      .search-content
        background-color: $color-background-d
        font-size: $font-size-medium-x
        line-height: 35px
        border-radius: 5px
        span
          display: inline-block
          vertical-align: middle
    .list-wrapper
      position: absolute
      top: 97px
      bottom: 61px
      width: 100%
      .list-scroll
        position: relative
        height: 100%
        overflow: hidden
        .list-inner
          padding: 0px 15px
    .list-fixed
      position: absolute
      top: 97px
      right: 15px
      left: 15px
      .fixed-title
        width: 100%
        padding-left: 5px
        height: 30px
        line-height: 30px
        background-color: $color-background-d
        // background-clip: content-box
</style>
