<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="不动产信息表id" prop="bdcxxId">
        <el-input
          v-model="queryParams.bdcxxId"
          placeholder="请输入不动产信息表id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="登记业务信息表id" prop="djywId">
        <el-input
          v-model="queryParams.djywId"
          placeholder="请输入登记业务信息表id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备案日期" prop="recorddate">
        <el-date-picker clearable size="small"
          v-model="queryParams.recorddate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择备案日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="备案码" prop="recordcode">
        <el-input
          v-model="queryParams.recordcode"
          placeholder="请输入备案码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备案撤销日期" prop="revokedate">
        <el-date-picker clearable size="small"
          v-model="queryParams.revokedate"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择备案撤销日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="备注" prop="remarks">
        <el-input
          v-model="queryParams.remarks"
          placeholder="请输入备注"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['netsign:wqba:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['netsign:wqba:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['netsign:wqba:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['netsign:wqba:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="wqbaList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="备案" align="center" prop="recordid" />
      <el-table-column label="不动产信息表id" align="center" prop="bdcxxId" />
      <el-table-column label="登记业务信息表id" align="center" prop="djywId" />
      <el-table-column label="备案日期" align="center" prop="recorddate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.recorddate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备案码" align="center" prop="recordcode" />
      <el-table-column label="备案撤销日期" align="center" prop="revokedate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.revokedate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="备案状态" align="center" prop="bastatus" />
      <el-table-column label="备注" align="center" prop="remarks" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['netsign:wqba:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['netsign:wqba:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改备案信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="不动产信息表id" prop="bdcxxId">
          <el-input v-model="form.bdcxxId" placeholder="请输入不动产信息表id" />
        </el-form-item>
        <el-form-item label="登记业务信息表id" prop="djywId">
          <el-input v-model="form.djywId" placeholder="请输入登记业务信息表id" />
        </el-form-item>
        <el-form-item label="备案日期" prop="recorddate">
          <el-date-picker clearable size="small"
            v-model="form.recorddate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择备案日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备案码" prop="recordcode">
          <el-input v-model="form.recordcode" placeholder="请输入备案码" />
        </el-form-item>
        <el-form-item label="备案撤销日期" prop="revokedate">
          <el-date-picker clearable size="small"
            v-model="form.revokedate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择备案撤销日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">
          <el-input v-model="form.remarks" placeholder="请输入备注" />
        </el-form-item>
        <el-form-item label="删除标志" prop="delFlag">
          <el-input v-model="form.delFlag" placeholder="请输入删除标志" />
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input v-model="form.remark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listWqba, getWqba, delWqba, addWqba, updateWqba } from "@/api/netsign/wqba";

export default {
  name: "Wqba",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 备案信息表格数据
      wqbaList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        bdcxxId: null,
        djywId: null,
        recorddate: null,
        recordcode: null,
        revokedate: null,
        bastatus: null,
        remarks: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        bdcxxId: [
          { required: true, message: "不动产信息表id不能为空", trigger: "blur" }
        ],
        djywId: [
          { required: true, message: "登记业务信息表id不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询备案信息列表 */
    getList() {
      this.loading = true;
      listWqba(this.queryParams).then(response => {
        this.wqbaList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        recordid: null,
        bdcxxId: null,
        djywId: null,
        recorddate: null,
        recordcode: null,
        revokedate: null,
        bastatus: 0,
        remarks: null,
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
        status: 0,
        delFlag: null,
        remark: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.recordid)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加备案信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const recordid = row.recordid || this.ids
      getWqba(recordid).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改备案信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.recordid != null) {
            updateWqba(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addWqba(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const recordids = row.recordid || this.ids;
      this.$modal.confirm('是否确认删除备案信息编号为"' + recordids + '"的数据项？').then(function() {
        return delWqba(recordids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('netsign/wqba/export', {
        ...this.queryParams
      }, `wqba_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
