<template>
  <div>
    <page-default :data="pageData">
      <!-- ========================= title ========================= -->
      <template v-slot:title>
        <div class="text-3xl">Tự đánh giá</div>
      </template>
      <!-- ========================= title ========================= -->
      <!-- ========================= filter ========================= -->
      <template v-slot:filter> </template>
      <!-- ========================= filter ========================= -->
      <!-- ========================= content-0 ========================= -->
      <template v-slot:content-0>
        <div>content-0</div>
      </template>
      <!-- ========================= content-0 ========================= -->
      <!-- ========================= content-1 ========================= -->
      <template v-slot:content-1>
        <div>content-1</div>
      </template>
      <!-- ========================= content-1 ========================= -->
    </page-default>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableData: [],
    tableCols: [],
    pageData: {
      dialog: {
        title: null,
        visible: null,
      },
      contents: [],
    },
    // ==================
  }),

  mounted() {
    this.initPageData();
  },

  methods: {
    initPageData() {
      this.pageData = {
        dialog: {
          title: "Thông tin chi tiết",
          visible: false,
        },
        contents: [
          {
            span: 14,
          },
          {
            span: 10,
          },
        ],
      };
    },
  },
};
</script>