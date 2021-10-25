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
      <el-card v-if="_config.hasFilter" class="box-card" shadow="never">
        <slot name="filter"> </slot>
      </el-card>
      <!-- ----------------------- filter slot -----------------------  -->
      <div class="my-2"></div>
      <!-- ----------------------- content slot -----------------------  -->
      <el-row :gutter="10">
        <el-col v-for="(col, i) in _config.contents" :key="i" :span="col.span">
          <el-card class="box-card" shadow="never">
            <slot :name="`content-` + i"> </slot>
          </el-card>
        </el-col>
      </el-row>
      <!-- ----------------------- content slot -----------------------  -->
    </div>
    <!-- ---------------------------------------------- dialog slot ----------------------------------------------  -->
    <el-dialog
      :title="_config.dialog.title"
      :visible.sync="_config.dialog.visible"
    >
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
    config: {
      type: Object,
      required: false,
    },
  },

  computed: {
    _config() {
      let _default = {
        hasFilter: false,
        dialog: {
          title: "Thông tin chi tiết",
          visible: false,
        },
        contents: [{}],
      };

      if (this.config) {
        if (this.hasFilter) {
          _default.hasFilter = this.hasFilter;
        }
        if (this.config.dialog) {
          if (this.config.dialog.title) {
            _default.dialog.title = this.config.dialog.title;
          }
        }
        if (this.config.contents) {
          _default.contents = this.config.contents;
        }
      }

      return _default;
    },
  },
};
</script>