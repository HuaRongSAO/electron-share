<template>
  <section class="search-page">
    <div class="container" @keydown.enter="searchHandler">
      <input v-model="user" type="text" placeholder="请输入你的github用户ID">
      <div class="search"></div>
    </div>
    <img src="http://api.i-meto.com/bing" class="search-page__bg">
  </section>
</template>

<script>
  export default {
    name: 'index',
    computed: {
      user: {
        get () {
          return this.$store.getters.user
        },
        set (val) {
          this.$store.dispatch('changeUser', val)
        }
      }
    },
    methods: {
      async searchHandler () {
        if (this.user === '') {
          this.$Message.error('github用户ID不能为空！')
          return
        }
        await this.$store.dispatch('getGithubInfo').catch(err => {
          this.$Message.error(err.message)
          this.$Message.error("出现了错误，请检查你的输入是否正确")
          throw err
        })
        this.$router.push({name: 'index'})
      }
    }
  }
</script>
<style lang="less">
  .search-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    background: #252525;
    overflow: hidden;

    &__bg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  .container {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 100px;

    .search {
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 80px;
      height: 80px;
      background: crimson;
      border-radius: 50%;
      transition: all 1s;
      z-index: 4;
      box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
      // box-shadow: 0 0 25px 0 crimson;
      &:hover {
        cursor: pointer;
      }

      &::before {
        content: "";
        position: absolute;
        margin: auto;
        top: 22px;
        right: 0;
        bottom: 0;
        left: 22px;
        width: 12px;
        height: 2px;
        background: white;
        transform: rotate(45deg);
        transition: all .5s;
      }

      &::after {
        content: "";
        position: absolute;
        margin: auto;
        top: -5px;
        right: 0;
        bottom: 0;
        left: -5px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid white;
        transition: all .5s;
      }
    }

    input {
      font-family: 'Inconsolata', monospace;
      position: absolute;
      margin: auto;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 50px;
      outline: none;
      border: none;
      // border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      background: crimson;
      color: white;
      text-shadow: 0 0 10px crimson;
      padding: 0 80px 0 20px;
      border-radius: 30px;
      box-shadow: 0 0 25px 0 crimson,
      0 20px 25px 0 rgba(0, 0, 0, 0.2);
      // box-shadow: inset 0 0 25px 0 rgba(0, 0, 0, 0.5);
      transition: all 1s;
      opacity: 0;
      z-index: 5;
      font-weight: bolder;
      letter-spacing: 0.1em;

      &:hover {
        cursor: pointer;
      }

      &:focus {
        width: 300px;
        opacity: 1;
        cursor: text;
      }

      &:focus ~ .search {
        right: -250px;
        background: #151515;
        z-index: 6;

        &::before {
          top: 0;
          left: 0;
          width: 25px;
        }

        &::after {
          top: 0;
          left: 0;
          width: 25px;
          height: 2px;
          border: none;
          background: white;
          border-radius: 0%;
          transform: rotate(-45deg);
        }
      }

      &::placeholder {
        color: white;
        opacity: 0.5;
        font-weight: bolder;
      }
    }
  }
</style>