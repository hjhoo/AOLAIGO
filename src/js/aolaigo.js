$(function(){
//	topBar hover切换
	$('.rightArea').on('mouseenter','li',function(){
		$(this).find('ul').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('ul').css('display','none');
	});
	
	$(".shop").on('mouseenter','li',function(){
		$(this).find('dl').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('dl').css('display','none');
	});
	
	$('.shopClass_show').on('mouseenter','li',function(){
		$(this).find('div').css('display','block');
	}).on('mouseleave','li',function(){
		$(this).find('div').css('display','none');
	});
//	今日特价
	var btn = $('.Sale_btn');
	var picArr = $('.Sale_a');
	var flag =true;
	btn.click(function(){
		if(flag){
			picArr.hide();
			picArr.eq(1).show();
			flag = false;

		}else{
			picArr.hide();
			picArr.eq(0).show();
			flag =true;
		}
	});
	/*tab切换页*/
	$('.Sale_btn').on('click','a',function(){
		var idx=$(this).index();
		$('.Sale_ban').children().eq(idx).css('display','block').siblings().css('display','none');
	});
	
//	/*tab自动切换切换页*/
//	var conut=0;
//	setInterval(function(){
//		conut++;
//	})
	//奢侈区切换
	$('.luxury_tab').on('mouseenter','span',function(){
		var idx=$(this).index();
		$('.luxury').children().eq(idx).css('display','block').siblings().css('display','none');
	})
	
	//华盛商城大图动态切换
	$('.mallTab').on('mouseenter','span',function(){
		var idx=$(this).index();
		$('.mallcontent').children().eq(idx).css('display','block').siblings().css('display','none');
	})
	
	//华盛商城小图动态切换
	$('.mallBk_num').on('mouseenter','li',function(){
		var idx=$(this).index();
		$('.mallBk_item').children().eq(idx).css('display','block').siblings().css('display','none');
		clearInterval(timer);
	});
	
	var timer;
	myMove();
	$('.mallBk_item').on('mouseenter','li',function(){
		var idx=$(this).index();
		$(this).children().eq(idx).css('display','block').siblings().css('display','none');
		clearInterval(timer);
	}).on('mouseleave',function(){
		myMove();
	});
	function myMove(){
		var iconut=0;
		timer=setInterval(function(){		
			iconut++;			
			if(iconut>3){
				iconut=0;
			}
			$('.mallBk_item').children().eq(iconut).css('display','block').siblings().css('display','none');
			$('.mallBk_num li').eq(iconut).css('background','#666').siblings().css('background','#cbcbcb');
		},1000);
	}
	
	
	//	品牌上新手风琴效果
	$('.New_list li').eq(0).css({width:400})
	$('.New_list').on('mouseenter','li',function(){
		// 鼠标移入
		// 让当前的li宽度改为400,其他li它改成200
		$(this).stop().animate({width:400}).siblings('li').stop().animate({width:200})/*.find('.NewList_x').find('img').animate({width:200,height:440})*///10s,6个li
		// 当前隐藏LOGO文字 ，其他的显示
		$(this).find('.NewList_logo').hide().closest('li').siblings('li').find('.NewList_logo').show();
		// 让当前的img宽度改为400  高800,其他img它改成宽 200 高440
		$(this).find('.NewList_x img').stop().animate({width:400,height:880}).closest('li').siblings('li').find('.NewList_x img').stop().animate({width:200,height:440});
		//让当前的文字div的宽为400 ，其他的为200
		$(this).find('.NewList_d').show().stop().animate({width:400}).closest('li').siblings('li').find('.NewList_d').hide().stop().animate({width:200});		
	})
	
//	侧边悬浮栏鼠标放上去效果
	$('.rightT1_1').on('mouseenter','li',function(){
		$(this).find('div').show();
	}).on('mouseleave','li',function(){
		$(this).find('div').hide();
	});
	
	
	var lastIndex;
	$('.rightTop').on('click','li',function(){
		var idx=$(this).index();
		var rightc = parseInt($('.rightTab').css('right'));
		
		$('.rightContent').children().eq(idx).css('display','block').siblings().css('display','none');
		if(rightc == 0 && idx == lastIndex){
			$('.rightTab').animate({right:'-270px'});				
		}else{
			$('.rightTab').animate({right:0});		
		}
		lastIndex=idx;
	});
	
//	回到顶部
	$('.rightBot').children().eq(1).on('click',function(){

		$('html body').animate({"scrollTop":0},300);
	});
	
	$('.rightBot').children().eq(2).on('click',function(){
		//console.log(1)
		$('.rightTab').css({'display':'none'});
	});
	
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
	
//	xpLast_c
//	if()
})