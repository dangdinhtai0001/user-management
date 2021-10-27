<template>
  <div>
    <el-divider content-position="left">
      <div class="font-bold text-lg">
        {{ title }}
      </div>
    </el-divider>

    <div class="text-base font-normal mx-7">
      {{ content }}
    </div>

    <div class="my-3"></div>

    <div class="mx-7">
      <el-input placeholder="" v-model="value"></el-input>
    </div>
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