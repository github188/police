$(function(){
    var $subNav=$('.sub-nav');
    $subNav.find('li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    var $Tr=$('tr');
    $Tr.hover(function(){
        $(this).find('.remove-tr').css('color','#1a2b3f');
        $(this).find('.add-tr').css('color','#1a2b3f');
    },function(){
        $(this).find('.remove-tr').css('color','#35485d');
        $(this).find('.add-tr').css('color','#35485d');
    })

    var $removeTr=$('.remove-tr');
    $removeTr.click(function(){
        _that=$(this);
        disp_confirm();
        //$($(this).parents('tr')[0]).remove();
    })

    //是否确定删除弹窗,并重新排列序号
    function disp_confirm() {
        var r=confirm("确定删除此行？")
        if (r==true) {
            var $thatTable=$(_that.parents('table')[0]);
            $(_that.parents('tr')[0]).remove();
            paixu($thatTable);
            tongjisum()
        }
    }

    //重新排列序号
    function paixu(objTable){
        if(objTable.find('thead').find('td:first-child').html()=='序号') {
            var gotoTr = objTable.find('tbody').find('tr:not(:last-child)');
            for(var i=0;i<gotoTr.length;i++){
                gotoTr[i].index=i+1;
            }
            var gotoTd=gotoTr.find('td:first-child');
            for(var i=0;i<gotoTd.length;i++){
                gotoTd[i].innerHTML=gotoTr[i].index;
            }
        }
    }


    //计费统计
    function tongjisum(){
        var $jifeiSum=$('.jifei-sum');
        var jfsum=0;
        var jifei=document.querySelectorAll('.jifei');
        for(var i=0;i<jifei.length;i++){
            jfsum+=parseFloat(jifei[i].innerHTML);
        }
        $jifeiSum.html(jfsum);
    }

    //添加行
    var $addTr=$('.add-tr');
    $addTr.click(function(){
        var $addTable=$(this).parents('table');
        var $addTrPrev=$(this).parents('tr').prev();
        var $addTrClone=$(this).parents('tr').prev().clone(true);

        $addTrClone.find('td').filter(':not(.notchange)').html('<li>'+
            '<div>'+
            '<input class="add-input" type="text" />'+
            '<input type="button" value="保存" class="add-btn" />'+
            '</div>'+
            '</li>'
            );
        var $addLine=$addTrPrev.after($addTrClone);
        paixu($addTable);
        $('.add-btn').click(function(){
            var $inputVal=$(this).prev().val();
            var $addLi=$(this).parents('li');
            $addLi.css('display','none');
            $(this).parents('td').html($inputVal);
        })
    })
})