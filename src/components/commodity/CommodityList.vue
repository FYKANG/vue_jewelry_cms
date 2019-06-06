<template>
  <Table :columns="columns1" :data="$store.state.commodityList"></Table>
</template>
<script>
import { mapActions } from "vuex";
import store from "@/vuex/store";
export default {
  created() {
    this.LoadCommodityList();
  },
  data() {
    return {
      columns1: [
        {
          title: "编号",
          key: "commodityUuid"
        },
        {
          title: "标题",
          key: "subhead"
        },
        {
          title: "描述",
          key: "title"
        },
        {
          title: "价钱",
          key: "commodityPrice"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["LoadCommodityList"])
  },
  store
};
</script>
