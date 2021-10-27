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
          <div>
            <el-divider content-position="left">
              <div class="font-bold text-lg">Câu hỏi 1</div>
            </el-divider>

            <div class="text-base font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>

            <div class="my-3"></div>

            <el-input placeholder="Please input"></el-input>
          </div>

          <card-question> </card-question>
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
  }),

  mounted() {
    this.initTemplateConfig();
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
  },
};
</script>