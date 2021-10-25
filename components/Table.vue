<template>
  <div>
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      ref="mainTable"
      :highlight-current-row="true"
    >
      <el-table-column v-if="_config.index" type="index" />
      <el-table-column v-if="_config.selection" type="selection" />

      <el-table-column
        v-for="(col, i) in tableCols"
        :key="i"
        :prop="col.prop"
        :label="col.label"
        :width="col.width"
        :fixed="col.fixed"
        :resizable="true"
      >
      </el-table-column>
    </el-table>

    <!-- ---------------------- -->
    <div class="my-5"></div>
    <!-- ---------------------- -->

    <div class="flex justify-center ...">
      <el-pagination
        v-bind="$attrs"
        v-on="$listeners"
        layout="prev, pager, next"
        :pager-count="5"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    config: {
      props: Object,
      required: false,
    },
    tableCols: {
      type: Array,
      required: true,
    },
    pagination: {
      type: Object,
      required: true,
    },
  },

  computed: {
    _config() {
      let defaultConfig = {
        index: false,
        selection: false,
      };

      if (this.config) {
        if (this.config.index) {
          defaultConfig.index = this.config.index;
        }
        if (this.config.selection) {
          defaultConfig.selection = this.config.selection;
        }
      }

      return defaultConfig;
    },
  },

  methods: {
    refreshTable() {
      this.$refs.mainTable.doLayout();
    },
  },
};
</script>