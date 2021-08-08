<template>
  <div class="manage">
      <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
          <my-sider></my-sider>
        </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
            <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="() => (collapsed = !collapsed)"
            />
        </a-layout-header>
        <a-layout-content
            :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
        >
            <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import MySider from '../../components/sider'
export default {
  name: 'manage',

  data () {
    return {
      collapsed: false
    }
  },

  components: {
    MySider
  },

  computed: {},

  mounted () {},

  methods: {}
}
</script>

<style lang='less'>
.ant-layout-sider {
  height: 100vh;
  overflow-y: auto;
}
</style>
