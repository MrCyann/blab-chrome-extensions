// Blab.im recent Developer Console log Chat v1.160510
// twitter.com/MrCyan

function list_chat() {
	var item_msg_text = [];
	var item_fav_count = [];
	var item_fav_msg = [];
	var item_username = [];
	var item_badge_host = [];
	
	var class_msg_text = "chat-message";
	var class_fav_count = "favorite-count";
	var class_fav_by = "favorited-by";
	var class_fav_msg = "favorite-msg";
	var class_username = "username";
	var class_badge_host = "badge_host";

	var user_len = 0;
	var line_text = "";
	var rep = "";
	var node_count = document.getElementsByClassName(class_msg_text).length;
	var node_chat = document.getElementsByClassName(class_msg_text);
	for (i = 0; i < node_count; i++) {
		item_badge_host[i] = "";
		node_chat = document.getElementsByClassName(class_msg_text)[i];
		//if (node_chat.getElementsByClassName(class_badge_host)[i]) { // ??????
		//	item_badge_host[i] += "(H)";
		//} else {
		//	item_badge_host[i] += "";			
		//}
		item_msg_text[i] = document.getElementsByClassName(class_msg_text)[i].innerText;
		item_fav_count[i] = document.getElementsByClassName(class_fav_count)[i].innerText;
		item_fav_msg[i] = document.getElementsByClassName(class_fav_msg)[i].innerText;
		item_msg_text[i] = item_msg_text[i].replace(/(\r\n|\n|\r)/gm," ");
	}
	for (i = 0; i < node_count; i++) {
		line_text = i
		line_text += ""
		line_text += item_badge_host[i];
		line_text += " "
		line_text += item_msg_text[i];
		if (item_fav_count[i] !== '') {
			line_text += " (*"
			line_text += Number(item_fav_count[i]);
			line_text += ")"
		}
		console.log(line_text);
	}
	
}

list_chat();
