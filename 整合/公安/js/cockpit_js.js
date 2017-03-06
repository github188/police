// $(function() {
//     document.getElementById('timedate').innerHTML = new Date().toLocaleString
// });


//获取系统时间，将时间以指定格式显示到页面。 
function systemTime() {
    //获取系统当前时间
    var dateTime = new Date();
    var yyyy = dateTime.getFullYear();
    var MM = dateTime.getMonth();
    var DD = dateTime.getDay();
    var hh = dateTime.getHours();
    var mm = dateTime.getMinutes();
    var ss = dateTime.getSeconds();

    //分秒时间是一位数字，在数字前补0。  
    mm = extra(mm);
    ss = extra(ss);

    //将时间显示到ID为time和date的位置，时间格式形如：19:18:02  
    document.getElementById("systemdate").innerHTML = yyyy + "年" + MM + "月" + DD + "日";
    document.getElementById("systemtime").innerHTML = hh + ":" + mm + ":" + ss;

    //每隔1000ms执行方法systemTime()。  
    setTimeout("systemTime()", 1000);
}

//补位函数。 时间加0 
function extra(x) {
    //如果传入数字小于10，数字前补一位0。  
    if (x < 10) {
        return "0" + x;
    } else {
        return x;
    }
}

window.onload = function() {
    draw_echart1();
    draw_echart2();
    draw_echart3();
    draw_echart4();
    draw_echart5();
};

//图表1:echarts_stored_status
function draw_echart1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('echarts_equipment_failure1'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['监控', '检测器'],
            textStyle:{color:'#42f9f7'}
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            name:'日期',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            axisTick:{
                inside:true,
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            splitLine:{
                //show:false,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                }
            },
            data: ['', '3', '4', '5', '6', '7', '8', '9']
        }],
        yAxis: [{
            type: 'value',
            name:'故障率',
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            axisTick:{
                inside:true,
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                },
                formatter: '{value} %'
            }
        }],
        series: [{
                name: '服务器',
                symbol:'circle',
                type: 'line',
                symbolSize:10,
                data: [3.5, 4, 4, 4, 6, 5, 5, 4],
                itemStyle: {
                    normal: {
                        color:'#8372ef'
                    }
                }
            },
            {
                name: '监控',
                symbol:'circle',
                type: 'line',
                symbolSize:10,
                data: [1.5, 2, 3, 3, 2, 4, 4, 2],
                itemStyle: {
                    normal: {
                        color:'#4149f7'
                    }
                }
            }
        ]
    };
    // 为echarts对象加载数据 
    myChart.setOption(option);
}



//图表2:echarts_stored_status2
function draw_echart2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('echarts_equipment_failure2'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['服务器', '网络设备', '应用服务器'],
            textStyle:{color:'#42f9f7'}
        },
        //calculable: true,
        xAxis: [{
            type: 'category',
            name:'日期',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            axisTick:{
                inside:true,
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            splitLine:{
                //show:false,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                }
            },
            data: ['', '3', '4', '5', '6', '7', '8', '9']
        }],
        yAxis: [{
            type: 'value',
            name:'故障率',
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            axisTick:{
                inside:true,
                lineStyle:{
                    color:'#42f9f7',
                    width:2
                }
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                },
                formatter: '{value} %'
            }
        }],
        series: [{
                name: '应用服务器',
                symbol:'circle',
                symbolSize:10,
                type: 'line',
                data: [1, 1, 0, 2, 2, 1, 2, 1],
                itemStyle: {
                     normal: {
                        color:'#ef729e'
                    }
                }
            },

            {
                name: '检测器',
                symbol:'circle',
                symbolSize:10,
                type: 'line',
                data: [2, 2, 3, 3, 2, 4, 4, 2],
                itemStyle: {
                    normal: {
                        color:'#3db53f'
                    }
                }
            },

            {
                name: '网络设备',
                symbol:'circle',
                symbolSize:10,
                type: 'line',
                data: [3, 4, 4, 3, 5, 3, 3, 4],
                itemStyle: {
                    normal: {
                        color:'#efd072'
                    }
                }

            }
        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}


//图表3:echarts_alarm_warning1
function draw_echart3() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('echarts_alarm_warning1'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:1
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                //show:false,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                }
            },
            data: ['监控', '检测器', '服务器', '应用服务器', '网络设备']
        }],
        yAxis: [{
            type: 'value',
            name:'告警数量',
            axisLine:{
                lineStyle:{
                    color:'#42f9f7',
                    width:1
                }
            },
            axisTick:{
                show:false
            },
            splitLine:{
                //show:false,
                lineStyle:{
                    color:'#203042',
                    width:2
                }
            },
            axisLabel: {
                textStyle:{
                    color:'#42f9f7'
                }
            }
        }],
        series: [{
            name: '',
            type: 'bar',
            barWidth:20,
            data: [120, 80, 100, 60, 38],
            itemStyle: {
                normal: {
                    color:'#e1a55f'
                }
            }
        }]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);

}

//图表4:echarts_alarm_warning2
function draw_echart4() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('echarts_alarm_warning2'));
    var option =  {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        selectedMode: 'single',
        calculable : true,
        series: [
            {
                name:'预测总览',
                type:'pie',
                startAngle:320,
                radius: ['60', '100'],
                clockWise:false,
                avoidLabelOverlap: false,
                label: {
                    normal: {
//                        这个决定有没有线
                        show: true,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        formatter: '{b} {d}%',
                        position : 'center',
//                        调中间文字大小
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'normal'
                        }
                    }
                },
                data:[
                    {
                        value:10,
                        name:'一级告警',
                        itemStyle: {
                            normal: {
                                color:'#e66462',
                                label : {
                                    show : true,
                                    formatter: '{b} {d}%',
                                    position : 'left'
                                }
                            }
                        }
                    },
                    {
                        value:20,
                        name:'二级告警',
                        itemStyle: {
                            normal: {
                                color:'#f9ba70',
                                label : {
                                    show : true,
                                    formatter: '{b} {d}%',
                                    position : 'left'
                                }
                            }
                        }
                    },
                    {
                        value:30,
                        name:'三级告警',
                        itemStyle: {
                            normal: {
                                color:'#f9ea65',
//                                显示标签
                                label : {
                                    show : true,
                                    formatter: '{b} {d}%',
                                    position : 'left'
                                }
                            }
                        }
                    },
                    {
                        value:40,
                        name:'四级告警',
                        itemStyle: {
                            normal: {
                                color:'#65e3af',
//                                显示标签
                                label : {
                                    show : true,
                                    formatter: '{b} {d}%',
                                    position : 'left'
                                }
                            }
                        }
                    }
                ]
            }
        ]
    };
    // 为echarts对象加载数据 
    myChart.setOption(option);

}

//图表5:
function draw_echart5() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('fault-num-chart'));

    var eA1Option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: '情感分析',
                type: 'gauge',
                //min: 0,
                //max: 5,
                startAngle:220,
                endAngle:-40,
                //splitNumber:5,
                center:	['50%', '50%'],
                radius:70,
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        width: 0,
                        color: [
                            [0.025, '#50edb3'],
                            [0.075, '#50edb3'] ,
                            [0.125, '#55e8b9'],
                            [0.175, '#5be2c1'],
                            [0.225, '#51a4a1'],
                            [0.275, '#6cd2d7'],
                            [0.325, '#68afc7'],
                            [0.375, '#7fc0eb'],
                            [0.425, '#88b9f5'],
                            [0.475, '#88b9f5'],
                            [0.525, '#9cabff'],
                            [0.575, '#b0a1fd'],
                            [0.6, '#bb9cf8'],
                            [1, '#393a5a']]
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length:10,        // 属性length控制线长
                    splitNumber:10,
                    inside:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color:'auto',
                        width:2
                    }
                },
                splitLine: {           // 主分隔线
                    length:10,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color:'auto'
                    }
                },
                axisLabel:{             //坐标轴文本 数值
                    formatter: function(v){
                        switch (v+''){
                            case '0': return '安全';
                            case '20': return '极低';
                            case '40': return '低';
                            case '60': return '较高';
                            case '80': return '高';
                            case '100': return '极高';
                            default: return '';
                        }
                    },
                    textStyle:{
                        color:'#6ad0c5'
                    }
                },
//                指针宽度
                pointer: {
                    width:1
                },
//            标题 正能量
                title:{
                    show:true,
                    textStyle:{
                        color:'#6ad0c5',
                        fontSize:16
                    }
                },
                detail: {
                    show:false,
                    textStyle: {
                        color:'#6ad0c5',
                        fontSize:16
                        //formatter:'{value}%'
                    }
                },
                data: [{
                    value: 60
                }]
            }
        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(eA1Option);
}