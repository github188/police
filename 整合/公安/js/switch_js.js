/**画图表 */
window.onload = function() {
    draw_echart1();
    draw_echart2();
    draw_echart3();
}

function draw_echart1() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('cpuchart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['', '10', '20', '30', '40', '50', '60', '60']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: 'CPU使用率',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [8, 8, 8, 9, 9, 6, 8, 9]
            }

        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}

function draw_echart2() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('memorychart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['', '10', '20', '30', '40', '50', '60', '60']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: 'CPU使用率',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [8, 6, 7, 5, 9, 6, 5, 9]
            }

        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}

function draw_echart3() {
    // 基于准备好的dom，初始化echarts图表
    var myChart = echarts.init(document.getElementById('netchart'));
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar', 'stack', 'tiled'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['', '10', '20', '30', '40', '50', '60', '60']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: 'CPU使用率',
                type: 'line',
                stack: '总量',
                itemStyle: { normal: { areaStyle: { type: 'default' } } },
                data: [8, 6, 7, 5, 9, 6, 5, 9]
            }

        ]
    };

    // 为echarts对象加载数据 
    myChart.setOption(option);
}