// AnyChat for Web SDK

/********************************************
 *				业务逻辑控制				*
 *******************************************/
 
var mDefaultServerAddr = "demo.anychat.cn";		// 默认服务器地址
var mDefaultServerPort = 8906;					// 默认服务器端口号
var mSelfUserId = -1; 							// 本地用户ID
var mTargetUserId = -1;							// 目标用户ID（请求了对方的音视频）
var mRefreshVolumeTimer = -1; 					// 实时音量大小定时器
var mRefreshPluginTimer = -1;					// 检查插件是否安装完成定时器

// 日志记录类型，在日志信息栏内显示不同的颜色
var LOG_TYPE_NORMAL = 0;
var LOG_TYPE_API = 1;
var LOG_TYPE_EVENT = 2;
var LOG_TYPE_ERROR = 3;

// 通知类型，在文字消息栏内显示不同的颜色
var NOTIFY_TYPE_NORMAL = 0;
var NOTIFY_TYPE_SYSTEM = 1;


function LogicInit() {

    setTimeout(function () {
		if (navigator.plugins && navigator.plugins.length) {
			window.navigator.plugins.refresh(false);
		}
        //检查是否安装了插件	
        var NEED_ANYCHAT_APILEVEL = "0"; 						// 定义业务层需要的AnyChat API Level
        var errorcode = BRAC_InitSDK(NEED_ANYCHAT_APILEVEL); 	// 初始化插件
        AddLog("BRAC_InitSDK(" + NEED_ANYCHAT_APILEVEL + ")=" + errorcode, LOG_TYPE_API);
        if (errorcode == GV_ERR_SUCCESS) {
			if(mRefreshPluginTimer != -1)
				clearInterval(mRefreshPluginTimer); 			// 清除插件安装检测定时器
            //ShowLoginDiv(true);
            //AddLog("AnyChat Plugin Version:" + BRAC_GetVersion(0), LOG_TYPE_NORMAL);
            //AddLog("AnyChat SDK Version:" + BRAC_GetVersion(1), LOG_TYPE_NORMAL);
            //AddLog("Build Time:" + BRAC_GetSDKOptionString(BRAC_SO_CORESDK_BUILDTIME), LOG_TYPE_NORMAL);
			
			GetID("prompt_div").style.display = "none"; 		// 隐藏插件安装提示界面
			// 初始化界面元素
			
			//设置文件地址
			BRAC_SetSDKOption(BRAC_SO_RECORD_TMPDIR,"c:\\temp\\");
			//BRAC_SetSDKOption(BRAC_TRANSTASK_PROGRESS,100.0);
			
        } else { 						// 没有安装插件，或是插件版本太旧，显示插件下载界面
            GetID("prompt_div").style.display = "block";
            SetDivTop("prompt_div", 300);
            if (errorcode == GV_ERR_PLUGINNOINSTALL)
                GetID("prompt_div_line1").innerHTML = "首次进入需要安装插件，请点击下载按钮进行安装！";
            else if (errorcode == GV_ERR_PLUGINOLDVERSION)
                GetID("prompt_div_line1").innerHTML = "检测到当前插件的版本过低，请下载安装最新版本！";
				
			if(mRefreshPluginTimer == -1) {
				mRefreshPluginTimer = setInterval(function(){ LogicInit(); }, 1000);
			}
		}
    }, 500);
}

 
    
    //登录按钮
   function loginMonitor() {
	   var ip = GetID("ip").value;
  		var port = GetID("port").value;
  		var userName = GetID("userName").value;
  		//var roomid = GetID("roomid").value;
  		var roomName = GetID("roomName").value;
           //DisplayLoadingDiv(true);
           var errorcode = BRAC_Connect(ip, port); //连接服务器
			errorcode = BRAC_Login(userName,'', 0);
			//EnterRoomRequest(roomid);
			EnterRoomRequestEX(roomName,'');
			//GetID("process").value="";
			$(GetID('end')).attr('disabled','disabled');
			$(GetID('upload')).attr('disabled','disabled');
    }
	

	
function leaveMonitor(){
	//退房间
	//var roomid = GetID("roomid").value;
	
        //var errorcode = BRAC_LeaveRoom(roomid);
		var errorcode = BRAC_LeaveRoom(-1);
		if(mRefreshVolumeTimer != -1)
		clearInterval(mRefreshVolumeTimer); // 清除实时音量显示计时器

        mTargetUserId = -1;

		//退系统
		 var errorcode = BRAC_Logout();
        AddLog("BRAC_Logout()=" + errorcode, LOG_TYPE_API);
		
		ShowRoomDiv(false); 					// 隐藏房间界面
       
		$(GetID('start')).removeAttr('disabled');
		$(GetID('end')).removeAttr('disabled');
		$(GetID('upload')).removeAttr('disabled');
        //ShowLoginDiv(true);

}	

		//开始录像
		function startRecord(){
			
		BRAC_StreamRecordCtrl(-1, 1, 0, 123);
		$(GetID('end')).removeAttr('disabled');
		$(GetID('start')).attr('disabled','disabled');
		}
		//停止录像
		function stopRecord(){

		BRAC_StreamRecordCtrl(-1, 0, 0, 123);
		$(GetID('upload')).removeAttr('disabled');
		$(GetID('end')).attr('disabled','disabled');
		}
		//本地录像存放路径
		var FILEPATH;
		
		//上传录像
		function uploadRecord() {
			//var uploadFileName= "11-23-16-070_test_92.mp4";
			var uploadFileName= FILEPATH.split('\\')[FILEPATH.split('\\').length - 1];
			//var serialNo = "20141022170405325740791129908";
			var serialNo = GetID('roomName').value;
			var briage = uploadFileName+"@"+serialNo;
			var myArray = new Array();
			myArray = briage.split("");

			var retCode = BRAC_TransBuffer(0, myArray);
			if (retCode == 0) {
				var taskid = BRAC_TransFile(0, FILEPATH, 1, 1, 0);
				if (taskid > 0) {
					//DisplayLoadingDiv(true);
					var pros = 0;
					var id = -1;
					id = window.setInterval(function() {
						// pros = BRAC_QueryTransTaskInfo(mSelfUserId,taskid,1);
						// -1代表当前用户
						pros = BRAC_QueryTransTaskInfo(-1, taskid, 1);
						$('#processDiv').css('width',pros + '%').children().html(pros + '%已完成');
						//GetID("process").value = pros + "%";
						if (pros == 100.0) {
							//DisplayLoadingDiv(false);
							window.clearInterval(id);
							//alert('upload success');
						}
					}, 200);
					// 取消定时执行
				}
			}else{
				alert("upload fail");
			}
			$(GetID('start')).removeAttr('disabled');
			
		}
		


function PasswordFocus(obj,color){
	// 判断文本框中的内容是否是默认内容
	if(obj.value=="密码可为空")
		obj.value="";
	obj.type="password";
	// 设置文本框获取焦点时候背景颜色变换
	obj.style.backgroundColor=color;
}
// 当鼠标离开时候改变文本框背景颜色
function myblur(obj,color){
	obj.style.background=color;
}

//计算高度并设置界面位置
function SetDivTop(id, TheHeight) {
    var BodyHeight = document.documentElement.clientHeight; //获得浏览器可见区域高度
	if (TheHeight < BodyHeight) {//div高度小于可见区域高度
	    GetID("margintop").style.height = (BodyHeight - TheHeight) / 4 + "px";
	    GetID(id).style.marginTop = "0px";
    }
}

//系统信息框滚动条显隐
function DisplayScroll(id) {
    var offset = GetID(id); //需要检测的div
	if (offset.offsetHeight < offset.scrollHeight) {//div可见高度小于div滚动条高度
		GetID(id).style.overflowY = "scroll";//显示滚动条
		GetID(id).scrollTop = GetID(id).scrollHeight;//滚动条自动滚动到底部
	}
	else
		GetID(id).style.overflowY = "hidden";//隐藏滚动条
}
//发送信息
function SendMessage() {
    if (GetID("MessageInput").value != "") {//发送信息框不为空
        var Msg = GetID("MessageInput").value;
		
        BRAC_SendTextMessage(0, 0, Msg); //调用发送信息函数
		DisplayTextMessage(mSelfUserId, Msg);
		GetID("MessageInput").value = "";
		GetID("MessageInput").focus();
	}
}

// 显示文字消息
function DisplayTextMessage(fromuserid, message) {
	var namestr = BRAC_GetUserName(fromuserid) + "&nbsp" + GetTheTime();
	if(fromuserid==mSelfUserId)
		namestr = namestr.fontcolor("#008000");
	else
		namestr = namestr.fontcolor("#000080");
	message = message.fontcolor("#333333");

	var msgdiv = document.createElement("div");
	msgdiv.setAttribute("class", "TheMsgStyle");
	msgdiv.innerHTML = namestr + "：&nbsp&nbsp" + message;
	GetID("ReceiveMsgDiv").appendChild(msgdiv);
	DisplayScroll("ReceiveMsgDiv");
}

// 在文字消息区域显示通知信息
function ShowNotifyMessage(message, type) {
    if (type == NOTIFY_TYPE_SYSTEM) {
        message = message.fontcolor("#FF0000");
    } else {
        message = message.fontcolor("#333333");
    }
	var msgdiv = document.createElement("div");
    msgdiv.setAttribute("class", "TheMsgStyle");
	msgdiv.innerHTML = message + "&nbsp(" + GetTheTime().fontcolor("#999999") + ")";
    GetID("ReceiveMsgDiv").appendChild(msgdiv);
    DisplayScroll("ReceiveMsgDiv");
}

// 显示登录界面
function ShowLoginDiv(bShow) {
	if(bShow) {
		GetID("login_div").style.display = "block"; 	//显示登录界面		
		SetDivTop("login_div", 195); 					//登录界面垂直居中
	} else {
	
	}
}


// 显示房间界面
function ShowRoomDiv(bShow) {
    if (bShow) {
		//GetID("login_div").style.display = "none"; 
    	//隐藏登录界面
        GetID("room_div").style.display = "block"; 	//显示房间界面
        SetDivTop("room_div", 610); 				//房间界面垂直居中
        GetID("MessageInput").focus();
    } else {
    
        GetID("ReceiveMsgDiv").innerHTML = ""; 		//清空房间界面信息接收框
        GetID("room_div").style.display = "none"; 	//隐藏房间界面
		GetID("room_div_userlist").innerHTML = ""; //清空房间界面好友列表
    }
}

// 请求进入指定的房间
function EnterRoomRequest(roomid) {
	var errorcode = BRAC_EnterRoom(roomid, "", 0); //进入房间	 
}

function EnterRoomRequestEX(roomName){
	var errorcode = BRAC_EnterRoomEx(roomName,'');
}

function GetID(id) {
	if (document.getElementById) {
		return document.getElementById(id);
	} else if (window[id]) {
		return window[id];
	}
	return null;
}
// 打开指定用户的音视频
function RequestOtherUserVideo(userid) {
    var userlist = GetID("room_div_userlist");
    // 获得用户列表中所有<a>标签
    var userdivobj = userlist.getElementsByTagName("div");
    for (var i = 0; i < userdivobj.length; i++) {
        userdivobj[i].style.backgroundColor = "White"; 
    }
    // 获取用户列表中所有<img>标签
    var userimgobj = userlist.getElementsByTagName("img");
    for (var j = 0; j < userimgobj.length; j++) {
        if (userimgobj[j].getAttribute("class") == "MicrophoneTag") { // 该图片为 话筒 图片
            userimgobj[j].src = globalRoot + "/themes/default/images/anychat/advanceset/microphone_false.png";
            userimgobj[j].onclick = ""; // 删除话筒按钮点击事件
            userimgobj[j].style.cursor = "";
        }
    }
    // 判断是否需要关闭之前已请求的用户音视频数据
    if (mTargetUserId != -1) {
        BRAC_UserCameraControl(mTargetUserId, 0);
        BRAC_UserSpeakControl(mTargetUserId, 0);
    }
    GetID(userid + "_MicrophoneTag").src = globalRoot + "/themes/default/images/anychat/advanceset/microphone_true.png"; // 点亮话筒图片
    GetID(userid + "_UserDiv").style.backgroundColor = "#E6E6E6"; //设置被点击<a>元素的字体颜色

    mTargetUserId = userid; 					//设置被点用户ID为全局变量
    BRAC_UserCameraControl(userid, 1); 		// 请求对方视频
    BRAC_UserSpeakControl(userid, 1); 		// 请求对方语音
    // 设置远程视频显示位置
    BRAC_SetVideoPos(userid, GetID("AnyChatRemoteVideoDiv"), "ANYCHAT_VIDEO_REMOTE");
    MicrophoneOnclick(userid); // 为当前视频会话用户话筒按钮添加点击事件
}

// 对列表中的用户进行添加、删除操作
function RoomUserListControl(userid, bInsert) {
    var userlist = GetID("room_div_userlist");
    if (bInsert) {
        var itemdiv = document.createElement("div");
        itemdiv.setAttribute("class", "UserListStyle");
        itemdiv.id = userid + "_UserDiv";

        // 判断用户摄像头状态
        if (BRAC_GetCameraState(userid) == 0)
            AddImage(itemdiv, userid + "_CameraTag", "CameraTag", "", userid); // 添加摄像头图片<img>标签
        if (BRAC_GetCameraState(userid) == 1)
            AddImage(itemdiv, userid + "_CameraTag", "CameraTag", globalRoot + "/themes/default/images/anychat/advanceset/camera_false.png", userid); // 添加摄像头图片<img>标签
        if (BRAC_GetCameraState(userid) == 2)
            AddImage(itemdiv, userid + "_CameraTag", "CameraTag", globalRoot + "/themes/default/images/anychat/advanceset/camera_true.png", userid); // 添加摄像头图片<img>标签
        // 判断当前ID是否为自己
        if (userid == mSelfUserId) {
            AddImage(itemdiv, mSelfUserId + "_MicrophoneTag", "mSelfMicrophoneTag", globalRoot + "/themes/default/images/anychat/advanceset/microphone_true.png", userid); // 添加话筒图片<img>标签
            itemdiv.innerHTML += "&nbsp" + BRAC_GetUserName(mSelfUserId) + "(自己)";
        } else {
            AddImage(itemdiv, userid + "_MicrophoneTag", "MicrophoneTag", globalRoot + "/themes/default/images/anychat/advanceset/microphone_false.png", userid); // 添加话筒图片<img>标签
            // 添加用户姓名<a>标签
            var a = document.createElement("a");
            a.id = userid + "_UserTag";
            a.title = BRAC_GetUserName(userid);
            a.innerHTML = BRAC_GetUserName(userid);
            a.href = "javascript:RequestOtherUserVideo(" + userid + ")";
            itemdiv.appendChild(a);
        }
        GetID("room_div_userlist").appendChild(itemdiv);
        MicrophoneOnclick(mSelfUserId);
    } else {
        var my = GetID(userid + "_UserDiv");
        userlist.removeChild(my);
    }
    DisplayScroll("room_div_userlist");
}
//div按钮鼠标划入划出效果
function Mouseover(id) {
	GetID(id).style.backgroundColor = "#FFFFCC";
}
//div按钮鼠标划入划出效果
function Mouseout(id) {
	GetID(id).style.backgroundColor = "#E6E6E6";
}
//获取当前时间  (00:00:00)
function GetTheTime() {
	var TheTime = new Date();
	return TheTime.toLocaleTimeString();
}

// 添加日志并显示，根据不同的类型显示不同的颜色
function AddLog(message, type) {
    if (type == LOG_TYPE_API) {			// API调用日志，绿色
        message = message.fontcolor("Green");
	} else if(type == LOG_TYPE_EVENT) {	// 回调事件日志，黄色
        message = message.fontcolor("#CC6600");
	} else if(type == LOG_TYPE_ERROR) {	// 出错日志，红色
        message = message.fontcolor("#FF0000");
	} else {							// 普通日志，灰色
        message = message.fontcolor("#333333");
	}
    GetID("LOG_DIV_CONTENT").innerHTML += message + "&nbsp" + GetTheTime().fontcolor("#333333") + "<br />";
	DisplayScroll("LOG_DIV_CONTENT");
}

// 显示等待进度条，提示用户操作正在进行中
function DisplayLoadingDiv(bShow) {
    if (bShow) {
        GetID("LOADING_DIV").style.display = "block";
        GetID("LOADING_GREY_DIV").style.display = "block";
        var TheHeight = document.documentElement.clientHeight;
        var TheWidth = document.body.offsetWidth;
        GetID("LOADING_DIV").style.marginTop = (TheHeight - 50) / 2 + "px";
        GetID("LOADING_DIV").style.marginLeft = (TheWidth - 130) / 2 + "px";
    }
    else {
        GetID("LOADING_DIV").style.display = "none";
        GetID("LOADING_GREY_DIV").style.display = "none";
    }
}

//好友 摄像头  话筒  图标
function AddImage(parent_id, img_id, img_class, fir_img, userid) {
    var imgs = document.createElement("img");
    imgs.id = img_id;
    imgs.className = img_class;
    imgs.src = fir_img;
    imgs.style.width = "15px";
    imgs.style.height = "15px";
    parent_id.appendChild(imgs);
}
// 为被点击用户话筒按钮添加点击事件
function MicrophoneOnclick(userid) {
    GetID(userid + "_MicrophoneTag").style.cursor = "pointer"; // 鼠标形状
    GetID(userid + "_MicrophoneTag").onclick = function () { // 话筒点击事件
        var ImgPath = GetID(userid + "_MicrophoneTag").src.split('/');
        if (ImgPath[ImgPath.length - 1] == "microphone_true.png") {
            GetID(userid + "_MicrophoneTag").src = globalRoot + "/themes/default/images/anychat/advanceset/microphone_false.png";
            BRAC_UserSpeakControl(userid, 0); // 关闭语音
        }
        else {
            GetID(userid + "_MicrophoneTag").src = globalRoot + "/themes/default/images/anychat/advanceset/microphone_true.png";
            BRAC_UserSpeakControl(userid, 1); // 开启语音
        }
    }
}