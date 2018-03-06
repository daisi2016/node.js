(function($){

$.fn.eTabs = function(options){
	
	var settings;
	var type = "normal";
	var effect = "fade";
	
	var ajax = false;
	var url = "null";
	var method = "post";
	var data = "null";
	
	var onClick = null;
	
  	if (/^(onClick|ajax|effect|type)$/i.test(options)) {
  		options = options.toLowerCase();
  	}
  	else if (typeof options == 'object' || !options) {
  		settings = $.extend(options, settings || {});
		//settings = options;
		onClick = settings.onClick || null;
		type = settings.type || "normal";
		effect = settings.effect || "fade";
  	}
  	else {
      return this;
    }
  	
  	tabsInit($(this),type);
  };
  
  function tabsInit(rootObject,type){
  	
		var allTabs = rootObject.children(".tabPage");
		var onTabs = $(rootObject.children().children(".on").attr("href"));
  	
  		if(type=="normal"){
  			allTabs.hide();
			onTabs.show();
			rootObject.children(".tabs_title").children("a").click(function(){
				allTabs.hide();
		    	$(".tabs_title a").removeClass("on");
		    	$(this).addClass("on");
		    	$($(this).attr("href")).fadeIn();
			});
  		}
  		else if(type=="iframe"){
  			allTabs.hide();
			onTabs.show();
			rootObject.children(".tabs_title").children("a").click(function(){
				allTabs.hide();
		    	$(".tabs_title a").removeClass("on");
		    	$(this).addClass("on");
		    	$($(this).attr("href")).fadeIn();
		    	$($(this).attr("href")).children("iframe").attr("src",$(this).attr("url"));
			});
			rootObject.children().children(".on").click();
  		}else if(type=="ajax"){
  			
  		}
  }

})(jQuery);