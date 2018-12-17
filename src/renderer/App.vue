<template>
  <div id="app" :style="style">
    <router-view></router-view>
    <Spin fix v-if="loading">
      <Whale/>
    </Spin>
  </div>
</template>

<script>
  import Whale from '@/components/Whale'

  export default {
    name: 'electron-share',
    components: {Whale},
    computed: {
      loading () {
        // loading
        return this.$store.getters.loading
      },
      style () {
        return {
          overflow: this.loading ? 'hidden' : 'auto'
        }
      }
    }
  }
</script>

<style lang="less">
  * {
    box-sizing: border-box;
  }

  #app {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    margin: auto;
    .ivu-spin-fix {
      background-color: rgba(255, 255, 255, 0.49);
    }
    .ivu-spin-dot {
      background-color: #ff6102;
    }
  }

  .header {
    height: 50px;
    width: 100%;
  }
</style>
