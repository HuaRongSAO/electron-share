<template>
  <div class="cheat">
    <Layout>
      <Header>
        <router-link :to="{name: 'index'}">返回</router-link>
      </Header>
      <Content>
        <webview id="star" class="cheat-webview"
                 src="https://github.com/HuaRongSAO"></webview>
      </Content>
    </Layout>
  </div>
</template>

<script>
  export default {
    mounted () {
      onload = () => {
        const webview = document.getElementById('star')
        const indicator = document.querySelector('.indicator')

        const loadstart = () => {
          this.$loading()
        }

        const loadstop = () => {
          this.$close()
        }

        webview.addEventListener('did-start-loading', loadstart)
        webview.addEventListener('did-stop-loading', loadstop)
      }
      onload()
    }
  }
</script>

<style lang="less">
  .cheat {
    &-webview {
      width: 100vw;
      height: 100vh;
    }
  }
</style>
