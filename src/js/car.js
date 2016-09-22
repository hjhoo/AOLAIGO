  $(function(){
            /*
                购买商品飞入购物车的效果
                    1）给按钮绑定点击事件
                        1>复制当前商品图片(用于实现动画效果)
                            把复制的图片写入页面，并设置样式
                            动画效果
                        2>复制当前商品所有信息(用于往购物车添加)，等飞入动画完成后添加到购物车
                    2)删除购物车中的“添加到购物车”按钮
                    3)在购物车列表中添加移除按钮
                    	点击按钮时，删除购物车中对应的商品
                    4)删除用于动画的图片
             */
            var $cartList = $('.cart-list ul');
            // 1）给按钮绑定点击事件
            $('#addCart').click(function(){
                var $currentLi = $(this).closest('li');
                var $img = $currentLi.children('img');
                
                // 1.1>复制当前商品图片(用于实现动画效果)
                var $cloneImg = $img.clone();
                // 把复制的图片写入页面，并设置样式
                $cloneImg.css({
                    position:'absolute',
                    width:$img.width(),
                    left:$img.offset().left,
                    top:$img.offset().top
                }).appendTo('body');

                // 给复制的图片设置动画效果
                $cloneImg.animate({
                    left:$cartList.offset().left,
                    top:$cartList.offset().top + $cartList.outerHeight(),
                    width:10,
                    opacity:0
                },function(){
                    // 4)删除用于动画的图片
                    $cloneImg.remove();

                    // 2)删除购物车中的“添加到购物车”按钮
                    var $cloneLi = $currentLi.clone();
                    $cloneLi.find('button').parent('p').remove();

                    // 3)在购物车列表中添加移除按钮
                    var $btnClose = $('<span/>');
                    $btnClose.addClass('btn-close').html('&times;').appendTo($cloneLi);
                    $btnClose.click(function(){
                        $(this).closest('li').remove();
                    });

                    // 1.2>复制当前商品所有信息(用于往购物车添加)，等飞入动画完成后添加到购物车
                    $cloneLi.appendTo($cartList);
                });
            });

            // 3.1点击按钮时，删除购物车中对应的商品
            // $cartList.find('.btn-close').click(function(){
            //     $(this).closest('li').remove();
            // });
       });