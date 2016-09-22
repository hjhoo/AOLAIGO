$(function(){
	var arr = JSON.parse(getCookie("arr"));
	console.log(arr);
	if(!arr){
		$(".shopping_nothing").show();
	}else{
			$(".shop_list").append('<div class="buy_shopping">');
			$('.buy_shopping').append("<h2>商品清单(2)</h2><div class='shoping_detail'><div><ul class = 'shopping_item person_item1'><li>全选</li><li>订单商品</li><li>单价</li><li>数量</li><li>优惠</li><li>小计</li><li>操作</li>");
			$.each(arr,function(index,obj){
			$('.shoping_detail').append("</ul><ul class = 'shopping_item person_content'><li><input type='checkbox'></li><li><img src='../img/shop_pic1.jpg' alt=''><div class='shopping_introduce'><p><a href='#''>"+obj.title+"</a></p><p><span>"+obj.color+"</span></p></div></li><li>"+obj.price+"</li><li><em>-</em><span>"+obj.number+"</span><i>+</i></li><li><p>¥5204.00</p><p>优惠促销∧</p></li><li>￥<em>7998.00</em></li><li><em>移入收藏夹</em><em>删除</em></li></ul></div></div>");
			
			})
			$('.buy_shopping').append("<div class='result'><ul class='choose'><li><input type='checkbox'></li><li>全选</li><li>删除</li><li>移入收藏夹</li></ul><ul class='calc'><li><em >商品总额</em><em  class = 'changeRed'>￥"+12800.00+"</em><em> -  商品优惠：</em><em class='changeOrange'>￥5204.00</em><em> =  选购金额：</em>	<em class = 'changeRed'>"+7596.00+"</em></li><li><em class='changeOrange'>￥"+0.00+"</em><em>-  满减优惠：</em></li></ul><ul class='total_money'><li><p>总计：<em>"+9495.00+"</em></p><p> 商品<em>&nbsp;"+5+"&nbsp;</em>件&nbsp;赠品<em>&nbsp;"+0+"&nbsp;</em>件</p></li><li><span>去结算</span></li></ul></div>");
	}
	

});