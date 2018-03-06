//信息录入 身份证读卡

function doGetCardInfo() {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //	alert(cardinfo);
    //	cardinfo="测试名|M|320923|1888aa1221|18881221|上海add|浦东|1999-12-12|2001-21-21|1|98|11|12";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            // 头像
            var picpathhead = idcardinfos[11];
            // 身份证图片
            var picpathid;

            if (picpathhead && picpathhead.indexOf("file:///") != -1) {
                picpathhead = picpathhead.replace("file:///", "");
            }

            if (idcardinfos.length == 13) {
                picpathid = idcardinfos[12];
                if (picpathhead && picpathid.indexOf("file:///") != -1) {
                    picpathid = picpathid.replace("file:///", "");
                }
            }
            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            Cardstartdate = startdate.substring(0, 4) + (startdate.substring(5, 7) - 1) + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                Cardenddate = enddate.substring(0, 4) + (enddate.substring(5, 7) - 1) + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            //
            //			document.getElementById("nameInput_Id").value=name;//姓名
            //			document.getElementById("fullNameInputId").value=name;//全名
            $('#nameInput_Id').val(name);
            $('#custNameId').val(name);

            changeSelect($('#custFlagSelect')[0], '0'); //境内，境外
            changeSelect($('#sexSelect')[0], sex); //性别
            changeSelect($('#nationCodeSelect')[0], country, true); //国籍
            changeSelect($('#certTypeSelect')[0], type, true); //证件类别
            $('#certNoId').val(id); //证件号
            $('#birthdayDtoStrId').val(birth); //生日
            $('#certStartDateDtoStrInput').val(Cardstartdate); //证件有效起始日
            if (CardEffective_years == '-') {
                $('#longtermcheckbox').click();
            } else {
                $('#effectiveYearsInput').val(CardEffective_years); //证件有效期限
                $('#certEndDateDtoStrInput').val(Cardenddate); //证件有效结束日
            }

            $('#certAddrInputId').val(address); //证件地址
            $('#certDepartInputId').val(regorg); //发证机关
            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 国籍设置举例
            //			var select = document.getElementById("国籍id");
            //			for (var i = 0; i < select.options.length; i++) {
            //				if (select.options[i].text == country) {
            //					select.options[i].selected = true;
            //					break;
            //				}
            //			}
            // --------给页面输入设值结束----------------
            // 发送后台ajax验证
            $.ajax({
                url: baseUri + "/entry/checkAcctExist.action",
                data: {
                    certType: $('#certTypeSelect').val(),
                    certNo: $('#certNoInput').val()
                },
                type: 'post',
                dataType: "json",
                success: function(data) {
                    if ('T' == data.retFlag) {
                        if (data.lovl0 == '0') {
                            alert('该证件号暂无任何账户信息');
                        } else {
                            alert('该证件号已存在账户信息');
                        }
                    }
                },
                error: function() {

                }
            });

        }
    } else {
        alert("信息读卡失败");
    }
}

function doGetCardInfo1(baseUri) {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //	var cardinfo="孙明红|男|522401198411077052|1888aa1221|19841107|上海add|浦东|1999-12-12|2021-21-21|1|98|11|12||||";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
            return false;
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            // 头像
            var picpathhead = idcardinfos[11];
            // 身份证图片
            var picpathid;

            if (picpathhead && picpathhead.indexOf("file:///") != -1) {
                picpathhead = picpathhead.replace("file:///", "");
            }

            if (idcardinfos.length == 13) {
                picpathid = idcardinfos[12];
                if (picpathhead && picpathid.indexOf("file:///") != -1) {
                    picpathid = picpathid.replace("file:///", "");
                }
            }
            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            Cardstartdate = startdate.substring(0, 4) + (startdate.substring(5, 7) - 1) + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                Cardenddate = enddate.substring(0, 4) + (enddate.substring(5, 7) - 1) + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            $('#nameInput_Id').val(name);
            $('#custNameId').val(name);
            $('#certNoId').val(id); //证件号	
            var certTypeInput = $('#certType1').val(); //证件类别
            //alert(picpathid);
            if (picpathid != null) {
                picpathid = picpathid.replace(/\\/g, "/");
            }
            //alert(picpathid);
            //$('.user_card_info').css('background-image','url('+picpathid +')');
            $('.user_card_info img').removeAttr('src');
            $('.user_card_info img').attr('src', picpathid + "?t=" + Math.random());


            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
                return false;
            } else {}
            // --------给页面输入设值结束----------------
            checkAcctExist(baseUri, certTypeInput, id, name, "0");
            return true;
        }
    } else {
        alert("信息读卡失败");
        return false;
    }
}

//风险测评读卡按钮

function doGetCardInfo2(baseUri) {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //	var cardinfo="孙明红|男|522401198411077052|1888aa1221|19841107|上海add|浦东|1999-12-12|2021-21-21|1|98|11|12||||";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            // 头像
            var picpathhead = idcardinfos[11];
            // 身份证图片
            var picpathid;

            if (picpathhead && picpathhead.indexOf("file:///") != -1) {
                picpathhead = picpathhead.replace("file:///", "");
            }

            if (idcardinfos.length == 13) {
                picpathid = idcardinfos[12];
                if (picpathhead && picpathid.indexOf("file:///") != -1) {
                    picpathid = picpathid.replace("file:///", "");
                }
            }
            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            Cardstartdate = startdate.substring(0, 4) + (startdate.substring(5, 7) - 1) + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                Cardenddate = enddate.substring(0, 4) + (enddate.substring(5, 7) - 1) + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            //$('#nameInput_Id').val(name);
            $('#custNameId').val(name);
            $('#certNoId').val(id); //证件号	
            var certTypeInput = $('#certType1').val(); //证件类别
            //alert(picpathid);
            if (picpathid != null) {
                picpathid = picpathid.replace(/\\/g, "/");
            }
            //alert(picpathid);
            //$('.user_card_info').css('background-image','url('+picpathid +')');
            //            $('.user_card_info img').removeAttr('src');
            //            $('.user_card_info img').attr('src', picpathid+"?t="+Math.random());
            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
            } else {}
            // --------给页面输入设值结束----------------
            checkAcctExist(baseUri, certTypeInput, id, name);
            return true;
        }
    } else {
        alert("信息读卡失败");
        return false;
    }
}



//中登关联关系代理人身份证读卡按钮

function doGetCardInfoForAgent(baseUri) {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //	var cardinfo="孙明红|男|522401198411077052|1888aa1221|19841107|上海add|浦东|1999-12-12|2021-21-21|1|98|11|12||||";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            // 头像
            var picpathhead = idcardinfos[11];
            // 身份证图片
            var picpathid;

            if (picpathhead && picpathhead.indexOf("file:///") != -1) {
                picpathhead = picpathhead.replace("file:///", "");
            }

            if (idcardinfos.length == 13) {
                picpathid = idcardinfos[12];
                if (picpathhead && picpathid.indexOf("file:///") != -1) {
                    picpathid = picpathid.replace("file:///", "");
                }
            }
            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            Cardstartdate = startdate.substring(0, 4) + (startdate.substring(5, 7) - 1) + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                Cardenddate = enddate.substring(0, 4) + (enddate.substring(5, 7) - 1) + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            //$('#nameInput_Id').val(name);
            $('#agentNameInputId').val(name);
            $('#agentCertNoInput').val(id); //证件号	
            // var certTypeInput = $('#certType1').val(); //证件类别
            //alert(picpathid);
            if (picpathid != null) {
                picpathid = picpathid.replace(/\\/g, "/");
            }
            //alert(picpathid);
            //$('.user_card_info').css('background-image','url('+picpathid +')');
            //            $('.user_card_info img').removeAttr('src');
            //            $('.user_card_info img').attr('src', picpathid+"?t="+Math.random());
            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
            } else {}
            // --------给页面输入设值结束----------------
            checkAcctExist(baseUri, certTypeInput, id, name);
        }
    } else {
        alert("信息读卡失败");
    }
}

function doGetLegalCardInfo() {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //cardinfo="申晓艳|女|140102198201272367|汉|1982-01-27|山西省太原市迎泽区解放南路99号3楼1-4号|太原市公安局迎泽分局|2007-04-09|2017-04-09|1|10年|C:\NGBFActiveX\NgbfICCard\headpic.bmp|C:\NGBFActiveX\NgbfICCard\idpic.bmp";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            var startmonth = startdate.substring(5, 7) - 1;
            if (startmonth.toString().length == 1) {
                startmonth = '0' + startmonth;
            }

            Cardstartdate = startdate.substring(0, 4) + startmonth + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                var endmonth = enddate.substring(5, 7) - 1;
                if (endmonth.toString().length == 1) {
                    endmonth = '0' + endmonth;
                }
                Cardenddate = enddate.substring(0, 4) + endmonth + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            $('#legalPerson').val(name); //姓名
            if (sex == '男') {
                sex = 'M';
            } else {
                sex = 'F';
            }
            $('#legalGenderId').val(sex); //性别
            $('#legalNationCodeId').val('CHN'); //国籍
            $('#legalCertNo').val(id); //身份证号码
            $('#legalCertStartDateStrId').val(startdate.substring(0, 4) + startdate.substring(5, 7) + startdate.substring(8)); //证件有效起始日
            $('#legalCertEndDateStrId').val(enddate.substring(0, 4) + enddate.substring(5, 7) + enddate.substring(8)); //证件有效结束日
            $('#legalEffectiveYearsId').val(CardEffective_years); //证件有效期
            if (CardEffective_years == '-') {
                $('#legalEffectiveYearsId').attr('readonly', 'readonly');
                $('#legalLongtermId').get(0).checked = true;
            }
            $('#legalGenderId').multiselect('refresh');
            $('#legalNationCodeId').multiselect('refresh');


            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
            }
            // --------给页面输入设值结束----------------
        }
    } else {
        alert("信息读卡失败");
    }
}

function doGetContactCardInfo() {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //cardinfo="蔡荣|男|310107196607072431|汉|1966-07-07|上海市普陀区中山北路兰田新村11号102-103室|上海市公安局普陀分局|2005-11-07|2025-11-07|2|20年|C:\NGBFActiveX\NgbfICCard\headpic.bmp|C:\NGBFActiveX\NgbfICCard\idpic.bmp";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            var startmonth = startdate.substring(5, 7) - 1;
            if (startmonth.toString().length == 1) {
                startmonth = '0' + startmonth;
            }
            Cardstartdate = startdate.substring(0, 4) + startmonth + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                var endmonth = enddate.substring(5, 7) - 1;
                if (endmonth.toString().length == 1) {
                    endmonth = '0' + endmonth;
                }
                Cardenddate = enddate.substring(0, 4) + endmonth + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            $('#orgContactName').val(name); //姓名
            $('#orgContactCertNo').val(id); //身份证号码
            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
            }
            // --------给页面输入设值结束----------------
        }
    } else {
        alert("信息读卡失败");
    }
}

function doGetAgentCardInfo() {
    var obj = document.getElementById("idCard");
    var cardinfo = obj.GetCardInfo();
    //alert(cardinfo);
    //cardinfo="赖充镠|男|350481198411283516|汉|1984-11-28|福建省福州市鼓楼区白马北路131号|福州市公安局鼓楼分局|2009-10-22|2019-10-22|1|10年|C:\NGBFActiveX\NgbfICCard\headpic.bmp|C:\NGBFActiveX\NgbfICCard\idpic.bmp";
    if (cardinfo != "") {
        var index = cardinfo.indexOf("|");
        if (index == -1) {
            alert("信息读卡失败");
        } else {
            document.getElementById("idcardinfo").value = cardinfo;
            var idcardinfos = cardinfo.split("|");

            var country = "中国";
            var type = "身份证";
            var name = idcardinfos[0];
            var sex = idcardinfos[1];
            var id = idcardinfos[2];
            var birth = idcardinfos[4];
            if (birth.indexOf("-") > -1) {
                birth = birth.replace(/-/g, "");
            }
            var address = idcardinfos[5];
            var regorg = idcardinfos[6];

            // 初始证件时间，需要处理转换格式
            var startdate = idcardinfos[7];
            var enddate = idcardinfos[8];
            var periodvalidityname = idcardinfos[10];
            // 证件时间
            var Cardstartdate;
            var CardEffective_years;
            var Cardenddate;

            var YEAR = "年";
            var LONGTERM = "长期";
            var LONGTIME = "-";
            var LONGTIME_END = "30001231";

            // 证件时间换算
            var startmonth = startdate.substring(5, 7) - 1;
            if (startmonth.toString().length == 1) {
                startmonth = '0' + startmonth;
            }
            Cardstartdate = startdate.substring(0, 4) + startmonth + startdate.substring(8);

            if (LONGTERM == enddate) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                var endmonth = enddate.substring(5, 7) - 1;
                if (endmonth.toString().length == 1) {
                    endmonth = '0' + endmonth;
                }
                Cardenddate = enddate.substring(0, 4) + endmonth + enddate.substring(8);
            }
            if (LONGTERM == periodvalidityname) {
                CardEffective_years = LONGTIME;
                Cardenddate = LONGTIME_END;
            } else {
                periodvalidityname = periodvalidityname.replace(YEAR, "");
                if (periodvalidityname > 99) {
                    CardEffective_years = LONGTIME;
                    Cardenddate = LONGTIME_END;
                } else {
                    CardEffective_years = periodvalidityname;
                }
            }
            // --------给页面输入设值----------------
            $('#agentName').val(name); //姓名
            $('#agentCertnoId').val(id); //身份证号码
            $('#idcardinfo').val('A');
            $('#idcardinfo2').val(cardinfo);

            // 证件过期提醒
            var nowDateTime = new Date(); // 含时分秒
            var arr = enddate.split("-");
            var endDate = new Date(arr[0], arr[1], arr[2]);
            if (endDate.getTime() < nowDateTime.getTime()) {
                alert("身份证已过期，请使用新身份证进行读卡操作");
            }
            // --------给页面输入设值结束----------------
        }
    } else {
        alert("信息读卡失败");
    }
}

function setExsitCustInfo(baseUri, custNo, openDate, branchCode, custSts) {
    $("#custNoId").val(custNo);
    $("#openDateId").val(openDate);
    $("#branchCodeId").val(branchCode);
    $("#custStsId").val(custSts);

    // 检查存量客户对应的证件是否过期
    $.ajax({
        url: baseUri + "/identification/inner/checkCustCertIsDue.action",
        data: {
            "custNo": custNo
        },
        type: 'post',
        dataType: "json",
        success: function(data) {
            if (data.certDueFlag == true) {
                alert("存量客户[" + custNo + "]证件已过期，请办理证件信息更新");
            }
        },
        error: function() {
            alert("查询超时，请重新输入信息");
        }
    });
}

// 发送后台ajax验证

function checkAcctExist(baseUri, certType, certNo, name, custType) {
    $.ajax({
        url: baseUri + "/entry/checkAcctExist.action",
        data: {
            "certType": certType,
            "certNo": certNo,
            "name": name
        },
        type: 'post',
        dataType: "json",
        beforeSend : function() {
			showDialog('loaing', '处理中', '请稍等...');
		},
        success: function(data) {
        	//清空隐藏域
            $("#showCustInfo").empty();
            $("#custNoId").val("");
        	$("#openDateId").val("");
        	$("#branchNameId").val("");
        	$("#branchCodeId").val("");
        	$("#custStsId").val("");
        	showDialog('loading_close');
            var specialFlag = data.specialFlag; //身份证位数标志
            $("#specialFlag").val(specialFlag);
            if ('T' == data.retFlag) {
                var scustNoList = data.scustNoList; //客户号
                var sbranchNameList = data.sbranchNameList; //营业部名称
                var sbranchCode0List = data.sbranchCode0List; //营业部编码
                var sdate0List = data.sdate0List; //开户日期
                var custStsList = data.custStsList; //客户号状态
                var custStsNameList = data.custStsNameList; //客户号状态名称
                var scustType2 = data.scustType2List; //另库标志
                var attributeList = data.attributeList; //客户属性（个人和机构）
                if (data.lovl0 == '0') {
                    //$("#showCustNoListDiv").hide();
                    //$("#queryArchives").attr("disabled","disabled");
                    $("#custNoId").val("");
                    $("#openDateId").val("");
                    $("#branchNameId").val("");
                    $("#branchCodeId").val("");
                } else {
                    $("#queryArchives").removeAttr("disabled");
                    if (scustNoList.length > 0 && attributeList[0] == custType) {
                        var titleTr = "<tr>" + "<td colspan=\"4\">客户号：</td>" + "</tr>";
                        $("#showCustInfo").append(titleTr);
                        var noteStr = "";
                        for (var i = 0; i < scustNoList.length; i++) {
                            var trStr = "<tr>";
                            if (custStsList[i] != '3') {
                                trStr += "<td><input  name=\"aaa\" onclick=\"setExsitCustInfo('" + baseUri + "','" + scustNoList[i] + "','" + sdate0List[i] + "','" + sbranchCode0List[i] + "','" + custStsList[i] + "');\" type=\"radio\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                            } else {
                                if (scustType2[i] != "" && scustType2[i] != null) {
                                    trStr += "<td><input  name=\"aaa\" onclick=\"setExsitCustInfo('" + baseUri + "','" + scustNoList[i] + "','" + sdate0List[i] + "','" + sbranchCode0List[i] + "','" + custStsList[i] + "');\" type=\"radio\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                                } else {
                                    trStr += "<td><input  name=\"aaa\" onclick=\"\" type=\"radio\" disabled=\"disabled\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                                }
                            }
                            trStr += "&nbsp;<span>" + scustNoList[i] + "</span></td>";
                            trStr += "<td style='width:220px;'>" + sbranchNameList[i] + "</td>";
                            trStr += "<td>" + sdate0List[i] + "</td>";
                            trStr += "<td>" + custStsNameList[i] + "</td>";
                            trStr += "</tr>";
                            $("#showCustInfo").append(trStr);
                            noteStr += "|" + scustNoList[i] + "#" + sdate0List[i] + "#" + sbranchCode0List[i] + "#" + sbranchNameList[i] + "#" + custStsList[i] + "#" + custStsNameList[i];
                        }
                        //$('#noteId').val(noteStr);
                        $("#showCustNoListDiv").show();

                        for (var j = 0; j < custStsList.length; j++) {
                            if (custStsList[j] != '3') {
                                $("#showCustInfo :radio").eq(j).click();
                                break;
                            }
                        }
                    }
                }
            } else {
                //$("#queryArchives").attr("disabled","disabled");
                //$("#showCustNoListDiv").hide();
            }
            $("#next_but").removeAttr("disabled");
        },
        error: function() {
            //            alert("根据证件类别和证件号码验证[错误]！");
        	showDialog('loading_close');
            alert("查询超时，请重新输入信息");
        }
    });
}

/**
 * 发送后台ajax验证:验证账号是否存在对应的客户号信息
 * add by chenck 20150701
 * @param baseUri	
 * @param acctNo	账号（可以是客户ID、普通资金账号、普通交易账号）
 */

function checkAcctExistByAcctNo(baseUri, acctNo, acctType, custType,typeScope) {
    $.ajax({
       // url: baseUri + "/entry/checkAcctExistByAcctNo.action",
    	url: baseUri + "/entry/getExsitAcctByAcctNo.action",
        data: {
            "acctNo": acctNo,
            "acctType": acctType,
            "typeScope":typeScope
        },
        type: 'post',
        dataType: "json",
        beforeSend : function() {
			showDialog('loaing', '处理中', '请稍等...');
		},
        success: function(data) {
        	$("#showCustInfo").empty();
        	$("#custNoId").val("");
          	$("#openDateId").val("");
          	$("#branchNameId").val("");
          	$("#branchCodeId").val("");
          	$("#custStsId").val("");
          	showDialog('loading_close');
            if ('S' == data.retFlag) {
                $("#next_but").removeAttr("disabled");
                var specialFlag = data.specialFlag; //身份证位数标志
                $("#specialFlag").val(specialFlag);
                var scustNoList = data.scustNoList; //客户号
                var sbranchNameList = data.sbranchNameList; //营业部名称
                var sbranchCode0List = data.sbranchCode0List; //营业部编码
                var sdate0List = data.sdate0List; //开户日期
                var custStsList = data.custStsList; //客户号状态
                var custStsNameList = data.custStsNameList; //客户号状态名称
                var scustType2 = data.scustType2List; //另库标志
                var attributeList = data.attributeList; //客户属性（个人和机构）
                var certType = data.scert_type;
                var certNo = data.scert_no;
                var fullName = data.name;
                var custType1 = data.custType;
                if (custType1 != '' && custType1 != null) {
                    custType = custType1;
                    $("input[name='attribute'][value='" + custType + "']").attr("checked", true); // redio选中
                    if (custType == '0') { // 个人
                        $("#certTypeDiv2").hide();
                        $("#certTypeDiv1").show();
                        $("#image").show();
                        $("#user_card_read_id").show();
                        $("#user_card_read_id").removeAttr("disabled", "disabled");
                        $("#certType2").attr("disabled", "disabled");
                        $("#certType1").multiselect("enable");
                        $("#certNoId").removeAttr("readonly");
                        $("#custNameId").removeAttr("readonly");
                        $("#acctNoId").removeAttr("readonly"); // 账号
                    } else if (custType == '1') { //机构
                        $("#certTypeDiv1").hide();
                        $("#image").hide();
                        $("#certTypeDiv2").show();
                        $("#user_card_read_id").hide();
                        $("#user_card_read_id").attr("disabled", "disabled");
                        $("#certType1").attr("disabled", "disabled");
                        $("#certType2").multiselect("enable");
                        $("#certNoId").removeAttr("readonly");
                        $("#custNameId").removeAttr("readonly");
                        $("#acctNoId").removeAttr("readonly"); // 账号
                        $("#certNoId").val("");
                        $("#custNameId").val("");
                        // $("#acctNoId").val(""); // 账户
                        $("#showCustInfo").empty();
                        $('#certNoId').removeClass('validate[custom[chinaId]]');

                        custNochanged = "";
                        custNamechanged = "";
                        acctNochanged = "";
                    }
                }

                if (data.lovl0 == '0') {
                    //$("#showCustNoListDiv").hide();
                    $("#queryArchives").attr("disabled", "disabled");
                } else {
                    $("#queryArchives").removeAttr("disabled");
                    if (scustNoList.length > 0 && attributeList[0] == custType) {
                        $("#certNoId").val(certNo);
                        $("#custNameId").val(fullName);
                        if ('0' == custType) { //个人
                            $("#certType1").val(certType);
                            $("#certType1").multiselect("refresh");

                            $('#certNoId').removeClass('validate[custom[chinaId]]');
                        } else { //机构
                            $("#certType2").val(certType);
                            $("#certType2").multiselect("refresh");
                        }

                        var titleTr = "<tr>" + "<td colspan=\"4\">客户号：</td>" + "</tr>";
                        $("#showCustInfo").append(titleTr);
                        var noteStr = "";
                        for (var i = 0; i < scustNoList.length; i++) {
                            var trStr = "<tr>";
                            if (custStsList[i] != '3') {
                                trStr += "<td><input  name=\"aaa\" onclick=\"setExsitCustInfo('" + baseUri + "','" + scustNoList[i] + "','" + sdate0List[i] + "','" + sbranchCode0List[i] + "','" + custStsList[i] + "');\" type=\"radio\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                            } else {
                                if (scustType2[i] != "" && scustType2[i] != null) {
                                    trStr += "<td><input  name=\"aaa\" onclick=\"setExsitCustInfo('" + baseUri + "','" + scustNoList[i] + "','" + sdate0List[i] + "','" + sbranchCode0List[i] + "','" + custStsList[i] + "');\" type=\"radio\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                                } else {
                                    trStr += "<td><input  name=\"aaa\" onclick=\"\" type=\"radio\" disabled=\"disabled\" />"; //name属性不跟后台交互，'aaa'无含义，只保证单选name一致
                                }
                            }
                            trStr += "&nbsp;<span>" + scustNoList[i] + "</span></td>";
                            trStr += "<td style='width:220px;'>" + sbranchNameList[i] + "</td>";
                            trStr += "<td>" + sdate0List[i] + "</td>";
                            trStr += "<td>" + custStsNameList[i] + "</td>";
                            trStr += "</tr>";
                            $("#showCustInfo").append(trStr);
                            noteStr += "|" + scustNoList[i] + "#" + sdate0List[i] + "#" + sbranchCode0List[i] + "#" + sbranchNameList[i] + "#" + custStsList[i] + "#" + custStsNameList[i];
                        }
                        //$('#noteId').val(noteStr);
                        $("#showCustNoListDiv").show();

                        for (var j = 0; j < custStsList.length; j++) {
                            if (custStsList[j] != '3') {
                                if (acctNo != null && acctNo != '') {
                                    if (typeScope == '0'){
                                    	if (acctNo == scustNoList[j]) {
                                            $("#showCustInfo :radio").eq(j).click();
                                            break;
                                        }
                                    }else{
                                    	$("#showCustInfo :radio").eq(j).click();
                                        break;
                                    }
                                	
                                } else {
                                    $("#showCustInfo :radio").eq(j).click();
                                    break;
                                }
                            }
                        }
                    }
                }
            } else {
                //$("#showCustNoListDiv").hide();
                //alert(data.retMsg);
                $("#next_but").attr("disabled", "disabled");
                $("#queryArchives").attr("disabled", "disabled");
                alert("无法识别到客户，请输入三要素");
            }
        },
        error: function() {
        	showDialog('loading_close');
            alert("查询超时，请重新输入信息");
        }
    });
}

// 双密码控件回调方法

function returnPasswordTwo(type, p1, p2) {
    if (type == "tx_pwd_add") {
        document.getElementById("tx_pwd_add2").value = p2;
        var withdraw_pwd = document.getElementById("withdraw_pwd_add2").value;
        var append_pwd = document.getElementById("append_pwd_add2").value;

        var objAx1 = document.getElementById("tx_pwd_add");
        var nPassword = objAx1.GetNPassword();

        if (withdraw_pwd == null || withdraw_pwd.length < 1) {
            var objAx2 = document.getElementById("withdraw_pwd_add");
            objAx2.NotifyPassword(nPassword, nPassword);
        }
        if (append_pwd == null || append_pwd.length < 1) {
            var objAx2 = document.getElementById("append_pwd_add");
            objAx2.NotifyPassword(nPassword, nPassword);
        }
    } else if (type == "withdraw_pwd_add") {
        document.getElementById("withdraw_pwd_add2").value = p2;
    } else if (type == "append_pwd_add") {
        document.getElementById("append_pwd_add2").value = p2;
    } else if (type == "tx_pwd_edit") {
        document.getElementById("tx_pwd_edit2").value = p2;
        var withdraw_pwd = document.getElementById("withdraw_pwd_edit2").value;
        var append_pwd = document.getElementById("append_pwd_edit2").value;

        var objAx1 = document.getElementById("tx_pwd_edit");
        var nPassword = objAx1.GetNPassword();

        if (withdraw_pwd == null || withdraw_pwd.length < 1) {
            var objAx2 = document.getElementById("withdraw_pwd_edit");
            objAx2.NotifyPassword(nPassword, nPassword);
        }
        if (append_pwd == null || append_pwd.length < 1) {
            var objAx2 = document.getElementById("append_pwd_edit");
            objAx2.NotifyPassword(nPassword, nPassword);
        } else if (type == "withdraw_pwd_edit") {
            document.getElementById("withdraw_pwd_edit2").value = p2;
        } else if (type == "append_pwd_edit") {
            document.getElementById("append_pwd_edit2").value = p2;
        }
    } else if (type == "passwordRMB") {
        document.getElementById("passwordRMB").value = p2;
    } else if (type == "passwordUSD") {
        document.getElementById("passwordUSD").value = p2;
    } else if (type == "passwordHKD") {
        document.getElementById("passwordHKD").value = p2;
    } else if (type == "net_server_pwd") {
        document.getElementById("netServerPwdId").value = p2;
    } else if (type == "beforePasswordRMB0") {
        document.getElementById("beforePasswordRMB0").value = p2;
    } else if (type == "afterPasswordRMB0") {
        document.getElementById("afterPasswordRMB0").value = p2;
    }

}
// single密码框回调方法

function returnPasswordOne(type, p) {
    if (type == "passwordRMB") {
        document.getElementById("passwordRMB").value = p;
    } else if (type == "passwordUSD") {
        document.getElementById("passwordUSD").value = p;
    } else if (type == "passwordHKD") {
        document.getElementById("passwordHKD").value = p;
    } else if (type == "cust_tran_pwd") {
        document.getElementById("cust_tran_pwd").value = p;
    }
}