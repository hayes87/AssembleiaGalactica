$(function()
{
	$('#btn').click(function()
  {
		var link = "https://discord.com/api/webhooks/869309946825678950/KDSeyZ3bh0sxDUxKJmPIjcMJewIwcTosgZtucQH14UDJEdGmAvk-QX8OzAq7R7SdWar5";
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
	document.getElementById('username').value = localStorage.getItem('xUsername');
	document.getElementById('avatar').value = localStorage.getItem('xAvatar');	
};