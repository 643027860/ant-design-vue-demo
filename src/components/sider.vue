<template>
  <div class="my-sider">
        <div class="logo">
            我的管理端
        </div>
        <a-menu theme="dark" mode="inline" :default-selected-keys="choiceMenus">
            <a-menu-item key="home">
                <a-icon type="home" />
                <span>首页</span>
            </a-menu-item>
            <a-sub-menu key="base">
                <span slot="title">
                    <a-icon type="mail" />
                    <span>基本组件</span>
                </span>
                <a-menu-item key="base-table" @click="handleClick">
                    表格
                </a-menu-item>
                <a-menu-item key="base-form" @click="handleClick">
                    表单
                </a-menu-item>
            </a-sub-menu>
        </a-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
        choiceMenus: ['home']
    }
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    // 点击菜单跳转组件
    handleClick (e) {
        this.$router.push({name: e.key})
    }
  }
}
</script>

<style lang='less'>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  margin: 16px;
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  text-align: center;
  line-height: 32px;
  font-size: 16px;
}
</style>
