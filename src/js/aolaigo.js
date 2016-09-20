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

	/*tab切换页*/
//	$('.Sale_btn').on('click',a,function(){
//			
//	});

	//奢侈区切换
//	$('.luxury_tab')on('mouseenter','li',function(){
//		$(this).find('div').css('display','block');
//	}).on('mouseleave','li',function(){
//		$(this).find('div').css('display','none');
//	});
	


	
//	品牌上新手风琴效果
	$('.New_list').on('mouseenter','li',function(){
		// 1)鼠标移入
		// 1>宽度改为400,其他它改成160
//		$(this).eq(0.)
		$(this).stop().animate({width:400}).siblings('li').stop().animate({width:200})//10s,6个li
		// 2>隐藏文字
		$(this).find('.NewList_logo').hide();
		$(this).find('.NewList_x').find('img').animate({width:400,height:880});
		$(this).find('.NewList_d').show().animate({width:400});
		
	}).on('mouseleave','li',function(){
		$('.New_list li').stop().animate({width:200});
		$(this).find('.NewList_d').hide();
		$(this).find('.NewList_x').find('img').animate({width:200,height:440})
		// 1>显示文字
		$(this).find('.NewList_logo').show();

		// 所有li宽度改成200
		//花10s,6个li
	})
})