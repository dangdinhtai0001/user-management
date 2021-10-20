<template>
  <router-link v-if="!item.children" :to="item.path" class="menu-item">
    <el-menu-item :index="item.path" @click="handleClick">
      <div class="flex flex-row items-center">
        <icon v-if="item.icon" :name="item.icon"/>
        <span slot="title">{{ item.title }}</span>
      </div>
    </el-menu-item>
  </router-link>
  <el-submenu v-else ref="subMenu" :index="item.key">
    <template slot="title">
      <div class="flex flex-row items-center">
        <icon v-if="item.icon" :name="item.icon" />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>

    <sidebar-item
      v-for="child in item.children"
      :key="child.path"
      :item="child"
    ></sidebar-item>
  </el-submenu>
</template>

<script>
import fixIOSBug from "./fixIOSBug.js";
import { TOGGLE_SIDEBAR } from "~/store/sidebar";
import { mapState } from "vuex";
export default {
  name: "SidebarItem",
  mixins: [fixIOSBug],
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState(["sidebar"]),
  },
  methods: {
    handleClick() {
      if (this.$store.state.app.device === "mobile") {
        this.$store.commit(`sidebar/${TOGGLE_SIDEBAR}`, false);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
