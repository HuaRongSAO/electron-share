<template>
    <div id="app">
        <router-view></router-view>
        <Spin size="large" fix v-if="spinShow">
            <Whale/>
        </Spin>
    </div>
</template>

<script>
  import Whale from '@/components/Whale'

  export default {
    name: 'electron-share',
    components: {Whale},
    data () {
      return {
        spinShow: true
      }
    }
  }
</script>

<style lang="less">
    #app {
        .ivu-spin-fix {
            background-color: rgba(255, 255, 255, 0.2);
        }
        .ivu-spin-dot {
            background-color: #ff6102;
        }
    }
</style>
