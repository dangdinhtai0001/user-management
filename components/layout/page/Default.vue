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
      <el-card class="box-card" shadow="never">
        <slot name="filter"> </slot>
      </el-card>
      <!-- ----------------------- filter slot -----------------------  -->
      <div class="my-2"></div>
      <!-- ----------------------- content slot -----------------------  -->
      <el-row :gutter="10">
        <el-col v-for="(col, i) in data.contents" :key="i" :span="col.span">
          <el-card class="box-card" shadow="never">
            <slot :name="`content-` + i"> </slot>
          </el-card>
        </el-col>
      </el-row>
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
  name: "page-default",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>