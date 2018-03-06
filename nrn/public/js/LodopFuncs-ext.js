function doPrintGDZHSQ(printDataStr, basePath) {
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    LODOP.PRINT_INITA(0, 0, 800, 1200, "自然人证券账户注册申请表打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2100, 2970, "A4");
    var printDataArr = printDataStr.split('|');

    var name = printDataArr[0];
    var nation = printDataArr[1];
    var mobile = printDataArr[2];
    var phone = printDataArr[3];
    var address = printDataArr[4];
    var email = printDataArr[5];
    var postCode = printDataArr[6];
    var certType = printDataArr[7];
    var certBeginDate = printDataArr[8];
    var certEndDate = printDataArr[9];
    var certNo = printDataArr[10];
    var profession = printDataArr[11];
    var education = printDataArr[12];
    var longterm = printDataArr[13];
    var gdzhHA = printDataArr[14];
    var gdzhHB = printDataArr[15];
    var gdzhSA = printDataArr[16];
    var gdzhSB = printDataArr[17];

    var imgbgr = ""
    if (printDataArr.length > 0 || basePath.length > 0) {
        imgbgr = "<img border='0' src='" + basePath + "/themes/default/images/agreement/gdzhsqkh.jpg' />";
    }

    //LODOP.ADD_PRINT_IMAGE("-0.13cm","-0.66cm","20.61cm","29cm",imgbgr);
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_PRINT_STYLEA(0, "Stretch", 1); //(可变形)扩展缩放模式
    LODOP.SET_PRINT_STYLEA(0, "TransColor", "#FFFFFF");
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");

    var left = 35;
    var top = 10;
    //基本信息
    LODOP.ADD_PRINT_TEXT(top + 44, left + 220, 219, 23, name);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(top + 44, left + 578, 75, 23, nation);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(top + 74, left + 251, 132, 23, mobile);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(top + 74, left + 580, 124, 23, phone);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(top + 106, left + 223, 482, 23, address);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(top + 137, left + 222, 241, 23, email);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(top + 137, left + 586, 85, 23, postCode);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    //证件类别
    if (certType == '身份证') {
        LODOP.ADD_PRINT_TEXT(top + 174, left + 201, 21, 23, "√"); //身份证
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (certType == '护照') {
        LODOP.ADD_PRINT_TEXT(top + 174, left + 304, 21, 23, "√"); //护照
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else {
        LODOP.ADD_PRINT_TEXT(top + 174, left + 403, 21, 23, "√"); //其他
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件有效期
    //alert(longterm);
    if (longterm == 'false') {
        if (certEndDate != '') {
            LODOP.ADD_PRINT_TEXT(top + 164, left + 585, 21, 23, "√");
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (certEndDate.length > 7) {
                LODOP.ADD_PRINT_TEXT(top + 166, left + 591, 53, 23, certEndDate.substring(0, 4));
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                LODOP.ADD_PRINT_TEXT(top + 166, left + 642, 28, 23, certEndDate.substring(4, 6));
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                LODOP.ADD_PRINT_TEXT(top + 166, left + 672, 28, 23, certEndDate.substring(6, 8));
                LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
                LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            }
        }
    }
    if (longterm == 'true') {
        //console.log(longterm);
        LODOP.ADD_PRINT_TEXT(top + 184, left + 583, 21, 23, "√"); //长期有效
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件号码
    if (certNo != '') {
        if (certNo.length > 0) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 201, 23, 23, certNo.substring(0, 1)); //1
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 1) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 229, 23, 23, certNo.substring(1, 2)); //2
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 2) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 257, 23, 23, certNo.substring(2, 3)); //3
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 3) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 284, 23, 23, certNo.substring(3, 4)); //4
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 4) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 312, 23, 23, certNo.substring(4, 5)); //5
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 5) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 340, 23, 23, certNo.substring(5, 6)); //6
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 6) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 375, 23, 23, certNo.substring(6, 7)); //7
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 7) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 412, 23, 23, certNo.substring(7, 8)); //8
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 8) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 442, 23, 23, certNo.substring(8, 9)); //9
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 9) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 470, 23, 23, certNo.substring(9, 10)); //10
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 10) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 497, 23, 23, certNo.substring(10, 11)); //11
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 11) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 517, 23, 23, certNo.substring(11, 12)); //12
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 12) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 550, 23, 23, certNo.substring(12, 13)); //13
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 13) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 580, 23, 23, certNo.substring(13, 14)); //14
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 14) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 602, 23, 23, certNo.substring(14, 15)); //15
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 15) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 628, 23, 23, certNo.substring(15, 16)); //16
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 16) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 658, 23, 23, certNo.substring(16, 17)); //17
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 17) {
            LODOP.ADD_PRINT_TEXT(top + 218, left + 688, 23, 23, certNo.substring(17, 18)); //18
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

    }


    //职业
    if (profession == '党政机关工作人员') {
        LODOP.ADD_PRINT_TEXT(top + 253, left + 201, 21, 23, "√"); //党政机关工作人员
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '企事业单位职工') {
        LODOP.ADD_PRINT_TEXT(top + 253, left + 362, 21, 23, "√"); //企事业单位职工
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '农民') {
        LODOP.ADD_PRINT_TEXT(top + 253, left + 476, 21, 23, "√"); //农民
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '个体工商户') {
        LODOP.ADD_PRINT_TEXT(top + 273, left + 202, 21, 23, "√"); //个体工商户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '学生') {
        LODOP.ADD_PRINT_TEXT(top + 273, left + 300, 21, 23, "√"); //学生
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '证券从业人员') {
        LODOP.ADD_PRINT_TEXT(top + 273, left + 353, 21, 23, "√"); //证券从业人员
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '无业') {
        LODOP.ADD_PRINT_TEXT(top + 273, left + 467, 21, 23, "√"); //无业
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else {
        LODOP.ADD_PRINT_TEXT(top + 273, left + 534, 21, 23, "√"); //其他
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //学历
    if (education == '博士') {
        LODOP.ADD_PRINT_TEXT(top + 298, left + 201, 21, 23, "√"); //博士
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '硕士') {
        LODOP.ADD_PRINT_TEXT(top + 298, left + 270, 21, 23, "√"); //硕士
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '大本') {
        LODOP.ADD_PRINT_TEXT(top + 298, left + 342, 21, 23, "√"); //大本
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '大专') {
        LODOP.ADD_PRINT_TEXT(top + 298, left + 406, 21, 23, "√"); //大专
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '中专') {
        LODOP.ADD_PRINT_TEXT(top + 298, left + 481, 21, 23, "√"); //中专
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '高中') {
        LODOP.ADD_PRINT_TEXT(top + 318, left + 201, 21, 23, "√"); //高中
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '初中及以下') {
        LODOP.ADD_PRINT_TEXT(top + 318, left + 269, 21, 23, "√"); //初中及以下
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //账户类别
    if (gdzhHA == "true") {
        LODOP.ADD_PRINT_TEXT(top + 340, left + 202, 21, 23, "√"); //沪A账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhHB == "true") {
        LODOP.ADD_PRINT_TEXT(top + 340, left + 322, 21, 23, "√"); //沪B账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhSA == "true") {
        LODOP.ADD_PRINT_TEXT(top + 360, left + 202, 21, 23, "√"); //深A账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhSB == "true") {
        LODOP.ADD_PRINT_TEXT(top + 360, left + 322, 21, 23, "√"); //深B账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }


    //网络服务
    //LODOP.ADD_PRINT_TEXT(391,403,21,23,"√");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,768,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,790,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,813,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,835,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,855,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,878,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    LODOP.SET_SHOW_MODE("BKIMG_PRINT", 1);
    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN ();
    //		alert(str);
    //LODOP.PRINT_SETUP()
}
//2012开户协议

function doPrintZqdlxy2012(data, tempPath, basePath) {
    //alert(data);
    var dataArray = data.split('|');
    //alert(dataArray.length);
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    LODOP.PRINT_INITA(0, 0, 800, 1250, "开户协议打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2180, 2970, "A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    //LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    //LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    var imgbgr = ""
    if (dataArray.length > 0 || tempPath.length > 0) {
        imgbgr = "<img border='0' src='" + tempPath + "'>";
    }
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");

    //姓名
    if (dataArray.length > 1) {
        LODOP.ADD_PRINT_TEXT(192, 131, 90, 23, dataArray[1]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        LODOP.ADD_PRINT_TEXT(192, 131, 90, 23, dataArray[1]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //性别
    if (dataArray.length > 2) {
        LODOP.ADD_PRINT_TEXT(192, 314, 40, 23, dataArray[2]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //出生日期
    if (dataArray.length > 3) {
        LODOP.ADD_PRINT_TEXT(192, 415, 85, 23, dataArray[3]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //国籍
    if (dataArray.length > 4) {
        LODOP.ADD_PRINT_TEXT(192, 610, 79, 23, dataArray[4]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件类别
    if (dataArray.length > 5) {
        LODOP.ADD_PRINT_TEXT(221, 169, 79, 23, dataArray[5]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件号码
    if (dataArray.length > 6) {
        LODOP.ADD_PRINT_TEXT(221, 314, 192, 23, dataArray[6]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件有限期限
    if (dataArray.length > 7) {
        LODOP.ADD_PRINT_TEXT(221, 597, 158, 23, dataArray[7]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //地址
    if (dataArray.length > 8) {
        LODOP.ADD_PRINT_TEXT(249, 175, 339, 23, dataArray[8]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //签发机关
    if (dataArray.length > 9) {
        LODOP.ADD_PRINT_TEXT(249, 594, 149, 23, dataArray[9]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系地址
    if (dataArray.length > 10) {
        LODOP.ADD_PRINT_TEXT(279, 117, 394, 23, dataArray[10]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 11) {
        LODOP.ADD_PRINT_TEXT(279, 609, 87, 23, dataArray[11]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //固定电话
    if (dataArray.length > 12) {
        LODOP.ADD_PRINT_TEXT(306, 123, 115, 23, dataArray[12]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //移动电话
    if (dataArray.length > 13) {
        LODOP.ADD_PRINT_TEXT(306, 352, 135, 23, dataArray[13]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //传真
    if (dataArray.length > 14) {
        LODOP.ADD_PRINT_TEXT(306, 595, 145, 23, dataArray[14]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //职业
    if (dataArray.length > 15) {
        LODOP.ADD_PRINT_TEXT(337, 107, 157, 23, dataArray[15]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //学历
    if (dataArray.length > 16) {
        LODOP.ADD_PRINT_TEXT(337, 351, 137, 23, dataArray[16]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //电子邮箱
    if (dataArray.length > 17) {
        LODOP.ADD_PRINT_TEXT(337, 592, 152, 23, dataArray[17]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海a股
    if (dataArray.length > 18) {
        LODOP.ADD_PRINT_TEXT(365, 173, 290, 23, dataArray[18]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳a股
    if (dataArray.length > 19) {
        LODOP.ADD_PRINT_TEXT(365, 523, 218, 23, dataArray[19]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海b股
    if (dataArray.length > 20) {
        LODOP.ADD_PRINT_TEXT(395, 173, 289, 23, dataArray[20]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳b股
    if (dataArray.length > 21) {
        LODOP.ADD_PRINT_TEXT(395, 523, 218, 23, dataArray[21]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //开发式基金
    if (dataArray.length > 22) {
        LODOP.ADD_PRINT_TEXT(424, 173, 514, 23, dataArray[22]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //代办股份转让系统
    if (dataArray.length > 23) {
        LODOP.ADD_PRINT_TEXT(457, 173, 218, 23, dataArray[23]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //人民币
    if (dataArray.length > 24) {
        LODOP.ADD_PRINT_TEXT(486, 173, 315, 23, dataArray[24]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //美元
    if (dataArray.length > 25) {
        LODOP.ADD_PRINT_TEXT(514, 173, 315, 23, dataArray[25]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //港币
    if (dataArray.length > 26) {
        LODOP.ADD_PRINT_TEXT(545, 173, 315, 23, dataArray[26]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //风险测评
    if (dataArray.length > 27) {
        LODOP.ADD_PRINT_TEXT(504, 600, 142, 43, dataArray[27]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //委托方式
    if (dataArray.length > 28) {
        //		if(dataArray[28].contains("电话委托")) {
        if (contains(dataArray[28], "电话委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 131, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 131, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[28].contains("柜台委托")) {
        if (contains(dataArray[28], "柜台委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 235, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 235, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[28].contains("网上委托")) {
        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 341, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 341, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[28].contains("手机委托")) {
        if (contains(dataArray[28], "手机委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 448, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 446, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[28].contains("自助委托")) {
        if (contains(dataArray[28], "自助委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 550, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 552, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[28].contains("驻留委托")) {
        if (contains(dataArray[28], "驻留委托", true)) {
            LODOP.ADD_PRINT_TEXT(604, 643, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(604, 643, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }
    //开通服务
    if (dataArray.length > 29) {
        //		if(dataArray[29].contains("手机短信服务")) {
        if (contains(dataArray[29], "手机短信服务", true)) {
            LODOP.ADD_PRINT_TEXT(634, 132, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(634, 132, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //		if(dataArray[29].contains("通买通卖")) {
        if (contains(dataArray[29], "通买通卖", true)) {
            LODOP.ADD_PRINT_TEXT(634, 256, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(634, 256, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (dataArray[29] == "寄送对账单") {
            LODOP.ADD_PRINT_TEXT(634, 358, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (dataArray.length > 30) {
                if (dataArray[30] == "短信") {
                    LODOP.ADD_PRINT_TEXT(632, 457, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "电子邮件") {
                    LODOP.ADD_PRINT_TEXT(632, 505, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "信函") {
                    LODOP.ADD_PRINT_TEXT(632, 578, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
            if (dataArray.length > 31) {
                if (dataArray[31] == "每月") {
                    LODOP.ADD_PRINT_TEXT(632, 629, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[31] == "每季度") {
                    LODOP.ADD_PRINT_TEXT(632, 671, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
        } else {
            LODOP.ADD_PRINT_TEXT(634, 358, 23, 23, ' ');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

    }
    //权证
    if (dataArray.length > 32) {
        LODOP.ADD_PRINT_TEXT(665, 132, 23, 23, dataArray[32]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //股份转让
    if (dataArray.length > 33) {
        LODOP.ADD_PRINT_TEXT(700, 132, 23, 23, dataArray[33]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //报价转让
    if (dataArray.length > 34) {
        LODOP.ADD_PRINT_TEXT(733, 132, 23, 23, dataArray[34]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //创业板
    if (dataArray.length > 35) {
        LODOP.ADD_PRINT_TEXT(767, 132, 23, 23, dataArray[35]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=================营销人员信息=======================
    //姓名
    if (dataArray.length > 36) {
        LODOP.ADD_PRINT_TEXT(818, 132, 94, 23, dataArray[36]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员类型
    if (dataArray.length > 37) {
        LODOP.ADD_PRINT_TEXT(818, 359, 95, 23, dataArray[37]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系电话
    if (dataArray.length > 38) {
        LODOP.ADD_PRINT_TEXT(818, 600, 125, 23, dataArray[38]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员编号
    if (dataArray.length > 39) {
        LODOP.ADD_PRINT_TEXT(841, 132, 97, 23, dataArray[39]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书类别
    if (dataArray.length > 40) {
        LODOP.ADD_PRINT_TEXT(841, 357, 96, 23, dataArray[40]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书编号
    if (dataArray.length > 41) {
        LODOP.ADD_PRINT_TEXT(841, 598, 131, 23, dataArray[41]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=======================乙方====================================
    //名称
    if (dataArray.length > 42) {
        LODOP.ADD_PRINT_TEXT(981, 52, 379, 23, dataArray[42]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //地址
    if (dataArray.length > 43) {
        LODOP.ADD_PRINT_TEXT(1009, 90, 225, 23, dataArray[43]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 44) {
        LODOP.ADD_PRINT_TEXT(1009, 376, 78, 23, dataArray[44]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //经办
    if (dataArray.length > 45) {
        LODOP.ADD_PRINT_TEXT(995, 501, 91, 23, dataArray[45]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //复核
    if (dataArray.length > 46) {
        LODOP.ADD_PRINT_TEXT(995, 644, 91, 23, dataArray[46]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //咨询投诉电话
    if (dataArray.length > 47) {
        LODOP.ADD_PRINT_TEXT(1039, 136, 124, 23, dataArray[47]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系电话
    if (dataArray.length > 48) {
        LODOP.ADD_PRINT_TEXT(1039, 322, 131, 23, dataArray[48]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //日期
    if (dataArray.length > 49) {
        LODOP.ADD_PRINT_TEXT(1039, 544, 131, 23, dataArray[49]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //=============================补充 资金账户号===================================
    //资金账户号
    if (dataArray.length > 50) {
        LODOP.ADD_PRINT_TEXT(81, 614, 131, 23, dataArray[50]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }


    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}

//开户协议2013

function doPrintZqdlxy(data, tempPath, basePath) {
    //alert(data);
    var dataArray = data.split('|');
    //alert(dataArray.length);
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    LODOP.PRINT_INITA(0, 0, 800, 1250, "开户协议打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2180, 2970, "A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    //LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    //LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    var imgbgr = ""
    if (dataArray.length > 0 || tempPath.length > 0) {
        imgbgr = "<img border='0' src='" + tempPath + "'>";
    }
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");
    var left = 0;
    var top = 0;

    //姓名
    if (dataArray.length > 1) {
        LODOP.ADD_PRINT_TEXT(106 + top, 125, 138, 23, dataArray[1]); //left,top
        //			LODOP.ADD_PRINT_TEXT(192,131,90,23,dataArray[1]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        //			LODOP.ADD_PRINT_TEXT(top1+top+192,131+left,90,23,dataArray[1]);
        //			LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
        //			LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    }
    //性别
    if (dataArray.length > 2) {
        LODOP.ADD_PRINT_TEXT(106 + top, 322 - 10, 40, 23, dataArray[2]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //出生日期
    if (dataArray.length > 3) {
        LODOP.ADD_PRINT_TEXT(106 + top, 426, 85, 23, dataArray[3]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //国籍
    if (dataArray.length > 4) {
        LODOP.ADD_PRINT_TEXT(106 + top, 607, 79, 23, dataArray[4]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件类别
    if (dataArray.length > 5) {
        LODOP.ADD_PRINT_TEXT(127 + top, 182, 79, 23, dataArray[5]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件号码
    if (dataArray.length > 6) {
        LODOP.ADD_PRINT_TEXT(127 + top, 323, 192, 23, dataArray[6]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件有限期限
    if (dataArray.length > 7) {
        LODOP.ADD_PRINT_TEXT(127 + top, 600, 158, 23, dataArray[7]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //地址
    if (dataArray.length > 8) {
        LODOP.ADD_PRINT_TEXT(146 + top, 182, 394, 23, dataArray[8]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //签发机关
    if (dataArray.length > 9) {
        LODOP.ADD_PRINT_TEXT(146 + top, 599, 149, 23, dataArray[9]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系地址
    if (dataArray.length > 10) {
        LODOP.ADD_PRINT_TEXT(169 + top, 119, 394, 23, dataArray[10]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 11) {
        LODOP.ADD_PRINT_TEXT(169 + top, 601, 87, 23, dataArray[11]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //固定电话
    if (dataArray.length > 12) {
        LODOP.ADD_PRINT_TEXT(193 + top, 114, 115, 23, dataArray[12]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //移动电话
    if (dataArray.length > 13) {
        LODOP.ADD_PRINT_TEXT(193 + top, 340, 135, 23, dataArray[13]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //传真
    if (dataArray.length > 14) {
        LODOP.ADD_PRINT_TEXT(193 + top, 593, 145, 23, dataArray[14]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //职业
    if (dataArray.length > 15) {
        LODOP.ADD_PRINT_TEXT(215 + top, 111, 157, 23, dataArray[15]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //学历
    if (dataArray.length > 16) {
        LODOP.ADD_PRINT_TEXT(215 + top, 341, 137, 23, dataArray[16]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //电子邮箱
    if (dataArray.length > 17) {
        LODOP.ADD_PRINT_TEXT(215 + top, 597, 152, 23, dataArray[17]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海a股
    if (dataArray.length > 18) {
        LODOP.ADD_PRINT_TEXT(240 + top, 175, 290, 23, dataArray[18]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳a股
    if (dataArray.length > 19) {
        LODOP.ADD_PRINT_TEXT(240 + top, 529, 218, 23, dataArray[19]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海b股
    if (dataArray.length > 20) {
        LODOP.ADD_PRINT_TEXT(262 + top, 173, 289, 23, dataArray[20]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳b股
    if (dataArray.length > 21) {
        LODOP.ADD_PRINT_TEXT(262 + top, 530, 218, 23, dataArray[21]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //开发式基金
    if (dataArray.length > 22) {
        LODOP.ADD_PRINT_TEXT(287 + top, 174, 514, 23, dataArray[22]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //代办股份转让系统
    if (dataArray.length > 23) {
        LODOP.ADD_PRINT_TEXT(322 + top, 170, 218, 23, dataArray[23]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //人民币
    if (dataArray.length > 24) {
        LODOP.ADD_PRINT_TEXT(345 + top, 170, 315, 23, dataArray[24]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //美元
    if (dataArray.length > 25) {
        LODOP.ADD_PRINT_TEXT(368 + top, 170, 315, 23, dataArray[25]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //港币
    if (dataArray.length > 26) {
        LODOP.ADD_PRINT_TEXT(389 + top, 165, 315, 23, dataArray[26]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //风险测评
    if (dataArray.length > 27) {
        LODOP.ADD_PRINT_TEXT(361, 600, 142, 43, dataArray[27]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    var left1 = -10;
    //委托方式
    if (dataArray.length > 28) {
        //			if(dataArray[28].contains("电话委托")) {
        if (contains(dataArray[28], "电话委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 140 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 140 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[28].contains("柜台委托")) {
        if (contains(dataArray[28], "柜台委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 244 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 244 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[28].contains("网上委托")) {
        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 350 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 350 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[28].contains("手机委托")) {
        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 455 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 455 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[28].contains("自助委托")) {
        if (contains(dataArray[28], "自助委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 559 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 559 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[28].contains("驻留委托")) {
        if (contains(dataArray[28], "驻留委托", true)) {
            LODOP.ADD_PRINT_TEXT(445 + top, 657 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(445 + top, 657 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }
    //开通服务
    if (dataArray.length > 29) {
        //			if(dataArray[29].contains("手机短信服务")) {
        if (contains(dataArray[29], "手机短信服务", true)) {
            LODOP.ADD_PRINT_TEXT(top + 476, 140 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(top + 476, 140 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        //			if(dataArray[29].contains("通买通卖")) {
        if (contains(dataArray[29], "通买通卖", true)) {
            LODOP.ADD_PRINT_TEXT(top + 476, 270 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(top + 476, 270 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (dataArray[29] == "寄送对账单") {
            LODOP.ADD_PRINT_TEXT(top + 476, 372 + left1, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (dataArray.length > 30) {
                if (dataArray[30] == "短信") {
                    LODOP.ADD_PRINT_TEXT(top + 474, 480 + left1, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "电子邮件") {
                    LODOP.ADD_PRINT_TEXT(top + 474, 528 + left1, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "信函") {
                    LODOP.ADD_PRINT_TEXT(top + 474, 603 + left1, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
            if (dataArray.length > 31) {
                if (dataArray[31] == "每月") {
                    LODOP.ADD_PRINT_TEXT(top + 474, 653 + left1, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[31] == "每季度") {
                    LODOP.ADD_PRINT_TEXT(top + 474, 693 + left1, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
        } else {
            LODOP.ADD_PRINT_TEXT(top + 476, 372 + left1, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

    }
    //权证
    if (dataArray.length > 32) {
        LODOP.ADD_PRINT_TEXT(top + 507, 140 + left1, 23, 23, dataArray[32]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //股份转让
    if (dataArray.length > 33) {
        LODOP.ADD_PRINT_TEXT(top + 542, 140 + left1, 23, 23, dataArray[33]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //报价转让
    if (dataArray.length > 34) {
        LODOP.ADD_PRINT_TEXT(top + 575, 140 + left1, 23, 23, dataArray[34]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //创业板
    if (dataArray.length > 35) {
        LODOP.ADD_PRINT_TEXT(top + 609, 140 + left1, 23, 23, dataArray[35]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=================营销人员信息=======================
    //姓名
    if (dataArray.length > 36) {
        LODOP.ADD_PRINT_TEXT(top + 775, 137, 94, 23, dataArray[36]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员类型
    if (dataArray.length > 37) {
        LODOP.ADD_PRINT_TEXT(top + 775, 364, 95, 23, dataArray[37]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系电话
    if (dataArray.length > 38) {
        LODOP.ADD_PRINT_TEXT(top + 775, 605, 125, 23, dataArray[38]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员编号
    if (dataArray.length > 39) {
        LODOP.ADD_PRINT_TEXT(top + 799, 137, 97, 23, dataArray[39]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书类别
    if (dataArray.length > 40) {
        LODOP.ADD_PRINT_TEXT(top + 799, 362, 96, 23, dataArray[40]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书编号
    if (dataArray.length > 41) {
        LODOP.ADD_PRINT_TEXT(top + 799, 603, 131, 23, dataArray[41]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=======================乙方====================================
    //名称
    if (dataArray.length > 42) {
        LODOP.ADD_PRINT_TEXT(top + 968, 184, 379, 23, dataArray[42]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //地址
    if (dataArray.length > 43) {
        LODOP.ADD_PRINT_TEXT(top + 997, 91, 225, 23, dataArray[43]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 44) {
        LODOP.ADD_PRINT_TEXT(top + 996, 384, 78, 23, dataArray[44]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //经办
    if (dataArray.length > 45) {
        LODOP.ADD_PRINT_TEXT(top + 979, 511, 91, 23, dataArray[45]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //复核
    if (dataArray.length > 46) {
        LODOP.ADD_PRINT_TEXT(top + 973, 657, 91, 23, dataArray[46]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //咨询投诉电话
/*if(dataArray.length>47) {
			LODOP.ADD_PRINT_TEXT(top+1039,136-60,124,23,dataArray[47]);
			LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
			LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
		}*/
    //联系电话
    if (dataArray.length > 48) {
        LODOP.ADD_PRINT_TEXT(top + 1028, 325, 131, 23, dataArray[48]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //日期
    if (dataArray.length > 49) {
        LODOP.ADD_PRINT_TEXT(top + 1028, 516, 131, 23, dataArray[49]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //=============================补充 资金账户号===================================
    //资金账户号
    if (dataArray.length > 50) {
        LODOP.ADD_PRINT_TEXT(top + 40, 631, 131, 23, dataArray[50]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }

    //其他
    if (dataArray.length > 51) {
        LODOP.ADD_PRINT_TEXT(top + 322, 531, 215, 23, dataArray[51]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //股票退市交易
    if (dataArray.length > 52) {
        LODOP.ADD_PRINT_TEXT(top + 651, 140 + left1, 23, 23, dataArray[52]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //风险警示股票交易
    if (dataArray.length > 53) {
        LODOP.ADD_PRINT_TEXT(top + 684, 140 + left1, 23, 23, dataArray[53]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //电子约定书
    if (dataArray.length > 54) {
        LODOP.ADD_PRINT_TEXT(top + 718, 140 + left1, 23, 23, dataArray[54]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }

    LODOP.PREVIEW();
    //		LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}

function doPrintJjzhk(fundCompany, AccountCode, name, certNo, address, openDate, type) {
    //alert(fundCompany+AccountCode+name+certNo+address+openDate+type); 
    LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    //LODOP.PRINT_INITA(0,0,800,1250,"打印控件功能演示_Lodop功能_自定义纸张1");	
    //LODOP.SET_PRINT_PAGESIZE(0,2180,2970,"A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    //LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    //LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");

    LODOP.ADD_PRINT_TEXT(124, 250, 256, 40, "基金账户卡");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 22);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.SET_PRINT_STYLEA(0, "Bold", 1);

    LODOP.ADD_PRINT_TEXT(211, 263, 90, 23, "基金公司:");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(211, 356, 231, 23, fundCompany);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(233, 263, 90, 23, "基金帐号:");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(233, 356, 231, 23, AccountCode);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(255, 263, 90, 23, "姓  名 :");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(255, 356, 231, 23, name);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(277, 263, 90, 23, "身 份 证:");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(277, 356, 231, 23, certNo);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(299, 263, 90, 23, "住  址 :");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(299, 356, 366, 23, address);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(321, 263, 90, 23, "开户日期:");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(321, 356, 231, 23, openDate);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(343, 263, 90, 23, "机构个人:");
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 3);
    LODOP.ADD_PRINT_TEXT(343, 356, 231, 23, type);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);


    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}

//si.dai 证券开户申请

function doPrintCustSecurityOpening(data) {
    var array = data.split('|');
    //alert("print begin");
    LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    LODOP.PRINT_INITA(0, 0, 800, 1200, "打印控件功能演示_Lodop功能_自定义纸张1");
    LODOP.SET_PRINT_PAGESIZE(0, 2100, 2970, "A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    //LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    //LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    var name = array[0];
    var nation = array[1];
    var mobile = array[2];
    var phone = array[3];
    var address = array[4];
    var email = array[5];
    var postCode = array[6];
    var certType = array[7];
    var certEndDate = array[8];
    var certNo = array[9];
    var profession = array[10];
    var education = array[11];
    var longterm = array[12];
    var gdzhHA = array[13];
    var gdzhHB = array[14];
    var gdzhSA = array[15];
    var gdzhSB = array[16];

    var img = array[17];

    //alert(name+nation+mobile+phone+address+email+postCode+certType+certEndDate+certNo+profession+education+gdzhHA+gdzhHB+gdzhSA+gdzhSB+longterm);
    var imgbgr = "<img border='0' width='800' style='filter:Alpha(opacity=99);'   src='" + img + "'/>";

    //	LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    //	LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW",1);
    //	LODOP.SET_SHOW_MODE("BKIMG_LEFT","0mm");
    //	LODOP.SET_SHOW_MODE("BKIMG_TOP","0mm");
    //	LODOP.SET_SHOW_MODE("BKIMG_WIDTH","210mm");
    //	LODOP.SET_SHOW_MODE("BKIMG_HEIGHT","100%");
    LODOP.ADD_PRINT_IMAGE("-0.13cm", "-0.66cm", "20.61cm", "29cm", imgbgr);
    LODOP.SET_PRINT_STYLEA(0, "TransColor", "#FFFFFF");
    //基本信息
    LODOP.ADD_PRINT_TEXT(44, 220, 219, 23, name);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);

    LODOP.ADD_PRINT_TEXT(44, 598, 75, 23, nation);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(74, 251, 132, 23, mobile);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(74, 580, 124, 23, phone);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    LODOP.ADD_PRINT_TEXT(106, 223, 482, 23, address);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(137, 222, 241, 23, email);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(137, 586, 85, 23, postCode);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    //证件类别
    if (certType == '身份证') {
        LODOP.ADD_PRINT_TEXT(176, 209, 21, 23, "√"); //身份证
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (certType == '护照') {
        LODOP.ADD_PRINT_TEXT(176, 313, 21, 23, "√"); //护照
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else {
        LODOP.ADD_PRINT_TEXT(176, 404, 21, 23, "√"); //其他
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件有效期
    //alert(longterm);
    if (longterm == 'false') {
        if (certEndDate != '') {
            LODOP.ADD_PRINT_TEXT(165, 578, 21, 23, "√");
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (certEndDate.length > 7) LODOP.ADD_PRINT_TEXT(166, 585, 53, 23, certEndDate.substring(0, 4));
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            LODOP.ADD_PRINT_TEXT(166, 636, 28, 23, certEndDate.substring(4, 6));
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            LODOP.ADD_PRINT_TEXT(166, 666, 28, 23, certEndDate.substring(6, 8));
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }
    if (longterm == 'true') {
        LODOP.ADD_PRINT_TEXT(186, 578, 21, 23, "√"); //长期有效
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件号码
    if (certNo != '') {
        if (certNo.length > 0) {
            LODOP.ADD_PRINT_TEXT(218, 208, 23, 23, certNo.substring(0, 1)); //1
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 1) {
            LODOP.ADD_PRINT_TEXT(218, 236, 23, 23, certNo.substring(1, 2)); //2
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 2) {
            LODOP.ADD_PRINT_TEXT(218, 264, 23, 23, certNo.substring(2, 3)); //3
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 3) {
            LODOP.ADD_PRINT_TEXT(218, 291, 23, 23, certNo.substring(3, 4)); //4
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 4) {
            LODOP.ADD_PRINT_TEXT(218, 319, 23, 23, certNo.substring(4, 5)); //5
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 5) {
            LODOP.ADD_PRINT_TEXT(218, 347, 23, 23, certNo.substring(5, 6)); //6
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 6) {
            LODOP.ADD_PRINT_TEXT(218, 375, 23, 23, certNo.substring(6, 7)); //7
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 7) {
            LODOP.ADD_PRINT_TEXT(218, 402, 23, 23, certNo.substring(7, 8)); //8
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 8) {
            LODOP.ADD_PRINT_TEXT(218, 430, 23, 23, certNo.substring(8, 9)); //9
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 9) {
            LODOP.ADD_PRINT_TEXT(218, 459, 23, 23, certNo.substring(9, 10)); //10
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 10) {
            LODOP.ADD_PRINT_TEXT(218, 486, 23, 23, certNo.substring(10, 11)); //11
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 11) {
            LODOP.ADD_PRINT_TEXT(218, 514, 23, 23, certNo.substring(11, 12)); //12
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 12) {
            LODOP.ADD_PRINT_TEXT(218, 545, 23, 23, certNo.substring(12, 13)); //13
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 13) {
            LODOP.ADD_PRINT_TEXT(218, 574, 23, 23, certNo.substring(13, 14)); //14
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 14) {
            LODOP.ADD_PRINT_TEXT(218, 599, 23, 23, certNo.substring(14, 15)); //15
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 15) {
            LODOP.ADD_PRINT_TEXT(218, 626, 23, 23, certNo.substring(15, 16)); //16
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 16) {
            LODOP.ADD_PRINT_TEXT(218, 654, 23, 23, certNo.substring(16, 17)); //17
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (certNo.length > 17) {
            LODOP.ADD_PRINT_TEXT(218, 682, 23, 23, certNo.substring(17, 18)); //18
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

    }


    //职业
    if (profession == '党政机关工作人员') {
        LODOP.ADD_PRINT_TEXT(253, 208, 21, 23, "√"); //党政机关工作人员
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '企事业单位职工') {
        LODOP.ADD_PRINT_TEXT(253, 361, 21, 23, "√"); //企事业单位职工
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '农民') {
        LODOP.ADD_PRINT_TEXT(253, 489, 21, 23, "√"); //农民
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '个体工商户') {
        LODOP.ADD_PRINT_TEXT(273, 209, 21, 23, "√"); //个体工商户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '学生') {
        LODOP.ADD_PRINT_TEXT(273, 307, 21, 23, "√"); //学生
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '证券从业人员') {
        LODOP.ADD_PRINT_TEXT(273, 362, 21, 23, "√"); //证券从业人员
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (profession == '无业') {
        LODOP.ADD_PRINT_TEXT(273, 474, 21, 23, "√"); //无业
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else {
        LODOP.ADD_PRINT_TEXT(273, 531, 21, 23, "√"); //其他
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //学历
    if (education == '博士') {
        LODOP.ADD_PRINT_TEXT(298, 208, 21, 23, "√"); //博士
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '硕士') {
        LODOP.ADD_PRINT_TEXT(298, 278, 21, 23, "√"); //硕士
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '大本') {
        LODOP.ADD_PRINT_TEXT(298, 349, 21, 23, "√"); //大本
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '大专') {
        LODOP.ADD_PRINT_TEXT(298, 419, 21, 23, "√"); //大专
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '中专') {
        LODOP.ADD_PRINT_TEXT(298, 488, 21, 23, "√"); //中专
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '高中') {
        LODOP.ADD_PRINT_TEXT(318, 208, 21, 23, "√"); //高中
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    } else if (education == '初中及以下') {
        LODOP.ADD_PRINT_TEXT(318, 278, 21, 23, "√"); //初中及以下
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //账户类别
    if (gdzhHA == 'true') {
        LODOP.ADD_PRINT_TEXT(340, 208, 21, 23, "√"); //沪A账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhHB == 'true') {
        LODOP.ADD_PRINT_TEXT(340, 327, 21, 23, "√"); //沪B账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhSA == 'true') {
        LODOP.ADD_PRINT_TEXT(360, 208, 21, 23, "√"); //深A账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    if (gdzhSB == 'true') {
        LODOP.ADD_PRINT_TEXT(360, 327, 21, 23, "√"); //深B账户
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 12);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }


    //网络服务
    //LODOP.ADD_PRINT_TEXT(391,403,21,23,"√");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,768,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,790,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,813,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,835,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,855,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    //LODOP.ADD_PRINT_TEXT(388,878,23,23,"8");
    //LODOP.SET_PRINT_STYLEA(0,"FontSize",12);
    //LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
    LODOP.PREVIEW();
    //	var str=LODOP.PRINT_DESIGN ();
    //	alert(str);
    //LODOP.PRINT_SETUP()
}


function doPrintGdzhk1(img, account, name, openDate, company) {
    //		alert(img+account+name+openDate+company); 
    LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    LODOP.PRINT_INITA(0, 0, 513, 632, "打印控件功能演示_Lodop功能_自定义纸张1");
    LODOP.SET_PRINT_PAGESIZE(0, 1600, 1800, "aa");
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    //LODOP.PRINT_INITA(0,0,800,1250,"打印控件功能演示_Lodop功能_自定义纸张1");	
    //LODOP.SET_PRINT_PAGESIZE(0,2180,2970,"A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    var imgbgr = "<img border='0' src='" + img + "'>";
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);


    LODOP.ADD_PRINT_TEXT(42, 230, 231, 26, account);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(93, 230, 231, 26, name);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(145, 230, 231, 26, openDate);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    LODOP.ADD_PRINT_TEXT(191, 230, 260, 60, company);
    LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
    LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);

    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}

function doPrintGdzhk2(basePath, data) {
    //alert(basePath+data); 
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    LODOP.PRINT_INITA(0, 0, 513, 632, "股东卡打印");
    LODOP.SET_PRINT_PAGESIZE(0, 1600, 1800, "aa");
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    //LODOP.PRINT_INITA(0,0,800,1250,"打印控件功能演示_Lodop功能_自定义纸张1");	
    //LODOP.SET_PRINT_PAGESIZE(0,2180,2970,"A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    var imgbgr = "<img border='0' src='" + basePath + "/themes/default/images/agreement/gdk.jpg' />";
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    //LODOP.SET_SHOW_MODE("BKIMG_WIDTH","210mm");
    //LODOP.SET_SHOW_MODE("BKIMG_HEIGHT","297mm");
    var dataArray = data.split('|');
    for (var i = 1; i < dataArray.length; i++) { //以|为起始的字符串，so不处理dataArray第一个元素dataArray[0]
        //			console.log(dataArray[i]);
        var card = dataArray[i].split('#');
        LODOP.NewPage();
        LODOP.ADD_PRINT_TEXT(42, 230, 231, 26, card[0]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
        LODOP.ADD_PRINT_TEXT(93, 230, 231, 26, card[1]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
        LODOP.ADD_PRINT_TEXT(145, 230, 231, 26, card[2]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
        LODOP.ADD_PRINT_TEXT(191, 230, 260, 60, card[3]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 14);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    };
    //LODOP.SET_PREVIEW_WINDOW(0,0,0,0,0,"");			
    LODOP.PREVIEW();
    //		LODOP.PRINT();
    //LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}

/*
 * 
 * string:原始字符串 substr:子字符串 isIgnoreCase:忽略大小写
 */

function contains(string, substr, isIgnoreCase) {
    if (isIgnoreCase) {
        string = string.toLowerCase();
        substr = substr.toLowerCase();
    }
    var startChar = substr.substring(0, 1);
    var strLen = substr.length;
    for (var j = 0; j < string.length - strLen + 1; j++) {
        if (string.charAt(j) == startChar) // 如果匹配起始字符,开始查找
        {
            if (string.substring(j, j + strLen) == substr) // 如果从j开始的字符与str匹配，那ok
            {
                return true;
            }
        }
    }
    return false;
}




/**
 * 打印公共的JS方法
 * 
 * @param type
 * @param data
 */

function doPreviewCustPassword(type, data) {

    LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));

    var dataArray = data.split('#|');
    var value = '';
    var htmlstr = '';
    var htmlHead = '<html><body><table border ="0" width="100%" >';
    var htmlend = "</table></body></html>";
    if (type == 2) { // pc打印
        for (var i = 0; i < dataArray.length; i++) {

            var label = ''; // 前面的具体标签
            var val = ''; // 标签所对应的值
            // 偶数的时候添加一列
            if (i % 2 == 0) {
                value = value + '<tr>';
            }

            if (strContains(dataArray[i], ":", true)) {
                label = dataArray[i].split(':')[0] + ':';
                val = dataArray[i].split(':')[1];
            }

            value = value + '<td align="right"  height="30px" width="20%" >' + label + '</td>' + '<td  align="left" height="30px" width="30%">' + val + '</td>';

            if (i % 2 == 1) {
                value = value + '</tr>';
            }
        }
        if (dataArray.length % 2 == 1) {
            value = value + '<td width="50%"></td></tr>';
        }
        // 添加头部与尾部
        htmlstr = htmlHead + value + htmlend;
        LODOP.PRINT_INITA(10, 10, 800, 1200, "打印控件功能演示_Lodop功能_自定义纸张1");
        LODOP.SET_PRINT_PAGESIZE(0, 2100, 2970, "A4");

        LODOP.ADD_PRINT_HTM(30, 20, 746, "100%", htmlstr);
        LODOP.SET_PRINT_STYLEA(1, "HOrient", 3);
        LODOP.SET_PRINT_STYLEA(1, "VOrient", 3);
        LODOP.PREVIEW();
        // LODOP.PRINT();
    }
    if (type == 1) {

        var printPortValue = '\r\n';
        for (var i = 0; i < dataArray.length; i++) {
            var label = '';
            var val = '';
            if (strContains(dataArray[i], ":", true)) {

                var subArray = dataArray[i].split(':');

                label = subArray[0] + ':';
                val = subArray[1];

                // 只有当value的值 包含多个 冒号的时候才去
                if (subArray.length > 2) {
                    // 拼凑value值
                    for (var j = 2; j < subArray.length; j++) {
                        val = val + ":" + subArray[j];
                    }

                }
                printPortValue = printPortValue + label + val + '\r\n'; // 组装一体机的的那数据（一行)
                value = value + '<tr><td align="left" height="30px" width="10%" >' + label + '</tr><tr></td><td  align="left" height="30px" width="55%">' + val + '</td></tr>';
            }
        }


        LODOP.PRINT_INITA(10, 10, 800, 1200, "打印控件功能演示_Lodop功能_自定义纸张1");
        LODOP.SET_PRINT_PAGESIZE(3, "57mm", 2970, ""); // 宽度固定
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 3);
        LODOP.SET_PRINT_STYLEA(1, "HOrient", 3);
        LODOP.SET_PRINT_STYLEA(1, "VOrient", 3);

        LODOP.WRITE_PORT_DATA("COM5", "mode com5:9600,n,8,1");
        LODOP.WRITE_PORT_DATA("COM4", "mode com4:9600,n,8,1");
        printPortValue = printPortValue + '\r\n' + '\r\n';

        LODOP.WRITE_PORT_DATA("COM4", printPortValue);
        LODOP.WRITE_PORT_DATA("COM5", printPortValue);
        //LODOP.PREVIEW();
        // LODOP.PRINT();
    }

}



function strContains(string, substr, isIgnoreCase) {
    if (isIgnoreCase) {
        string = string.toLowerCase();
        substr = substr.toLowerCase();
    }
    var startChar = substr.substring(0, 1);
    var strLen = substr.length;
    for (var j = 0; j < string.length - strLen + 1; j++) {
        if (string.charAt(j) == startChar) // 如果匹配起始字符,开始查找
        {
            if (string.substring(j, j + strLen) == substr) // 如果从j开始的字符与str匹配，那ok
            {
                return true;
            }
        }
    }
    return false;
}

//开户协议2013

function doPrintZqdlxy201310(data, tempPath, basePath) {
    var dataArray = data.split('|');
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    //LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    //LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    LODOP.PRINT_INITA(0, 0, 800, 1250, "开户协议打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2180, 2970, "A4");
    //LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    //LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    //LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    var imgbgr = "";
    if (dataArray.length > 0 || tempPath.length > 0) {
        imgbgr = "<img border='0' src='" + tempPath + "'>";
    }
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");
    var left = 0;
    var top = -20;

    //姓名
    if (dataArray.length > 1) {
        LODOP.ADD_PRINT_TEXT(157 + top, 109 + left, 138, 23, dataArray[1]); //left,top
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //性别
    if (dataArray.length > 2) {
        LODOP.ADD_PRINT_TEXT(157 + top, 310 + left, 40, 23, dataArray[2]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //出生日期
    if (dataArray.length > 3) {
        LODOP.ADD_PRINT_TEXT(157 + top, 410 + left, 85, 23, dataArray[3]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //国籍
    if (dataArray.length > 4) {
        LODOP.ADD_PRINT_TEXT(157 + top, 588 + left, 79, 23, dataArray[4]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件类别
    if (dataArray.length > 5) {
        LODOP.ADD_PRINT_TEXT(179 + top, 182 + left, 79, 23, dataArray[5]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件号码
    if (dataArray.length > 6) {
        LODOP.ADD_PRINT_TEXT(179 + top, 323 + left, 192, 23, dataArray[6]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证件有限期限
    if (dataArray.length > 7) {
        LODOP.ADD_PRINT_TEXT(179 + top, 600 + left, 158, 23, dataArray[7]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //地址
    if (dataArray.length > 8) {
        LODOP.ADD_PRINT_TEXT(200 + top, 182 + left, 394, 23, dataArray[8]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //签发机关
    if (dataArray.length > 9) {
        LODOP.ADD_PRINT_TEXT(200 + top, 599 + left, 149, 23, dataArray[9]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系地址
    if (dataArray.length > 10) {
        LODOP.ADD_PRINT_TEXT(223 + top, 119 + left, 394, 23, dataArray[10]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 11) {
        LODOP.ADD_PRINT_TEXT(223 + top, 601 + left, 87, 23, dataArray[11]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //固定电话
    if (dataArray.length > 12) {
        LODOP.ADD_PRINT_TEXT(246 + top, 114 + left, 115, 23, dataArray[12]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //移动电话
    if (dataArray.length > 13) {
        LODOP.ADD_PRINT_TEXT(246 + top, 340 + left, 135, 23, dataArray[13]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //传真
    if (dataArray.length > 14) {
        LODOP.ADD_PRINT_TEXT(246 + top, 593 + left, 145, 23, dataArray[14]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //职业
    if (dataArray.length > 15) {
        LODOP.ADD_PRINT_TEXT(268 + top, 111 + left, 157, 23, dataArray[15]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //学历
    if (dataArray.length > 16) {
        LODOP.ADD_PRINT_TEXT(268 + top, 341 + left, 137, 23, dataArray[16]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //电子邮箱
    if (dataArray.length > 17) {
        LODOP.ADD_PRINT_TEXT(268 + top, 597 + left, 152, 23, dataArray[17]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海a股
    if (dataArray.length > 18) {
        LODOP.ADD_PRINT_TEXT(294 + top, 175 + left, 290, 23, dataArray[18]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳a股
    if (dataArray.length > 19) {
        LODOP.ADD_PRINT_TEXT(294 + top, 529 + left, 218, 23, dataArray[19]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //上海b股
    if (dataArray.length > 20) {
        LODOP.ADD_PRINT_TEXT(318 + top, 173 + left, 289, 23, dataArray[20]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //深圳b股
    if (dataArray.length > 21) {
        LODOP.ADD_PRINT_TEXT(318 + top, 529 + left, 218, 23, dataArray[21]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //开发式基金
    if (dataArray.length > 22) {
        LODOP.ADD_PRINT_TEXT(341 + top, 174 + left, 514, 23, dataArray[22]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //代办股份转让系统
    if (dataArray.length > 23) {
        LODOP.ADD_PRINT_TEXT(368 + top, 170 + left, 218, 23, dataArray[23]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //人民币
    if (dataArray.length > 24) {
        LODOP.ADD_PRINT_TEXT(401 + top, 165 + left, 315, 23, dataArray[24]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //美元
    if (dataArray.length > 25) {
        LODOP.ADD_PRINT_TEXT(424 + top, 165 + left, 315, 23, dataArray[25]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //港币
    if (dataArray.length > 26) {
        LODOP.ADD_PRINT_TEXT(447 + top, 165 + left, 315, 23, dataArray[26]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //风险测评
    if (dataArray.length > 27) {
        LODOP.ADD_PRINT_TEXT(406 + top, 600 + left, 142, 43, dataArray[27]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //委托方式
    if (dataArray.length > 28) {
        if (contains(dataArray[28], "电话委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 130 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 130 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "柜台委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 234 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 234 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 340 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 340 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 445 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 445 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[28], "自助委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 549 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 549 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[28], "驻留委托", true)) {
            LODOP.ADD_PRINT_TEXT(498 + top, 647 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(498 + top, 647 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }
    //开通服务
    if (dataArray.length > 29) {
        if (contains(dataArray[29], "手机短信服务", true)) {
            LODOP.ADD_PRINT_TEXT(top + 527, 130 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(top + 527, 130 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[29], "通买通卖", true)) {
            LODOP.ADD_PRINT_TEXT(top + 527, 260 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(top + 527, 260 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
        if (contains(dataArray[29], "寄送对账单", true)) {
            LODOP.ADD_PRINT_TEXT(top + 527, 362 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (dataArray.length > 30) {
                if (dataArray[30] == "短信") {
                    LODOP.ADD_PRINT_TEXT(top + 527, 468 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "电子邮件") {
                    LODOP.ADD_PRINT_TEXT(top + 527, 516 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[30] == "信函") {
                    LODOP.ADD_PRINT_TEXT(top + 527, 588 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
            if (dataArray.length > 31) {
                if (dataArray[31] == "每月") {
                    LODOP.ADD_PRINT_TEXT(top + 527, 640 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
                if (dataArray[31] == "每季度") {
                    LODOP.ADD_PRINT_TEXT(top + 527, 681 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
        } else {
            LODOP.ADD_PRINT_TEXT(top + 527, 362 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

    }
    //权证
    if (dataArray.length > 32) {
        LODOP.ADD_PRINT_TEXT(top + 558, 130 + left, 23, 23, dataArray[32]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //股份转让
    if (dataArray.length > 33) {
        LODOP.ADD_PRINT_TEXT(top + 594, 130 + left, 23, 23, dataArray[33]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //报价转让
    if (dataArray.length > 34) {
        LODOP.ADD_PRINT_TEXT(top + 625, 130 + left, 23, 23, dataArray[34]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //创业板
    if (dataArray.length > 35) {
        LODOP.ADD_PRINT_TEXT(top + 656, 130 + left, 23, 23, dataArray[35]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=================营销人员信息=======================
    //姓名 
    if (dataArray.length > 36) {
        LODOP.ADD_PRINT_TEXT(top + 809, 137 + left, 94, 23, dataArray[36]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员类型
    if (dataArray.length > 37) {
        LODOP.ADD_PRINT_TEXT(top + 809, 364 + left, 95, 23, dataArray[37]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //联系电话
    if (dataArray.length > 38) {
        LODOP.ADD_PRINT_TEXT(top + 809, 605 + left, 125, 23, dataArray[38]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //人员编号
    if (dataArray.length > 39) {
        LODOP.ADD_PRINT_TEXT(top + 834, 137 + left, 97, 23, dataArray[39]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书类别
    if (dataArray.length > 40) {
        LODOP.ADD_PRINT_TEXT(top + 834, 362 + left, 96, 23, dataArray[40]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //证书编号
    if (dataArray.length > 41) {
        LODOP.ADD_PRINT_TEXT(top + 834, 603 + left, 131, 23, dataArray[41]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //=======================乙方====================================
    //名称
    if (dataArray.length > 42) {
        LODOP.ADD_PRINT_TEXT(top + 1004, 184 + left, 270, 23, dataArray[42]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //地址
    if (dataArray.length > 43) {
        LODOP.ADD_PRINT_TEXT(top + 1033, 91 + left, 230, 23, dataArray[43]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //邮编
    if (dataArray.length > 44) {
        LODOP.ADD_PRINT_TEXT(top + 1033, 384 + left, 78, 23, dataArray[44]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //经办
    if (dataArray.length > 45) {
        LODOP.ADD_PRINT_TEXT(top + 1017, 511 + left, 91, 23, dataArray[45]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //复核
    if (dataArray.length > 46) {
        LODOP.ADD_PRINT_TEXT(top + 1018, 657 + left, 91, 23, dataArray[46]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //咨询投诉电话
/*if(dataArray.length>47) {
			LODOP.ADD_PRINT_TEXT(top+1061,76+left,124,23,dataArray[47]);
			LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
			LODOP.SET_PRINT_STYLEA(0,"Alignment",2);
		}*/
    //联系电话
    if (dataArray.length > 48) {
        LODOP.ADD_PRINT_TEXT(top + 1061, 325 + left, 131, 23, dataArray[48]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    //日期
    if (dataArray.length > 49) {
        LODOP.ADD_PRINT_TEXT(top + 1061, 516 + left, 131, 23, dataArray[49]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    //=============================补充 资金账户号===================================
    //资金账户号
    if (dataArray.length > 50) {
        LODOP.ADD_PRINT_TEXT(top + 92, 595 + left, 131, 23, dataArray[50]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }

    //其他
    if (dataArray.length > 51) {
        LODOP.ADD_PRINT_TEXT(top + 362, 531 + left, 215, 23, dataArray[51]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //股票退市交易
    if (dataArray.length > 52) {
        LODOP.ADD_PRINT_TEXT(top + 691, 135 + left, 23, 23, dataArray[52]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //风险警示股票交易
    if (dataArray.length > 53) {
        LODOP.ADD_PRINT_TEXT(top + 728, 135 + left, 23, 23, dataArray[53]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    //电子约定书
    //		if(dataArray.length>54) {
    //			LODOP.ADD_PRINT_TEXT(top+718,130+left,23,23,dataArray[54]);
    //			LODOP.SET_PRINT_STYLEA(0,"FontSize",10);
    //			LODOP.SET_PRINT_STYLEA(0,"Alignment",1);
    //		}
    LODOP.PREVIEW();
    //LODOP.PRINT_DESIGN ();
    //		alert(str);
    //		LODOP.PRINT_SETUP()
}

//开户协议201310ORG

function doPrintZqdlxyOrg(data) {
    //alert(data);
    var dataArray = data.split('|');
    // alert(dataArray.length);
    LODOP = getLodop(document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    // LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_打印");
    // LODOP.SET_PRINT_PAGESIZE(0,21,29,"A4");
    LODOP.PRINT_INITA(0, 0, 800, 1250, "机构开户协议打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2180, 2970, "A4");
    // LODOP.ADD_PRINT_TEXT(83,78,75,20,"寄件人姓名");
    // LODOP.ADD_PRINT_IMAGE(30,20,600,800,document.getElementById("printForm").innerHTML);
    // LODOP.ADD_PRINT_HTML(30,20,600,800,document.getElementById("printForm").innerHTML);
    var imgbgr = "";
    if (dataArray.length > 0) {
        imgbgr = "<img border='0' src='" + dataArray[0] + "'>";
    }
    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", 1);
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", "210mm");
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", "297mm");
    var left = -15;
    var top = -18;

    // 机构全称 1-55
    if (dataArray.length > 55) {
        LODOP.ADD_PRINT_TEXT(117 + top, 120 + left, 629, 23, dataArray[55]); // left,top
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 机构性质 2-56
    if (dataArray.length > 56) {
        LODOP.ADD_PRINT_TEXT(136 + top, 120 + left, 367, 23, dataArray[56]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 税务登记代码 3-57
    if (dataArray.length > 57) {
        LODOP.ADD_PRINT_TEXT(136 + top, 569 + left, 186, 23, dataArray[57]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 组织机构代码4-58
    if (dataArray.length > 58) {
        LODOP.ADD_PRINT_TEXT(157 + top, 120 + left, 240, 23, dataArray[58]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 组织机构代码证有效期5-59
    if (dataArray.length > 59) {
        LODOP.ADD_PRINT_TEXT(157 + top, 487 + left, 270, 23, dataArray[59]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 有效身份证明文件--类 别6--60
    if (dataArray.length > 60) {
        LODOP.ADD_PRINT_TEXT(176 + top, 190 + left, 173, 23, dataArray[60]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 有效身份证明文件--注册号/批文号 7-61
    if (dataArray.length > 61) {
        LODOP.ADD_PRINT_TEXT(176 + top, 458 + left, 299, 23, dataArray[61]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 有效身份证明文件--发证机关 8-62
    if (dataArray.length > 62) {
        LODOP.ADD_PRINT_TEXT(195 + top, 190 + left, 173, 23, dataArray[62]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 有效身份证明文件--有效期截止日期9-63
    if (dataArray.length > 63) {
        LODOP.ADD_PRINT_TEXT(195 + top, 454 + left, 122, 23, dataArray[63]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 有效身份证明文件--最近年检10-64
    if (dataArray.length > 64) {
        LODOP.ADD_PRINT_TEXT(195 + top, 622 + left, 131, 23, dataArray[64]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 经营范围11-65
    if (dataArray.length > 65) {
        LODOP.ADD_PRINT_TEXT(214 + top, 120 + left, 634, 23, dataArray[65]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 注册地址12-66
    if (dataArray.length > 66) {
        LODOP.ADD_PRINT_TEXT(230 + top, 120 + left, 634, 23, dataArray[66]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 联系地址13-67
    if (dataArray.length > 67) {
        LODOP.ADD_PRINT_TEXT(247 + top, 120 + left, 400, 23, dataArray[67]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 邮政编码 14-68
    if (dataArray.length > 68) {
        LODOP.ADD_PRINT_TEXT(247 + top, 622 + left, 131, 23, dataArray[68]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 控股股东或实际控制人15-69
    if (dataArray.length > 69) {
        LODOP.ADD_PRINT_TEXT(264 + top, 180 + left, 573, 23, dataArray[69]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 联系人16-70
    if (dataArray.length > 70) {
        LODOP.ADD_PRINT_TEXT(284 + top, 125 + left, 112, 23, dataArray[70]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 移动电话17-71
    if (dataArray.length > 71) {
        LODOP.ADD_PRINT_TEXT(284 + top, 290 + left, 115, 23, dataArray[71]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 固定电话18-72
    if (dataArray.length > 72) {
        LODOP.ADD_PRINT_TEXT(284 + top, 478 + left, 115, 23, dataArray[72]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 传真19-73
    if (dataArray.length > 73) {
        LODOP.ADD_PRINT_TEXT(284 + top, 622 + left, 131, 23, dataArray[73]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 网 址20-74
    if (dataArray.length > 74) {
        LODOP.ADD_PRINT_TEXT(304 + top, 122 + left, 294, 23, dataArray[74]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 电子邮箱 21-75
    if (dataArray.length > 75) {
        LODOP.ADD_PRINT_TEXT(304 + top, 478 + left, 275, 23, dataArray[75]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // ####################证券账户#########
    // 证券账户--上海A股22-76
    if (dataArray.length > 76) {
        LODOP.ADD_PRINT_TEXT(328 + top, 188 + left, 226, 23, dataArray[76]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证券账户--深圳A股23-77
    if (dataArray.length > 77) {
        LODOP.ADD_PRINT_TEXT(328 + top, 478 + left, 276, 23, dataArray[77]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证券账户--开放式基金24-78
    if (dataArray.length > 78) {
        LODOP.ADD_PRINT_TEXT(350 + top, 188 + left, 565, 23, dataArray[78]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证券账户--代办股份转让系统25-79
    if (dataArray.length > 79) {
        LODOP.ADD_PRINT_TEXT(372 + top, 236 + left, 190, 23, dataArray[79]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证券账户--其 他26-80
    if (dataArray.length > 80) {
        LODOP.ADD_PRINT_TEXT(372 + top, 478 + left, 275, 23, dataArray[80]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // ####################转账银行#########
    // 转账银行--银行币种(27-81)
    if (dataArray.length > 81) {
        LODOP.ADD_PRINT_TEXT(394 + top, 210 + left, 60, 23, dataArray[81]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 转账银行--银行名称(27-81)-28-82
    if (dataArray.length > 82) {
        LODOP.ADD_PRINT_TEXT(394 + top, 275 + left, 200, 23, dataArray[82]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 转账银行--银行账号(29-83)
    if (dataArray.length > 83) {
        LODOP.ADD_PRINT_TEXT(416 + top, 188 + left, 290, 23, dataArray[83]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 转账银行--币种(29-83) 30-84
    if (dataArray.length > 84) {
        LODOP.ADD_PRINT_TEXT(394 + top, 510 + left, 60, 23, dataArray[84]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 转账银行--银行名称 31-85
    if (dataArray.length > 85) {
        LODOP.ADD_PRINT_TEXT(394 + top, 570 + left, 183, 23, dataArray[85]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 转账银行--银行账号 32-86
    if (dataArray.length > 86) {
        LODOP.ADD_PRINT_TEXT(416 + top, 478 + left, 275, 23, dataArray[86]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // ####################法定代表人(执行事务合伙人或负责人)#########
    // 法定代表人(执行事务合伙人或负责人)姓 名33-87
    if (dataArray.length > 87) {
        LODOP.ADD_PRINT_TEXT(436 + top, 188 + left, 139, 23, dataArray[87]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 法定代表人(执行事务合伙人或负责人)性别34-88
    if (dataArray.length > 88) {
        LODOP.ADD_PRINT_TEXT(436 + top, 357 + left, 60, 23, dataArray[88]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 法定代表人(执行事务合伙人或负责人)国籍或地区35-89
    if (dataArray.length > 89) {
        LODOP.ADD_PRINT_TEXT(436 + top, 480 + left, 91, 23, dataArray[89]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 法定代表人(执行事务合伙人或负责人)证件类别36-90
    if (dataArray.length > 90) {
        LODOP.ADD_PRINT_TEXT(436 + top, 622 + left, 135, 23, dataArray[90]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 法定代表人(执行事务合伙人或负责人)证件号码37-91
    if (dataArray.length > 91) {
        LODOP.ADD_PRINT_TEXT(460 + top, 188 + left, 293, 23, dataArray[91]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 法定代表人(执行事务合伙人或负责人)证件有效期限38-92
    if (dataArray.length > 92) {
        LODOP.ADD_PRINT_TEXT(460 + top, 569 + left, 185, 23, dataArray[92]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // ####################开户代理人#########
    // 开户代理人-姓名40-93
    if (dataArray.length > 93) {
        LODOP.ADD_PRINT_TEXT(506 + top, 120 + left, 183, 23, dataArray[93]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-性别41-94
    if (dataArray.length > 94) {
        LODOP.ADD_PRINT_TEXT(506 + top, 338 + left, 77, 23, dataArray[94]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-国籍或地区42-95
    if (dataArray.length > 95) {
        LODOP.ADD_PRINT_TEXT(506 + top, 476 + left, 93, 23, dataArray[95]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-证件类别43-96
    if (dataArray.length > 96) {
        LODOP.ADD_PRINT_TEXT(506 + top, 622 + left, 135, 23, dataArray[96]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-证件号码44-97
    if (dataArray.length > 97) {
        LODOP.ADD_PRINT_TEXT(528 + top, 120 + left, 358, 23, dataArray[97]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-证件有效期限45-98
    if (dataArray.length > 98) {
        LODOP.ADD_PRINT_TEXT(528 + top, 569 + left, 185, 23, dataArray[98]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-移动电话46-99
    if (dataArray.length > 99) {
        LODOP.ADD_PRINT_TEXT(550 + top, 120 + left, 358, 23, dataArray[99]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-电子邮箱47-100
    if (dataArray.length > 100) {
        LODOP.ADD_PRINT_TEXT(550 + top, 569 + left, 185, 23, dataArray[100]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-通讯地址48-101
    if (dataArray.length > 101) {
        LODOP.ADD_PRINT_TEXT(574 + top, 120 + left, 451, 23, dataArray[101]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 开户代理人-邮政编码49-102
    if (dataArray.length > 102) {
        LODOP.ADD_PRINT_TEXT(574 + top, 622 + left, 135, 23, dataArray[102]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // ###############################原有老的字段################
    // 委托方式
    if (dataArray.length > 28) {

        if (contains(dataArray[28], "电话委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 129 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(614 + top, 129 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "柜台委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 233 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(614 + top, 233 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "网上委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 338 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(614 + top, 338 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "手机委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 443 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(611 + top, 443 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "自助委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 547 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(614 + top, 547 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[28], "驻留委托", true)) {
            LODOP.ADD_PRINT_TEXT(614 + top, 650 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(614 + top, 650 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }
    // 开通服务
    if (dataArray.length > 29) {

        if (contains(dataArray[29], "手机短信服务", true)) {
            LODOP.ADD_PRINT_TEXT(637 + top, 129 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(637 + top, 129 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (contains(dataArray[29], "通买通卖", true)) {
            LODOP.ADD_PRINT_TEXT(637 + top, 256 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        } else {
            LODOP.ADD_PRINT_TEXT(637 + top, 256 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }

        if (dataArray[29] == "寄送对账单") {
            LODOP.ADD_PRINT_TEXT(637 + top, 360 + left, 23, 23, '是');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
            if (dataArray.length > 30) {

                if (dataArray[30] == "短信") {
                    LODOP.ADD_PRINT_TEXT(633 + top, 457 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }

                if (dataArray[30] == "电子邮件") {
                    LODOP.ADD_PRINT_TEXT(633 + top, 505 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }

                if (dataArray[30] == "信函") {
                    LODOP.ADD_PRINT_TEXT(633 + top, 578 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
            if (dataArray.length > 31) {

                if (dataArray[31] == "每月") {
                    LODOP.ADD_PRINT_TEXT(633 + top, 629 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }

                if (dataArray[31] == "每季度") {
                    LODOP.ADD_PRINT_TEXT(633 + top, 671 + left, 21, 23, '√');
                    LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
                    LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
                }
            }
        } else {
            LODOP.ADD_PRINT_TEXT(637 + top, 360 + left, 23, 23, '否');
            LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
            LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
        }
    }

    // 权证
    if (dataArray.length > 32) {
        LODOP.ADD_PRINT_TEXT(661 + top, 129 + left, 23, 23, dataArray[32]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 股份转让
    if (dataArray.length > 33) {
        LODOP.ADD_PRINT_TEXT(690 + top, 129 + left, 23, 23, dataArray[33]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 报价转让
    if (dataArray.length > 34) {
        LODOP.ADD_PRINT_TEXT(726 + top, 129 + left, 23, 23, dataArray[34]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 创业板
    if (dataArray.length > 35) {
        LODOP.ADD_PRINT_TEXT(757 + top, 129 + left, 23, 23, dataArray[35]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // 股票退市交易
    if (dataArray.length > 52) {
        LODOP.ADD_PRINT_TEXT(792 + top, 132 + left, 23, 23, dataArray[52]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    // 风险警示股票交易
    if (dataArray.length > 53) {
        LODOP.ADD_PRINT_TEXT(828 + top, 132 + left, 23, 23, dataArray[53]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }

    // =================营销人员信息=======================
    // 姓名
    if (dataArray.length > 36) {
        LODOP.ADD_PRINT_TEXT(875 + top, 122 + left, 142, 23, dataArray[36]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 人员类型
    if (dataArray.length > 37) {
        LODOP.ADD_PRINT_TEXT(875 + top, 347 + left, 140, 23, dataArray[37]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 联系电话
    if (dataArray.length > 38) {
        LODOP.ADD_PRINT_TEXT(875 + top, 567 + left, 185, 23, dataArray[38]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 人员编号
    if (dataArray.length > 39) {
        LODOP.ADD_PRINT_TEXT(898 + top, 122 + left, 142, 23, dataArray[39]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证书类别
    if (dataArray.length > 40) {
        LODOP.ADD_PRINT_TEXT(898 + top, 347 + left, 140, 23, dataArray[40]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 证书编号
    if (dataArray.length > 41) {
        LODOP.ADD_PRINT_TEXT(898 + top, 567 + left, 185, 23, dataArray[41]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // =======================乙方====================================
    // 营业部名称
    if (dataArray.length > 42) {
        LODOP.ADD_PRINT_TEXT(1014 + top, 170 + left, 379, 23, dataArray[42]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Bold", 1);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    // 地址
    if (dataArray.length > 43) {
        LODOP.ADD_PRINT_TEXT(1035 + top, 90 + left, 235, 23, dataArray[43]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }
    // 邮编
    if (dataArray.length > 44) {
        LODOP.ADD_PRINT_TEXT(1035 + top, 376 + left, 78, 23, dataArray[44]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 经办
    if (dataArray.length > 45) {
        LODOP.ADD_PRINT_TEXT(1015 + top, 501 + left, 91, 33, dataArray[45]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 复核
    if (dataArray.length > 46) {
        LODOP.ADD_PRINT_TEXT(1015 + top, 644 + left, 91, 33, dataArray[46]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 咨询投诉电话
    if (dataArray.length > 47) {
        LODOP.ADD_PRINT_TEXT(1055 + top, 129 + left, 124, 23, '');
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 联系电话
    if (dataArray.length > 48) {
        LODOP.ADD_PRINT_TEXT(1055 + top, 312 + left, 146, 23, dataArray[48]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }
    // 日期
    if (dataArray.length > 49) {
        LODOP.ADD_PRINT_TEXT(1055 + top, 496 + left, 253, 23, dataArray[49]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 2);
    }

    // =============================补充 资金账户号===================================
    // 资金账户号
    if (dataArray.length > 50) {
        LODOP.ADD_PRINT_TEXT(92 + top, 650 + left, 131, 23, dataArray[50]);
        LODOP.SET_PRINT_STYLEA(0, "FontSize", 10);
        LODOP.SET_PRINT_STYLEA(0, "Alignment", 1);
    }

    LODOP.PREVIEW();
    //	LODOP.PRINT_DESIGN();
}

function doPrintYmtGDZHSQ(printDataStr, basePath) {
    LODOP = getLodop(basePath, document.getElementById('LODOP_OB'), document.getElementById('LODOP_EM'));
    LODOP.PRINT_INITA(0, 0, 800, 1200, "一码通证券账户开立申请表打印");
    LODOP.SET_PRINT_PAGESIZE(0, 2100, 2970, "A4");


    var printDataArr = printDataStr.split('|');
    var name0 = printDataArr[0]; //	姓名
    var nation1 = printDataArr[1]; //	国籍或地区
    var cert_type2 = printDataArr[2]; //	证件类别
    var cert_end_date3 = printDataArr[3]; //	证件有效结束日期
    var longterm4 = printDataArr[4]; //	是否长期有效（是：true，否：false）
    var cert_code5 = printDataArr[5]; //	证件号码
    var cert_address6 = printDataArr[6]; //	身份证明文件注册地址
    var birthday7 = printDataArr[7]; //	出生日期
    var nationality8 = printDataArr[8]; //	民族
    var gender9 = printDataArr[9]; //	性别 1:男，0：女
    var education10 = printDataArr[10]; //	教育程度(博士：01；硕士：02；本科：03；大专：04；高中：05；中专：06；初中及以下：07)。
    var profession11 = printDataArr[11]; //	职业
    var address12 = printDataArr[12]; //	联系地址
    var postcode13 = printDataArr[13]; //	邮编
    var email14 = printDataArr[14]; //	E-mail
    var mobile15 = printDataArr[15]; //	移动电话
    var phone16 = printDataArr[16]; //	固定电话
    var net_service_flag17 = printDataArr[17]; //	网络服务标示：1：开启，0：未启用
    var net_service_pwd18 = printDataArr[18]; //	网络服务密码
    var ymt_account_no19 = printDataArr[19]; //	一码通账户号码
    var account_a20 = printDataArr[20]; //	Ａ股账户:1（1为选中，0为未选中）
    var account_hb21 = printDataArr[21]; //	沪市Ｂ股账户:1（1为选中，0为未选中）
    var account_sb22 = printDataArr[22]; //	深市Ｂ股账户:1（1为选中，0为未选中）
    var account_close_h23 = printDataArr[23]; //	沪市封闭式基金账户:1（1为选中，0为未选中）
    var account_close_s24 = printDataArr[24]; //	深市封闭式基金账户:1（1为选中，0为未选中）
    var account_derivatives_h25 = printDataArr[25]; //	沪市期权合约账户:1（1为选中，0为未选中）
    var account_derivatives_s26 = printDataArr[26]; //	深市期权合约账户:1（1为选中，0为未选中）
    var account_credit_h27 = printDataArr[27]; //	沪市信用账户:1（1为选中，0为未选中）
    var account_credit_s28 = printDataArr[28]; //	深市信用账户:1（1为选中，0为未选中）
    var account_systerm29 = printDataArr[29]; //	股转系统账户:1（1为选中，0为未选中）
    var ymtaccount_other30 = printDataArr[30]; //	其他:99
    var kh_type31 = printDataArr[31]; //	临柜开户:0 见证开户:1 网上开户:2
    var org_user_name32 = printDataArr[32]; //	经办人姓名
    var agent_cert_type33 = printDataArr[33]; //	身份证明文件类型
    var agent_mobile34 = printDataArr[34]; //	联系电话
    var agent_cert_no35 = printDataArr[35]; //	身份证明文件号码
    var agent_bz36 = printDataArr[36]; //	备注
    var creat_emp37 = printDataArr[37]; //	经办人
    var current_date38 = printDataArr[38]; //	填表日期
    var imgbgr = "";
    if (printDataArr.length > 0 || basePath.length > 0) {
        imgbgr = "<img border='0' src='" + basePath + "/themes/default/images/agreement/ymtgdzhsq.jpg' />";
    }

    LODOP.ADD_PRINT_SETUP_BKIMG(imgbgr);
    LODOP.SET_PRINT_STYLEA(0, "Stretch", 1); //(可变形)扩展缩放模式
    LODOP.SET_PRINT_STYLEA(0, "TransColor", "#FFFFFF");
    LODOP.SET_SHOW_MODE("BKIMG_LEFT", 0);
    LODOP.SET_SHOW_MODE("BKIMG_TOP", 0);
    LODOP.SET_SHOW_MODE("BKIMG_WIDTH", 805);
    LODOP.SET_SHOW_MODE("BKIMG_HEIGHT", 1123);
    LODOP.SET_SHOW_MODE("BKIMG_IN_PREVIEW", true);

    var left = 5;
    var top = 5;


    LODOP.ADD_PRINT_TEXT(top + 105, left + 222, 232, 25, name0); //	投资者姓名
    LODOP.ADD_PRINT_TEXT(top + 105, left + 492, 280, 24, nation1); //	国籍或地区
    if (cert_type2 == '0') {
        LODOP.ADD_PRINT_TEXT(top + 130, left + 222, 19, 23, "√"); //	证件类别:居民身份证:0
    } else if (cert_type2 == 'xx') {
        LODOP.ADD_PRINT_TEXT(top + 131, left + 393, 19, 23, "√"); //	证件类别:澳门居民身份证:2
    } else if (cert_type2 == 'xxx') {
        LODOP.ADD_PRINT_TEXT(top + 131, left + 564, 19, 23, "√"); //	证件类别:香港居民身份证:3
    } else if (cert_type2 == '19') {
        LODOP.ADD_PRINT_TEXT(top + 155, left + 222, 19, 23, "√"); //	证件类别:港澳居民来往内地通行证:19
    } else if (cert_type2 == '20') {
        LODOP.ADD_PRINT_TEXT(top + 155, left + 564, 19, 23, "√"); //	证件类别:台湾居民来往大陆通行证:20
    } else if (cert_type2 == '18') {
        LODOP.ADD_PRINT_TEXT(top + 177, left + 222, 19, 23, "√"); //	证件类别:外国人永久居留证:18
    } else if (cert_type2 == '9') {
        LODOP.ADD_PRINT_TEXT(top + 173, left + 393, 19, 23, "√"); //	证件类别:护照:9 
    } else {
        LODOP.ADD_PRINT_TEXT(top + 173, left + 564, 19, 23, "√"); //	证件类别:其他:99
    }

    if (longterm4 == 'true') {
        LODOP.ADD_PRINT_TEXT(top + 202, left + 483, 19, 23, "√"); // 是否长期有效（是：true，否：false）
    } else {
        if (cert_end_date3 != '' && cert_end_date3.length > 7) {
            LODOP.ADD_PRINT_TEXT(top + 201, left + 221, 19, 23, "√"); // 证件有效结束日期选择
            LODOP.ADD_PRINT_TEXT(top + 201, left + 244, 44, 23, cert_end_date3.substring(0, 4)); // 证件有效结束日期：年
            LODOP.ADD_PRINT_TEXT(top + 201, left + 296, 34, 23, cert_end_date3.substring(4, 6)); // 证件有效结束日期：月
            LODOP.ADD_PRINT_TEXT(top + 201, left + 348, 34, 23, cert_end_date3.substring(6, 8)); // 证件有效结束日期：日
        }
    }

    LODOP.ADD_PRINT_TEXT(top + 229, left + 221, 550, 25, cert_code5); //	证件号码
    LODOP.ADD_PRINT_TEXT(top + 257, left + 219, 553, 25, cert_address6); //	身份证明文件注册地址
    if (birthday7 != '' && birthday7.length > 7) {
        LODOP.ADD_PRINT_TEXT(top + 315, left + 220, 54, 23, birthday7.substring(0, 4)); //	出生日期：年
        LODOP.ADD_PRINT_TEXT(top + 315, left + 286, 34, 23, birthday7.substring(4, 6)); //	出生日期：月
        LODOP.ADD_PRINT_TEXT(top + 315, left + 337, 33, 23, birthday7.substring(6, 8)); //	出生日期：日
    }

    LODOP.ADD_PRINT_TEXT(top + 311, left + 463, 154, 30, nationality8); //	民族
    if (gender9 == 'M') {
        LODOP.ADD_PRINT_TEXT(top + 313, left + 675, 19, 23, "√"); //	性别 1:男
    } else if (gender9 == 'F') {
        LODOP.ADD_PRINT_TEXT(top + 313, left + 732, 19, 23, "√"); //	性别 0：女
    }

    if (education10 == '01') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 222, 19, 23, "√"); //	教育程度:博士：01
    } else if (education10 == '02') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 294, 19, 23, "√"); //	教育程度:硕士：02
    } else if (education10 == '03') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 368, 19, 23, "√"); //	教育程度:本科：03
    } else if (education10 == '04') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 433, 19, 23, "√"); //	教育程度:大专：04
    } else if (education10 == '06') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 504, 19, 23, "√"); //	教育程度:高中：06
    } else if (education10 == '05') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 580, 19, 23, "√"); //	教育程度:中专：05
    } else if (education10 == '07') {
        LODOP.ADD_PRINT_TEXT(top + 343, left + 643, 19, 23, "√"); //	教育程度:初中及以下：07
    } else {

    }

    if (profession11 == '01') {
        LODOP.ADD_PRINT_TEXT(top + 367, left + 222, 19, 18, "√"); //	职业:文教科卫专业人员：01
    } else if (profession11 == '02') {
        LODOP.ADD_PRINT_TEXT(top + 367, left + 474, 19, 18, "√"); //	职业:党政(机关干部)：02
    } else if (profession11 == '03') {
        LODOP.ADD_PRINT_TEXT(top + 386, left + 222, 19, 18, "√"); //	职业:企事业单位干部：03
    } else if (profession11 == '04') {
        LODOP.ADD_PRINT_TEXT(top + 386, left + 474, 19, 18, "√"); //	职业:行政企事业单位工人：04
    } else if (profession11 == '05') {
        LODOP.ADD_PRINT_TEXT(top + 405, left + 222, 19, 18, "√"); //	职业:农民：05
    } else if (profession11 == '06') {
        LODOP.ADD_PRINT_TEXT(top + 405, left + 327, 19, 18, "√"); //	职业:个体：06
    } else if (profession11 == '07') {
        LODOP.ADD_PRINT_TEXT(top + 405, left + 474, 19, 18, "√"); //	职业:无业：07
    } else if (profession11 == '08') {
        LODOP.ADD_PRINT_TEXT(top + 405, left + 612, 19, 18, "√"); //	职业:军人;08
    } else if (profession11 == '09') {
        LODOP.ADD_PRINT_TEXT(top + 424, left + 222, 19, 18, "√"); //	职业:学生:09
    } else if (profession11 == '10') {
        LODOP.ADD_PRINT_TEXT(top + 424, left + 327, 19, 18, "√"); //	职业:证券从业人员:10
    } else if (profession11 == '98') {
        LODOP.ADD_PRINT_TEXT(top + 424, left + 474, 19, 18, "√"); //	职业:离退休:98
    } else if (profession11 == '99') {
        LODOP.ADD_PRINT_TEXT(top + 424, left + 612, 19, 18, "√"); //	职业:其他:99
    } else {

    }

    LODOP.ADD_PRINT_TEXT(top + 475, left + 219, 401, 25, address12); //	联系地址
    LODOP.ADD_PRINT_TEXT(top + 476, left + 672, 103, 25, postcode13); //	邮编
    LODOP.ADD_PRINT_TEXT(top + 506, left + 118, 200, 20, email14); //	电子邮件
    LODOP.ADD_PRINT_TEXT(top + 504, left + 408, 135, 25, mobile15); //	移动电话
    LODOP.ADD_PRINT_TEXT(top + 503, left + 624, 150, 25, phone16); //	固定电话
    if (net_service_flag17 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 558, left + 220, 19, 18, "√"); //	网络服务标示：1：开启x
        LODOP.ADD_PRINT_TEXT(top + 558, left + 507, 34, 23, net_service_pwd18); //	网络服务密码
        LODOP.ADD_PRINT_TEXT(top + 558, left + 554, 34, 23, net_service_pwd18); //	网络服务密码
        LODOP.ADD_PRINT_TEXT(top + 558, left + 602, 34, 23, net_service_pwd18); //	网络服务密码
        LODOP.ADD_PRINT_TEXT(top + 558, left + 647, 34, 23, net_service_pwd18); //	网络服务密码
        LODOP.ADD_PRINT_TEXT(top + 558, left + 690, 34, 23, net_service_pwd18); //	网络服务密码
        LODOP.ADD_PRINT_TEXT(top + 558, left + 734, 34, 23, net_service_pwd18); //	网络服务密码
    } else if (net_service_flag17 == '0') {
        LODOP.ADD_PRINT_TEXT(top + 561, left + 287, 19, 18, "√"); //	网络服务标示：0：未启用
    }

    LODOP.ADD_PRINT_TEXT(top + 610, left + 35, 19, 18, "√"); //	一码通账户打钩
    LODOP.ADD_PRINT_TEXT(top + 611, left + 190, 196, 20, ymt_account_no19); //	一码通账户号码
    if (account_a20 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 630, left + 83, 19, 18, "√"); //	Ａ股账户:1（1为选中，0为未选中）
    }
    if (account_hb21 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 630, left + 302, 19, 18, "√"); //	沪市Ｂ股账户:1（1为选中，0为未选中）
    }

    if (account_sb22 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 630, left + 538, 19, 18, "√"); //	深市Ｂ股账户:1（1为选中，0为未选中）
    }

    if (account_close_h23 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 649, left + 83, 19, 18, "√"); //	沪市封闭式基金账户:1（1为选中，0为未选中）
    }

    if (account_close_s24 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 649, left + 302, 19, 18, "√"); //	深市封闭式基金账户:1（1为选中，0为未选中）
    }

    if (account_derivatives_h25 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 649, left + 538, 19, 18, "√"); //	沪市期权合约账户:1（1为选中，0为未选中）
    }

    if (account_derivatives_s26 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 668, left + 83, 19, 18, "√"); //	深市期权合约账户:1（1为选中，0为未选中）
    }

    if (account_credit_h27 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 668, left + 302, 19, 18, "√"); //	沪市信用账户:1（1为选中，0为未选中）
    }

    if (account_credit_s28 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 668, left + 538, 19, 18, "√"); //	深市信用账户:1（1为选中，0为未选中）
    }

    if (account_systerm29 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 690, left + 83, 19, 18, "√"); //	股转系统账户:1（1为选中，0为未选中）
    }

    if (ymtaccount_other30 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 690, left + 302, 19, 18, "√"); //	其他:99
    }

    if (kh_type31 == '0') {
        LODOP.ADD_PRINT_TEXT(top + 716, left + 148, 19, 18, "√"); //	临柜开户:0
    } else if (kh_type31 == '1') {
        LODOP.ADD_PRINT_TEXT(top + 716, left + 333, 19, 18, "√"); //	见证开户:1 
    } else if (kh_type31 == '2') {
        LODOP.ADD_PRINT_TEXT(top + 716, left + 537, 19, 18, "√"); //	网上开户:2
    } else {

    }

    LODOP.ADD_PRINT_TEXT(top + 765, left + 124, 229, 25, org_user_name32); //	经办人姓名
    if (agent_cert_type33 == '0') {
        LODOP.ADD_PRINT_TEXT(top + 768, left + 511, 19, 18, "√"); //	身份证明文件类型:居民身份证
    } else if (agent_cert_type33 == '9') {
        LODOP.ADD_PRINT_TEXT(top + 768, left + 634, 19, 18, "√"); //	身份证明文件类型:护照
    } else if (agent_cert_type33 == '99') {
        LODOP.ADD_PRINT_TEXT(top + 768, left + 706, 19, 18, "√"); //	身份证明文件类型:其他
    } else {

    }

    LODOP.ADD_PRINT_TEXT(top + 794, left + 124, 266, 25, agent_mobile34); //	联系电话
    LODOP.ADD_PRINT_TEXT(top + 794, left + 508, 266, 25, agent_cert_no35); //	身份证明文件号码
    LODOP.ADD_PRINT_TEXT(top + 822, left + 89, 686, 25, agent_bz36); //	备注
    LODOP.ADD_PRINT_TEXT(top + 942, left + 95, 156, 20, creat_emp37); //	经办人
    LODOP.ADD_PRINT_TEXT(top + 961, left + 517, 215, 20, current_date38); //	填表日期
    if (current_date38 != '' && current_date38.length > 7) {
        LODOP.ADD_PRINT_TEXT(top + 1055, left + 518, 68, 20, current_date38.substring(0, 4)); //	填表日期：年
        LODOP.ADD_PRINT_TEXT(top + 1055, left + 611, 44, 20, current_date38.substring(4, 6)); //	填表日期：月
    }
    LODOP.PREVIEW();
    // LODOP.PRINT_DESIGN();
    //LODOP.PRINT_SETUP();
}