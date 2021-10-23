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
        <div>
          <el-table
            :data="tableData"
            style="width: 100%"
            height="60vh"
            @row-click="handleChooseUser($event)"
          >
            <el-table-column
              v-for="(col, i) in tableCols"
              :key="i"
              :prop="col.prop"
              :label="col.label"
              :width="col.width"
              :fixed="col.fixed"
            >
            </el-table-column>
          </el-table>
        </div>
      </template>
      <!-- ========================= content-0 ========================= -->
      <!-- ========================= content-1 ========================= -->
      <template v-slot:content-1>
        <div>
          <card-profile>
            <!-- ------- avatar ------- -->
            <template v-slot:avatar>
              <el-avatar :size="150">
                <img :src="currentUser.avatar" />
              </el-avatar>
            </template>
            <!-- ------- avatar ------- -->
            <!-- ------- detail ------- -->
            <template v-slot:detail>
              <el-descriptions title="Thông tin chi tiết" :column="2">
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
    pageData: {
      dialog: {
        title: null,
        visible: null,
      },
      contents: [],
    },
    // ==================
    currentUser: {},
  }),

  async mounted() {
    this.initPageData();
    this.initTableCols();
    await this.initTableData();

    common.addScrollbar4Element(".el-table__body-wrapper", null);
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
      let data = [];
      await this.$axios.$get("/user/all").then(function (response) {
        data = response;
      });

      this.tableData = [...data];
    },

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async handleChooseUser(event) {
      event;
      await this.fetchUser();
    },

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    async fetchUser() {
      let data = {};
      await this.$axios.$get("/user").then(function (response) {
        data = response;
      });

      this.currentUser = { ...data };
    },
  },
};
</script>