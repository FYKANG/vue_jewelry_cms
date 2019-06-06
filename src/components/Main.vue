
<template>
  <div class="layout">
    <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <Menu
        active-name="1-2"
        @on-select="selectFn"
        :active-name="$route.path"
        theme="dark"
        width="auto"
        :open-names="['1']"
      >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>商 品
          </template>
          <MenuItem :name="'/CommodityList'">商品信息</MenuItem>
          <MenuItem name="/AddCommodity">添加商品</MenuItem>
          <MenuItem name="/UpDown">上下架商品</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>订 单
          </template>
          <MenuItem name="2-1">订单列表</MenuItem>
          <MenuItem name="2-2">订单处理</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>个 人
          </template>
          <MenuItem name="3-1">退出</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '200px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">
        <h1>Jewelry Soure 后台管理</h1>
      </Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}"></Breadcrumb>
        <Card>
          <div style="height: 600px">
            <!-- 路由 -->
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
            <!-- 路由/ -->
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  methods: {
    selectFn(a) {
      this.$router.push({
        path: a
      });
    }
  }
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>