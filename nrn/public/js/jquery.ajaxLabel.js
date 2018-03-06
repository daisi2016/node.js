(function($){
	var privateFunction = function() {
		//todo
	}
	//var icon = false;
	//var ajaxUrl = null;
	//var data = null;
	//var successCall = null;
	//var erroCall = null;
	//var completeCall = null;
	//var textCall = null;
	//var type = text;
	//var defaultValue = null;

	var methods = {
	        init: function(options) {
	            return this.each(function() {
	                var $this = $(this);
	                var settings = $this.data('ajaxLabel');
	                
	                if(typeof(settings) == 'undefined') {
	                	
	                    var defaults = {
	                        propertyName: 'value',
	                        onSomeEvent: function() {}
	                    }
	                    
	                    settings = $.extend({}, defaults, options);
	
	                    $this.data('ajaxLabel', settings);
	                } else {
	                    settings = $.extend({}, settings, options);
	                }
	                
	                settings.icon = settings.icon || false;
					settings.ajaxUrl = settings.ajaxUrl || null;
					settings.textCall = settings.textCall || defaultFun;
	                settings.success = settings.success || defaultFun;
					settings.error = settings.error || defaultFun;
					settings.complete = settings.complete || defaultFun;
	                settings.type = settings.type || "text";
	                settings.defaultValue = settings.defaultValue || null
	                
	                labelInit($this,settings);
	            });
	        },
	        destroy: function(options) {
	            return $(this).each(function() {
	                var $this = $(this);
	 
	                $this.removeData('ajaxLabel');
	            });
	        }
	};


	$.fn.ajaxLabel = function(){
		var method = arguments[0];
 
        if(methods[method]) {
            method = methods[method];
            arguments = Array.prototype.slice.call(arguments, 1);//从参数列表中排除第一参数，因为调用方法时并不需要它
        } else if( typeof(method) == 'object' || !method ) {
            method = methods.init;
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.pluginName' );
            return this;
        }
 
        return method.apply(this, arguments);// 用apply方法来调用我们的方法并传入参数
	};
  
	function labelInit(labelObj,settings){
		var validateClass = labelObj.attr("validateClass");
		var editObj = null;
		var editValue = null;
		var editText = null;
		var orgValue = labelObj.text();
		
		if(settings.icon){
			labelObj.addClass("ajax-lable-icon");
		}
		labelObj.addClass("ajax-lable-default");
		labelObj.attr("data-prompt-target","prompt-req-target-1");
		var editTextInput = $("<input type='text' value='' />");
		editTextInput.addClass("form-control");
		
		editTextInput.width(labelObj.width()- 70);
		editTextInput.val(labelObj.text());
		
		var saveButton = $("<div class='ajax-lable-save'></div>");
		var cancelButton = $("<div class='ajax-lable-cancel'></div>");
		var validateHidden = $("<input type='hidden' data-prompt-position='inline' data-prompt-target='prompt-req-target-1' />");
		
		if(settings.defaultValue != null && settings.defaultValue != ""){
			validateHidden.val(settings.defaultValue);
		}else{
			validateHidden.val(labelObj.text());
		}
		
		
		if(validateClass != undefined && validateClass != ""){
			editTextInput.addClass(labelObj.attr("validateClass"));
			validateHidden.addClass(labelObj.attr("validateClass"));
		}
		
		labelObj.append(validateHidden);
		
		saveButton.on("click",function(e){
			e.stopPropagation();
			if(settings.type == "text"){
				editObj = $(this).parent().find("input[type=text]");
				editValue = editObj.val();
				editText = editValue;
			}else if(settings.type == "select"){
				editObj = $(this).parent().find("select");
				editValue = editObj.val();
				editText = editObj.find("option:selected").text();
			}
			
			if(!editObj.validationEngine('validate')){
				if(settings.ajaxUrl != null && settings.ajaxUrl != ""){
					ajaxSave(editValue,editText,orgValue,"POST",labelObj,validateHidden,settings);
				}else{
					textSave(editValue,editText,labelObj,validateHidden,settings);
				}
			}
		});		
		
		cancelButton.on("click",function(e){
			e.stopPropagation();
			textCancel(orgValue,labelObj,settings);
		});
		
		labelObj.one("click",function(){
			//$(this).replaceWith(editTextInput);
			$(this).empty();
			$(this).append(editTextInput);
			$(this).append(cancelButton);
			$(this).append(saveButton);
			$(this).append(validateHidden);
			settings.textCall(editTextInput,validateHidden.val());
			$(this).removeClass("ajax-lable-icon");
			editTextInput.focus();
		});
	}

	function ajaxSave(editValue,editText,orgValue,requestType,labelObj,validateHidden,settings){
		var requestData = '{"name":"'+ labelObj.attr("name") +'","value":"'+editValue+'"}';
		requestData = $.parseJSON(requestData);
		$.ajax({
			type: requestType || 'POST',
			url: settings.ajaxUrl,
			data: requestData,
			dataType: "json",
			cache: false,
			success: function(data) {
				//labelObj.html(editText);
				settings.defaultValue = editValue;
				var DValue = settings.success(data,labelObj,editText,orgValue,validateHidden);
				if(DValue != null && DValue !="" ){
					settings.defaultValue = DValue;
				}
				labelInit(labelObj,settings);
			},
			error: function(data) {
				labelObj.html(orgValue);
				validateHidden.val(orgValue);
				settings.error(data,labelObj);
				labelInit(labelObj,settings);
			},
			complete: function() {
				//settings.complete(labelObj);
			}
		});
	}

	function textSave(editValue,editText,labelObj,validateHidden,settings){
		labelObj.html(editText);
		settings.defaultValue = editValue;
		labelInit(labelObj,settings);
		settings.complete(labelObj);
	}
	
	function textCancel(editText,labelObj,settings){
		labelObj.html(editText);
		labelInit(labelObj,settings);
		settings.complete(labelObj);
	}

	function defaultFun(data){
	  	//alert("defaultFun");
	}
	
})(jQuery);