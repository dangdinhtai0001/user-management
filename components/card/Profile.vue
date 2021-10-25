<template>
  <div id="profile__card">
    <!-- ------------ empty ------------ -->
    <div v-if="isEmpty">
      <el-empty description="Không có dữ liệu"></el-empty>
    </div>
    <!-- ------------ empty ------------ -->
    <div v-else>
      <div class="flex justify-center">
        <slot name="avatar"></slot>
      </div>

      <!-- ................................ -->
      <div class="my-5"></div>
      <!-- ................................ -->

      <div class="px-2">
        <slot name="detail"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import * as common from "~/utils/common.js";

export default {
  name: "card-profile",

  props: {
    isEmpty: {
      type: Boolean,
      require: false,
      default: true,
    },
  },

  mounted() {
    common.addScrollbar4Element("#profile__card", null);
  },
};
</script>