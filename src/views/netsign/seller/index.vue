<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="权利人id" prop="qlrId">
        <el-input
          v-model="queryParams.qlrId"
          placeholder="请输入权利人id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="不动房产信息id" prop="bdcxxId">
        <el-input
          v-model="queryParams.bdcxxId"
          placeholder="请输入不动房产信息id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="登记业务证明证书名称编码" prop="djywzmmcbm">
        <el-input
          v-model="queryParams.djywzmmcbm"
          placeholder="请输入登记业务证明证书名称编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="登记业务证明证书号" prop="djywzmhm">
        <el-input
          v-model="queryParams.djywzmhm"
          placeholder="请输入登记业务证明证书号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者类别编码" prop="jyzlbbm">
        <el-input
          v-model="queryParams.jyzlbbm"
          placeholder="请输入交易者类别编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者全称" prop="jyzqc">
        <el-input
          v-model="queryParams.jyzqc"
          placeholder="请输入交易者全称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者证件名称编码" prop="jyzzjmcbm">
        <el-input
          v-model="queryParams.jyzzjmcbm"
          placeholder="请输入交易者证件名称编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者证件号码" prop="jyzzjhm">
        <el-input
          v-model="queryParams.jyzzjhm"
          placeholder="请输入交易者证件号码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者性质编码" prop="jyzxzbm">
        <el-input
          v-model="queryParams.jyzxzbm"
          placeholder="请输入交易者性质编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者户籍" prop="jyzhj">
        <el-input
          v-model="queryParams.jyzhj"
          placeholder="请输入交易者户籍"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="交易者户籍行政区划" prop="jyzhjxzqh">
        <el-input
          v-model="queryParams.jyzhjxzqh"
          placeholder="请输入交易者户籍行政区划"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="共有方式编码" prop="gyfsbm">
        <el-input
          v-model="queryParams.gyfsbm"
          placeholder="请输入共有方式编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所占份额" prop="szfe">
        <el-input
          v-model="queryParams.szfe"
          placeholder="请输入所占份额"
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
          v-hasPermi="['netsign:seller:add']"
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
          v-hasPermi="['netsign:seller:edit']"
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
          v-hasPermi="['netsign:seller:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['netsign:seller:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="sellerList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="卖方id" align="center" prop="sellerId" />
      <el-table-column label="权利人id" align="center" prop="qlrId" />
      <el-table-column label="不动房产信息id" align="center" prop="bdcxxId" />
      <el-table-column label="登记业务证明证书名称编码" align="center" prop="djywzmmcbm" />
      <el-table-column label="登记业务证明证书号" align="center" prop="djywzmhm" />
      <el-table-column label="交易者类别编码" align="center" prop="jyzlbbm" />
      <el-table-column label="交易者全称" align="center" prop="jyzqc" />
      <el-table-column label="交易者证件名称编码" align="center" prop="jyzzjmcbm" />
      <el-table-column label="交易者证件号码" align="center" prop="jyzzjhm" />
      <el-table-column label="交易者性质编码" align="center" prop="jyzxzbm" />
      <el-table-column label="交易者户籍" align="center" prop="jyzhj" />
      <el-table-column label="交易者户籍行政区划" align="center" prop="jyzhjxzqh" />
      <el-table-column label="共有方式编码" align="center" prop="gyfsbm" />
      <el-table-column label="所占份额" align="center" prop="szfe" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['netsign:seller:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['netsign:seller:remove']"
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

    <!-- 添加或修改卖方信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="权利人id" prop="qlrId">
          <el-input v-model="form.qlrId" placeholder="请输入权利人id" />
        </el-form-item>
        <el-form-item label="不动房产信息id" prop="bdcxxId">
          <el-input v-model="form.bdcxxId" placeholder="请输入不动房产信息id" />
        </el-form-item>
        <el-form-item label="登记业务证明证书名称编码" prop="djywzmmcbm">
          <el-input v-model="form.djywzmmcbm" placeholder="请输入登记业务证明证书名称编码" />
        </el-form-item>
        <el-form-item label="登记业务证明证书号" prop="djywzmhm">
          <el-input v-model="form.djywzmhm" placeholder="请输入登记业务证明证书号" />
        </el-form-item>
        <el-form-item label="交易者类别编码" prop="jyzlbbm">
          <el-input v-model="form.jyzlbbm" placeholder="请输入交易者类别编码" />
        </el-form-item>
        <el-form-item label="交易者全称" prop="jyzqc">
          <el-input v-model="form.jyzqc" placeholder="请输入交易者全称" />
        </el-form-item>
        <el-form-item label="交易者证件名称编码" prop="jyzzjmcbm">
          <el-input v-model="form.jyzzjmcbm" placeholder="请输入交易者证件名称编码" />
        </el-form-item>
        <el-form-item label="交易者证件号码" prop="jyzzjhm">
          <el-input v-model="form.jyzzjhm" placeholder="请输入交易者证件号码" />
        </el-form-item>
        <el-form-item label="交易者性质编码" prop="jyzxzbm">
          <el-input v-model="form.jyzxzbm" placeholder="请输入交易者性质编码" />
        </el-form-item>
        <el-form-item label="交易者户籍" prop="jyzhj">
          <el-input v-model="form.jyzhj" placeholder="请输入交易者户籍" />
        </el-form-item>
        <el-form-item label="交易者户籍行政区划" prop="jyzhjxzqh">
          <el-input v-model="form.jyzhjxzqh" placeholder="请输入交易者户籍行政区划" />
        </el-form-item>
        <el-form-item label="共有方式编码" prop="gyfsbm">
          <el-input v-model="form.gyfsbm" placeholder="请输入共有方式编码" />
        </el-form-item>
        <el-form-item label="所占份额" prop="szfe">
          <el-input v-model="form.szfe" placeholder="请输入所占份额" />
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
import { listSeller, getSeller, delSeller, addSeller, updateSeller } from "@/api/netsign/seller";

export default {
  name: "Seller",
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
      // 卖方信息表格数据
      sellerList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        qlrId: null,
        bdcxxId: null,
        djywzmmcbm: null,
        djywzmhm: null,
        jyzlbbm: null,
        jyzqc: null,
        jyzzjmcbm: null,
        jyzzjhm: null,
        jyzxzbm: null,
        jyzhj: null,
        jyzhjxzqh: null,
        gyfsbm: null,
        szfe: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        qlrId: [
          { required: true, message: "权利人id不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询卖方信息列表 */
    getList() {
      this.loading = true;
      listSeller(this.queryParams).then(response => {
        this.sellerList = response.rows;
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
        sellerId: null,
        qlrId: null,
        bdcxxId: null,
        djywzmmcbm: null,
        djywzmhm: null,
        jyzlbbm: null,
        jyzqc: null,
        jyzzjmcbm: null,
        jyzzjhm: null,
        jyzxzbm: null,
        jyzhj: null,
        jyzhjxzqh: null,
        gyfsbm: null,
        szfe: null,
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
      this.ids = selection.map(item => item.sellerId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加卖方信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const sellerId = row.sellerId || this.ids
      getSeller(sellerId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改卖方信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.sellerId != null) {
            updateSeller(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSeller(this.form).then(response => {
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
      const sellerIds = row.sellerId || this.ids;
      this.$modal.confirm('是否确认删除卖方信息编号为"' + sellerIds + '"的数据项？').then(function() {
        return delSeller(sellerIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('netsign/seller/export', {
        ...this.queryParams
      }, `seller_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
