/**
 * 获取本地风险测评信息
 * custName:客户姓名
 * certType:证件类型
 * certNo:证件号码
 * businessScope:业务类型  0:普通
 * businessDetail: 业务原子 s0_0001
 * successcallback: 成功回调函数
 * errorcallback: 失败回调函数
 * 返回参数 实体类EvaluationCustomer中的属性
 */
function queryLocalEvaluate(custName,certType,certNo,businessScope,businessDetail,successcallback, errorcallback){
	$.ajax({
		type : 'POST',
		url : getRootPath()+"/evaluate/inner/getEvaluateScore.action",
		data : {
			certType : certType,
			certNo : certNo,
			custName : custName,
			businessScope : businessScope,
			businessDetail : businessDetail
		},
		dataType : "json",
		cache : false,
		success: function(data) {
			successcallback(data);
		} || function() {
			showDialog("success", "信息提示", "查询成功！");
		},
		error: function(data) {
				errorcallback(data);
			} ||
			function() {
				showDialog("error", "信息提示", "查询失败！");
			},
		complete: function() {
		}
	});
}
/** ******期权start************ */
/**
 * 从集中交易获取封信测评信息
 * 返回值：
 * sbranch_code0:客户所属营业部
 * scust_no:客户号
 * smarket_code：评测类型
 * lvol0：得分
 * sroom_no：风险等级字典项
 * smarket_code2:评测状态
 * smain_flag2:评测方式
 * snote2:备注
 * semp:职工
 * sdate1:日期
 * stime1：时间
 * lvol1：有效期
 * sdate2：有效开始日期
 * sdate3:有效结束日期
 */
function queryEvaluteFromJzjyByBusinessAcceptId(businessAcceptId, successcallback, errorcallback) {
	$.ajax({
		type : 'POST',
		url : getRootPath()+"/ggqq/entry/inner/queryRiskScoreInfo.action",
		data :{businessAcceptId : $('#businessAcceptId').val()},
		dataType : "json",
		cache : false,
		success: function(data) {
			successcallback(data);
		} || function() {
			showDialog("success", "信息提示", "查询成功！");
		},
		error: function(data) {
				errorcallback(data);
			} ||
			function() {
				showDialog("error", "信息提示", "查询失败！");
			},
		complete: function() {
		}
	});
}
/** ******期权end************ */

/** ******贵金属stsart************ */
/**
 * 从集中交易获取封信测评信息
 * 返回值：
 * sbranch_code0:客户所属营业部
 * scust_no:客户号
 * smarket_code：评测类型
 * lvol0：得分
 * sroom_no：风险等级字典项
 * smarket_code2:评测状态
 * smain_flag2:评测方式
 * snote2:备注
 * semp:职工
 * sdate1:日期
 * stime1：时间
 * lvol1：有效期
 * sdate2：有效开始日期
 * sdate3:有效结束日期
 */
function queryEvaluteFromJzjyByCustNo(custNo, successcallback, errorcallback) {
	$.ajax({
		type : 'POST',
		url : getRootPath()+"/metal/entry/inner/queryMetalRiskScoreInfo.action",
		data :{custNo : custNo},
		dataType : "json",
		cache : false,
		success: function(data) {
			successcallback(data);
		} || function() {
			showDialog("success", "信息提示", "查询成功！");
		},
		error: function(data) {
				errorcallback(data);
			} ||
			function() {
				showDialog("error", "信息提示", "查询失败！");
			},
		complete: function() {
		}
	});
}
/** ******贵金属end************ */

/**展示风险测评测试试题
 * @param custType  客户属性：个人机构
 * @param certType  证件类型
 * @param certNo    证件号码
 * @param fullName  客户全名
 * @param businessScope  业务范围: 0:普通
 * @param businessDetail 业务原子： s0_0001开户
 * @param examScoreId    各自页面考试得分的id
 * @param mainUniqueSerNo  主流水号（与业务办理时的注流水号）
 * @param businessAcceptId 
 */
function showEvaluatePaper(custType,certType,certNo,fullName,businessScope,businessDetail,examScoreId,mainUniqueSerNo,businessAcceptId,callBackFunction) {
	ajaxLoadDialog({
		title : "试卷评测",
		loadURL : getRootPath()+"/evaluate/inner/showEvaluateCustomerPaperByAjax.action",
		width : 1080,
		height : 690,
		parameter : {
			custType : custType, //个人机构
			certType : certType,
			certNo : certNo,
			fullName : fullName,
			businessScope : businessScope,
			businessDetail : businessDetail, 
			examScoreId : examScoreId, //考试得分input的Id
			mainUniqueSerNo : mainUniqueSerNo,
			businessAcceptId : businessAcceptId
		},
		close_function : callBackFunction
	});
}

function changeTwoDecimal_f(x,decimalPoint) {
    if (isNaN(x)) {
        alert('function:changeTwoDecimal->parameter error');
        return false;
    }
    var point = 10;
    if("2" == decimalPoint){
    	point = 100;
    }else if("3" == decimalPoint){
    	point = 1000;
    }else if("4" == decimalPoint){
    	point = 10000;
    }else if("5" == decimalPoint){
    	point = 100000;
    }else{
    	point =10;
    }
    var f_x = Math.floor(x * point) / point;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= (pos_decimal + parseInt(decimalPoint))) {
        s_x += '0';
    }
    return s_x;
}


