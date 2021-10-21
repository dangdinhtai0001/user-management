<template>
  <router-link v-if="!item.children" :to="item.path" class="menu-item">
    <el-menu-item :index="item.path" @click="handleClick">
      <div class="flex items-stretch justify-start pl-0.5">
        <div class="self-center mr-1">
          <icon v-if="item.icon" :name="item.icon" />
        </div>
        <div class="self-center truncate" slot="title">{{ item.title }}</div>
      </div>
    </el-menu-item>
  </router-link>
  <el-submenu v-else ref="subMenu" :index="item.key">
    <template slot="title">
      <div class="flex items-stretch justify-start pl-0.5">
        <div class="self-center mr-1">
          <icon v-if="item.icon" :name="item.icon" />
        </div>
        <div class="self-center truncate" slot="title">{{ item.title }}</div>
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
