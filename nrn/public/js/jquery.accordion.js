(function($){

var settings;	
var ajaxLoad = false;
var onClick = defaultFun;
var onExpand = defaultFun;
var queryOptKey = "";
$.fn.eAccordion = function(options){
	
	if (typeof options == 'object' || !options) {
		settings = $.extend(options, settings || {});
		//settings = options;
		ajaxLoad = settings.ajaxLoad || false;
		onClick = settings.onClick || defaultFun;
		onExpand = settings.onExpand || defaultFun;
		queryOptKey = settings.queryOptKey || "";
	}
	else {
      return this;
    }
    	
    accordionsInit($(this));
  };
  
function accordionsInit(root){
	root.children(".panel_info").hide();
	root.children(".panel_title").each(function(){
		$(this).click(function(){
			if($(this).hasClass("active")){

			}else{
				root.children(".panel_info").slideUp();
				root.children(".panel_title").removeClass("active");
				$(this).next().slideDown();
				$(this).addClass("active");
				onExpand($(this).next());
				if(ajaxLoad){
					$(this).next().html("<span>加载中...</span>");
					var queryJson = $(this).next().data(queryOptKey);
					panelPageload($(this).next(),$(this).next().attr("url"),queryJson);	
				}else{
					
				}
			}
		});
	});
}

function panelPageload(panel,loadUrl,query,callback){	
	if (callback == null) {
		callback = function() {};
	}
	if(query == "undefined"){
		query={};
	}
	panel.load(loadUrl, query, function(responseTxt, statusTxt, xhr) {
		if (statusTxt == "success")
			callback();
		if (statusTxt == "error")
			alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
}

 function defaultFun(){
  	//alert("defaultFun");
 }

})(jQuery);