/**
 * 变更类业务信息录入时 下一步判断信息是否有变更
 * tables: 需要比较的table框 可能是一个 也可能是多个 jquery对象
 * basicAtomicCallBack: 个别原子特殊性处理
 * 返回参数 true 表示变更  false 表示未变更
 */
function doNextStepBeforeForModify(tables,basicAtomicCallBack){
	var $tables = tables;
	var length = 0;
	var result = true;
	$tables.each(function(index,table){
		length = length+$(table).find("tr.tr_editBG").length;
	});
	if(length>0){
		return result;
	}
	//特殊情况处理
	var specLength = basicAtomicCallBack||function(){
		return 0;
	};
	length = length+specLength();
	if(length==0){
		result = false;
		showDialog('info', '提示', "信息未有变更,不能下一步!", true);
	}
	return result;
}

/**
 * 个人信息变更
 * 特殊性处理 网络服务密码
 * 返回参数 int 类型
 */
function mod_001(){
	var result = 0;
	return result;
};

//机构判断代理人信息
function mod_047(){
	var result = 0;
	//代理人判断
	if(compareTable($("#tab5b"),$("#tab5"),1,6)){
		result++;
	}
	if(result>0){
		return result;
	}
	//合伙人判断
	if(compareTable($("#beforePartnerTable"),$("#afterPartnerTable"),1,7)){
		result++;
	}
	return result;
}

function mod_078(){
	var result = 0;
	//开户代理人
	if(compareTable($("#agentTableBefore"),$("#agentTableAfter"),2,9)){
		result++;
	}
	if(result>0){
		return result;
	}
	//指令下达人
	if(compareTable($("#instructTableBefore"),$("#instructTableAfter"),2,7)){
		result++;
	}
	if(result>0){
		return result;
	}
	//资金调拨人
	if(compareTable($("#treasurerTableBefore"),$("#treasurerTableAfter"),2,7)){
		result++;
	}
	if(result>0){
		return result;
	}
	//结算确认人
	if(compareTable($("#statementTableBefore"),$("#statementTableAfter"),2,7)){
		result++;
	}
	return result;
}

//比较两个table值 首先比较行数 如果行数据不相同 则不相同 
//行数相同 则比较 两个table的每行 
//column 列数 比较到第几列（从0开始计数的）
//startrow 起始行数(从0开始计数的)
function compareTable(table1,table2,startrow,column){
	var result = false;
	var $table1 = table1;
	var $table2 = table2;
	var columns = Number(column);
	var rows = Number(startrow);
	if($table1.find("tr").length!=$table2.find("tr").length){
		result = true;
		return result;
	}
	//alert("table1:"+$table1.find("tr").length+",table2:"+$table1.find("tr").length);
	if($table1.find("tr").length>rows && $table2.find("tr").length>rows){
		for(var i=rows,j=$table1.find("tr").length;i<=j-1;i++){
			var tr1 = $table1.find("tr").eq(i);//修改前 一行
			var tr2 = $table2.find("tr").eq(i);//修改后 -行
			for(var k=0;k<=columns-1;k++){
				var td1 = tr1.find("td").eq(k);
				var td2 = tr2.find("td").eq(k);
				//修改前的值
				var value1 = td1.children("input[type=hidden]").val();
				//修改后的值 select 要区分
				var value2 ;
				if(td2.hasClass("select")){
					value2 = td2.find("select").val();
				}else{
					value2 = td2.find("input[type=text]").val();
				}
				if(compareValue(value1,value2)){
					result = true;
					break;
				}
			}
			if(result){
				break;
			}
		}
	}
	return result;
}


/**
 * 比较两个对象的值 
 * false 相同  true 不想同
 */
function compareValue(value1,value2){
	var result = false;
	var before = $.trim(value1);
	var after = $.trim(value2);
	if(before == null){
		before = "";
	}
	if(after == null){
		after = ""; 
	}
	//比较select 选项的值
	if(before.indexOf(",")!=-1&&after.indexOf(",")!=-1){
		var beforeArr = before.split(",");
		var afterArr = after.split(",");
		beforeArr = beforeArr.sort(function(a,b){
			return a-b;
		});
		afterArr = afterArr.sort(function(a,b){
			return a-b;
		});
		before = beforeArr.join(",");
		after = afterArr.join(",");
	}
	//alert("before:"+before+",after:"+after);
	if(before!=after){
		result = true;
	}
	return result;
}