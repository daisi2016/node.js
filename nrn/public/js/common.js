//Jquery 集合库
//初始化环境加载
$(function() {
	//关闭Ajax缓存
	$.ajaxSetup({
		cache: false,
		complete: function(xhr,status) {
	        var sessionStatus = xhr.getResponseHeader('sessionstatus');
	        if(sessionStatus == 'timeout') {
	                 location.href = getRootPath()+ '/login.jsp';            
	         	}
	     	}//ajax session 超时处理。
	});

	//	扩展String去除首尾的空格
	String.prototype.trim = function() {
		return this.replace(/(^\s*)|(\s*$)/g, "");
	};

	//JS 获取URL参数，用法：string.GetValue("name")
	String.prototype.GetValue = function(parm) {
		var reg = new RegExp("(^|&)" + parm + "=([^&]*)(&|$)");
		var r = this.substr(this.indexOf("\?") + 1).match(reg);
		if (r != null) return unescape(r[2]);
		return null;
	}

	//动态载入通用UI集合
	if ($(".UI_collection").length == 0) {
		var uidiv = $("<div class='UI_collection'></div>");
		$("body").append(uidiv);
		$(".UI_collection").load(getRootPath() + "/UIBase.xml #dialog_ui", function() {
			$.each($(".dialog_messages img"), function() {
				$(this).attr("src", getRootPath() + "/themes/default/" + $(this).attr("src"));
			});
		});
	}

	//动态计算页面高度
	autoPageHeight($(".main"), true);
});


//计算设置页面高度
//obj：需要自适应的容器对象
//auto：（true）自动适应屏幕高度
//（false，value）手动输入页面高度
function autoPageHeight(obj, auto, value) {
		value = value || 0;
		if (auto) {
			var autoHeight = $(window).height() - 167 + value;
			//obj.animate({height:autoHeight});
			obj.css("height", autoHeight);
		} else {
			//obj.animate({height:value});
			obj.css("height", value);
		}
	}

//设置页面最小高度
//obj：需要自适应的容器对象
//auto：（true）自动适应屏幕高度
//（false，value）手动输入页面高度
function autoPageMinHeight(obj, auto, value) {
	value = value || 0;
	if (auto) {
		var autoHeight = $(window).height() - 167 + value;
		obj.css("height", "auto");
		obj.css("min-height", autoHeight);
	} else {
		obj.css("height", "auto");
		obj.css("min-height", value);
	}
}

//iframe Set
function parentIframeHeightSet(id) {
		var parentDiv = $(parent.document).find(id);
		var childDoc = $(document);
		parentDiv.height(childDoc.height());
	}
	//子页面控制父页面URL跳转

function parentIframeRedirect(purl) {
	parent.document.location.href = purl;
}

//为所有form绑定验证框架，且为失去焦点验证。
function validateForm() {
		$.validationEngine.defaults.addPromptClass = "formError-noArrow formError-text";
		$.validationEngine.defaults.promptPosition = "centerRight:0,5";
		$.validationEngine.defaults.scroll = false;
		$.validationEngine.defaults.binded = true;
		$.validationEngine.defaults.maxErrorsPerField = 1;
		$("form").validationEngine();
	}

//为DIV绑定验证框架
function validateDIV(ID) {
		validateForm();
		$("#" + ID).validationEngine();
	}

//自定义ajax页面加载
//divID:加载容器ID
//loadUrl:需加载页面URL
//objArg:需加载页面入参，obj类型。页面加载请求将使用POST。
//callback:加载页面后回调函数。
function ajaxPageLoad(divID, loadUrl, objArg, callback) {
	if (callback == null) {
		callback = function() {};
	}
	$("#" + divID).load(loadUrl, objArg, function(responseTxt, statusTxt, xhr) {
		if (statusTxt == "success")
			callback();
		if (statusTxt == "error")
		{
			if( xhr.status == 500 ){
				alert("Error: " + xhr.status + ": 服务器数据提交异常！");
			}else{
				alert("Error: " + xhr.status + ": " + xhr.statusText);
			}
		}
	});
}

//异步载入页面后，页面初始化函数
function RightPageInit() {
	$(".right_mian").mCustomScrollbar({
		theme: "inset-2-dark",
		scrollInertia: 0,
		scrollButtons: {
			enable: true
		}
	});
	validateForm();
	SelectValidate();
}

//SelectValidate
//为所有Select控件绑定失去焦点验证
function SelectValidate() {
	// bind to event
	$("select").on("multiselectclose", function(event, ui) {
		var selectButton = $(this).siblings("button");
		var state = selectButton.validationEngine("validate");
		if (state) {
			selectButton.validationEngine("hide");
		} else {
			selectButton.focus();
		}
	});
}

//滚动条绑定更新
function ScrollbarUpdate() {
	$(".right_mian").mCustomScrollbar("update");
}

//Include JS Frame
//导入JS第三方框架
function JsInclude(path) {
	$.ajaxSetup({
		cache: true
	});
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/bootstrap.min.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-1.10.4.custom.min.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.ui.datepicker-zh-CN.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-timepicker-addon.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-timepicker-zh-CN.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.multiselect.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.validationEngine.min.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.validationEngine-zh_CN.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.mCustomScrollbar.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.mousewheel.min.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.menuTree.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.EasyTabs.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.accordion.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.multiselect.filter.js'></script>");
	$("body").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.ajaxLabel.js'></script>");
	$.ajaxSetup({
		cache: false
	});
	
	//默认日历控件点击今天赋值文本框
	$.datepicker._gotoToday = function (id) {
        $(id).datepicker('setDate', new Date());
    };
}

//Include JS Frame
//导入JS第三方框架-head
function JsIncludeHead(path) {
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/bootstrap.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-1.10.4.custom.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.ui.datepicker-zh-CN.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-timepicker-addon.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery-ui-timepicker-zh-CN.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.multiselect.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.validationEngine.min.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.validationEngine-zh_CN.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.mCustomScrollbar.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.mousewheel.min.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.menuTree.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.EasyTabs.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.accordion.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.multiselect.filter.js'></script>");
	$("head").append("<script language='javascript' type='text/javascript' src='" + path + "js/jquery.ajaxLabel.js'></script>");
}

//AjaxLoadPage
function pagesload() {
	var thisPage = "erro.html";
	$(".right_mian").mCustomScrollbar("destroy");
	$(".right_mian").empty();
	$(".right_mian").load(arguments[0], arguments[1], RightPageInit);
	thisPage = arguments[0];
}

/*	ajaxForm提交函数
 *	@form:需要提交数据的Form
 *	@flag:是否启用ajax异步提交
 *	@successcallback:成功回调函数
 *	@errorcallback:失败回调函数
 *	@confirmMsg:确认提示框提示信息，缺省则不开启此功能。当为false时开启自定义验证区域提示功能
 *	@callbackparam:回调函数传参
 */
function validateAjaxSubmitV2(form, flag, successcallback, errorcallback, confirmMsg, callbackparam) {
	var $form = $(form);
	//validateInit
	//API http://code.ciaoca.com/jquery/validation_engine/
	if (arguments[4] == "validatefalse") { //当第五个参数为validatefalse时，启用自定义错误提示功能
		$.validationEngine.defaults.showPrompts = arguments[4];
		//不显示错误提示
		$.validationEngine.defaults.onSuccess = formvalidatSuccess;
		//验证成功回调函数
		$.validationEngine.defaults.onFailure = formvalidatFailure;
		//验证失败回调函数
	} //自定义错误，自定义提示显示区域
	$.validationEngine.defaults.addPromptClass = "formError-noArrow formError-text";
	$.validationEngine.defaults.promptPosition = "centerRight:0,5";
	$.validationEngine.defaults.scroll = false;
	$.validationEngine.defaults.binded = true;
	$.validationEngine.defaults.maxErrorsPerField = 1;

	var checkstate = false;
	//验证是否通过标识
	checkstate = $form.validationEngine("validate");
	if (!checkstate) {
		return false;
	}

	if ($("#next_btn").length > 0) {
		$("#next_btn").attr("disabled", true);
	}

	var returnFlag = false;
	var _submitFn = function() {
		if (flag) {
			returnFlag = false;
			$.ajax({
				type: form.method || 'POST',
				url: $form.attr("action"),
				data: $form.serializeArray(),
				dataType: "json",
				cache: false,
				success: function(data) {
					successcallback(data, callbackparam)
				} || function() {
					showDialog("success", "信息提示", "提交成功！");
				},
				error: function(data) {
						errorcallback(data, callbackparam)
					} ||
					function() {
						showDialog("error", "信息提示", "提交失败！");
					},
				complete: function() {
					if ($("#next_btn").length > 0) {
						$("#next_btn").attr("disabled", false);
					}
				}
			});
		} else {
			returnFlag = true;
		}
	}
	if (confirmMsg) {
		showDialog("confirm", "信息提示", confirmMsg, true, _submitFn);
	} else {
		_submitFn();
	}

	return returnFlag;
}


/*	AjaxSubmit
 * 	@form：当前需要提交和验证的form对象
 * 	@flag：标识是否开启Ajax提交，false为普通提交
 * 	@successcallback：成功提交函数
 * 	@errorcallback：失败提交函数
 * 	@confirmMsg：确认提示框提示信息，缺省则不开启此功能。当为false时开启自定义验证区域提示功能
 */
function validateAjaxSubmit(form, flag, successcallback, errorcallback, confirmMsg) {
	var $form = $(form);
	//validateInit
	//API http://code.ciaoca.com/jquery/validation_engine/
	if (arguments[4] == false) { //当第五个参数为false时，启用自定义错误提示功能
		$.validationEngine.defaults.showPrompts = arguments[4]; //不显示错误提示
		$.validationEngine.defaults.onSuccess = formvalidatSuccess; //验证成功回调函数
		$.validationEngine.defaults.onFailure = formvalidatFailure; //验证失败回调函数
	} //自定义错误，自定义提示显示区域
	$.validationEngine.defaults.addPromptClass = "formError-noArrow formError-text";
	$.validationEngine.defaults.promptPosition = "centerRight:0,5";
	$.validationEngine.defaults.scroll = false;
	$.validationEngine.defaults.binded = true;
	$.validationEngine.defaults.maxErrorsPerField = 1;

	var checkstate = false; //验证是否通过标识
	checkstate = $form.validationEngine("validate");
	if (!checkstate) {
		return false;
	}

	if ($("#next_btn").length > 0) {
		$("#next_btn").attr("disabled", true);
	}

	var returnFlag = false;
	var _submitFn = function() {
		if (flag) {
			returnFlag = false;
			$.ajax({
				type: form.method || 'POST',
				url: $form.attr("action"),
				data: $form.serializeArray(),
				dataType: "json",
				cache: false,
				success: successcallback || function() {
					showDialog("success", "信息提示", "提交成功！");
				},
				error: errorcallback || function() {
					showDialog("error", "信息提示", "提交失败！");
				},
				complete: function() {
					if ($("#next_btn").length > 0) {
						$("#next_btn").attr("disabled", false);
					}
				}
			});
		} else {
			returnFlag = true;
		}
	};

	if (confirmMsg) {
		showDialog("confirm", "信息提示", confirmMsg, true, _submitFn);
	} else {
		_submitFn();
	}

	return returnFlag;
}


//form ajax 提交，不验证只做ajax提交
function validateSimpleAjaxSubmit(form, flag, successcallback, errorcallback,
	confirmMsg) {
	var $form = $(form);
	var returnFlag = false;
	var _submitFn = function() {
		if (flag) {
			returnFlag = false;
			$.ajax({
				type: form.method || 'POST',
				url: $form.attr("action"),
				data: $form.serializeArray(),
				dataType: "json",
				cache: false,
				success: successcallback || function() {
					showDialog("success", "信息提示", "提交成功！");
				},
				error: errorcallback || function() {
					showDialog("error", "信息提示", "提交失败！");
				}
			});
		} else {
			returnFlag = true;
		}
	};

	if (confirmMsg) {
		showDialog("confirm", "信息提示", confirmMsg, true, _submitFn);
	} else {
		_submitFn();
	}

	return returnFlag;

}


/*	AjaxSubmit
 * 	@form：当前需要提交和验证的form对象
 * 	@flag：标识是否开启Ajax提交，false为普通提交
 * 	@successcallback：成功提交函数
 * 	@errorcallback：失败提交函数
 * 	@confirmMsg：确认提示框提示信息，缺省则不开启此功能。当为false时开启自定义验证区域提示功能
 */
//form ajax 提交，不验证只做ajax提交
function validateSimpleJsonAjaxSubmit(form, flag, successcallback, errorcallback,
	confirmMsg) {
	var $form = $(form);
	
	var returnFlag = false;
	var _submitFn = function() {
		if (flag) {
			returnFlag = false;
			$.ajax({
				type: form.method || 'POST',
				url: $form.attr("action"),
				data: {"json":JSON.stringify($form.serializeObject())},
				dataType: "json",
				cache: false,
				success: successcallback || function() {
					showDialog("success", "信息提示", "提交成功！");
				},
				error: errorcallback || function() {
					showDialog("error", "信息提示", "提交失败！");
				}
			});
		} else {
			returnFlag = true;
		}
	};

	if (confirmMsg) {
		showDialog("confirm", "信息提示", confirmMsg, true, _submitFn);
	} else {
		_submitFn();
	}

	return returnFlag;

}



//Dialog
function showDialog(type, mtitle, mgs, atopen, yes_function, no_function) {
	var open = true;
	if (arguments.length == 4) {
		open = atopen;
	}
	if (arguments.length <= 4) {
		yes_function = function() {};
		no_function = function() {};
	}

	if (arguments.length == 5) {
		no_function = function() {};
	}

	if (type == "success") {
		$("#dialog_success span").html(mgs);
		$("#dialog_success").dialog({
			title: mtitle,
			modal: true,
			draggable: false,
			autoOpen: open,
			buttons: {
				"确定": function() {
					yes_function();
					$(this).dialog("close");
				}
			}
		});
	} else if (type == "error") {
		$("#dialog_erro span").html(mgs);
		$("#dialog_erro").dialog({
			title: mtitle,
			modal: true,
			draggable: false,
			autoOpen: open,
			buttons: {
				"确定": function() {
					yes_function();
					$(this).dialog("close");
				}
			}
		});
	} else if (type == "confirm") {
		$("#dialog_confirm span").html(mgs);
		$("#dialog_confirm").dialog({
			title: mtitle,
			modal: true,
			draggable: false,
			autoOpen: open,
			buttons: {
				"确定": function() {
					yes_function();
					$(this).dialog("close");
				},
				"取消": function() {
					no_function();
					$(this).dialog("close");
				}
			}
		});
	} else if (type == "loaing") {
		$("#dialog_loaing span").html(mgs);
		$("#dialog_loaing").dialog({
			title: mtitle,
			modal: true,
			dialogClass: "no-close",
			closeOnEscape: false,
			autoOpen: open,
			draggable: false
		});
	} else if (type == "info") {
		$("#dialog_info span").html(mgs);
		$("#dialog_info").dialog({
			title: mtitle,
			modal: false,
			draggable: true,
			autoOpen: open,
			close: function(event, ui) {
				no_function();
			},
			buttons: {
				"确定": function() {
					yes_function();
					$(this).dialog("close");
				}
			}
		});
	} else if (type == "warning") {
		$("#dialog_warning span").html(mgs);
		$("#dialog_warning").dialog({
			title: mtitle,
			modal: false,
			draggable: false,
			autoOpen: open,
			buttons: {
				"确定": function() {
					yes_function();
					$(this).dialog("close");
				}
			}
		});
	}

	//dialog open
	if (type == "success_open") {
		$("#dialog_success").dialog("open");
		return;
	}
	if (type == "info_open") {
		$("#dialog_info").dialog("open");
		return;
	}
	if (type == "error_open") {
		$("#dialog_erro").dialog("open");
		return;
	}
	if (type == "confirm_open") {
		$("#dialog_confirm").dialog("open");
		return;
	}
	if (type == "warning_open") {
		$("#dialog_warning").dialog("open");
		return;
	}
	if (type == "loading_open") {
		$("#dialog_loaing").dialog("open");
		return;
	}

	//dialog close

	if (type == "success_close") {
		$("#dialog_success").dialog("close");
		return;
	}
	if (type == "info_close") {
		$("#dialog_info").dialog("close");
		return;
	}
	if (type == "error_close") {
		$("#dialog_erro").dialog("close");
		return;
	}
	if (type == "confirm_close") {
		$("#dialog_confirm").dialog("close");
		return;
	}
	if (type == "warning_close") {
		$("#dialog_warning").dialog("close");
		return;
	}
	if (type == "loading_close") {
		//$("#dialog_loaing").dialog("close");
		$("#dialog_loaing").html("");
		$("#dialog_loaing").dialog("destroy");
		return;
	}

}

//Custom Dialog

/*	ajaxLoadDialog
 *  ajax异步页面加载回调Dialog
 * 	@settings：唯一参数，类型为json。
 *  json内置参数列表：
 * 	@refresh：Dialog关闭后是否刷新父级页面。（默认不刷新）
 * 	@loadURL：打开Dialog中载入的页面地址。
 * 	@parameter：Dialog中载入的页面地址参数。
 * 	@baseURL：需要在关闭后刷新的父级页面。
 * 	@reloadDivID：需载入刷新父级页面的容器ID。
 * 	@title：Dialog标题
 * 	@height：Dialog窗体高度
 *  @max_height：Dialog窗体高度最大值，内容超过此值时出现上下滚动条。
 * 	@width：Dialog窗体宽度
 *  @close_function：关闭窗体后的回调函数。
 *
 */
function ajaxLoadDialog(settings) {
	var refresh, title, height, max_height, width, baseURL, loadURL, parameter, close_function, reloadDivID;
	settings = $.extend(settings || {});
	refresh = settings.refresh || false;
	title = settings.title || "";
	height = settings.height || "auto";
	max_height = settings.max_height || null;
	width = settings.width || 300;
	baseURL = settings.baseURL || null;
	loadURL = settings.loadURL || null;
	parameter = settings.parameter || null;
	close_function = settings.close_function || null;
	reloadDivID = settings.reloadDivID || null;

	if (close_function == null) {
		close_function = function() {};
	}
	if (refresh) {
		if (baseURL == null || loadURL == null || reloadDivID == null) {
			alert("Dialog调用参数不正确！");
			return;
		}
		$("#dialog_ajax").load(loadURL, parameter,function(){
			var div_height = $("#dialog_ajax").height();
			if(max_height != null && div_height > max_height){
				$("#dialog_ajax").height(max_height);
				height = max_height;
			}
		});
		$("#dialog_ajax").dialog({
			title: title,
			modal: false,
			draggable: true,
			autoOpen: true,
			height: height,
			width: width,
			close: function(event, ui) {
				close_function();
				$("#" + reloadDivID).load(baseURL);
				$(this).html("");
				$(this).dialog("destroy");
			}
		});
	} else {
		if (loadURL == null) {
			alert("Dialog调用参数不正确！");
			return;
		}
		$("#dialog_ajax").load(loadURL, parameter, function(){
			var div_height = $("#dialog_ajax").height();
			if(max_height != null && div_height > max_height){
				$("#dialog_ajax").height(max_height);
				height = max_height;
			}
		});
		$("#dialog_ajax").dialog({
			title: title,
			modal: false,
			draggable: true,
			autoOpen: true,
			height: height,
			width: width,
			close: function(event, ui) {
				close_function();
				$(this).html("");
				$(this).dialog("destroy");
			}
		});
	}
}

/*	CustomDialog
 *  自定义Dialog
 * 	@settings：唯一参数，类型为json。
 *  json内置参数列表：
 * 	@autoOpen：是否自动显示Dialog（默认自动显示）
 * 	@title：Dialog标题。
 * 	@infohtml：Dialog内容显示HTML。
 * 	@height：Dialog高度设置。（值为空，高度自动）
 *  @max_height：Dialog窗体高度最大值，内容超过此值时出现上下滚动条。
 * 	@width：Dialog宽度设置。
 *  @close_function：关闭窗体后的回调函数。
 *  @yes_function：确认按钮回调函数。
 * 	@dialogObj：需要初始化的容器对象。
 *	@methods：可以执行的对话框方法名。(常用方法：close，destroy，open)
 */
function CustomDialog(settings) {
	var autoOpen, title, infohtml, height, max_height, width, close_function, yes_function, dialogObj, methods;
	settings = $.extend(settings || {});
	autoOpen = settings.autoOpen || true;
	title = settings.title || "";
	infohtml = settings.infohtml || "";
	height = settings.height || "auto";
	max_height = settings.max_height || null;
	width = settings.width || 300;
	yes_function = settings.yes_function || null;
	close_function = settings.close_function || null;
	dialogObj = settings.dialogObj || null;
	methods = settings.methods || null;
	
	if (yes_function == null) {
		yes_function = function() {};
	}
	
	if (close_function == null) {
		close_function = function() {};
	}
	var div_height = null;
	if(dialogObj != null){
		div_height = dialogObj.height();
	}else{
		$("#dialog_customInfo").html(infohtml);
		div_height = $("#dialog_customInfo").height();
		dialogObj = $("#dialog_customInfo");
	}
	
	if(max_height != null && div_height > max_height){
		height = max_height;
	}
	
	dialogObj.dialog({
		title: title,
		modal: false,
		draggable: true,
		autoOpen: autoOpen,
		height: height,
		width: width,
		close: function(event, ui) {
			close_function();
			//$(this).dialog("close");
		},
		buttons: {
			"确定": function() {
				var close = yes_function();
				if(close != false){
					$(this).dialog("close");
				}
			}
		}
	});
	
	if(methods != null){
		dialogObj.dialog(methods);
	}
}

/*	CustomDialog
 *  自定义Dialog
 * 	@settings：唯一参数，类型为json。
 *  json内置参数列表：
 * 	@autoOpen：是否自动显示Dialog（默认自动显示）
 * 	@title：Dialog标题。
 * 	@infohtml：Dialog内容显示HTML。
 * 	@height：Dialog高度设置。（值为空，高度自动）
 *  @max_height：Dialog窗体高度最大值，内容超过此值时出现上下滚动条。
 * 	@width：Dialog宽度设置。
 *  @close_function：关闭窗体后的回调函数。
 */
function CustomDialog1(settings) {
	var autoOpen, title, infohtml, height, max_height, width, close_function, yes_function;
	settings = $.extend(settings || {});
	autoOpen = settings.autoOpen || true;
	title = settings.title || "";
	infohtml = settings.infohtml;
	height = settings.height || "auto";
	max_height = settings.max_height || null;
	width = settings.width || 300;
	yes_function = settings.yes_function || null;
	close_function = settings.close_function || null;
	
	if (yes_function == null) {
		yes_function = function() {};
	}
	
	if (close_function == null) {
		close_function = function() {};
	}

	$("#dialog_customInfo").html(infohtml);
	var div_height = $("#dialog_customInfo").height();
	if(max_height != null && div_height > max_height){
		height = max_height;
	}
	$("#dialog_customInfo").dialog({
		title: title,
		modal: false,
		draggable: true,
		autoOpen: autoOpen,
		height: height,
		width: width,
		close: function(event, ui) {
			close_function();
			//$(this).dialog("close");
			$(this).html("");
			$(this).dialog("destroy");
		},
		buttons: {
			"确定": function() {
				yes_function();
			//$(this).dialog("close");
			$(this).html("");
			$(this).dialog("destroy");
			}
		}
	});
}

//获取项目根目录
function getRootPath() {
	//获取当前网址，如： http://localhost:8080/ems/Pages/Basic/Person.jsp
	var curWwwPath = window.document.location.href;
	//获取主机地址之后的目录，如： /ems/Pages/Basic/Person.jsp
	var pathName = window.document.location.pathname;
	var pos = curWwwPath.indexOf(pathName);
	//获取主机地址，如： http://localhost:8080
	var localhostPath = curWwwPath.substring(0, pos);
	//获取带"/"的项目名，如：/ems
	var projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1);
	return (localhostPath + projectName);
}

//检测字符长度，兼容汉字，汉字为两个字符。
function checkLen(field, rules, i, options) {
	var size = field.attr("maxsize");
	var l = 0;
	s = field.val();
	var a = s.split("");
	for (var i = 0; i < a.length; i++) {
		if (a[i].charCodeAt(0) < 299) {
			l++;
		} else {
			l += 2;
		}
	}
	if (l > size) {
		return "最多输入" + size + "字符,(汉字为两个字符)";
	}
}

//字符串比对，高亮显示不同部分。
//obj1:需要比对的字串HTML对象
//obj2:需要比对的字串HTML对象
//obj对象必须有text()属性方法。
function compare_str(obj1, obj2) {
	var res1 = "";
	var res2 = "";

	var str1 = obj1.text();
	var str2 = obj2.text();

	while (str1.length && str2.length) {
		var arr = find_pos(str1, str2);

		if (arr && arr.length) {
			if (arr[0]) {
				res2 += ("<font style='color: red'>" + str2.substr(0, arr[0]) + "</font>");
				str2 = str2.substr(arr[0]);
			}
			res1 += (str1.substr(0, arr[1]));
			res2 += (str2.substr(0, arr[1]));

			str1 = str1.substr(arr[1]);
			str2 = str2.substr(arr[1]);

		} else {
			arr = find_max_pos(str1, str2);
			tmp = find_match_pos(str1, str2);

			if (tmp.length) {
				if (arr[0] > tmp[0] && arr[1] > tmp[1]) {
					arr = tmp;
				}
			}

			if (arr != undefined && arr.length) {
				res1 += ("<font style='color: red;text-decoration:line-through'>" + str1.substr(0, arr[0]) + "</font>");
				res2 += ("<font style='color: red'>" + str2.substr(0, arr[1]) + "</font>");
				res1 += (str1.substr(arr[0], arr[2]));
				res2 += (str2.substr(arr[1], arr[2]));

				str1 = str1.substr(arr[0] + arr[2]);
				str2 = str2.substr(arr[1] + arr[2]);
			} else {
				res1 += ("<font style='color: red;text-decoration:line-through'>" + str1 + "</font>");
				res2 += ("<font style='color: red'>" + str2 + "</font>");
				str1 = '';
				str2 = '';
			}
		}
	}
	if (str1.length) {
		res1 += ("<font style='color: red;text-decoration:line-through'>" + str1 + "</font>");
	}
	if (str2.length) {
		res2 += ("<font style='color: red'>" + str2 + "</font>");
	}

	obj1.html(res1);
	obj2.html(res2);
}

//从串2查找对串1前N个字符的最大匹配
function find_pos(str1, str2) {
	var len = 1,
		pos = 0;
	var ret;

	while (pos >= 0) {
		var str = str1.substr(0, len);
		pos = str2.indexOf(str);
		if (pos != -1) {
			ret = [];
			ret.push(pos, len);
			len++;
			if (len > str1.length) {
				break;
			}
		} else {
			break;
		}
	}
	return ret;
}

//从串2查找对串1从第N个字符开始前N个字符的首次匹配
function find_match_pos(str1, str2, arr) {
	var len = 1,
		pos1 = 0,
		pos2 = 0,
		_pos2;
	var ffind = false;
	var ret = [];

	if (arr != undefined) {
		pos1 = arr[0];
		pos2 = arr[1];
	}
	while ((pos1 + len) < str1.length) {
		var str = str1.substr(pos1, len);
		_pos2 = str2.indexOf(str);
		if (_pos2 != -1) {
			ffind = true;
			len++;
			pos2 = _pos2;
		} else {
			if (ffind) {
				len--;
				break;
			} else {
				pos1 += len;
				len = 1;
			}
		}
	}

	if (ffind) {
		ret.push(pos1, pos2, len);
	} else {
		ret = [];
	}
	return ret;
}

//查找两个字串的字符数目最大匹配
function find_max_pos(str1, str2) {
	var ret, pos1, pos2, arr = null;
	var res, max = 0;
	do {
		ret = find_match_pos(str1, str2, arr);
		if (ret.length) {
			if (ret[2] > max) {
				res = ret;
				max = ret[2];
			}
			arr = new Array(ret[0] + 1, ret[1]);
		}
	}
	while (ret.length);
	return res;
}

//进度条初始化函数
//$obj:进度条位置容器对象
//setvalue:初始化值
function progressbarInit($obj,setvalue){
	var value = parseInt(setvalue);
	var progressLabel = null;
	if($obj.children(".progress-label").size() == 0){
		progressLabel = $("<div class='progress-label'></div>");
	}else{
		progressLabel = $obj.children(".progress-label");
	}
	if( value > 55 ){
		progressLabel.css("color","#fff");
	}else{
		progressLabel.css("color","#000");
	}
	if( value <= 99 ){
		progressLabel.text(setvalue + "%");
	}else{
		progressLabel.text("Complete!");
	}
	$obj.append(progressLabel);
	$obj.progressbar({
    value: value
  });
}

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter
		"S" : this.getMilliseconds()
		//millisecond
	}
	if (/(y+)/.test(format))
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for ( var k in o)
		if (new RegExp("(" + k + ")").test(format))
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	return format;
}