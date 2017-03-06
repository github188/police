$(function(){
    //上面柱状图
    //周
    function toFailureTrendWeekChart(){
        var failureTrendChart = echarts.init(document.getElementById('failureTrend-chart'));

        var failureTrendChartOption = {
            tooltip : {
                trigger: 'axis',
                formatter:'{b} <br> {a} : {c}',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow',        // 默认为直线，可选为：'line' | 'shadow'
                },
            },
            legend: {
                data:['已修复的故障','上报的故障'],
                orient:'vertical',
                x : '80%',
                y : '30%',
                textStyle :{
                    fontSize : 12,
                    color : '#42f9f7'
                },
                itemGap:20,
            },
            grid: {
                x:'17%',
                y:30,
                x2:'24%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                },
                {
                    type : 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data : ['1日','2日','3日','4日','5日','6日','7日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '故障数',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
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
                    name:'已修复的故障',
                    type:'bar',
                    itemStyle: {
                        normal: {color:'rgba(99,166,241,1)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7'
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:40,
                    data:[9,8,11,7,8,5,4]
                },
                {
                    name:'上报的故障',
                    type:'bar',
                    xAxisIndex:1,
                    itemStyle: {
                        normal: {
                            color:'rgba(66,126,249,0.5)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7',
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:40,
                    data:[10,11,12,10,8,7,4]
                }
            ]
        };

        failureTrendChart.setOption(failureTrendChartOption);
    }
    toFailureTrendWeekChart();
    //15
    function toFailureTrendHalfMonthChart(){
        var failureTrendChart = echarts.init(document.getElementById('failureTrend-chart'));

        var failureTrendChartOption = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['已修复的故障','上报的故障'],
                orient:'vertical',
                x : '80%',
                y : '30%',
                textStyle :{
                    fontSize : 12,
                    color : '#42f9f7'
                },
                itemGap:20,
            },
            grid: {
                x:'17%',
                y:30,
                x2:'24%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                },
                {
                    type : 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '故障数',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
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
                    name:'已修复的故障',
                    type:'bar',
                    itemStyle: {
                        normal: {color:'rgba(99,166,241,1)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7'
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:25,
                    data:[10,8,2,1,2,2,8,6,5,9,4,1,2,5,9]
                },
                {
                    name:'上报的故障',
                    type:'bar',
                    xAxisIndex:1,
                    itemStyle: {
                        normal: {
                            color:'rgba(66,126,249,0.5)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7',
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:25,
                    data:[12,8,2,1,2,3,9,8,5,10,5,3,2,6,10]
                }
            ]
        };

        failureTrendChart.setOption(failureTrendChartOption);
    }
    //toFailureTrendHalfMonthChart();
    //月
    function toFailureTrendMonthChart(){
        var failureTrendChart = echarts.init(document.getElementById('failureTrend-chart'));

        var failureTrendChartOption = {
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['已修复的故障','上报的故障'],
                orient:'vertical',
                x : '88%',
                y : '30%',
                textStyle :{
                    fontSize : 12,
                    color : '#42f9f7'
                },
                itemGap:20,
            },
            grid: {
                x:'10%',
                y:30,
                x2:'17%',
                y2:44,
                borderColor : '#e5e5e5'
            },
            color:['#63a6f1','#427ef9'],
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    name : '日期',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
                            color:"#42f9f7",
                        },
                    },
                    axisLine : {
                        lineStyle:{
                            color:"#42f9f7",
                        }
                    },
                },
                {
                    type : 'category',
                    axisLine: {show:false},
                    axisTick: {show:false},
                    axisLabel: {show:false},
                    splitArea: {show:false},
                    splitLine: {show:false},
                    data : ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日'],
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '故障数',
                    nameTextStyle : {
                        fontSize : 12,
                        color:'#42f9f7',
                    },
                    axisTick:{
                        show:false,
                    },
                    axisLabel:{
                        textStyle:{
                            fontSize:12,     //刻度大小
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
                    name:'已修复的故障',
                    type:'bar',
                    itemStyle: {
                        normal: {color:'rgba(99,166,241,1)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7'
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:20,
                    data:[10,8,2,1,2,2,8,6,5,9,4,1,2,5,9,7,8,4,5,6,9,6,3,2,5,4,8,4,6,9]
                },
                {
                    name:'上报的故障',
                    type:'bar',
                    xAxisIndex:1,
                    itemStyle: {
                        normal: {
                            color:'rgba(66,126,249,0.5)',
                            label:{
                                show:true,
                                textStyle:{
                                    color:'#42f9f7',
                                },
                                position:'insideTop'
                            }
                        }
                    },
                    barWidth:20,
                    data:[12,8,2,1,2,3,9,8,5,10,5,3,2,6,10,7,10,6,5,6,9,6,3,5,7,6,9,5,8,10]
                }
            ]
        };

        failureTrendChart.setOption(failureTrendChartOption);
    };
    //toFailureTrendMonthChart();

    //左下圆饼图
    //周
    function toBottomLeftWeekChart(){
        var bottomLeftChart = echarts.init(document.getElementById('bottom-left-chart'));

        var bottomLeftChartOption = {
            title: {
                text: '故障修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 700, name: '已修复'},
                        {value: 1548, name: '未修复'},
                    ]
                }
            ]
        }

        bottomLeftChart.setOption(bottomLeftChartOption);
    };
    toBottomLeftWeekChart();
    //15
    function toBottomLeftHalfMonthChart(){
        var bottomLeftChart = echarts.init(document.getElementById('bottom-left-chart'));

        var bottomLeftChartOption = {
            title: {
                text: '故障修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 1052, name: '已修复'},
                        {value: 900, name: '未修复'},
                    ]
                }
            ]
        }

        bottomLeftChart.setOption(bottomLeftChartOption);
    };
    //toBottomLeftHalfMonthChart();
    //月
    function toBottomLeftMonthChart(){
        var bottomLeftChart = echarts.init(document.getElementById('bottom-left-chart'));

        var bottomLeftChartOption = {
            title: {
                text: '故障修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 3052, name: '已修复'},
                        {value: 1104, name: '未修复'},
                    ]
                }
            ]
        }

        bottomLeftChart.setOption(bottomLeftChartOption);
    };
    //toBottomLeftMonthChart();



    //右下圆饼图
    //周
    function toBottomRightWeekChart(){
        var bottomRightChart = echarts.init(document.getElementById('bottom-right-chart'));

        var bottomRightChartOption = {
            title: {
                text: '故障及时修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障及时修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 500, name: '及时修复'},
                        {value: 200, name: '未及时修复'},
                    ]
                }
            ]
        }

        bottomRightChart.setOption(bottomRightChartOption);
    };
    toBottomRightWeekChart();
    //15
    function toBottomRightHalfMonthChart(){
        var bottomRightChart = echarts.init(document.getElementById('bottom-right-chart'));

        var bottomRightChartOption = {
            title: {
                text: '故障及时修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障及时修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 700, name: '及时修复'},
                        {value: 352, name: '未及时修复'},
                    ]
                }
            ]
        }

        bottomRightChart.setOption(bottomRightChartOption);
    };
    //toBottomRightHalfMonthChart();
    //月
    function toBottomRightMonthChart(){
        var bottomRightChart = echarts.init(document.getElementById('bottom-right-chart'));

        var bottomRightChartOption = {
            title: {
                text: '故障及时修复率',
                x: 'center',
                y: 'center',
                textStyle : {
                    color : '#fff',
                    fontSize : 14,
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            calculable: true,
            color: ['#63a6f1', '#42566c'],
            series: [
                {
                    name: '故障及时修复率',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    center: ['50%', '50%'],
                    clockWise: false,
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'left',
                                textStyle: {
                                    color:'#fff',
                                }
                            },
                        },
                        emphasis: {
                            label: {
                                show: true,
                                formatter: '{b} {d}%',
                                position: 'center',
                                textStyle: {
                                    color:'#fff',
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }
                            },
                        }
                    },
                    data: [
                        {value: 3600, name: '及时修复'},
                        {value: 452, name: '未及时修复'},
                    ]
                }
            ]
        }

        bottomRightChart.setOption(bottomRightChartOption);
    };
    //toBottomRightMonthChart();




    //切换重绘
    var $subNavForThreeChart=$('.sub-nav-for-threeChart');
    var $toggleLis=$subNavForThreeChart.find('li');
    $toggleLis[0].onclick=function(){
        toFailureTrendWeekChart();
        toBottomLeftWeekChart();
        toBottomRightWeekChart();
    }
    $toggleLis[1].onclick=function(){
        toFailureTrendHalfMonthChart();
        toBottomLeftHalfMonthChart();
        toBottomRightHalfMonthChart();
    }
    $toggleLis[2].onclick=function(){
        toFailureTrendMonthChart();
        toBottomLeftMonthChart();
        toBottomRightMonthChart();
    }





    //改变浏览器大小重绘
    //window.onresize=function(){
    //    toFailureTrendChart();
    //    toBottomLeftChart();
    //    toBottomRightChart();
    //}

    //计算左边aside高度
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

})