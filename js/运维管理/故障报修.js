$(function(){
    //计算左边aside高度
    var $wrapNav=$('.wrap-nav');
    var $wrapHeader=$('.wrap-header');
    var $ctWrap=$('.ct-wrap');
    var navigationHeight=$wrapNav.height()+$wrapHeader.height()+$ctWrap.height()+11;
    var $aside=$('.aside');
    $aside.height(navigationHeight);
    var $ball=$('.ball');
    var ballWidth=  $ball.width();
    var allLineWidth=  $('.allLine').width();

    //根据宽度改变小球的高度和线的位置
    function toBallWidth(){
        var $ball=$('.ball');
        $('.allLine').width(allLineWidth);
        $ball.height(ballWidth);
        var $line=$('.line');
        $line.css('marginTop',ballWidth/2-1);

        var $tableBall=$('.ga-table').find('.ball');
        var $tableLine=$('.ga-table').find('.line');
        var tableBallWidth=$tableBall.width();
        $tableBall.height(tableBallWidth);
        $tableLine.css('marginTop',tableBallWidth/2-1);
    }
    toBallWidth();


    //随机改变小球的颜色，今天之后的小球变为白色，非下拉框中的小球雨下拉框中的一致
    function toWhite(){
        var toBall=$('.con-row-down-word').find('.ball');
        var downBall=$('.balls').find('.con-dowm').find('.ball');
        var date=new Date();
        var day=date.getDate();
        for(var i=0;i<downBall.length;i++){
            if(i>day-1){
                downBall[i].style.backgroundColor='#fff';
            }else if(i==day-1){
                downBall[i].classList.add('active');
                downBall[i].classList.remove('red-ball');
                downBall[i].classList.add('green-ball');
            }else{
                var color=parseInt(Math.random()*(2-1+1)+1);
                switch(color){
                    case 1:
                        downBall[i].classList.add('green-ball');
                        break;
                    case 2:
                        downBall[i].classList.add('red-ball');
                        break;
                }
            }
        }
        for(var i=0;i<7;i++){
            $(toBall[i]).css('backgroundColor',$(downBall[i]).css('backgroundColor'));
        }
    }
    toWhite();

    //点击下拉框中的小球后，改变上面的年月
    function toYearMonth(){
        var Wordup=$(conRowDownWord).find('.one-day')[0];
        var yearWord=Wordup.querySelector('.yearLine');
        var monthWord=Wordup.querySelector('.monthLine');
        var date=new Date();
        var year=date.getFullYear();
        var month=date.getMonth()+1;
        yearWord.innerHTML=year+'年';
        monthWord.innerHTML=month+'月';
    }


    var conRowDown=document.querySelectorAll('.con-row-down');
    var conDown=document.querySelectorAll('.con-dowm');
    var conRowDownWord=document.querySelectorAll('.con-row-down-word');

    toYearMonth();


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
                    toBallWidth();
                    toYearMonth();
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