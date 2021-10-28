<template>
  <div>
    <page-default :config="templateConfig">
      <!-- ========================= title ========================= -->
      <template v-slot:title>
        <div class="text-3xl">Tự đánh giá</div>
      </template>
      <!-- ========================= title ========================= -->
      <!-- ========================= content-0 ========================= -->
      <template v-slot:content-alone>
        <div class="w-full flex justify-center">
          <div class="w-3/6">
            <!-- <el-card class="box-card" shadow="never"> -->
            <div
              v-for="(question, i) in questions"
              :key="question.id"
              class="mb-12"
            >
              <card-question
                :title="`Câu hỏi ` + (i + 1)"
                :questionId="question.id"
                :content="question.content"
                v-on:__answer="handleAnswerBlur($event)"
              >
              </card-question>
            </div>
            <!-- action -->
            <div class="flex justify-end mb-20">
              <div>
                <el-button type="primary" @click="handleSubmit">
                  Xác nhận
                </el-button>
              </div>
            </div>
            <!-- </el-card> -->
          </div>
        </div>
      </template>
      <!-- ========================= content-0 ========================= -->
    </page-default>
  </div>
</template>

<script>
import { forEach } from "~/utils/external/lodash";
import { Loading } from "element-ui";

export default {
  data: () => ({
    templateConfig: null,
    questions: [],
    answers: [],
  }),

  async mounted() {
    this.initTemplateConfig();
    await this.initQuestions();
    this.initAnswers();
  },

  computed: {},

  methods: {
    initTemplateConfig() {
      this.templateConfig = {
        dialog: {
          title: "Thông tin chi tiết",
          visible: false,
        },
        contents: [],
      };
    },
    async initQuestions() {
      let response = {};
      await this.$axios.$get("/evaluation/question").then(function (_response) {
        response = _response;
      });

      this.questions = [...response];
    },
    initAnswers() {
      forEach(this.questions, (question) => {
        this.answers.push({
          questionId: question.id,
          content: "",
        });
      });
    },

    handleAnswerBlur(payload) {
      forEach(this.questions, (question, i) => {
        if (question.id === payload.questionId) {
          this.answers[i].content = payload.content;
        }
      });
    },

    async handleSubmit() {
      this.$axios
        .$post("/evaluation/self", {
          answers: this.answers,
        })
        .then(function (response) {
          console.log(response);
        });
    },
  },
};
</script>