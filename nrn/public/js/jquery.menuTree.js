
(function($){

var settings;

var onClick = defaultFun;
var onDBClick = defaultFun;
var onExpand = defaultFun;
var onCollapsed = defaultFun;
var extend = false;
var ajax = false;
var oneExtend = false;
var url = null;
var method = "post";
var data = null;

  $.fn.wTree = function(methods,options){
  	
  	if (/^(extend|oneExtend|onClick|onDBClick|onExpand|onCollapsed)$/i.test(options)) {
  		options = options.toLowerCase();
  	}
  	else if (typeof options == 'object' || !options) {
  		//settings = $.extend(options, settings || {});
  		settings = options;
  		onClick = settings.onClick || defaultFun;
  		onDBClick = settings.onDBClick || defaultFun;
  		onExpand = settings.onExpand || defaultFun;
  		onCollapsed = settings.onCollapsed || defaultFun;
  		extend = settings.extend || false;
  		oneExtend = settings.oneExtend || false;
  	}
  	else {
      return this;
    }
  	
	switch(methods){
		case "new":
		treeInit($(this));
		break;
		case "options":
		extendEvent($(this),methods);
		break;
		default:
		treeInit($(this));
		break;
	}
  };
  
  function treeInit(rootObject){
		if(!extend){
			rootObject.find("ul").hide();
		}
		
		rootObject.children().children("a").addClass("rootNodeCollapsed");
		rootObject.children().children().find("ul").addClass("nodeChild");
		nodeEventBind(rootObject);
		extendEvent(rootObject,"new");
	}
  
  function nodeEventBind(nodeObject){
		/* base Event */
		if(oneExtend){
			nodeObject.children().children("a").click(function(){
				$(".root_tree li ul").slideUp();
			});
		}
		nodeObject.delegate("a","click",function(){
			var parentObject = $(this);
			nodeObject.find("a").removeClass("nodeSelect");

			
			$(this).addClass("nodeSelect");
			if($(this).next("ul").is(":hidden")){
				$(this).next("ul").slideDown("normal",function(){
					if(parentObject.hasClass("rootNodeCollapsed")){
						parentObject.removeClass("rootNodeCollapsed");
						parentObject.addClass("rootNodeExtend");
					}
					callFun(parentObject,"extend");
				});
			}else
			{
				$(this).next("ul").slideUp("normal",function(){
					if(parentObject.hasClass("rootNodeExtend")){
						parentObject.removeClass("rootNodeExtend");
						parentObject.addClass("rootNodeCollapsed");
					}
					callFun(parentObject,"collapsed");
				});
			}
		});
		
	}
  
  function defaultFun(){
  	//alert("defaultFun");
  }
  
  function callFun(object,event){
		if(event == "extend" && object != null){
			onExpand(object);
		}
		if(event == "collapsed" && object != null){
			onCollapsed(object);
		}
	}
  
  function extendEvent(nodeObject,type){
		/* Extend Event */
//		if(onExpand != defaultFun && type != "new"){
//			//解绑Tree下所有onExpand 事件
//			nodeObject.undelegate("a","onClick");
//			nodeEventBind(nodeObject);
//			nodeObject.delegate("a","onClick",function(){
//				onClick($(this));
//			});
//		}
//		if(onCollapsed != defaultFun && type != "new"){
//			//解绑Tree下所有onCollapsed 事件
//			nodeObject.undelegate("a","onClick");
//			nodeEventBind(nodeObject);
//			nodeObject.delegate("a","onClick",function(){
//				onClick($(this));
//			});
//		}
		if(onClick != defaultFun){
			//解绑Tree下所有click 事件
			nodeObject.undelegate("a","click");
			nodeEventBind(nodeObject);
			nodeObject.delegate("a","click",function(){
				onClick($(this));
			});
		}
		if(onDBClick != defaultFun){
			//解绑Tree下所有DBclick 事件
			//nodeObject.undelegate("a","dblclick");
			nodeObject.delegate("a","dblclick",function(){
				onDBClick($(this));
			});
		}
	}

})(jQuery);