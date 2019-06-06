import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';

const CommodityList = () => import('@/components/commodity/CommodityList');
const AddCommodity = () => import('@/components/commodity/AddCommodity');
const UpDown = () => import('@/components/commodity/UpDown');

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
    children: [{
        path: '/CommodityList',
        name: 'CommodityList',
        component: CommodityList,
      },
      {
        path: '/AddCommodity',
        name: 'AddCommodity',
        component: AddCommodity,

      },
      {
        path: '/UpDown',
        name: 'UpDown',
        component: UpDown,

      }
    ]
  }, ]
})
