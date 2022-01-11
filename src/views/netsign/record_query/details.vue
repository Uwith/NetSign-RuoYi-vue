<template>
  <div class="details">
    <el-button @click="back()" style="margin-left: 80%;background-color: #ffa94c;color: white;" round
    >返回
    </el-button>

    <basic-container style="width:75%; margin-left: 11%">
      <label>不动产信息:</label>
      <el-table
        :show-header="false"
        :data="tableData"
        :span-method="objectSpanMethod"
        border
        :cell-style="columnStyle"
        style="width: 77%; margin-top: 20px;left: 10%;"
      >
        <el-table-column prop="id" label="ID" width="220px">
          <template slot-scope="scope">
            <div id="uploadImg" style="">
              <div class="bgimg">
                <span>aaa</span>
                <!--                <el-image :fit="none" style="height:300px" :src="srcList[0]" @click="show" :error="空"></el-image>-->
              </div>
            </div>

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
        ></el-table-column>
        <el-table-column
          label="楼号"
          prop="lh"
        ></el-table-column>
        <el-table-column
          label="所在起始层"
          prop="szqsc"
        ></el-table-column>
        <el-table-column
          label="所在终止层"
          prop="szzzc"
        ></el-table-column>
        <el-table-column
          label="层房序号"
          prop="dy"
        ></el-table-column>

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
        ></el-table-column>
        <el-table-column
          label="评估价格"
          prop="pgjg"
        ></el-table-column>
        <el-table-column
          label="成交金额"
          prop="cjje"
        ></el-table-column>
        <el-table-column
          label="首付款金额"
          prop="sfkje"
        ></el-table-column>
        <el-table-column
          label="贷款金额"
          prop="dkje"
        ></el-table-column>
        <el-table-column
          label="资金监管比例"
          prop="jgbl"
        ></el-table-column>
        <el-table-column
          label="以监管资金金额"
          prop="jgje"
        ></el-table-column>

        <el-table-column
          label="付款类型"
          prop="fklxbm"
        >
          <template slot-scope="scope">
            <dict-tag :options="dict.type.FKLXBM" :value="scope.row.fklxbm"/>
          </template>
        </el-table-column>
        <el-table-column
          label="贷款方式"
          prop="dkfsbm"
        >
          <template slot-scope="scope">
            <dict-tag :options="dict.type.DKFSBM" :value="scope.row.dkfsbm"/>
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
        <el-table-column label="登记业务证明证书名称" prop="djywzmmcbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.DJYWZMMCBM" :value="scope.row.djywzmmcbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易业务证明号码" prop="djywzmhm"></el-table-column>
        <el-table-column label="交易者类别" prop="jyzlbbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZLBBM" :value="scope.row.jyzlbbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易者全称" prop="jyzqc"></el-table-column>
        <el-table-column label="交易者证件名称" prop="jyzzjmcbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZZJMCBM" :value="scope.row.jyzlbbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易者证件号码" prop="jyzzjhm"></el-table-column>
        <el-table-column label="交易者性质" prop="jyzxzbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZXZBM" :value="scope.row.jyzxzbm"/>
          </template>
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
          <template slot-scope="scope">
            <dict-tag :options="dict.type.GYFSBM" :value="scope.row.gyfsbm"/>
          </template>
        </el-table-column>
        <el-table-column
          label="所占份额"
          prop="szfe"
        ></el-table-column>
        <el-table-column
          label="交易者户籍"
          prop="jyzhj"
        ></el-table-column>
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
        <el-table-column label="序号" type="index"></el-table-column>
        <el-table-column label="交易业务证明证书名称" prop="jyywzmmcbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYYWZMMCBM" :value="scope.row.jyywzmmcbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易业务证明号码" prop="jyywzmhm"></el-table-column>
        <el-table-column label="交易者类别" prop="jyzlbbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZLBBM" :value="scope.row.jyzlbbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易者全称" prop="jyzqc"></el-table-column>
        <el-table-column label="交易者证件名称" prop="jyzzjmcbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZZJMCBM" :value="scope.row.jyzlbbm"/>
          </template>
        </el-table-column>
        <el-table-column label="交易者证件号码" prop="jyzzjhm"></el-table-column>
        <el-table-column label="交易者性质" prop="jyzxzbm">
          <template slot-scope="scope">
            <dict-tag :options="dict.type.JYZXZBM" :value="scope.row.jyzxzbm"/>
          </template>
        </el-table-column>
        <el-table-column
          label="交易者户籍行政区划"
          prop="jyzhjxzqh"
        ></el-table-column>
        <el-table-column
          label="共有方式"
          prop="gyfsbm"
        >
          <template slot-scope="scope">
            <dict-tag :options="dict.type.GYFSBM" :value="scope.row.gyfsbm"/>
          </template>
        </el-table-column>
        <el-table-column
          label="所占份额"
          prop="szfe"
        ></el-table-column>
        <el-table-column
          label="交易者户籍"
          prop="jyzhj"
        ></el-table-column>
      </el-table>
    </basic-container>

  </div>
</template>

<script>
import basicContainer from '@/views/components/basic-container/main'
import { listAccept, updateAccept, selectImgShow, selectImg } from '../../../api/netsign/accept'
import { getDicts } from '../../../api/system/dict/data'

export default {
  dicts: ['DJYWZMMCBM', 'JYYWZMMCBM', 'JYZLBBM', 'GYFSBM', 'JYZXZBM', 'JYZZJMCBM', 'FKLXBM', 'DKFSBM'],
  name: 'recordDetails',
  components: {
    basicContainer
  },
  data() {
    return {
      open: false,
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
      data: [],
      // 图片列表显示
      imgShow: false,
      imgList: []

    }
  },
  computed: {
    //因为数据用到了dataform中的数据，所以写在了computed中
    tableData() {
      return [
        { annotation: '业务编号', data: this.data.ywbh, annotation1: '上件业务编号', data2: this.data.sjywbh },
        { annotation: '区县', data: this.data.qx, annotation1: '名义层', data2: this.data.myc },
        { annotation: '行政区划代码', data: this.data.xzqhdm, annotation1: '房号', data2: this.data.fh },
        { annotation: '房屋坐落', data: this.data.fwzl, annotation1: '户型居室', data2: this.data.hxjsbm },
        { annotation: '户型结构', data: this.data.hxjgbm, annotation1: '建筑面积', data2: this.data.jzmj },
        { annotation: '套内建筑面积', data: this.data.tnjzmj, annotation1: '公摊建筑面积', data2: this.data.gtjzmj },
        { annotation: '建筑结构', data: this.data.jzjgbm, annotation1: '房屋用途', data2: this.data.fwytbm },
        { annotation: '房屋性质', data: this.data.fwxzbm, annotation1: '房屋类型', data2: this.data.fwlxbm }
      ]
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
        this.data = this.accept[0]
      })
    },
    // 查字典
    selectDict() {
      getDicts('DKFSBM').then(response => {
        this.dict.dkfsbm = response.data
      })
    },
    // 字典翻译
    dkfsbmFormat(row, column) {
      return this.selectDictLabel(this.dict.dkfsbm, row.dkfsbm)
    },

    back() {
      this.$message({
        type: 'success',
        message: '退出成功!'
      })
      this.$emit('childFn', this.isOpen)
    },
    // 和并列
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 12 === 0) {
          return {
            rowspan: 12,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
