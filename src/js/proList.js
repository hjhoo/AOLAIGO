$(function(){

    var $proDetail=$('.proDetail');
    $.ajax({
        url:'../Json/ProList.json',
        dataType:'json',
        success:function(res)
        {
//      	console.log(res)
        	var $ul=$('.prod_a');
            $.each(res,function(idx,val)
            {
             	var $li=$('<li/>');
             	var $A=$('<a/>');
				var $img=$('<img/>').attr({src:val.proImage});
				var $p=$('<p/>').text(val.proTitle);
				var $div=$('<div/>').addClass('proPrice');
				var $i=$('<i/>').html(val.oldPri);
				var $em=$('<em/>').html(val.newPri);
				var $b=$('<b/>').html(val.proNum);

				$img.appendTo($A);
				$p.appendTo($A);
				
				$i.appendTo($div);
				$em.appendTo($div);
				$b.appendTo($div);
				
				$A.appendTo($li);
				$div.appendTo($li);
				
				$li.appendTo($ul);
            })

        }
    });
});
