import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryList: {}, // 首页分类列表

    orderCommodityVOList: {}, // 订单列表

    commodityList: {}, // 商品列表
    vCommodityInfoUuid: "", // 正在查看的商品uuid
    vCommodityInfoSize: 0, // 正在查看的商品尺寸
    commodityInfo: {}, // 商品信息
    commoditySize: '',
    pageNum: 1, // 分页
    pageSize: 12,
    maxPageNum: 1,

    jewelryList: {}, // 钻石列表
    jewelryInfo: {}, // 钻石信息
    vJewelryInfoUuid: "", //正在查看的钻石uuid
    jpageNum: 1, // 分页
    jpageSize: 12,
    jmaxPageNum: 1,

    token: '', // 请求令牌
    is_login: false, // 是否登录
    signUpStep: 0, // 注册步骤
    errorMess: ''
  },
  getters,
  actions,
  mutations
});
