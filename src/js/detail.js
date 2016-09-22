$(function(){
	var $top=$(".xpgood_top").offset().top;		
	var $height = $(document).height();
	$(document).on('scroll',function(){	
		//商品详情页 固定的fixed操作
		
		var $scrollTop=$(window).scrollTop();
		if($scrollTop>=$top)
		{
			$('.xpgood_top').css({"position":"fixed",'background':'#ccc'});
			$('.xpgood_sh').css({'display':'block'});
		}else{
			$('.xpgood_top').css({"position":"static"});
			$('.xpgood_sh').css({'display':'none'})
		}
	});
});

// 加入购物车
$(function(){
	flyFn();
	function flyFn(){
	var offset = $(".Rtlist").position();  //结束的地方的元素
	offset.top =300;
	var left = $('body').width() - $('.Rtlist').width();
	var n = 0;
	var arr = [];

		$("#addCart").click(function(event){
			 n+=1;
			var addcar = $(this);
			// addcar.css('background','#eeeeee');
			var img = $('.lxzoom img').attr('src');
			// console.log(2);
			$('.rightT1_2 b').html(n);
			var flyer = $('<img class="u-flyer" src="'+img+'">');
			flyer.fly({
					start: {
						left: event.clientX,
						top: event.clientY
					},
					end: {
						left: left,
						top: offset.top,
						width: 0,
						height: 0
					},
					onEnd: function(){
						flyer.remove();
						
					}
				});
			commit();
	  		 function commit(){
	  		 	var color = $('.xqCont_col em').html();
				var size  = $('.xqCont_siz em').html();
				var number = $('#buyNum').val();
				// console.log(color);
				// console.log(number);
				var obj = {};
				obj.color  = color;
				obj.number = number;
				obj.price  = $('.xqCont_pri em').html();
				console.log(obj.price);
				obj.title  = $('.xqCont_bti i').html();
				obj.imgSrc = $('.lxzoom  img').attr('src');
				console.log(obj);
	 			arr.push(obj);
	 		
	 			setCookie('arr',JSON.stringify(arr),5 * 24 * 60);	
	 		}
		});
	}
});
