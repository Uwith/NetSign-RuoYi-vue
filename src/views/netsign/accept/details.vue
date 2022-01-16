<template>
  <div class="details">
    <el-button @click="selectImgShow()" style="margin-left: 13%;background-color: #ffa94c;color: white;" round
               v-hasPermi="['netsign:accept:selectImg']"
    >选择图片
    </el-button>
    <el-button
      @click="handleUpdate()" style="margin-left: 53%;background-color: #ffa94c;color: white;" round
      v-hasPermi="['netsign:accept:edit']"
    >保存
    </el-button>
    <el-button @click="back" style="background-color: #ffa94c;color: white;" round
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
        <!--        <el-table-column prop="id" label="ID" width="220px">-->
        <!--          <template slot-scope="scope">-->
        <!--            <div id="uploadImg" style="">-->
        <!--              <div class="bgimg">-->
        <!--                <span>aaa</span>-->
        <!--                &lt;!&ndash;                <el-image :fit="none" style="height:300px" :src="srcList[0]" @click="show" :error="空"></el-image>&ndash;&gt;-->
        <!--              </div>-->
        <!--            </div>-->

        <!--          </template>-->
        <!--        </el-table-column>-->
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
<!--        <el-table-column-->
<!--          label="层房序号"-->
<!--          prop="dy"-->
<!--        >-->
<!--          <template scope="scope">-->
<!--            <el-input size="small" v-model="scope.row.dy" placeholder="单元"-->
<!--            ></el-input>-->
<!--          </template>-->
<!--        </el-table-column>-->

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
                v-for="dict in dict.type.FKLXBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
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
                v-for="dict in dict.type.DKFSBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
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
          <template scope="scope">
            <el-select v-model="scope.row.jyzxzbm" size="small">
              <el-option
                v-for="dict in dict.type.JYZXZBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="交易者户籍行政区划"
          prop="jyzhjxzqh"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jyzhjxzqh" placeholder="户籍行政区划"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="共有方式"
          prop="gyfsbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.gyfsbm" size="small">
              <el-option
                v-for="dict in dict.type.GYFSBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
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
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jyzhj" placeholder="交易者户籍"
            ></el-input>
          </template>
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
          <template scope="scope">
            <el-select v-model="scope.row.jyzxzbm" size="small">
              <el-option
                v-for="dict in dict.type.JYZXZBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          label="交易者户籍行政区划"
          prop="jyzhjxzqh"
        >
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jyzhjxzqh" placeholder="户籍行政区划"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="共有方式"
          prop="gyfsbm"
        >
          <template scope="scope">
            <el-select v-model="scope.row.gyfsbm" size="small">
              <el-option
                v-for="dict in dict.type.GYFSBM"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
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
          <template scope="scope">
            <el-input size="small" v-model="scope.row.jyzhj" placeholder="交易者户籍"
            ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </basic-container>
    <!--    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>-->

    <!--    </el-dialog>-->
    <el-dialog title="图片选择" :visible.sync="imgShow" :modal="false">
      <el-table
        :data="this.imgList"
        border
        highlight-current-row
        @selection-change="handleSelectionChange"
        :cell-style="{padding:'2px 0',hight:'150px'}"
      >
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column label="文件id" width="70" prop="wjId">
          <template scope="scope">
            {{ scope.row.wjId }}
          </template>
        </el-table-column>
        <el-table-column label="图片" prop="wjnr">
          <template slot-scope="scope">
            <img :src="scope.row.fjdz" alt="" style="max-height: 150px"/>
            <!-- {{ scope.row.fjdz }} -->
          </template>
        </el-table-column>
        <el-table-column label="状态" width="55" prop="status">
          <template slot-scope="scope">
            {{ scope.row.status }}
          </template>
        </el-table-column>
      </el-table>
      <el-button @click="selectImg"
                 plain
                 :disabled="multiple"
      >确定
      </el-button>
    </el-dialog>
  </div>
</template>

<script>
import basicContainer from '@/views/components/basic-container/main'
import { listAccept, updateAccept, selectImgShow, selectImg } from '../../../api/netsign/accept'
import { getDicts } from '../../../api/system/dict/data'
import logo from '../../../layout/components/Sidebar/Logo'
import { deepClone } from '../../../utils'

export default {
  dicts: ['DJYWZMMCBM', 'JYYWZMMCBM', 'JYZLBBM', 'GYFSBM', 'JYZXZBM', 'JYZZJMCBM', 'FKLXBM', 'DKFSBM'],
  name: 'AcceptDetails',
  components: {
    basicContainer
  },
  data() {
    return {
      open: false,
      // 关闭弹窗
      isOpen: false,
      // 非多个禁用
      multiple: true,
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
      imgList: [],
      state: false
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
        let source
        source = response.rows
        this.total = response.total
        this.loading = false
        this.accept = source
        let objDeepCopy
        objDeepCopy = this.deepClone(source[0])
        this.data = objDeepCopy
        this.selectDict()
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
      getDicts('FWXZBM').then(response => {
        let datas = response.data
        for (let i = 0; i < datas.length; i++) {
          if (datas[i].dictValue === this.data.fwxzbm) {
            this.data.fwxzbm = datas[i].dictLabel
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
    },
    // 深复制
    deepClone(obj) {
      if (!this.isObject(obj)) {
        throw new Error('obj 不是一个对象！')
      }
      let isArray = Array.isArray(obj)
      let cloneObj = isArray ? [] : {}
      for (let key in obj) {
        cloneObj[key] = this.isObject(obj[key]) ? this.deepClone(obj[key]) : obj[key]
      }
      return cloneObj
    },
    isObject(o) {
      return (typeof o === 'object' || typeof o === 'function') && o !== null
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
    },
    // 和并列
    // objectSpanMethod({ rowIndex, columnIndex }) {
    //   if (columnIndex === 0) {
    //     if (rowIndex % 12 === 0) {
    //       return {
    //         rowspan: 12,
    //         colspan: 1
    //       }
    //     } else {
    //       return {
    //         rowspan: 0,
    //         colspan: 0
    //       }
    //     }
    //   }
    // },
    /** 保存按钮操作 */
    handleUpdate() {
      this.state = true
      debugger
      console.log(this.accept[0])
      updateAccept(this.accept[0]).then(response => {
        this.$modal.msgSuccess('修改成功')
        this.getList()
      })
    },
    selectImgShow() {
      selectImgShow(this.accept[0].bdcxxId).then(response => {
        this.imgList = response.data
        this.imgShow = true
      })
    },

    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.wjId)
      this.single = selection.length !== 1
      this.multiple = !selection.length
    },
    // 选择图片
    selectImg() {
      const wjIds = this.ids
      selectImg(wjIds, this.imgList[0].bdcxxId).then(response => {
        // this.$modal.msgSuccess('修改'+response.+'成功')
        console.log(response)
      })
      this.imgShow = false
    }
  }
}
</script>

<style scoped>
.el-table .cell {
  line-height: 40px;
}
</style>
