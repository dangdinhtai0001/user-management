<template>
  <div>
    <page-default :data="pageData">
      <!-- ======== title ======== -->
      <template v-slot:title>
        <div class="text-3xl">Tự đánh giá</div>
      </template>
      <!-- ======== title ======== -->
    </page-default>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageData: {
      dialog: {},
    },
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
        contents: [{}],
      };
    },
  },
};
</script>