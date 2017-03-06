$(function(){
    //function getHeight(){
    //    var $wrapNav=$('.wrap-nav');
    //    var $wrapHeader=$('.wrap-header');
    //    var $ctWrap=$('.ct-wrap');
    //    var $subNav=$('.sub-nav');
    //    var navigationHeight=$wrapNav.height()+$wrapHeader.height()+$ctWrap.height()+$subNav.height()+51;
    //    var $aside=$('.aside');
    //    $aside.height(navigationHeight);
    //}
    //getHeight();
    //
    //window.onresize=function(){
    //    getHeight();
    //}

    var conRowDown=document.querySelectorAll('.con-row-down');
    var conDown=document.querySelectorAll('.con-dowm');
    var conRowDownWord=document.querySelectorAll('.con-row-down-word');
    console.log(conRowDownWord.length)
    function conDownHide(){
        for(var i=0;i<conDown.length;i++){
            conDown[i].style.display='none';
        }
    }

    for(var i=0;i<conRowDown.length;i++){
        conRowDown[i].index=i;
        conRowDown[i].onclick=function(e){
            for(var i=0;i<conDown.length;i++){
                conDown[i].style.display='none';
            }
            conDown[this.index].style.display='block';

            var conCol=conDown[this.index].querySelectorAll('.con-dowm-col');
            var conWord=conRowDownWord[this.index];
            for(var i=0;i<conCol.length;i++){
                conCol[i].onclick=function(){
                    conWord.innerHTML=this.innerHTML;
                }
            }
            e.cancelBubble= true;
        }
    }
    //隐藏所有下拉框
    document.onclick=function(){
        conDownHide();
    }




})