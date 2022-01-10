<template>
  <div class="details">
    <el-button @click="sub" style="margin-left: 12%;background-color: #ffa94c;color: white;" round>打印</el-button>
    <el-button @click="save" style="margin-left: 53%;background-color: #ffa94c;color: white;" round>保存</el-button>
    <el-button @click="back" style="background-color: #ffa94c;color: white;" round>返回</el-button>
    <basic-container style="width:75%; margin-left: 11%">
      <label>不动产信息:</label>
      <el-table
        :show-header="false"
        :data="this.accept"
        :span-method="objectSpanMethod"
        border
        :cell-style="columnStyle"
        style="width: 77%; margin-top: 20px;left: 10%;"
      >
        <el-table-column prop="id" label="ID" width="220px">
          <template slot-scope="scope">
            <div id="uploadImg" style="">
              <div class="bgimg">
                <el-image :fit="none" style="height:300px" :src="srcList[0]" @click="show" :error="空"></el-image>
                <el-button @click="getFileData" class="upImgButton2" round>
                  上传图片
                </el-button>
              </div>
            </div>
            <el-dialog title="图片上传" :visible.sync="dialogVisible" :modal="false">
              <div class="upload-file">
                <!-- html组件代码 -->
                <el-upload
                  :multiple="multiple"
                  action="${pageContext.request.contextPath}/lookup/editEvidence/123"
                  list-type="picture-card"
                  :auto-upload="false"
                  :http-request="uploadFile"
                  :headers="myHeaders"
                  ref="upload"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-button @click="subPicForm()">提交上传</el-button>
              </div>
            </el-dialog>

          </template>
        </el-table-column>
        <el-table-column style="width:80px;line-height: 10px " prop="annotation"></el-table-column>
        <el-table-column prop="data"></el-table-column>
        <el-table-column prop="annotation1"></el-table-column>
        <el-table-column prop="data2"></el-table-column>
      </el-table>
    </basic-container>

    <basic-container style="width:75%; margin-left: 11%">
      <label style="left: 0">房屋信息补充</label>
      <el-table
        :data="this.accept"
        border
        :header-cell-style="headClass"
        style="width: 100%; margin-top: 10px;"
        @selection-change="handleSelectionChange"
        @select-all="selectAll"
        @row-dblclick="doubleClick"
        @row-click="selected"
        highlight-current-row
      >
        <el-table-column
          label="小区"
          prop="xq"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.xq" placeholder="小区"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="楼号"
          prop="lh"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.lh" placeholder="楼号"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="所在起始层"
          prop="szqsc"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.szqsc" placeholder="所在起始层"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="所在终止层"
          prop="szzzc"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.szzzc" placeholder="所在终止层"
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </basic-container>
    <basic-container class="basic-container-style">
      <label style="left: 0">资金监管信息</label>
      <el-table
        :data="this.accept"
        border
        :header-cell-style="headClass"
        style="width: 100%; margin-top: 10px;"
        @selection-change="handleSelectionChange"
        @select-all="selectAll"
        @row-dblclick="doubleClick"
        @row-click="selected"
        highlight-current-row
      >
        <el-table-column
          label="资金监管编号"
          prop="jgbh"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jgbh" placeholder="JG123"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="评估价格"
          prop="pgjg"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.pgjg" placeholder="1234"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="成交金额"
          prop="cjje"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.cjje" placeholder="840000"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="首付款金额"
          prop="sfkje"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.sfkje" placeholder="84000"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="贷款金额"
          prop="dkje"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.dkje" placeholder="0"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="资金监管比例"
          prop="jgbl"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jgbl" placeholder="10"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="以监管资金金额"
          prop="jgje"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jgje" placeholder="10000.00"
            ></el-input>
          </template>
        </el-table-column>

        <el-table-column
          label="付款类型"
          prop="fklxbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.fklxbm" size="small">
              <el-option
                v-for="item in fklxbmOptions"
                :key="item.dictKey"
                :label="item.dictValue"
                :value="item.dictValue"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="贷款方式"
          prop="dkfsbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.dkfsbm" size="small">
              <el-option
                v-for="item in dict.dkfsbm"
                :key="item.dictValue"
                :label="item.dictLabel"
                :value="item.dictValue"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="合同生效日期"
          prop="gtjzmj"
        >
          <template scope="scope">
            <el-date-picker
              v-model="scope.row.htsxrq"
              type="date"
              value-format="yyyy-MM-dd HH:mm:ss"
              format="yyyy-MM-dd HH:mm:ss"
              placeholder="选择日期"
            >
            </el-date-picker>
          </template>
        </el-table-column>
      </el-table>
    </basic-container>

    <basic-container class="basic-container-style">
      <label style="left: 0">卖方信息</label>
      <el-table
        border
        :header-cell-style="headClass"
        :data="this.accept[0].sellerList"
        class="basic-container-table"
      >
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="登记业务证明证书名称" prop="djywzmmcbm"></el-table-column>
        <el-table-column
          label="交易业务证明号码"
          prop="djywzmhm"
        >
        </el-table-column>
        <el-table-column
          label="交易者类别"
          prop="jyzlbbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者全称"
          prop="jyzqc"
        >
        </el-table-column>
        <el-table-column
          label="交易者证件名称"
          prop="jyzzjmcbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者证件号码"
          prop="jyzzjhm"
        >
        </el-table-column>
        <el-table-column
          label="交易者性质"
          prop="jyzxzbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者户籍行政区划"
          prop="jyzhjxzqh"
        >
        </el-table-column>
        <el-table-column
          label="共有方式"
          prop="gyfsbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.gyfsbm" size="small" placeholder="请选择">
              <el-option
                v-for="item in gyfsbmOptions"
                :key="item.dictKey"
                :label="item.dictValue"
                :value="item.dictValue"
              >
              </el-option>
            </el-select>
            <!--            <select th:with="type=${@dict.getType('funding_type')}" >-->
            <!--              <option th:each="dict : ${type}" th:text="${dict.dictLabel}" th:value="${dict.dictLabel}"></option>-->
            <!--            </select>-->
          </template>
        </el-table-column>
        <el-table-column
          label="所占份额"
          prop="szfe"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.szfe" placeholder="请输入内容"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="交易者户籍"
          prop="jyzhj"
        >
        </el-table-column>
      </el-table>
    </basic-container>
    <basic-container class="basic-container-style">
      <label style="left: 0">买方信息</label>
      <el-table
        border
        :header-cell-style="headClass"
        :data="this.accept[0].buyerList"
        class="basic-container-table"
      >
        <el-table-column
          label="序号"
          type="index"
        >
        </el-table-column>
        <el-table-column
          label="交易业务证明证书名称"
          prop="jyywzmmcbm"
        >
        </el-table-column>
        <el-table-column
          label="交易业务证明号码"
          prop="jyywzmhm"
        >
        </el-table-column>
        <el-table-column
          label="交易者类别"
          prop="jyzlbbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者全称"
          prop="jyzqc"
        >
        </el-table-column>
        <el-table-column
          label="交易者证件名称"
          prop="jyzzjmcbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者证件号码"
          prop="jyzzjhm"
        >
        </el-table-column>
        <el-table-column
          label="交易者性质"
          prop="jyzxzbm"
        >
        </el-table-column>
        <el-table-column
          label="交易者户籍行政区划"
          prop="jyzhjxzqh"
        >
        </el-table-column>
        <el-table-column
          label="共有方式"
          prop="gyfsbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.gyfsbm" size="small" placeholder="请选择">
              <el-option
                v-for="item in gyfsbmOptions"
                :key="item.dictKey"
                :label="item.dictValue"
                :value="item.dictValue"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="所占份额"
          prop="szfe"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.szfe" placeholder="请输入内容"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="交易者户籍"
          prop="jyzhj"
        >
        </el-table-column>
      </el-table>
    </basic-container>
    <basic-container v-if="false">
      <el-form>
        <el-form-item>
          <el-select v-model="this.accept.dkfsbm">
            <el-option
              v-for="dict in dict.dkfsbm"
              :key="dict.dictValue"
              :label="dict.dictLabel"
              :value="dict.dictValue"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </basic-container>
  </div>
</template>

<script>
import basicContainer from '@/views/components/basic-container/main'
import { listAccept } from '../../../api/netsign/accept'
import { getDicts } from '../../../api/system/dict/data'

export default {
  name: 'AcceptDetails',
  components: {
    basicContainer
  },
  data() {
    return {
      // 关闭弹窗
      isOpen: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        bdcxxId: null,
        ywzt: null,
        ywbh: null,
        status: null
      },
      accept: {},
      dict: {
        dkfsbm: []
      }
    }
  },
  created() {
    this.getList()
    this.selectDict()
  },
  methods: {
    getList() {
      this.loading = true
      this.queryParams.ywbh = sessionStorage.getItem('ywbh')
      listAccept(this.queryParams).then(response => {
        this.accept = response.rows
        this.total = response.total
        this.loading = false
      })
    },
    // 查字典
    selectDict() {
      getDicts('DKFSBM').then(response => {
        this.dict.dkfsbm = response.data
        console.log(this.dict.dkfsbm)
      })
    },
    // 字典翻译
    dkfsbmFormat(row, column) {
      return this.selectDictLabel(this.dict.dkfsbm, row.dkfsbm)
    },
    back() {
      if (!this.state) {
        this.$confirm('文件还未保存,是否退出?', '提示', {
          confirmButtonText: '不保存',
          cancelButtonText: '取消,去保存',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          this.$emit('childFn', this.isOpen)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出！'
          })
        })
      } else {
        this.$emit('childFn', this.isOpen)
      }
    }
  }
}
</script>

<style scoped>

</style>
