$(function(){
    var $searchText=$('.search-text');
    var $forSearch=$('.for-search');
    var $searchTable=$('.search-table');
    var $searchTableHtml=$('.search-table').html();
    var $showTr=$searchTable.find('tbody').find('tr:not(:last-child)');
    var $SearchTd=$searchTable.find('tbody').find('tr:not(:last-child)').find('td').filter(':not(.notchange)');

    $forSearch.click(function(){
        var showArr=[];
        var show1=[];
        var show2=[];
        var show3=[];
        var show4=[];
        if($searchText.val() != ''){
            var textVal=$searchText.val();
            for(var i=0;i<$SearchTd.length;i++){
                if($SearchTd[i].innerHTML.indexOf(textVal) != '-1'){
                    showArr.push(i);
                }
            }
            for(var i=0;i<showArr.length;i++){
                if(showArr[i]<7){
                    show1.push(showArr[i]);
                }else if(7<=showArr[i] && showArr[i]<14){
                    show2.push(showArr[i]);
                }else if(14<=showArr[i] && showArr[i]<21){
                    show3.push(showArr[i]);
                }else{
                    show4.push(showArr[i]);
                }
            }
            if(show1.length == 0){
                $showTr[0].style.display='none';
            }
            if(show2.length == 0){
                $showTr[1].style.display='none';
            }
            if(show3.length == 0){
                $showTr[2].style.display='none';
            }
            if(show4.length == 0){
                $showTr[3].style.display='none';
            }
        }
    })

    $searchText[0].onchange=function(){
        if($searchText.val() == ''){
            for(var i=0;i<$showTr.length;i++){
                $showTr[i].style.display='table-row';
            }
        }
    }
})