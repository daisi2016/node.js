		(function($) {
    // 验证规则
    $.fn.validationEngineLanguage = function() {};
    $.validationEngineLanguage = {
        newLang: function() {
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* 必填",
                    "alertTextCheckboxMultiple": "* 必填",
                    "alertTextCheckboxe": "* 必填",
                    "alertTextDateRange": "* 必填"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* 无效 ",
                    "alertText2": " 日期范围"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* 无效 ",
                    "alertText2": " 时间范围"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* 最少 ",
                    "alertText2": " 个字符"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* 最多 ",
                    "alertText2": " 个字符"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* 至少填写其中一项"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* 最小值为 "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* 最大值为 "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* 日期需在 ",
                    "alertText2": " 之前"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* 日期需在 ",
                    "alertText2": " 之后"
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* 最多选择 ",
                    "alertText2": " 个项目"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* 最少选择 ",
                    "alertText2": " 个项目"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* 两次输入不一致"
                },
                "creditCard": {
                    "regex": /^(4\\d{12}(?:\\d{3})?)$/,
                    "alertText": "* 无效"
                },
                "passwordsRule": {
                    "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
                    "alertText": "* 密码不符合规则，请修改。"
                },
                "phone": {
// credit:jquery.h5validate.js / orefalo
//                   "regex": /^([\+][0-9]{1,3}[ \.\-])?([\(]{1}[0-9]{2,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
//                	 "regex": /^(0(10|2[1-3]|[3-9]\d{2}))?(-|\s)?[1-9]\d{6,7}$/,
//                	 "regex": /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/,
                	"regex": /^([0-9]+\-)+([0-9]+)+(\-[0-9]{1,4})?$/,
                    "alertText": "*格式:区号-电话号码-分机</br>不能包含汉字、字母与特殊字符!,@,#,$..."
                },
                "fax": {
                	"regex": /^([0-9]+\-)+([0-9]+)+(\-[0-9]{1,4})?$/,
                    "alertText": "*格式:区号-电话号码-分机</br>不能包含汉字、字母与特殊字符!,@,#,$..."
                },
                "mobilePhone": {
                    "regex": /^0?(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/,
                    "alertText": "* 无效"
                },
                "mobilePhone2": {
                    "regex": /^0?(13|15|17|18)[0-9]{9}$/,
                    "alertText": "* 无效"
                },
                "htmobilePhone": {
                	"func": function(field) {
                		var reg1 = /^(\d{11})$/; //判断11位数字
                		var reg2 = /^(\d)\1{10}$/; //判断11位数字相同
                        if (!reg1.test(field.val())) {
                            return false;
                        } else {
                        	if(reg2.test(field.val())){
                        		return false;
                        	}
                            return true;
                        }
                    },
                    "alertText": "* 无效"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* 无效"
                },
                "integer": {
                    "regex": /^[-]{0,1}\d+$/,
                    "alertText": "* 请输入整数"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit:orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* 请输入数字"
                },
                "date": {
                    "regex": /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229)$/,
                    "alertText": "* 无效，格式必需为 YYYYMMDD"
                },
//    			"dateggqq": {
//                	"regex": /^(1|2|3|4|5|9)\d\d\d(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])$/,
//                    "alertText": "* 无效，格式必需为 YYYYMMDD"
//                },
                "dateggqq": {
                    "regex": /^(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})(((0[13578]|1[02])(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)(0[1-9]|[12][0-9]|30))|(02(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))0229)$/,
                    "alertText": "* 无效，格式必需为 YYYYMMDD"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* 无效"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* 无效"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* 只能填写数字"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* 只能填写英文字母"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* 只能填写数字与英文字母"
                },
                //tls warning:homegrown not fielded 
                "dateFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* 无效"
                },
                //tls warning:homegrown not fielded 
                "dateTimeFormat": {
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* 无效",
                    "alertText2": "可接受的格式： ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM 或 ",
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
                },

                /**
                 * 正则验证规则补充
                 * Author: ciaoca@gmail.com
                 * Date: 2013-10-12
                 */
                "chinese": {
                    "regex": /^[\u4E00-\u9FA5]+$/,
                    "alertText": "* 只能填写中文汉字"
                },
                "chinaId": {
                    /**
                     * 2013年1月1日起第一代身份证已停用，此处仅验证 18 位的身份证号码
                     * 如需兼容 15 位的身份证号码，请使用宽松的 chinaIdLoose 规则
                     * /^[1-9]\d{5}[1-9]\d{3}(
                     * 	(
                     * 		(0[13578]|1[02])
                     * 		(0[1-9]|[12]\d|3[01])
                     * 	)|(
                     * 		(0[469]|11)
                     * 		(0[1-9]|[12]\d|30)
                     * 	)|(
                     * 		02
                     * 		(0[1-9]|[12]\d)
                     * 	)
                     * )(\d{4}|\d{3}[xX])$/i
                     */
//                    "regex": /^[1-9]\d{5}[1-9]\d{3}(((0[13578]|1[02])(0[1-9]|[12]\d|3[0-1]))|((0[469]|11)(0[1-9]|[12]\d|30))|(02(0[1-9]|[12]\d)))(\d{4}|\d{3}[X])$/,
                	"func":function isCnNewID(field){
                		var cid = field.val();
                	    var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
                	    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
                	    var reg1 = /^[1-9]\d{5}[1-9]\d{3}(((0[13578]|1[02])(0[1-9]|[12]\d|3[0-1]))|((0[469]|11)(0[1-9]|[12]\d|30))|(02(0[1-9]|[12]\d)))(\d{4}|\d{3}[X])$/; //判断11位数字
                	    if(reg1.test(cid)){
                	        var sum = 0, idx;  
                	        for(var i = 0; i < cid.length - 1; i++){  
                	            // 对前17位数字与权值乘积求和  
                	            sum += parseInt(cid.substr(i, 1), 10) * weight[i];  
                	        }  
                	                 idx = sum % 11;  
                	        // 检验第18为是否与校验码相等  
                	        return arrValid[idx] == cid.substr(17, 1);  
                	    }else{ 
                	        return false;  
                	    }  
                	} ,
                    "alertText": "* 无效"
                },
                "chinaIdLoose": {
//                    "regex": /^(\d{18}|\d{15}|\d{17}[xX])$/,
                    "func":function isCnNewID(field){
                		var cid = field.val();
                	    var weight = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子  
                	    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码  
                	    var reg1 = /^[1-9]\d{5}[1-9]\d{3}(((0[13578]|1[02])(0[1-9]|[12]\d|3[0-1]))|((0[469]|11)(0[1-9]|[12]\d|30))|(02(0[1-9]|[12]\d)))(\d{4}|\d{3}[X])$/; //判断11位数字
                	    if(reg1.test(cid)){
                	        var sum = 0, idx;  
                	        for(var i = 0; i < cid.length - 1; i++){  
                	            // 对前17位数字与权值乘积求和  
                	            sum += parseInt(cid.substr(i, 1), 10) * weight[i];  
                	        }  
                	                 idx = sum % 11;  
                	        // 检验第18为是否与校验码相等  
                	        return arrValid[idx] == cid.substr(17, 1);  
                	    }else{ 
                	        return false;  
                	    }  
                	} ,
                    "alertText": "* 无效"
                },
                "chinaZip": {
                    "regex": /^\d{6}$/,
                    "alertText": "* 无效"
                },
                "qq": {
                    "regex": /^[1-9]\d{4,10}$/,
                    "alertText": "* 无效"
                },
                "requiredSelect": {
                    "func": function(field) {
                        if (field.children().eq(1).text() == "==请选择==") {
                            field.val("==请选择==");
                            return false;
                        } else {
                            return true;
                        }
                    },
                    "alertText": "* 必填"
                },
                "minSizeNumSix": {
                    "func": function(field) {
                        if (!(isNaN(field.val())) && field.val().length < 6) {
                            return false;
                        } else {
                            return true;
                        }
                    },
                    "alertText": "数字账户需大于等于6位"
                },
                "minSizeSix": {
                    "func": function(field) {
                        if (!(isNaN(field.val())) && field.val().length < 6) {
                            return false;
                        } else {
                            return true;
                        }
                    },
                    "alertText": "密码需大于等于6位"
                },
                "checkLength9": {
                    "regex": /^(\d{9}|\w{9})$/,
                    "alertText": "* 必须9位"
                },
                "checkLength8": {
                    "regex": /^(\d{8}|\w{8})$/,
                    "alertText": "* 必须8位"
                },
                "checkLength10": {
                    "regex": /^(\d{10}|\w{10})$/,
                    "alertText": "* 无效"
                },
                "checkLength12": {
                    "regex": /^(\d{12}|\w{12})$/,
                    "alertText": "* 无效"
                },
                "checkScore": {
                    "regex": /^(?:0|[1-9][0-9]?|100)$/,
                    "alertText": "* 分数必须为0-100之间"               	
                },
                "checkPercent": {
                    "regex":  /^(\d{1,2}(\.\d{1,3})?|100)$/,
                    "alertText": "* 必须为0-100之间的数字"               	
                },
                "checkScore2": {
                    "regex":  /^[1-9]\d*$/,
                    "alertText": "* 必须为大于等于1的整数"               	
                },
                "checkMoney": {
                    "regex": /^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/,
                    "alertText": "* 两位小数的数字"               	
                },
                "checkSpace": {
                    "regex": /^\S+$/,
                    "alertText": "* 不能输入空格"               	
                },
                "specialCharactor": {
                    "regex": /^([\u4E00-\u9FA5]|\w|-)*$/,
                    "alertText": "* 不能输入特殊字符"               	
                },
                "nonPureNumber": {
                    "regex": /^(?!\d*$)/,
                    "alertText": "* 不能为纯数字"
                },
                "checkOrgCode": {
                    "regex": /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{1}$/,
                    "alertText": "* 无效代码"               	
                },
                /**
                 * 自定义公用提示信息：
                 * 外部通过 $.validationEngineLanguage.allRules.validate2fields.alertText 可获取
                 *
                 * 	"validate2fields": {
                 * 		"alertText": "* 请输入 HELLO"
                 *	 },
                 * 	
                 *
                 * 自定义规则示例：
                 * 	"requiredInFunction": { 
                 * 		"func": function(field,rules,i,options){
                 * 			return (field.val()=="test") ? true : false;
                 * 		},
                 * 		"alertText": "* Field must equal test"
                 * 	},
                 *
                 *
                 * Ajax PHP 验证示例
                 * 	"ajaxUserCallPhp": {
                 * 		"url": "phpajax/ajaxValidateFieldUser.php",
                 * 		// you may want to pass extra data on the ajax call
                 * 		"extraData": "name=eric",
                 * 		// if you provide an "alertTextOk", it will show as a green prompt when the field validates
                 * 		"alertTextOk": "* 此帐号名称可以使用",
                 * 		"alertText": "* 此名称已被其他人使用",
                 * 		"alertTextLoad": "* 正在确认帐号名称是否有其他人使用，请稍等。"
                 * 	},
                 * 	"ajaxNameCallPhp": {
                 * 		// remote json service location
                 * 		"url": "phpajax/ajaxValidateFieldName.php",
                 * 		// error
                 * 		"alertText": "* 此名称已被其他人使用",
                 * 		// speaks by itself
                 * 		"alertTextLoad": "* 正在确认名称是否有其他人使用，请稍等。"
                 * 	}
                 */
            };

        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);