<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="撤案编码" prop="undocoding">
        <el-input
          v-model="queryParams.undocoding"
          placeholder="请输入撤案编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="不动产信息表id" prop="bdcxxId">
        <el-input
          v-model="queryParams.bdcxxId"
          placeholder="请输入不动产信息表id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="备案号" prop="recordcode">
        <el-input
          v-model="queryParams.recordcode"
          placeholder="请输入备案号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="申请编号" prop="applynum">
        <el-input
          v-model="queryParams.applynum"
          placeholder="请输入申请编号"
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
          v-hasPermi="['system:undo:add']"
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
          v-hasPermi="['system:undo:edit']"
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
          v-hasPermi="['system:undo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:undo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="undoList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="撤销档案id" align="center" prop="undoId" />
      <el-table-column label="撤案编码" align="center" prop="undocoding" />
      <el-table-column label="不动产信息表id" align="center" prop="bdcxxId" />
      <el-table-column label="备案号" align="center" prop="recordcode" />
      <el-table-column label="申请编号" align="center" prop="applynum" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:undo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:undo:remove']"
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

    <!-- 添加或修改撤销档案对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="撤案编码" prop="undocoding">
          <el-input v-model="form.undocoding" placeholder="请输入撤案编码" />
        </el-form-item>
        <el-form-item label="不动产信息表id" prop="bdcxxId">
          <el-input v-model="form.bdcxxId" placeholder="请输入不动产信息表id" />
        </el-form-item>
        <el-form-item label="备案号" prop="recordcode">
          <el-input v-model="form.recordcode" placeholder="请输入备案号" />
        </el-form-item>
        <el-form-item label="申请编号" prop="applynum">
          <el-input v-model="form.applynum" placeholder="请输入申请编号" />
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
import { listUndo, getUndo, delUndo, addUndo, updateUndo } from "@/api/system/undo";

export default {
  name: "Undo",
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
      // 撤销档案表格数据
      undoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        undocoding: null,
        bdcxxId: null,
        recordcode: null,
        applynum: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        bdcxxId: [
          { required: true, message: "不动产信息表id不能为空", trigger: "blur" }
        ],
        recordcode: [
          { required: true, message: "备案号不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询撤销档案列表 */
    getList() {
      this.loading = true;
      listUndo(this.queryParams).then(response => {
        this.undoList = response.rows;
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
        undoId: null,
        undocoding: null,
        bdcxxId: null,
        recordcode: null,
        applynum: null,
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
      this.ids = selection.map(item => item.undoId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加撤销档案";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const undoId = row.undoId || this.ids
      getUndo(undoId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改撤销档案";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.undoId != null) {
            updateUndo(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addUndo(this.form).then(response => {
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
      const undoIds = row.undoId || this.ids;
      this.$modal.confirm('是否确认删除撤销档案编号为"' + undoIds + '"的数据项？').then(function() {
        return delUndo(undoIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/undo/export', {
        ...this.queryParams
      }, `undo_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
