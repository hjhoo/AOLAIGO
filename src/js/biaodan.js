$(function(){alert();
	// 表单验证
	//新用户注册事件
		//邮箱验证
		var reg1 = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		// 用户名验证4-20英文字符，数字，‘_’的组合
		var reg2 = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;
		// 密码验证6-16位字符
		var reg3 = /^[A-Z|a-z|0-9]{6,16}$/;
	$(".zcCon_inp input").blur(function(){
		var $txt = $(this).val();
		var $name = $(this).attr('name');
		var $next = $(this).parent().next();
		switch($name){
			case 'txtUserName':
			if(!reg2.text(txt)){
				$next.css('color','red');
			});break;
		}
	};
});