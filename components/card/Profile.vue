<template>
  <div>
    <div class="flex justify-center">
        <slot name="avatar"></slot>
    </div>

    <!-- ................................ -->
    <div class="my-5"></div>
    <!-- ................................ -->

    <div id="profile-details" class="px-2">
      <slot name="detail"></slot>
    </div>
  </div>
</template>

<script>
import * as common from "~/utils/common.js";

export default {
  name: "card-profile",

  mounted() {
    common.addScrollbar4Element("#profile-details", null);
  },

  methods: {},
};
</script>