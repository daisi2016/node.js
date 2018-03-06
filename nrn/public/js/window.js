function openWindow(id, width, height, url, title, modal) {
	$("<iframe id='" + id + "' class='text_max' src='" + url + "'/>").dialog({
		autoOpen : true,
		height : height,
		width : width,
		modal : modal,
		title : title,
	});

};

function CloseEditPage(id,isLoadParent) {
	if(isLoadParent){
		document.location.reload();
	}
	$("#" + id + "").dialog("destroy");
}