<template>
  <div>
    <el-table
      id="main__table"
      v-bind="$attrs"
      v-on="_listeners"
      ref="main__table"
      :highlight-current-row="true"
      stripe
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

      <template v-slot:empty>
        <el-empty description="Không có dữ liệu" :image-size="300"></el-empty>
      </template>
    </el-table>

    <!-- ---------------------- -->
    <div class="my-5"></div>
    <!-- ---------------------- -->

    <div class="flex justify-between px-1">
      <div class="py-1">
        <el-input-number
          v-model="pagination.pageSize"
          :min="1"
          :max="pagination.total"
          size="mini"
          v-on="$listeners"
        >
        </el-input-number>
      </div>
      <!-- ---------- -->
      <el-pagination
        v-bind="$attrs"
        v-on="$listeners"
        layout="prev, pager, next"
        :pager-count="5"
        background
      >
      </el-pagination>
      <!-- ---------- -->

      <div class="py-1">
        {{ pagination.pageSize * (pagination.currentPage - 1) + 1 }} -
        {{ pagination.pageSize * pagination.currentPage }} /
        {{ pagination.total }}
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import { getDefaultContainerLoading } from "~/utils/common";

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

  data: () => ({
    loadingInstance: null,
  }),

  mounted() {
    const elemnt = document.querySelector("#main__table");
    elemnt.removeEventListener("current-change", null);
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

    _loadingOption() {
      return getDefaultContainerLoading("#main__table");
    },

    _listeners() {
      // --- Object destructuring
      // --- property name is dynamic
      const { ["current-change"]: currentChange, ...listeners } =
        this.$listeners; // exclude `current-change`-listener
      return listeners;
    },
  },

  methods: {
    refreshTable() {
      this.$refs.main__table.doLayout();
    },

    startLoading() {
      this.loadingInstance = Loading.service(this._loadingOption);
    },

    closeLoading() {
      this.loadingInstance.close();
    },
  },
};
</script>