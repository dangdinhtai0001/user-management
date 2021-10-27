<template>
  <div>
    <page-default :config="templateConfig">
      <!-- ========================= title ========================= -->
      <template v-slot:title>
        <div class="text-3xl">Tự đánh giá</div>
      </template>
      <!-- ========================= title ========================= -->
      <!-- ========================= content-0 ========================= -->
      <template v-slot:content-0>
        <div class="px-12">
          <div v-for="(question, i) in questions" :key="question.id" class="mb-12">
            <card-question
              :title="`Câu hỏi ` + (i + 1)"
              :content="question.content"
            >
            </card-question>
          </div>
        </div>
      </template>
      <!-- ========================= content-0 ========================= -->
    </page-default>
  </div>
</template>

<script>
export default {
  data: () => ({
    templateConfig: null,
    questions: [],
  }),

  async mounted() {
    this.initTemplateConfig();
    await this.initQuestions();
  },

  methods: {
    initTemplateConfig() {
      this.templateConfig = {
        dialog: {
          title: "Thông tin chi tiết",
          visible: false,
        },
        contents: [{}],
      };
    },
    async initQuestions() {
      let response = {};
      await this.$axios.$get("/question").then(function (_response) {
        response = _response;
      });

      this.questions = [...response];
    },
  },
};
</script>