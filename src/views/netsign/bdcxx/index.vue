<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="不动产主键id" prop="proid">
        <el-input
          v-model="queryParams.proid"
          placeholder="请输入不动产主键id"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="资金监管编号" prop="jgbh">
        <el-input
          v-model="queryParams.jgbh"
          placeholder="请输入资金监管编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="理论业务类别编码" prop="ywlb">
        <el-input
          v-model="queryParams.ywlb"
          placeholder="请输入理论业务类别编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="业务编号" prop="ywbh">
        <el-input
          v-model="queryParams.ywbh"
          placeholder="请输入业务编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="上件业务编号" prop="sjywbh">
        <el-input
          v-model="queryParams.sjywbh"
          placeholder="请输入上件业务编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="不动产单元" prop="bdcdyh">
        <el-input
          v-model="queryParams.bdcdyh"
          placeholder="请输入不动产单元"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋编码" prop="fwbm">
        <el-input
          v-model="queryParams.fwbm"
          placeholder="请输入房屋编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="行政区划代码" prop="xzqhdm">
        <el-input
          v-model="queryParams.xzqhdm"
          placeholder="请输入行政区划代码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="逻辑行政区划" prop="ljxzqh">
        <el-input
          v-model="queryParams.ljxzqh"
          placeholder="请输入逻辑行政区划"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="逻辑行政区划代码" prop="ljxzqhdm">
        <el-input
          v-model="queryParams.ljxzqhdm"
          placeholder="请输入逻辑行政区划代码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="区县" prop="qx">
        <el-input
          v-model="queryParams.qx"
          placeholder="请输入区县"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="乡镇/街道办" prop="xzjdb">
        <el-input
          v-model="queryParams.xzjdb"
          placeholder="请输入乡镇/街道办"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="路街巷" prop="ljx">
        <el-input
          v-model="queryParams.ljx"
          placeholder="请输入路街巷"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="小区" prop="xq">
        <el-input
          v-model="queryParams.xq"
          placeholder="请输入小区"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="楼号" prop="lh">
        <el-input
          v-model="queryParams.lh"
          placeholder="请输入楼号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所在起始层" prop="szqsc">
        <el-input
          v-model="queryParams.szqsc"
          placeholder="请输入所在起始层"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="所在终止层" prop="szzzc">
        <el-input
          v-model="queryParams.szzzc"
          placeholder="请输入所在终止层"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="总层数" prop="zcs">
        <el-input
          v-model="queryParams.zcs"
          placeholder="请输入总层数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="层高" prop="cg">
        <el-input
          v-model="queryParams.cg"
          placeholder="请输入层高"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="地上层数" prop="dscs">
        <el-input
          v-model="queryParams.dscs"
          placeholder="请输入地上层数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="地下层数" prop="dxcs">
        <el-input
          v-model="queryParams.dxcs"
          placeholder="请输入地下层数"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="竣工验收备案日期" prop="jgysbarq">
        <el-input
          v-model="queryParams.jgysbarq"
          placeholder="请输入竣工验收备案日期"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="MYC" prop="myc">
        <el-input
          v-model="queryParams.myc"
          placeholder="请输入MYC"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="层房序号" prop="dy">
        <el-input
          v-model="queryParams.dy"
          placeholder="请输入层房序号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房号" prop="fh">
        <el-input
          v-model="queryParams.fh"
          placeholder="请输入房号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋坐落" prop="fwzl">
        <el-input
          v-model="queryParams.fwzl"
          placeholder="请输入房屋坐落"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="户型居室编码" prop="hxjsbm">
        <el-input
          v-model="queryParams.hxjsbm"
          placeholder="请输入户型居室编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="户型结构编码" prop="hxjgbm">
        <el-input
          v-model="queryParams.hxjgbm"
          placeholder="请输入户型结构编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋朝向编码" prop="fwcxbm">
        <el-input
          v-model="queryParams.fwcxbm"
          placeholder="请输入房屋朝向编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="建筑面积" prop="jzmj">
        <el-input
          v-model="queryParams.jzmj"
          placeholder="请输入建筑面积"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="套内建筑面积" prop="tnjzmj">
        <el-input
          v-model="queryParams.tnjzmj"
          placeholder="请输入套内建筑面积"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="公摊建筑面积" prop="gtjzmj">
        <el-input
          v-model="queryParams.gtjzmj"
          placeholder="请输入公摊建筑面积"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="规划用途" prop="ghyt">
        <el-input
          v-model="queryParams.ghyt"
          placeholder="请输入规划用途"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="建筑结构编码" prop="jzjgbm">
        <el-input
          v-model="queryParams.jzjgbm"
          placeholder="请输入建筑结构编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋用途编码" prop="fwytbm">
        <el-input
          v-model="queryParams.fwytbm"
          placeholder="请输入房屋用途编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋性质编码" prop="fwxzbm">
        <el-input
          v-model="queryParams.fwxzbm"
          placeholder="请输入房屋性质编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="房屋类型编码" prop="fwlxbm">
        <el-input
          v-model="queryParams.fwlxbm"
          placeholder="请输入房屋类型编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="评估价格" prop="pgjg">
        <el-input
          v-model="queryParams.pgjg"
          placeholder="请输入评估价格"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="成交金额" prop="cjje">
        <el-input
          v-model="queryParams.cjje"
          placeholder="请输入成交金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="首付款金额" prop="sfkje">
        <el-input
          v-model="queryParams.sfkje"
          placeholder="请输入首付款金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="贷款金额" prop="dkje">
        <el-input
          v-model="queryParams.dkje"
          placeholder="请输入贷款金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="资金监管比例" prop="jgbl">
        <el-input
          v-model="queryParams.jgbl"
          placeholder="请输入资金监管比例"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="以监管资金金额" prop="jgje">
        <el-input
          v-model="queryParams.jgje"
          placeholder="请输入以监管资金金额"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="付款类型编码" prop="fklxbm">
        <el-input
          v-model="queryParams.fklxbm"
          placeholder="请输入付款类型编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="贷款方式编码" prop="dkfsbm">
        <el-input
          v-model="queryParams.dkfsbm"
          placeholder="请输入贷款方式编码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="合同生效日期" prop="htsxrq">
        <el-input
          v-model="queryParams.htsxrq"
          placeholder="请输入合同生效日期"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label=" 业务办结时间" prop="ywbjsj">
        <el-input
          v-model="queryParams.ywbjsj"
          placeholder="请输入 业务办结时间"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="业务办结人身份证号" prop="ywbjrsfzh">
        <el-input
          v-model="queryParams.ywbjrsfzh"
          placeholder="请输入业务办结人身份证号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="业务办理所在行政区划代码" prop="ywblszxzqhdm">
        <el-input
          v-model="queryParams.ywblszxzqhdm"
          placeholder="请输入业务办理所在行政区划代码"
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
          v-hasPermi="['system:bdcxx:add']"
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
          v-hasPermi="['system:bdcxx:edit']"
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
          v-hasPermi="['system:bdcxx:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:bdcxx:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="bdcxxList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="id" align="center" prop="bdcxxId" />
      <el-table-column label="不动产主键id" align="center" prop="proid" />
      <el-table-column label="资金监管编号" align="center" prop="jgbh" />
      <el-table-column label="理论业务类别编码" align="center" prop="ywlb" />
      <el-table-column label="业务编号" align="center" prop="ywbh" />
      <el-table-column label="上件业务编号" align="center" prop="sjywbh" />
      <el-table-column label="不动产单元" align="center" prop="bdcdyh" />
      <el-table-column label="房屋编码" align="center" prop="fwbm" />
      <el-table-column label="行政区划代码" align="center" prop="xzqhdm" />
      <el-table-column label="逻辑行政区划" align="center" prop="ljxzqh" />
      <el-table-column label="逻辑行政区划代码" align="center" prop="ljxzqhdm" />
      <el-table-column label="区县" align="center" prop="qx" />
      <el-table-column label="乡镇/街道办" align="center" prop="xzjdb" />
      <el-table-column label="路街巷" align="center" prop="ljx" />
      <el-table-column label="小区" align="center" prop="xq" />
      <el-table-column label="楼号" align="center" prop="lh" />
      <el-table-column label="所在起始层" align="center" prop="szqsc" />
      <el-table-column label="所在终止层" align="center" prop="szzzc" />
      <el-table-column label="总层数" align="center" prop="zcs" />
      <el-table-column label="层高" align="center" prop="cg" />
      <el-table-column label="地上层数" align="center" prop="dscs" />
      <el-table-column label="地下层数" align="center" prop="dxcs" />
      <el-table-column label="竣工验收备案日期" align="center" prop="jgysbarq" />
      <el-table-column label="MYC" align="center" prop="myc" />
      <el-table-column label="层房序号" align="center" prop="dy" />
      <el-table-column label="房号" align="center" prop="fh" />
      <el-table-column label="房屋坐落" align="center" prop="fwzl" />
      <el-table-column label="户型居室编码" align="center" prop="hxjsbm" />
      <el-table-column label="户型结构编码" align="center" prop="hxjgbm" />
      <el-table-column label="房屋朝向编码" align="center" prop="fwcxbm" />
      <el-table-column label="建筑面积" align="center" prop="jzmj" />
      <el-table-column label="套内建筑面积" align="center" prop="tnjzmj" />
      <el-table-column label="公摊建筑面积" align="center" prop="gtjzmj" />
      <el-table-column label="规划用途" align="center" prop="ghyt" />
      <el-table-column label="建筑结构编码" align="center" prop="jzjgbm" />
      <el-table-column label="房屋用途编码" align="center" prop="fwytbm" />
      <el-table-column label="房屋性质编码" align="center" prop="fwxzbm" />
      <el-table-column label="房屋类型编码" align="center" prop="fwlxbm" />
      <el-table-column label="评估价格" align="center" prop="pgjg" />
      <el-table-column label="成交金额" align="center" prop="cjje" />
      <el-table-column label="首付款金额" align="center" prop="sfkje" />
      <el-table-column label="贷款金额" align="center" prop="dkje" />
      <el-table-column label="资金监管比例" align="center" prop="jgbl" />
      <el-table-column label="以监管资金金额" align="center" prop="jgje" />
      <el-table-column label="付款类型编码" align="center" prop="fklxbm" />
      <el-table-column label="贷款方式编码" align="center" prop="dkfsbm" />
      <el-table-column label="合同生效日期" align="center" prop="htsxrq" />
      <el-table-column label=" 业务办结时间" align="center" prop="ywbjsj" />
      <el-table-column label="业务办结人身份证号" align="center" prop="ywbjrsfzh" />
      <el-table-column label="业务办理所在行政区划代码" align="center" prop="ywblszxzqhdm" />
      <el-table-column label="状态" align="center" prop="status" />
      <el-table-column label="备注" align="center" prop="remark" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['system:bdcxx:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:bdcxx:remove']"
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

    <!-- 添加或修改不动产信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="不动产主键id" prop="proid">
          <el-input v-model="form.proid" placeholder="请输入不动产主键id" />
        </el-form-item>
        <el-form-item label="资金监管编号" prop="jgbh">
          <el-input v-model="form.jgbh" placeholder="请输入资金监管编号" />
        </el-form-item>
        <el-form-item label="理论业务类别编码" prop="ywlb">
          <el-input v-model="form.ywlb" placeholder="请输入理论业务类别编码" />
        </el-form-item>
        <el-form-item label="业务编号" prop="ywbh">
          <el-input v-model="form.ywbh" placeholder="请输入业务编号" />
        </el-form-item>
        <el-form-item label="上件业务编号" prop="sjywbh">
          <el-input v-model="form.sjywbh" placeholder="请输入上件业务编号" />
        </el-form-item>
        <el-form-item label="不动产单元" prop="bdcdyh">
          <el-input v-model="form.bdcdyh" placeholder="请输入不动产单元" />
        </el-form-item>
        <el-form-item label="房屋编码" prop="fwbm">
          <el-input v-model="form.fwbm" placeholder="请输入房屋编码" />
        </el-form-item>
        <el-form-item label="行政区划代码" prop="xzqhdm">
          <el-input v-model="form.xzqhdm" placeholder="请输入行政区划代码" />
        </el-form-item>
        <el-form-item label="逻辑行政区划" prop="ljxzqh">
          <el-input v-model="form.ljxzqh" placeholder="请输入逻辑行政区划" />
        </el-form-item>
        <el-form-item label="逻辑行政区划代码" prop="ljxzqhdm">
          <el-input v-model="form.ljxzqhdm" placeholder="请输入逻辑行政区划代码" />
        </el-form-item>
        <el-form-item label="区县" prop="qx">
          <el-input v-model="form.qx" placeholder="请输入区县" />
        </el-form-item>
        <el-form-item label="乡镇/街道办" prop="xzjdb">
          <el-input v-model="form.xzjdb" placeholder="请输入乡镇/街道办" />
        </el-form-item>
        <el-form-item label="路街巷" prop="ljx">
          <el-input v-model="form.ljx" placeholder="请输入路街巷" />
        </el-form-item>
        <el-form-item label="小区" prop="xq">
          <el-input v-model="form.xq" placeholder="请输入小区" />
        </el-form-item>
        <el-form-item label="楼号" prop="lh">
          <el-input v-model="form.lh" placeholder="请输入楼号" />
        </el-form-item>
        <el-form-item label="所在起始层" prop="szqsc">
          <el-input v-model="form.szqsc" placeholder="请输入所在起始层" />
        </el-form-item>
        <el-form-item label="所在终止层" prop="szzzc">
          <el-input v-model="form.szzzc" placeholder="请输入所在终止层" />
        </el-form-item>
        <el-form-item label="总层数" prop="zcs">
          <el-input v-model="form.zcs" placeholder="请输入总层数" />
        </el-form-item>
        <el-form-item label="层高" prop="cg">
          <el-input v-model="form.cg" placeholder="请输入层高" />
        </el-form-item>
        <el-form-item label="地上层数" prop="dscs">
          <el-input v-model="form.dscs" placeholder="请输入地上层数" />
        </el-form-item>
        <el-form-item label="地下层数" prop="dxcs">
          <el-input v-model="form.dxcs" placeholder="请输入地下层数" />
        </el-form-item>
        <el-form-item label="竣工验收备案日期" prop="jgysbarq">
          <el-input v-model="form.jgysbarq" placeholder="请输入竣工验收备案日期" />
        </el-form-item>
        <el-form-item label="MYC" prop="myc">
          <el-input v-model="form.myc" placeholder="请输入MYC" />
        </el-form-item>
        <el-form-item label="层房序号" prop="dy">
          <el-input v-model="form.dy" placeholder="请输入层房序号" />
        </el-form-item>
        <el-form-item label="房号" prop="fh">
          <el-input v-model="form.fh" placeholder="请输入房号" />
        </el-form-item>
        <el-form-item label="房屋坐落" prop="fwzl">
          <el-input v-model="form.fwzl" placeholder="请输入房屋坐落" />
        </el-form-item>
        <el-form-item label="户型居室编码" prop="hxjsbm">
          <el-input v-model="form.hxjsbm" placeholder="请输入户型居室编码" />
        </el-form-item>
        <el-form-item label="户型结构编码" prop="hxjgbm">
          <el-input v-model="form.hxjgbm" placeholder="请输入户型结构编码" />
        </el-form-item>
        <el-form-item label="房屋朝向编码" prop="fwcxbm">
          <el-input v-model="form.fwcxbm" placeholder="请输入房屋朝向编码" />
        </el-form-item>
        <el-form-item label="建筑面积" prop="jzmj">
          <el-input v-model="form.jzmj" placeholder="请输入建筑面积" />
        </el-form-item>
        <el-form-item label="套内建筑面积" prop="tnjzmj">
          <el-input v-model="form.tnjzmj" placeholder="请输入套内建筑面积" />
        </el-form-item>
        <el-form-item label="公摊建筑面积" prop="gtjzmj">
          <el-input v-model="form.gtjzmj" placeholder="请输入公摊建筑面积" />
        </el-form-item>
        <el-form-item label="规划用途" prop="ghyt">
          <el-input v-model="form.ghyt" placeholder="请输入规划用途" />
        </el-form-item>
        <el-form-item label="建筑结构编码" prop="jzjgbm">
          <el-input v-model="form.jzjgbm" placeholder="请输入建筑结构编码" />
        </el-form-item>
        <el-form-item label="房屋用途编码" prop="fwytbm">
          <el-input v-model="form.fwytbm" placeholder="请输入房屋用途编码" />
        </el-form-item>
        <el-form-item label="房屋性质编码" prop="fwxzbm">
          <el-input v-model="form.fwxzbm" placeholder="请输入房屋性质编码" />
        </el-form-item>
        <el-form-item label="房屋类型编码" prop="fwlxbm">
          <el-input v-model="form.fwlxbm" placeholder="请输入房屋类型编码" />
        </el-form-item>
        <el-form-item label="评估价格" prop="pgjg">
          <el-input v-model="form.pgjg" placeholder="请输入评估价格" />
        </el-form-item>
        <el-form-item label="成交金额" prop="cjje">
          <el-input v-model="form.cjje" placeholder="请输入成交金额" />
        </el-form-item>
        <el-form-item label="首付款金额" prop="sfkje">
          <el-input v-model="form.sfkje" placeholder="请输入首付款金额" />
        </el-form-item>
        <el-form-item label="贷款金额" prop="dkje">
          <el-input v-model="form.dkje" placeholder="请输入贷款金额" />
        </el-form-item>
        <el-form-item label="资金监管比例" prop="jgbl">
          <el-input v-model="form.jgbl" placeholder="请输入资金监管比例" />
        </el-form-item>
        <el-form-item label="以监管资金金额" prop="jgje">
          <el-input v-model="form.jgje" placeholder="请输入以监管资金金额" />
        </el-form-item>
        <el-form-item label="付款类型编码" prop="fklxbm">
          <el-input v-model="form.fklxbm" placeholder="请输入付款类型编码" />
        </el-form-item>
        <el-form-item label="贷款方式编码" prop="dkfsbm">
          <el-input v-model="form.dkfsbm" placeholder="请输入贷款方式编码" />
        </el-form-item>
        <el-form-item label="合同生效日期" prop="htsxrq">
          <el-input v-model="form.htsxrq" placeholder="请输入合同生效日期" />
        </el-form-item>
        <el-form-item label=" 业务办结时间" prop="ywbjsj">
          <el-input v-model="form.ywbjsj" placeholder="请输入 业务办结时间" />
        </el-form-item>
        <el-form-item label="业务办结人身份证号" prop="ywbjrsfzh">
          <el-input v-model="form.ywbjrsfzh" placeholder="请输入业务办结人身份证号" />
        </el-form-item>
        <el-form-item label="业务办理所在行政区划代码" prop="ywblszxzqhdm">
          <el-input v-model="form.ywblszxzqhdm" placeholder="请输入业务办理所在行政区划代码" />
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
import { listBdcxx, getBdcxx, delBdcxx, addBdcxx, updateBdcxx } from "@/api/system/bdcxx";

export default {
  name: "Bdcxx",
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
      // 不动产信息表格数据
      bdcxxList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        proid: null,
        jgbh: null,
        ywlb: null,
        ywbh: null,
        sjywbh: null,
        bdcdyh: null,
        fwbm: null,
        xzqhdm: null,
        ljxzqh: null,
        ljxzqhdm: null,
        qx: null,
        xzjdb: null,
        ljx: null,
        xq: null,
        lh: null,
        szqsc: null,
        szzzc: null,
        zcs: null,
        cg: null,
        dscs: null,
        dxcs: null,
        jgysbarq: null,
        myc: null,
        dy: null,
        fh: null,
        fwzl: null,
        hxjsbm: null,
        hxjgbm: null,
        fwcxbm: null,
        jzmj: null,
        tnjzmj: null,
        gtjzmj: null,
        ghyt: null,
        jzjgbm: null,
        fwytbm: null,
        fwxzbm: null,
        fwlxbm: null,
        pgjg: null,
        cjje: null,
        sfkje: null,
        dkje: null,
        jgbl: null,
        jgje: null,
        fklxbm: null,
        dkfsbm: null,
        htsxrq: null,
        ywbjsj: null,
        ywbjrsfzh: null,
        ywblszxzqhdm: null,
        status: null,
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        proid: [
          { required: true, message: "不动产主键id不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询不动产信息列表 */
    getList() {
      this.loading = true;
      listBdcxx(this.queryParams).then(response => {
        this.bdcxxList = response.rows;
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
        bdcxxId: null,
        proid: null,
        jgbh: null,
        ywlb: null,
        ywbh: null,
        sjywbh: null,
        bdcdyh: null,
        fwbm: null,
        xzqhdm: null,
        ljxzqh: null,
        ljxzqhdm: null,
        qx: null,
        xzjdb: null,
        ljx: null,
        xq: null,
        lh: null,
        szqsc: null,
        szzzc: null,
        zcs: null,
        cg: null,
        dscs: null,
        dxcs: null,
        jgysbarq: null,
        myc: null,
        dy: null,
        fh: null,
        fwzl: null,
        hxjsbm: null,
        hxjgbm: null,
        fwcxbm: null,
        jzmj: null,
        tnjzmj: null,
        gtjzmj: null,
        ghyt: null,
        jzjgbm: null,
        fwytbm: null,
        fwxzbm: null,
        fwlxbm: null,
        pgjg: null,
        cjje: null,
        sfkje: null,
        dkje: null,
        jgbl: null,
        jgje: null,
        fklxbm: null,
        dkfsbm: null,
        htsxrq: null,
        ywbjsj: null,
        ywbjrsfzh: null,
        ywblszxzqhdm: null,
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
      this.ids = selection.map(item => item.bdcxxId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加不动产信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const bdcxxId = row.bdcxxId || this.ids
      getBdcxx(bdcxxId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改不动产信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.bdcxxId != null) {
            updateBdcxx(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addBdcxx(this.form).then(response => {
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
      const bdcxxIds = row.bdcxxId || this.ids;
      this.$modal.confirm('是否确认删除不动产信息编号为"' + bdcxxIds + '"的数据项？').then(function() {
        return delBdcxx(bdcxxIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/bdcxx/export', {
        ...this.queryParams
      }, `bdcxx_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
