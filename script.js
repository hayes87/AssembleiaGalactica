$(function()
{
	$('#btn').click(function()
  {
		var link = "https://discord.com/api/webhooks/869308508573663305/OegnFO27k-_BxlmoWswR78xnUkwdaZKVLqz-1m5m-xZipWjuD3NTaOSN_ami-g5-HrZj";
		var username = $('#username').val();
		localStorage.setItem('xUsername', username);
		var content = $('#content').val();
		var avatar = $('#avatar').val();
		localStorage.setItem('xAvatar', avatar);
		if (link==null || link=="",content==null || content=="")
		{
			
			return false;
		}
		$.post(link, {"content": content, "username": username, "avatar_url": avatar,});

	});
});

window.onload = function() 
{
	alert(localStorage.getItem('xUsername'));
	document.getElementById('#username').value = localStorage.getItem('xUsername');
	document.getElementById('#avatar').value = localStorage.getItem('xAvatar');	
};