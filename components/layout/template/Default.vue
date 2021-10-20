<template>
  <div class="py-3 px-5">
    <div>
      <!-- ----------------------- title slot -----------------------  -->
      <div>
        <slot name="title"></slot>
      </div>
      <!-- ----------------------- title slot -----------------------  -->
      <div class="my-2"></div>
      <!-- ----------------------- filter slot -----------------------  -->
      <el-card class="box-card">
        <slot name="filter"> </slot>
      </el-card>
      <!-- ----------------------- filter slot -----------------------  -->
      <div class="my-2"></div>
      <!-- ----------------------- content slot -----------------------  -->
      <el-card class="box-card">
        <slot name="content"></slot>
      </el-card>
      <!-- ----------------------- content slot -----------------------  -->
    </div>
    <!-- ---------------------------------------------- dialog slot ----------------------------------------------  -->
    <el-dialog :title="data.dialog.title" :visible.sync="data.dialog.visible">
      <slot name="dialog-content"> </slot>
      <div slot="footer" class="dialog-footer">
        <slot name="dialog-footer"> </slot>
      </div>
    </el-dialog>
    <!-- ---------------------------------------------- dialog slot ----------------------------------------------  -->
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
};
</script>