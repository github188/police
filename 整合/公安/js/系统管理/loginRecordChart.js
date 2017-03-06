$(function(){
    //用户登录折线图
    //周
    function tologinRecordWeekChart(){
        var loginRecordChart = echarts.init(document.getElementById('loginRecord-chart'));

        var loginRecordChartOption = {
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            grid: {
                x:'10%',
                y:80,
                x2:'15%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            color:['#42f9b2'],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '次数',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color: ['#203042'],
                        }
                    }
                }
            ],
            series : [
                {
                    name:'次数',
                    type:'line',
                    //smooth:true,
                    symbolSize:8,
                    symbol:'circle',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(66,249,178,0.3)',    //填充色
                            }
                        }
                    },
                    data:[8, 6, 10, 4, 6, 8, 4]
                }
            ]
        };

        loginRecordChart.setOption(loginRecordChartOption);
    };
    tologinRecordWeekChart();
    //15
    function tologinRecordHalfMonthChart(){
        var loginRecordChart = echarts.init(document.getElementById('loginRecord-chart'));

        var loginRecordChartOption = {
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            grid: {
                x:'10%',
                y:80,
                x2:'15%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            color:['#42f9b2'],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '次数',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color: ['#203042'],
                        }
                    }
                }
            ],
            series : [
                {
                    name:'次数',
                    type:'line',
                    //smooth:true,
                    symbolSize:8,
                    symbol:'circle',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(66,249,178,0.3)',    //填充色
                            }
                        }
                    },
                    data:[8, 6, 10, 4, 6, 8, 4,4,6,9,8,7,10,12,7]
                }
            ]
        };

        loginRecordChart.setOption(loginRecordChartOption);
    };
    //tologinRecordHalfMonthChart();
    //月
    function tologinRecordMonthChart(){
        var loginRecordChart = echarts.init(document.getElementById('loginRecord-chart'));

        var loginRecordChartOption = {
            tooltip : {
                trigger: 'axis'
            },
            calculable : true,
            grid: {
                x:'10%',
                y:80,
                x2:'15%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            color:['#42f9b2'],
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '次数',
                    nameTextStyle : {
                        fontSize : 14,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:14,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                    splitLine:{
                        lineStyle:{
                            color: ['#203042'],
                        }
                    }
                }
            ],
            series : [
                {
                    name:'次数',
                    type:'line',
                    //smooth:true,
                    symbolSize:8,
                    symbol:'circle',
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default',
                                color:'rgba(66,249,178,0.3)',    //填充色
                            }
                        }
                    },
                    data:[8, 6, 10, 4, 6, 8, 4,4,6,9,8,7,10,12,7,14,2,6,5,7,8,5,3,2,1,4,5,9,8,4]
                }
            ]
        };

        loginRecordChart.setOption(loginRecordChartOption);
    };
    //tologinRecordMonthChart();


    //切换重绘
    var $subNavForLogin=$('.sub-nav-for-login');
    var $toggleLis=$subNavForLogin.find('li');
    $toggleLis[0].onclick=function(){
        tologinRecordWeekChart();
    }
    $toggleLis[1].onclick=function(){
        tologinRecordHalfMonthChart();
    }
    $toggleLis[2].onclick=function(){
        tologinRecordMonthChart();
    }
})