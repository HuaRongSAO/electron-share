<template>
  <section class="index">
    <div class="index-info">
      <div class="index-info__attr">
        <img :src="user.avatar_url">
      </div>
      <div class="index-info__content">
        <h3 class="index-info__name">{{ user.login }}</h3>
        <p class="index-info__des"> {{user.bio}} </p>
        <div class="index-info__content--link">
          <router-link :to="{name: 'home'}">
            首页
          </router-link>
          <router-link to="about">
            统计
          </router-link>
          <router-link :to="{name: 'cheat'}">
            <Icon class="index-icon__star" type="md-thumbs-up"/>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        user: {}
      }
    },
    methods: {
      open (link) {
      }
    },
    async mounted () {
      this.$loading()
      const httpParams = {
        url: this.$api.users,
        path: {user: 'HuaRongSAO'},
        method: 'get'
      }
      const {data} = await this.$http(httpParams)
      this.user = data
    }
  }
</script>

<style lang="less">
  .index {
    width: 100%;
    display: flex;
    min-height: 100%;
    justify-content: center;
    align-items: center;
    &-info {
      width: 600px;
      padding: 15px;
      margin: 0 auto;
      background: #fff;
      &__name {
        margin: 15px 0;
      }
      &__des {
        margin: 15px 0;
      }
      &__attr {
        width: 100px;
        height: 100px;
        margin: auto;
        border: 1px solid #eee;
        display: flex;
        img {
          width: 100%;
          height: 100%;
          z-index: 9;
        }
      }
      &__content {
        text-align: center;
        &--link {
          display: flex;
          justify-content: center;
          a, span {
            display: block;
            padding: 10px 30px;
            text-decoration: none;
            color: #333;
            cursor: pointer;
            &:hover {
              color: salmon;
            }
          }
        }
      }
    }
    &-icon__star {
      font-size: 16px;
      &.active {
        color: #ff0000;
      }
    }

  }
</style>
