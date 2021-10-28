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
      <el-input
        type="textarea"
        :rows="rows"
        v-model="answer"
        @blur="handleAnswerBlur"
      ></el-input>
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
    rows: {
      type: Number,
      default: 3,
    },
    type: {
      type: String,
      default: "text",
    },
    questionId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    answer: "",
  }),

  methods: {
    handleAnswerBlur() {
      this.$emit("__answer", {
        questionId: this.questionId,
        content: this.answer,
      });
    },
  },
};
</script>