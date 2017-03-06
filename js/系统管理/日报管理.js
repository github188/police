$(function(){
    var $allHeight=$('.one-left').find('.wr').height();

    $('.one-right-top').height($allHeight*0.3);
    $('.one-right-bottom').height($allHeight*0.7-16);

    //复选框联动
    var checkbox7=$('#checkbox-7');
    var checkboxIn1=$('.checkboxs-in1');

    var checkbox8=$('#checkbox-8');
    var checkboxIn2=$('.checkboxs-in2');

    //全选，全不选
    function cbLinkage(obj,all){
        obj.click(function() {
            if(this.checked){
                all.each(function() {
                    $(this).attr("checked", true);
                });
            }else{
                all.each(function() {
                    $(this).attr("checked", false);
                });
            }
        });
    }
    cbLinkage(checkbox7,checkboxIn1);
    cbLinkage(checkbox8,checkboxIn2);

    //选中一个则选中，都没选中则取消选中
    function setSelectAll(obj){
        var checkedsub = $("input[type='checkbox'][name='subcheck1']:checked").length; //获取选中的subcheck的个数
        if (checkedsub >0) {
            obj.attr("checked", true);
        }else{
            obj.attr("checked", false);
        }
    }
    checkboxIn1.click(function(){
        setSelectAll(checkbox7);
    });


    function setSelectAll2(obj){
        var checkedsub = $("input[type='checkbox'][name='subcheck2']:checked").length; //获取选中的subcheck的个数
        if (checkedsub >0) {
            obj.attr("checked", true);
        }else{
            obj.attr("checked", false);
        }
    }
    checkboxIn2.click(function(){
        setSelectAll2(checkbox8);
    });

})