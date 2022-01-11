<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="业务编号" prop="ywbh">
        <el-input
          v-model="queryParams.ywbh"
          placeholder="请输入业务编号"
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
          v-hasPermi="['netsign:djyw:add']"
        >批量通过审核
        </el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="acceptList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column label="业务编号" align="center" prop="ywbh"/>
      <el-table-column label="房屋编码" align="center" prop="fwbm"/>
      <el-table-column label="行政区划代码" align="center" prop="xzqhdm"/>
      <!--      <el-table-column label="区县" align="center" prop="qx"/>-->
      <el-table-column label="房号" align="center" prop="fh"/>
      <el-table-column label="层房序号" align="center" prop="dy"/>
      <el-table-column label="备案状态" align="center" prop="basicWqba.bastatus">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.netsign_bastate" :value="scope.row.basicWqba.bastatus"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="details(scope.row)"
          >审核
          </el-button>
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

    <el-drawer
      size="85%"
      :visible.sync="innerVisible"
      :wrapperClosable=false
      :show-close="false"
      v-if="innerVisible"
    >
      <AuditDetails
        @childFn="closeDetails"
        :ywbh="rowYwbh"
      ></AuditDetails>
    </el-drawer>

  </div>
</template>

<script>
import { listAccept } from '@/api/netsign/accept'
import AuditDetails from '@/views/netsign/audit/details'

export default {
  name: 'Accept',
  components: {
    AuditDetails
  },
  dicts: ['netsign_ywzt', 'netsign_bastate'],
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
      // 登记业务表格数据
      acceptList: [],
      // 弹出层标题
      title: '',
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        bdcxxId: null,
        ywzt: null,
        ywbh: null,
        status: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        bdcxxId: [
          { required: true, message: '不动产权信息表不能为空', trigger: 'blur' }
        ]
      },
      // 详情页显示
      innerVisible: false

    }
  },
  created() {
    this.getList()
  },
  methods: {
    /** 查询网签备案登记业务列表 */
    getList() {
      this.loading = true
      listAccept(this.queryParams).then(response => {
        this.acceptList = response.rows
        this.total = response.total
        this.loading = false
      })
    },

    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1
      this.getList()
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm('queryForm')
      this.handleQuery()
    },
    /** 多选框选中数据 */
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.djywId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },

    /** 删除按钮操作 */
    handleDelete(row) {
      const djywIds = row.djywId || this.ids
      this.$modal.confirm('是否确认删除登记业务编号为"' + djywIds + '"的数据项？').then(function() {
        return delDjyw(djywIds)
      }).then(() => {
        this.getList()
        this.$modal.msgSuccess('删除成功')
      }).catch(() => {
      })
    },

    /** 打开详情页面 */
    details(row) {
      sessionStorage.setItem('ywbh', row.ywbh)
      this.innerVisible = true
    },
    /** 关闭详情页面 */
    closeDetails(isOpen) {
      this.innerVisible = isOpen
      this.getList()
    }
  }
}
</script>
