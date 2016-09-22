$(function(){
	//商品主图切换
	
	$('.simg').on('click','li',function(){
		var idx=$(this).index();
		var src = $(this).find('img').attr('src');
		console.log
		$('#box').find('img').attr({src,src})
	});
	
	//商品详情页 
	$('.data-sao').on('mouseenter',function(){
		$('.dstelma').show();
	}).on('mouseleave',function(){
		$('.dstelma').hide();
	});
	
	
	//
	var $top=$(".xpgood_top").offset().top;		
	var $height = $(document).height();
	$(document).on('scroll',function(){	
		//商品详情页 固定的fixed操作
		
		var $scrollTop=$(window).scrollTop();
		if($scrollTop>=$top)
		{
			$('.xpgood_top').css({"position":"fixed"});
			$('.xpgood_sh').css({'display':'block'});
		}else{
			$('.xpgood_top').css({"position":"static"});
			$('.xpgood_sh').css({'display':'none'})
		}
	});
});
