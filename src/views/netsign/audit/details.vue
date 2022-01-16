<template>
  <div class="details">
    <el-button @click="passAudit()" style="margin-left: 12%;background-color: #ffa94c;color: white;" round
               v-hasPermi="['netsign:audit:pass']"
    >通过审核
    </el-button>
    <el-button @click="reject()" style="background-color: #ffa94c;color: white;" round
               v-hasPermi="['netsign:audit:reject']"
    >驳回
    </el-button>
    <el-button @click="back()" style="margin-left: 54%;background-color: #ffa94c;color: white;" round
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
        <!-- element ui图片预览 -->
        <el-table-column prop="id" label="ID" width="220px">
          <div>
            <img :src="srcList[0]" style="width: 100%; height: 300px"  @click="show" >
            <!--          v-if="imgShow"-->
            <div class="images" v-viewer="{movable: false}" v-show="false">
              <img v-for="src in srcList" :src="src" :key="src" style="width: 100%; height: 100px">
            </div>
          </div>
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
import { listAccept, passAudit, queryImgUrl, rejectAudit } from '../../../api/netsign/accept'
import { getDicts } from '../../../api/system/dict/data'
import 'viewerjs/dist/viewer.css'
import { directive as viewer } from 'v-viewer'

export default {
  dicts: ['DJYWZMMCBM', 'JYYWZMMCBM', 'JYZLBBM', 'GYFSBM', 'JYZXZBM', 'JYZZJMCBM', 'FKLXBM', 'DKFSBM'],
  name: 'AuditDetails',
  components: {
    basicContainer
  },
  directives: {
    viewer: viewer({
      debug: true
    })
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
      imgShow: true,
      imgList: [],
      // 图片预览
      srcList: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F3d7692a3d1c87050639bf9cbb55fd7d337068b272405a-UPkg4W_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636521968&t=a0f7eb1183ccc464c40b35e0e0dcc410'
      ]
    }
  },
  computed: {
    //因为数据用到了dataform中的数据，所以写在了computed中
    tableData() {
      return [
        { annotation: '业务编号', data: this.data.ywbh, annotation1: '上件业务编号', data2: this.data.sjywbh },
        { annotation: '区县', data: this.data.qx, annotation1: '名义层', data2: this.data.myc },
        { annotation: '行政区划代码', data: this.data.xzqhdm, annotation1: '房号', data2: this.data.fh },
        { annotation: '房屋坐落', data: this.data.fwzl, annotation1: '建筑面积', data2: this.data.jzmj },
        { annotation: '套内建筑面积', data: this.data.tnjzmj, annotation1: '公摊建筑面积', data2: this.data.gtjzmj },
        { annotation: '层房序号', data: this.data.dy, annotation1: '户型居室', data2: this.data.hxjsbm},
        { annotation: '户型结构', data: this.data.hxjgbm, annotation1: '房屋用途', data2: this.data.fwytbm },
        { annotation: '房屋性质', data: this.data.fwxzbm, annotation1: '房屋类型', data2: this.data.fwlxbm },
        { annotation: '建筑结构', data: this.data.jzjgbm, annotation1: '房屋朝向', data2: this.data.fwcxbm }
      ]
    }
  },
  created() {
    this.getList()
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
        this.queryImgUrl()
        this.selectDict()
      })
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
    },
    reject() {
      rejectAudit(this.accept[0].bdcxxId).then(response => {
        this.$modal.msgSuccess('驳回成功')
        this.back()
      })
    },
    // 通过审核
    passAudit() {
      passAudit(this.accept[0].bdcxxId).then(response => {
        this.$modal.msg(response.msg)
      })
    },
    show() {
      const viewer = this.$el.querySelector('.images').$viewer
      viewer.show()
    },
    queryImgUrl() {
      queryImgUrl(this.accept[0].bdcxxId).then(response => {
        this.srcList = response.data
      })
    },

    // 查字典
    selectDict() {
      getDicts('HXJGBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.hxjgbm) {
            this.data.hxjgbm = datas[i].dictLabel
          }
        }
      })
      getDicts('HXJSBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.hxjsbm) {
            this.data.hxjsbm = datas[i].dictLabel
          }
        }
      })
      getDicts('JZJGBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.jzjgbm) {
            this.data.jzjgbm = datas[i].dictLabel
          }
        }
      })
      getDicts('FWYTBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.fwytbm) {
            this.data.fwytbm = datas[i].dictLabel
          }
        }
      })
      getDicts('FWXZBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.fwxzbm) {
            this.data.fwxzbm = datas[i].dictLabel
          }
        }
      })
      getDicts('FWCXBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.fwcxbm) {
            this.data.fwcxbm = datas[i].dictLabel
          }
        }
      })
      getDicts('FWLXBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.fwlxbm) {
            this.data.fwlxbm = datas[i].dictLabel
          }
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
