$(function(){
    var toLeftbtn=$('.balls').find('.line-toleft');
    var toRightbtn=$('.balls').find('.line-toright');
    var tochange=$('.balls').find('.to-change');
    var ball=$('.balls').find('.ball');
    var dayLine=tochange.find('.dayLine');


    toLeftbtn.click(function(){
        var oldball=[];
        var dayLineHtmlOld=[];
        for(var i=0;i<dayLine.length;i++){
            dayLineHtmlOld.push(parseInt(dayLine[i].innerHTML));
            oldball.push(ball[i].classList);
        }
        oldball.splice(0,1);
        alert(oldball);
        for(var i=0;i<dayLine.length;i++){
            dayLine[i].innerHTML=dayLineHtmlOld[i]-1+'日';
        }
    })

    toRightbtn.click(function(){
        var dayLineHtmlOld=[];
        for(var i=0;i<dayLine.length;i++){
            dayLineHtmlOld.push(parseInt(dayLine[i].innerHTML));
        }
        for(var i=0;i<dayLine.length;i++){
            dayLine[i].innerHTML=dayLineHtmlOld[i]+1+'日';
        }
    })
})