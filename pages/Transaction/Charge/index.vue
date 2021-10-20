<template>
  <div>
    <page-default :data="pageData">
      <!-- ==================================== -->
      <template v-slot:title>
        <div class="text-3xl">Nạp thay</div>
      </template>
      <!-- ==================================== -->
      <template v-slot:filter> </template>
      <!-- ==================================== -->
      <template v-slot:content>
        <el-table :data="tableData" style="width: 100%" height="60vh">
          <el-table-column
            v-for="(col, i) in tableCols"
            :key="i"
            :prop="col.prop"
            :label="col.label"
            :width="col.width"
            :fixed="col.fixed"
          >
          </el-table-column>

          <el-table-column fixed="right" label="Thao tác" width="120">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="small"
                @click="openChargeDialog(scope)"
              >
                Nạp tiền
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
      <!-- ==================================== -->
      <template v-slot:dialog-footer>
        <el-button type="primary" @click="handleCharge"> Nạp </el-button>
        <el-button type="warning" @click="closeDialog"> Hủy </el-button>
      </template>
      <!-- ==================================== -->
      <template v-slot:dialog-content>
        <div>
          <el-form ref="form" :model="chargeForm" label-width="120px">
            <el-form-item label="Id">
              <el-input v-model="chargeForm.id" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="Tên tài khoản">
              <el-input
                v-model="chargeForm.username"
                :readonly="true"
              ></el-input>
            </el-form-item>
            <el-form-item label="Tên người dùng">
              <el-input v-model="chargeForm.name" :readonly="true"></el-input>
            </el-form-item>
            <el-form-item label="Số điện thoại">
              <el-input
                v-model="chargeForm.phoneNumber"
                :readonly="true"
              ></el-input>
            </el-form-item>

            <el-row>
              <el-col :span="11">
                <el-form-item label="Ngân hàng">
                  <el-select v-model="chargeForm.bank" placeholder="Select">
                    <el-option
                      v-for="item in banks"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Số tài khoản">
                  <el-input v-model="chargeForm.accountBank"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item label="Số tiền giao dịch">
              <el-input v-model="chargeForm.money"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </template>
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
    chargeForm: {},
    // ==================
    banks: [],
  }),

  async mounted() {
    this.initPageData();
    this.initTableColumn();
    await this.initTableData();
    await this.initbanks();
  },

  methods: {
    initTableColumn() {
      this.tableCols = [
        {
          prop: "username",
          label: "Tài khoản",
          fixed: true,
        },
        {
          prop: "name",
          label: "Tên",
          fixed: false,
        },
        {
          prop: "phoneNumber",
          label: "Số điện thoại",
          fixed: false,
        },
      ];
    },

    async initTableData() {
      let data = [];
      await this.$axios.$get("/user").then(function (response) {
        data = response.users;
      });

      this.tableData = [...data];
    },

    initPageData() {
      this.pageData = {
        dialog: {
          title: "Thông tin chi tiết",
          visible: false,
        },
      };
    },

    async initbanks() {
      let data = [];
      await this.$axios.$get("/bank").then(function (response) {
        data = response.banks;
      });

      this.banks = [...data];
    },

    openChargeDialog(scope) {
      this.chargeForm.id = scope.row._id;
      this.chargeForm.username = scope.row.username;
      this.chargeForm.name = scope.row.name;
      this.chargeForm.phoneNumber = scope.row.phoneNumber;

      this.pageData.dialog.visible = true;
    },

    closeDialog() {
      this.chargeForm = {};
      this.pageData.dialog.visible = false;
    },

    async handleCharge() {
      let data = null;
      let message = null;
      await this.$axios
        .$post("/transaction/charge", { data: this.chargeForm })
        .then(function (response) {
          data = response.data;
          message = response.message;
        });

      if (data.status == "success") {
        this.$notify({
          title: "Success",
          message: message,
          type: "success",
        });
      } else {
        this.$notify.error({
          title: "Error",
          message: message,
        });
      }

      this.pageData.dialog.visible = false;
    },
  },
};
</script>