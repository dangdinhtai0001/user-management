<template>
  <div>
    <el-divider content-position="left">
      <div class="font-bold text-lg">
        {{ title }}
      </div>
    </el-divider>

    <div class="text-base font-normal">
      {{ content }}
    </div>

    <div class="my-3"></div>

    <el-input placeholder="" v-model="value"></el-input>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      required: true,
    },
  },
};
</script>