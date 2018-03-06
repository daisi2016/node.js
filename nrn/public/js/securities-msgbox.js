function MessShow(id, width, height, caption, title, message, target, action,url) {
	this.id = id;
	this.title = title;
	this.caption = caption;
	this.message = message;
	this.target = target;
	this.action = action;
	this.width = width ? width : 250;
	this.height = height ? height : 150;
	this.timeout = 500; // 消息停留时间10秒
	this.speed = 10; // 消息速度，越小越快
	this.step = 2; // 移动步长
	this.right = screen.width - 1;
	this.bottom = screen.height;
	this.left = this.right - this.width - 1;
	this.top = this.bottom - this.height - 5;
	this.timer = 0;
	this.pause = false;
	this.close = false;
	this.autoHide = true;
	this.url = url;
}

MessShow.prototype.hide = function() {
	if (this.onunload()) {
		var offset = this.height > this.bottom - this.top ? this.height
				: this.bottom - this.top;
		var me = this;
		if (this.timer > 0) {
			window.clearInterval(me.timer);
		}
		var fun = function() {
			if (me.pause == false || me.close) {
				var x = me.left;
				var y = 0;
				var width = me.width;
				var height = 0;
				if (me.offset > 0) {
					height = me.offset;
				}
				y = me.bottom - height;
				if (y >= me.bottom) {
					window.clearInterval(me.timer);
					me.Pop.hide();
				} else {
					me.offset = me.offset - me.step;
				}
				me.Pop.show(x, y, width, height);
			}
		}
		this.timer = window.setInterval(fun, this.speed)
	}
}
// 消息卸载事件，可以重写
MessShow.prototype.onunload = function() {
	return true;
}
// 消息命令事件，要实现自己的连接，请重写它
MessShow.prototype.oncommand = function() {
	window.open(this.action, this.target);
	this.hide();
}
// 消息显示方法
MessShow.prototype.show = function() {
	var oPopup = window.createPopup(); // IE5.5+
	this.Pop = oPopup;
	var w = this.width;
	var h = this.height;
	var str = "<DIV style='BORDER-RIGHT:#b1b1b1 0px solid; BORDER-TOP:#b1b1b1 0px solid; Z-INDEX: 99999; LEFT: 0px; BORDER-LEFT:#b1b1b1 0px solid; WIDTH: "
			+ w
			+ "px; BORDER-BOTTOM:#b1b1b1 0px solid; POSITION: absolute; TOP: 0px; HEIGHT: "
			+ h + "px; BACKGROUND-COLOR:#b1b1b1'>"
	str += "<TABLE style='BORDER-TOP: #b1b1b1 1px solid; BORDER-LEFT: #b1b1b1 1px solid; BORDER-RIGHT: #b1b1b1 1px solid; BORDER-BOTTOM: #b1b1b1 1px solid' cellSpacing=0 cellPadding=0 width='100%' bgColor=#b1b1b1 border=0>"
	str += "<TR>"
	str += "<TD style='FONT-SIZE: 12px;COLOR: #0052CC' width=30 height=24 background='"+this.url+"/themes/default/images/msgbox/msg_bg.jpg'>&nbsp;</TD>"
	str += "<TD style='PADDING-LEFT: 4px; FONT-WEIGHT: normal; FONT-SIZE: 12px; COLOR:#767676; PADDING-TOP: 4px' valign=middle width='100%' background='"+this.url+"/themes/default/images/msgbox/msg_bg.jpg'>"
			+ this.caption + "</TD>"
	str += "<td width='2' background='"+this.url+"/themes/default/images/msgbox/msg_bg.jpg' bgcolor='#0075AC'><img src='"+this.url+"/themes/default/images/msgbox/msg_line.jpg' width='1' height='29' /></td>"
	str += "<TD style='PADDING-RIGHT: 0px; PADDING-TOP: 0px' valign=middle align=right width=19 background='"+this.url+"/themes/default/images/msgbox/msg_bg.jpg'>"
	str += "<SPAN title=关闭 style='FONT-WEIGHT: bold; FONT-SIZE: 12px; CURSOR: hand; COLOR: red; MARGIN-RIGHT: 0px' id='btSysClose' ><img src='"+this.url+"/themes/default/images/msgbox/msg_icon.jpg' width='29' height='29' /></SPAN></TD>"
	str += "</TR>"
	str += "<TR>"
	str += "<TD style='PADDING-RIGHT: 1px;PADDING-BOTTOM: 1px' colSpan=4 height="
			+ (h - 28) + " background='"+this.url+"/themes/default/images/msgbox/msg_bg1.jpg'>"
	str += "<DIV style='BORDER-RIGHT: FFFFFF 0px solid; PADDING-RIGHT: 8px; BORDER-TOP:#66A3FF 0px solid; PADDING-LEFT: 8px; FONT-SIZE: 12px; PADDING-BOTTOM: 8px; BORDER-LEFT:#FFFFFF 0px solid; WIDTH: 100%; COLOR:#FFFFFF; PADDING-TOP: 8px; BORDER-BOTTOM:#FFFFFF 0px solid; HEIGHT: 100%'><FONT color=#EE0000>"
	//		+ this.title + "</FONT><BR><BR>"
	str += "</FONT><BR><BR>"
	//str += "<DIV style='WORD-BREAK: break-all' align=left><A href='' hidefocus=true id='btCommand'><FONT color=#EE0000>"
	//		+ this.message + "</FONT></A></DIV>"
	str += "<DIV style='WORD-BREAK: break-all' align=left><FONT color=#073A98> "
			+ this.message + " </FONT></DIV>"
	str += "</DIV>"
	str += "</TD>"
	str += "</TR>"
	str += "</TABLE>"
	str += "</DIV>"
	//alert(str);

	oPopup.document.body.innerHTML = str;
	this.offset = 0;
	var me = this;
	oPopup.document.body.onmouseover = function() {
		me.pause = true;
	}
	oPopup.document.body.onmouseout = function() {
		me.pause = false;
	}
	var fun = function() {
		var x = me.left;
		var y = 0;
		var width = me.width;
		var height = me.height;

		if (me.offset > me.height) {
			height = me.height;
		} else {
			height = me.offset;
		}
		y = me.bottom - me.offset;
		if (y <= me.top) {
			me.timeout--;
			if (me.timeout == 0) {
				window.clearInterval(me.timer);
				if (me.autoHide) {
					me.hide();
				}
			}
		} else {
			me.offset = me.offset + me.step;
		}
		me.Pop.show(x, y, width, height);
	}
	this.timer = window.setInterval(fun, this.speed)
	var btClose = oPopup.document.getElementById("btSysClose");
	btClose.onclick = function() {
		me.close = true;
		me.hide();
	}
//	var btCommand = oPopup.document.getElementById("btCommand");
//	btCommand.onclick = function() {
//		me.oncommand();
//	}
}
// 设置速度方法
MessShow.prototype.speed = function(s) {
	var t = 10;

	t = praseInt(s);

	this.speed = t;
}
// 设置步长方法
MessShow.prototype.step = function(s) {
	var t = 2;

	t = praseInt(s);

	this.step = t;
}
MessShow.prototype.rect = function(left, right, top, bottom) {
	this.left = left ? left : 0;
	this.right = right ? right : screen.availWidth - 1;
	this.top = top ? top : 0;
	this.bottom = bottom ? bottom : screen.availHeight;
}

function load(msg,url) {
	// id, width, height, caption, title, message, target, url
	var msg = new MessShow("message_show", 250, 150, "消息提示", "消息提示", msg,
			"_blank", "#",url);
	msg.show();
}
