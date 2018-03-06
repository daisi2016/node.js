//Page Init
$(function(){
	//alert("11111");
	//Date Ui init
	$(".datepicker").datepicker({
		//showOn: "both",
		changeMonth: true,
		changeYear: true,
		showButtonPanel: true,
		yearRange: "1900:2115"
		//buttonImage: "images/calendar.gif",
		//buttonImageOnly: true
	});
	$( ".datepicker" ).datepicker( "option", $.datepicker.regional[ "zh-CN" ] );
	
	$(".UI_collection").load("UIBase.xml #dialog_ui");
	
//	.ajaxStart(function(){
//		showDialog("loaing","信息提示","正在努力加载中！");
//	});
//	.ajaxComplete(function(){
//		showDialog("close");
//	});
	
});