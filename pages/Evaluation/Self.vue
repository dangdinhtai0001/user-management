<template>
  <div>
    <page-default :data="pageData">
      <!-- ==================================== -->
      <template v-slot:title>
        <div class="text-3xl">Tự đánh giá</div>
      </template>
      <!-- ==================================== -->
      <template v-slot:filter> </template>
      <!-- ==================================== -->
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
    },
    // ==================
  }),
};
</script>