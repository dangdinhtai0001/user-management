<template>
  <div id="profile__card">
    <!-- ------------ empty ------------ -->
    <div v-if="isEmpty">
      <el-empty description="Không có dữ liệu" :image-size="300"></el-empty>
    </div>
    <!-- ------------ empty ------------ -->
    <div v-else>
      <div class="flex justify-center">
        <slot name="avatar">
          <el-avatar v-bind="$attrs" />
        </slot>
      </div>

      <!-- ................................ -->
      <div class="my-12"></div>
      <!-- ................................ -->

      <div class="px-2">
        <slot name="detail"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDefaultContainerLoading,
  addScrollbar4Element,
} from "~/utils/common.js";
import { Loading } from "element-ui";

export default {
  name: "card-profile",

  props: {
    isEmpty: {
      type: Boolean,
      require: false,
      default: true,
    },
  },

  data: () => ({
    loadingInstance: null,
  }),

  mounted() {
    addScrollbar4Element("#profile__card", null);
  },

  computed: {
    _loadingOption() {
      return getDefaultContainerLoading("#profile__card");
    },
  },

  methods: {
    startLoading() {
      this.loadingInstance = Loading.service(this._loadingOption);
    },

    closeLoading() {
      this.loadingInstance.close();
    },
  },
};
</script>