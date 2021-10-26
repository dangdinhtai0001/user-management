<template>
  <div>
    <page-default :config="templateConfig">
      <!-- ========================= title ========================= -->
      <template v-slot:title>
        <div class="text-3xl">Đánh giá chung</div>
      </template>
      <!-- ========================= title ========================= -->
      <!-- ========================= filter ========================= -->
      <template v-slot:filter> </template>
      <!-- ========================= filter ========================= -->
      <!-- ========================= content-0 ========================= -->
      <template v-slot:content-0>
        <default-table
          ref="table"
          :config="tableConfig"
          style="width: 100%"
          height="75vh"
          :data="tableData"
          :border="true"
          :tableCols="tableCols"
          :pagination="pagination"
          :total="pagination.total"
          :total-page-count="pagination.totalPageCount"
          :page-size="pagination.pageSize"
          :current-page.sync="pagination.currentPage"
          @row-click="handleChooseUser($event)"
          @current-change="initTableData"
        >
        </default-table>
      </template>
      <!-- ========================= content-0 ========================= -->
      <!-- ========================= content-1 ========================= -->
      <template v-slot:content-1>
        <div>
          <card-profile
            :isEmpty="isEmptyProfile()"
            :size="200"
            :src="currentUser.avatar"
          >
            <!-- ------- avatar ------- -->
            <!-- <template v-slot:avatar>
              <el-avatar :src="currentUser.avatar" />
            </template> -->
            <!-- ------- avatar ------- -->
            <!-- ------- detail ------- -->
            <template v-slot:detail>
              <el-divider content-position="left">Thông tin cá nhân</el-divider>

              <el-descriptions :column="2">
                <el-descriptions-item label="Tên">
                  {{ currentUser.fullname }}
                </el-descriptions-item>

                <el-descriptions-item label="Phòng ban">
                  {{ currentUser.department }}
                </el-descriptions-item>

                <el-descriptions-item label="Lương tự đánh giá">
                  {{ currentUser.selfSalary }}
                </el-descriptions-item>

                <el-descriptions-item label="Lương">
                  {{ currentUser.salary }}
                </el-descriptions-item>
              </el-descriptions>

              <!-- ------ -->
              <div class="my-3"></div>
              <!-- ------ -->

              <el-divider content-position="left">Đánh giá</el-divider>
              {{ currentUser.review }}

              <el-descriptions :column="2">
                <!-- <el-descriptions-item> -->
                <!-- </el-descriptions-item> -->
              </el-descriptions>
            </template>
            <!-- ------- detail ------- -->
          </card-profile>
        </div>
      </template>
      <!-- ========================= content-1 ========================= -->
    </page-default>
  </div>
</template>

<script>
import * as common from "~/utils/common.js";

export default {
  data: () => ({
    tableData: [],
    tableCols: [],
    pagination: {
      total: null,
      pageSize: null,
      totalPageCount: null,
      currentPage: null,
    },
    templateConfig: {},
    tableConfig: {},
    // ==================
    currentUser: {},
  }),

  async mounted() {
    this.initTemplateConfig();
    this.initTableCols();
    await this.initTableData();

    this.$refs.table.refreshTable();
    common.addScrollbar4Element(".el-table__body-wrapper", null);
  },

  methods: {
    initTemplateConfig() {
      this.templateConfig = {
        hasFilter: false,
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

      this.tableConfig = {};
    },

    initTableCols() {
      this.tableCols = [
        {
          prop: "fullname",
          label: "Họ và tên",
          fixed: true,
        },
        {
          prop: "department",
          label: "Phòng/ban",
          fixed: false,
        },
        {
          prop: "selfSalary",
          label: "Lương tự đánh giá",
          fixed: false,
        },
        {
          prop: "salary",
          label: "Lương ",
          fixed: false,
        },
      ];
    },

    async initTableData() {
      let response = {};
      await this.$axios
        .$get("/user/all", { data: this.pagination })
        .then(function (_response) {
          response = _response;
        });

      this.tableData = [...response.data];

      this.pagination.total = response.total;
      this.pagination.pageSize = response.pageSize;
      this.pagination.totalPageCount = response.totalPageCount;
      this.pagination.currentPage = response.currentPage;
    },

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async handleChooseUser(event) {
      const body = { ...event };

      let data = {};
      await this.$axios.$get("/user", { data: body }).then(function (response) {
        data = response;
      });

      this.currentUser = { ...data };
    },

    isEmptyProfile() {
      if (!this.currentUser.id) {
        return true;
      }
      return false;
    },
  },
};
</script>