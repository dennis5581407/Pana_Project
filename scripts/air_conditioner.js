
function click_event(){
    //header click event
    $(".lang").on('click','.lang-option-active',function(){
        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
    });

    $('.lang').on('click','.lang-option-offset-0',function(){ 

        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
        $(".lang-option-active").addClass("lang-option");
        $(".lang > div").removeClass("lang-option-active");
        $(this).removeClass("lang-option");
        $(this).addClass("lang-option-active");

        if($(this).hasClass('lang-japanese'))
        {

        }

        else if($(this).hasClass('lang-chinese'))
        {

        }

        else if($(this).hasClass('lang-english'))
        {

        }

        else
        {
            console("change language error")
        }
    });

    $('.lang').on('click','.lang-option-offset-1',function(){

        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
        $(".lang-option-active").addClass("lang-option");
        $(".lang > div").removeClass("lang-option-active");
        $(this).removeClass("lang-option");
        $(this).addClass("lang-option-active");

        if($(this).hasClass('lang-japanese'))
        {

        }

        else if($(this).hasClass('lang-chinese'))
        {

        }

        else if($(this).hasClass('lang-english'))
        {

        }
    });

    //平均溫度&濕度&運轉台數圖表的click event
    $(".detail-item").on('click','.button-north',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.detail-chart > svg').remove();
            detail_chart();
        }  
    });

    $(".detail-item").on('click','.button-center',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.detail-chart > svg').remove();
            detail_chart();
        }
    });

    $(".detail-item").on('click','.button-south',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.detail-chart > svg').remove();
            detail_chart();
        }
    });

    $(".detail-item").on('click','.button-east',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.detail-chart > svg').remove();
            detail_chart();
        }
    });

    //設定模式比例圓餅圖的click event
    $(".mode-rate-item").on('click','.button-north',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            mode_chart();
        }
    });

    $(".mode-rate-item").on('click','.button-center',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            mode_chart();
        }
    });

    $(".mode-rate-item").on('click','.button-south',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            mode_chart();
        }
    });

    $(".mode-rate-item").on('click','.button-east',function(){
        if($(this).hasClass('button-pressed'))
        {

        }

        else
        {   
            
            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            mode_chart();
        }
    });


}

function show_time(){
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let min = today.getMinutes();
    
    min = min.toString();
    if(min.length == 1)
    {
        min = 0 + min;
    }

    let date_string = `${year}/${month}/${date}&emsp;${hour}:${min}&emsp;`;

    $('.clock').html(date_string); //html的method也會把子元素一併取代掉
}

//累積登錄台數畫圖
function sum_login_chart(){

    let dataset = [
        {
            'year': '201801', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201802',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201803',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201804', 
            'all': 27,  
            'addOn': 13,  
            'buildIn': 14    
        },
        {
            'year': '201805',
            'all': 68, 
            'addOn': 33,  
            'buildIn': 35  
        },
        {
            'year': '201806',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201807', 
            'all': 30,  
            'addOn': 15,  
            'buildIn': 15    
        },
        {
            'year': '201808',
            'all': 88, 
            'addOn': 25,  
            'buildIn': 63  
        },
        {
            'year': '201809',
            'all': 77,   
            'addOn': 7,  
            'buildIn': 70  
        },
        {
            'year': '201810', 
            'all': 52,  
            'addOn': 39,  
            'buildIn': 13    
        },
        {
            'year': '201811',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201812',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201901', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201902',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201903',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201904', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201905',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201906',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201907', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201908',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201909',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201910', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201911',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201912',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202001', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202002',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202003',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202004', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202005',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202006',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202007', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202008',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202009',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202010', 
            'all': 82,  
            'addOn': 2,  
            'buildIn': 80    
        },
        {
            'year': '202011',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202012',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        }
    ];

    let Xdata = dataset.map(function(d){
        return d.year;
    });
    
    let svg = d3.select(".login-sum-item")
        .append("svg")
        .attr("width",100+"%")
        .attr("height",92+"%")
        .style("margin-top",-5+"px");

    let svg_height = $(".login-sum-item > svg").height() - 35;
    let svg_width = $(".login-sum-item > svg").width() - 20;

    let yAxisScale = d3.scaleLinear()
        .domain([0,100])
        .range([svg_height, 5]); 
    
    let xAxisScale = d3.scaleBand()
    .domain(Xdata)
    .range([40,svg_width])
    .paddingInner(0.5)
    .paddingOuter(-0.25);

    let xAxisScale_year = d3.scaleLinear()
    .domain([0,100])
    .range([40,svg_width]);


    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(40, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0).tickFormat(' '))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 40).tickFormat(' '))
        .attr('transform', `translate(40, 0)`)
        .style('opacity','0.3');

    let offset = xAxisScale.bandwidth()/2;

    //畫出全般累積登錄台數面積圖
    var area_generator= d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(function (d) {
            return yAxisScale(d.buildIn);
        })
        .y1(function (d) {
            return yAxisScale(d.all);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("d",area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill","#3FA9F5")
        .attr('transform', `translate(${offset},0)`);

    // 畫出內建累積登錄台數面積圖
    var area_generator= d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(yAxisScale(0))
        .y1(function (d) {
            return yAxisScale(d.buildIn);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("d",area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill","#F7931E")
        .attr('transform', `translate(${offset},0)`);

    let today = new Date();
    let year = today.getFullYear();
    
    //x軸標示 
    svg.append('text') 
        .attr('x', xAxisScale_year(1))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year-2}年`)
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', xAxisScale_year(45))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year-1}年`)
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', xAxisScale_year(90))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year}年`)
        .style('font-size', '11px');
    
    svg.append('text') 
        .attr('x', 0)
        .attr('y', yAxisScale(0) + 28)
        .text('單位:萬台')
        .style('font-size', '11px');

    let note = svg.append('g');
    let line_length = 60; //line initial position

    note
        .append('line')
        .attr('x1', line_length)
        .attr('y1', 5)
        .attr('x2', line_length + 16)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#3FA9F5');
    
    note
        .append('text')
        .attr('x', line_length + 18)
        .attr('y', 9)
        .text('全般')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 48)
        .attr('y1', 5)
        .attr('x2', line_length + 64)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#F7931E');
    
    note
        .append('text')
        .attr('x', line_length + 66)
        .attr('y', 9)
        .text('內藏')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 20})`);
}

//連線台數畫圖
function connect_amount_chart(){

    let dataset = [
        {
            'year': '201801', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201802',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201803',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201804', 
            'all': 27,  
            'addOn': 13,  
            'buildIn': 14    
        },
        {
            'year': '201805',
            'all': 68, 
            'addOn': 33,  
            'buildIn': 35  
        },
        {
            'year': '201806',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201807', 
            'all': 30,  
            'addOn': 15,  
            'buildIn': 15    
        },
        {
            'year': '201808',
            'all': 88, 
            'addOn': 25,  
            'buildIn': 63  
        },
        {
            'year': '201809',
            'all': 77,   
            'addOn': 7,  
            'buildIn': 70  
        },
        {
            'year': '201810', 
            'all': 52,  
            'addOn': 39,  
            'buildIn': 13    
        },
        {
            'year': '201811',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201812',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201901', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201902',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201903',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201904', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201905',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201906',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201907', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201908',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201909',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '201910', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '201911',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '201912',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202001', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202002',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202003',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202004', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202005',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202006',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202007', 
            'all': 67,  
            'addOn': 34,  
            'buildIn': 33    
        },
        {
            'year': '202008',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202009',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        },
        {
            'year': '202010', 
            'all': 82,  
            'addOn': 2,  
            'buildIn': 80    
        },
        {
            'year': '202011',
            'all': 92, 
            'addOn': 60,  
            'buildIn': 32  
        },
        {
            'year': '202012',
            'all': 77,   
            'addOn': 44,  
            'buildIn': 33  
        }
    ];

    let Xdata = dataset.map(function(d){
        return d.year;
    });
    
    let svg = d3.select(".connect-amount-item")
        .append("svg")
        .attr("width",100+"%")
        .attr("height",92+"%")
        .style("margin-top",-5+"px");

    let svg_height = $(".connect-amount-item > svg").height() - 35;
    let svg_width = $(".connect-amount-item > svg").width() - 20;

    let yAxisScale = d3.scaleLinear()
        .domain([0,100])
        .range([svg_height, 5]); 
    
    let xAxisScale = d3.scaleBand()
    .domain(Xdata)
    .range([40,svg_width])
    .paddingInner(0.5)
    .paddingOuter(-0.25);

    let xAxisScale_year = d3.scaleLinear()
    .domain([0,100])
    .range([40,svg_width]);

    let offset = xAxisScale.bandwidth()/2;

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(40, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0).tickFormat(' '))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 40).tickFormat(' '))
        .attr('transform', `translate(40, 0)`)
        .style('opacity','0.3');


    //畫出全般連線台數面積圖
    var area_generator= d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(function (d) {
            return yAxisScale(d.buildIn);
        })
        .y1(function (d) {
            return yAxisScale(d.all);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("d",area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill","#3FA9F5")
        .attr('transform', `translate(${offset},0)`);

    // 畫出內建連線台數面積圖
    var area_generator= d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(yAxisScale(0))
        .y1(function (d) {
            return yAxisScale(d.buildIn);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("d",area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill","#F7931E")
        .attr('transform', `translate(${offset},0)`);

    let today = new Date();
    let year = today.getFullYear();
    
    //x軸標示 
    svg.append('text') 
        .attr('x', xAxisScale_year(1))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year-2}年`)
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', xAxisScale_year(45))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year-1}年`)
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', xAxisScale_year(90))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year}年`)
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', 0)
        .attr('y', yAxisScale(0) + 28)
        .text('單位:萬台')
        .style('font-size', '11px');

    let note = svg.append('g');
    let line_length = 60; //line initial position

    note
        .append('line')
        .attr('x1', line_length)
        .attr('y1', 5)
        .attr('x2', line_length + 16)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#3FA9F5');
    
    note
        .append('text')
        .attr('x', line_length + 18)
        .attr('y', 9)
        .text('全般')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 48)
        .attr('y1', 5)
        .attr('x2', line_length + 64)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#F7931E');
    
    note
        .append('text')
        .attr('x', line_length + 66)
        .attr('y', 9)
        .text('內藏')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 20})`);
}

//48h連線數畫圖
function connect_48h_chart(){

    let dataset = [
        {
            'hour': '00',   //時間為00時
            'today_connect': 37,   //今日連線數 單位為萬台
            'today_amount': 32,   //今日??台數 單位為萬台
            'yesterday_connect': 34,  //昨日連線數 單位為萬台
            'yesterday_amount': 65   //昨日??台數 單位為萬台
        },
        {
            'hour': '01',   
            'today_connect': 45,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '02',   
            'today_connect': 11,   
            'today_amount': 44,  
            'yesterday_connect': 34,  
            'yesterday_amount': 77  
        },
        {
            'hour': '03',   
            'today_connect': 23,   
            'today_amount': 13,  
            'yesterday_connect': 34,  
            'yesterday_amount': 32  
        },
        {
            'hour': '04',   
            'today_connect': 17,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 15  
        },
        {
            'hour': '05',   
            'today_connect': 41,   
            'today_amount': 97,  
            'yesterday_connect': 34,  
            'yesterday_amount': 88  
        },
        {
            'hour': '06',   
            'today_connect': 46,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '07',   
            'today_connect': 23,   
            'today_amount': 22,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '08',   
            'today_connect': 44,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '09',   
            'today_connect': 36,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '10',   
            'today_connect': 17,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '11',   
            'today_connect': 23,   
            'today_amount': 77,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '12',   
            'today_connect': 33,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '13',   
            'today_connect': 54,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '14',   
            'today_connect': 34,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '15',   
            'today_connect': 12,   
            'today_amount': 32,  
            'yesterday_connect': 65,  
            'yesterday_amount': 19  
        },
        {
            'hour': '16',   
            'today_connect': 46,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '17',   
            'today_connect': 5,   
            'today_amount': 57,  
            'yesterday_connect': 2,  
            'yesterday_amount': 12  
        },
        {
            'hour': '18',   
            'today_connect': 12,   
            'today_amount': 54,  
            'yesterday_connect': 66,  
            'yesterday_amount': 65  
        },
        {
            'hour': '19',   
            'today_connect': 34,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '20',   
            'today_connect': 12,   
            'today_amount': 78,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        },
        {
            'hour': '21',   
            'today_connect': 23,   
            'today_amount': 32,  
            'yesterday_connect': 18,  
            'yesterday_amount': 65  
        },
        {
            'hour': '22',   
            'today_connect': 43,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 36  
        },
        {
            'hour': '23',   
            'today_connect': 13,   
            'today_amount': 32,  
            'yesterday_connect': 34,  
            'yesterday_amount': 65  
        }
    ];

    let Xdata = dataset.map(function(d){
        return d.hour;
    });
    
    let svg = d3.select(".connect-48h-item")
        .append("svg")
        .attr("width",100+"%")
        .attr("height",92+"%")
        .style("margin-top",3+"px");

    let svg_height = $(".connect-48h-item > svg").height() - 35;
    let svg_width = $(".connect-48h-item > svg").width() - 10;

    let yAxisScale = d3.scaleLinear()
        .domain([0,100])
        .range([svg_height, 5]); 
    
    let xAxisScale = d3.scaleBand()
    .domain(Xdata)
    .range([20,svg_width])
    .padding(0.5);

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(23, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 25).tickFormat(' '))
        .attr('transform', `translate(23, 0)`)
        .style('opacity','0.3');

    svg.selectAll('.rect_td_connect') //append today connect bar in bar chart
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_td_connect')
        .attr('x', (d) => xAxisScale(d.hour))
        .attr('y', (d) => yAxisScale(d.today_connect))
        .attr('width', xAxisScale.bandwidth())
        .style('fill','#F7931E')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale(d.today_connect));

    svg.selectAll('.rect_yd_connect') //append yesterday connect bar in bar chart
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_yd_connect')
        .attr('x', (d) => xAxisScale(d.hour))
        .attr('y', (d) => yAxisScale(d.today_connect + d.yesterday_connect))
        .attr('width', xAxisScale.bandwidth())
        .style('fill','#3FA9F5')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale(d.yesterday_connect));
    
    svg.selectAll('.rect_td_connect') //display value when mouserover on bar
        .data(dataset)
        .append('title')
        .text((d) => "當日連線數:" + d.today_connect +
                       "  昨日連線數:" + d.yesterday_connect);

    svg.selectAll('.rect_yd_connect') //display value when mouserover on bar
        .data(dataset)
        .append('title')
        .text((d) => "當日連線數：" + d.today_connect +
                       " 昨日連線數：" + d.yesterday_connect);

    //畫出當日運轉台數曲線
    let line_td_running = d3.line()
    .x(function (d) {
        return xAxisScale(d.hour);
    })
    .y(function (d) {
        return yAxisScale(d.today_amount);
    });
 
    let offset = xAxisScale.bandwidth() / 2;

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_td_running(dataset))
        .attr('stroke', '#006837')
        .attr('stroke-width',1.5)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出昨日運轉台數曲線
    let line_yd_running = d3.line()
    .x(function (d) {
        return xAxisScale(d.hour);
    })
    .y(function (d) {
        return yAxisScale(d.yesterday_amount);
    });

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_yd_running(dataset))
        .attr('stroke', '#FF0040')
        .attr('stroke-width',1.5)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);


    svg.append('text') 
        .attr('x', 0)
        .attr('y', yAxisScale(0) + 23)
        .text('單位:萬台')
        .style('font-size', '11px');

    let note = svg.append('g');
    let line_length = 60; //line initial position

    note
        .append('rect')
        .attr('x', line_length)
        .attr('y', -1)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill','#3FA9F5');
    
    note
        .append('text')
        .attr('x', line_length + 15)
        .attr('y', 9)
        .text('昨日連線數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 84)
        .attr('y1', 5)
        .attr('x2', line_length + 100)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#FF0040');
    
    note
        .append('text')
        .attr('x', line_length + 105)
        .attr('y', 9)
        .text('昨日運轉台數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

        note
        .append('rect')
        .attr('x', line_length + 187)
        .attr('y', -1)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill','#F7931E');
    
    note
        .append('text')
        .attr('x', line_length + 202)
        .attr('y', 9)
        .text('當日連線數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 271)
        .attr('y1', 5)
        .attr('x2', line_length + 287)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#006837');
    
    note
        .append('text')
        .attr('x', line_length + 292)
        .attr('y', 9)
        .text('當日運轉台數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 16})`);
}


//平均氣溫&濕度&運轉台數畫圖
function detail_chart(){
    let dataset = [
        {
            'date': '4/1', 
            'temp': 12,   //平均氣溫 單位為度c
            'humidity': 70,   //濕度 單位為%
            'amount': 70   //運轉台數 單位萬台
        },
        {
            'date': '4/4', 
            'temp': -5,   
            'humidity': 70,   
            'amount': 70
        },
        {
            'date': '4/7', 
            'temp': 30,   
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/10', 
            'temp': 27,  
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/13', 
            'temp': 29,   
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/16', 
            'temp': 18,   
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/19', 
            'temp': 22,  
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/22', 
            'temp': 31,   
            'humidity': 70,   
            'amount': 70  
        },
        {
            'date': '4/25', 
            'temp': 11,  
            'humidity': 70,   
            'amount': 70   
        },
        {
            'date': '4/28', 
            'temp': 7,   
            'humidity': 70,  
            'amount': 70   
        },
        {
            'date': '4/30', 
            'temp': 38,  
            'humidity': 70,   
            'amount': 70  
        }
    ];

    let Xdata = dataset.map(function(d){
        return d.date;
    });
    
    let svg = d3.select(".detail-chart")
        .append("svg")
        .attr("width",100+"%")
        .attr("height",100+"%")
        .style("margin-top",1+"px");

    let svg_height = $(".detail-chart").height() - 40;
    let svg_width = $(".detail-chart").width() - 30;

    let yAxisScale_temp = d3.scaleLinear()
        .domain([-10,40])
        .range([svg_height, 30]);

    let yAxisScale_run = d3.scaleLinear()
        .domain([0,100])
        .range([svg_height, 30]);

    let yAxisScale_humid = d3.scaleLinear()
        .domain([0,100])
        .range([svg_height, 30]);
    
    let xAxisScale = d3.scaleBand()
    .domain(Xdata)
    .range([40,svg_width])
    .paddingInner(0.5)
    .paddingOuter(0.2);

    svg.append('g') //y temprature axis
        .call(d3.axisLeft(yAxisScale_temp).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(40, 0)`)
        .style('color', '#FF0040')
        .select('path')
        .style('opacity', '0');
    
    svg.append('g') //y running axis
        .call(d3.axisLeft(yAxisScale_run).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(23, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //y humidity axis
        .call(d3.axisLeft(yAxisScale_humid).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(${svg_width + 23}, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale_temp).tickSize(-svg_width + 40).tickFormat(' '))
        .attr('transform', `translate(40, 0)`)
        .style('opacity','0.3');

    //append humidity bar in bar chart
    svg.selectAll('.rect_humidity') 
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_humidity')
        .attr('x', (d) => xAxisScale(d.date))
        .attr('y', (d) => yAxisScale_humid(d.humidity))
        .attr('width', xAxisScale.bandwidth()/2)
        .style('fill','#3FA9F5')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale_humid(d.humidity));

    //append "運轉台數" bar in bar chart
    svg.selectAll('.rect_run') 
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_run')
        .attr('x', (d) => xAxisScale(d.date) + xAxisScale.bandwidth()/2)
        .attr('y', (d) => yAxisScale_run(d.amount))
        .attr('width', xAxisScale.bandwidth()/2)
        .style('fill','#F7931E')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale_run(d.amount));
    
    svg.selectAll('.rect_humidity') //display value when mouserover on bar
        .data(dataset)
        .append('title')
        .text((d) => "溫度:" + d.temp +
                       "  運轉台數:" + d.amount +
                       "  濕度:" + d.humidity);

    svg.selectAll('.rect_run') //display value when mouserover on bar
        .data(dataset)
        .append('title')
        .text((d) => "溫度:" + d.temp +
                       "  運轉台數:" + d.amount +
                       "  濕度:" + d.humidity);

    //畫出當月溫度曲線
    let line_temp = d3.line()
    .x(function (d) {
        return xAxisScale(d.date);
    })
    .y(function (d) {
        return yAxisScale_temp(d.temp);
    });
 
    let offset = xAxisScale.bandwidth() / 2;

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_temp(dataset))
        .attr('stroke', '#FF0040')
        .attr('stroke-width',1.5)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);


    //文字說明
    svg.append('text') 
        .attr('x', 50)
        .attr('y', 22)
        .attr('fill', '#000000')
        .text('平均氣溫 & 濕度 & 運轉台數')
        .style('font-size', '22px');

    svg.append('text') 
        .attr('x', 0)
        .attr('y', yAxisScale_temp(40) - 10)
        .attr('fill', '#FF0040')
        .text('溫度(°C)')
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', 410)
        .attr('y', 20)
        .attr('fill', '#000000')
        .text('濕度(%)')
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', 0)
        .attr('y', 178)
        .attr('fill', '#000000')
        .text('運轉台數')
        .style('font-size', '11px');

    svg.append('text') 
        .attr('x', 0)
        .attr('y', 192)
        .attr('fill', '#000000')
        .text('(單位:萬台)')
        .style('font-size', '11px');

    let note = svg.append('g');
    let line_length = 16; //line initial position

    note
        .attr('transform', `translate(60,180)`);


    note
        .append('line')
        .attr('x1', 0)
        .attr('y1', 5)
        .attr('x2', line_length)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#FF0040');

    note
        .append('text')
        .attr('x', line_length + 2)
        .attr('y', 10)
        .text('平均氣溫')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', line_length + 59)
        .attr('y', 0)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill','#3FA9F5');
    
    note
        .append('text')
        .attr('x', line_length + 71)
        .attr('y', 10)
        .text('濕度')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', line_length + 105)
        .attr('y', 0)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill','#F7931E');

    note
        .append('text')
        .attr('x', line_length + 117)
        .attr('y', 10)
        .text('運轉台數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

}


//設定模式比例畫圖
function mode_chart(){
    let dataset = {
        "cold_mode": 24,     //冷氣模式的比例 單位為%
        "dehumid_mode": 16,     //除溼模式的比例 單位為%
        "fan_mode": 14,     //送風模式的比例 單位為%
        "warm_mode": 15,    //暖氣模式的比例 單位為%
        "auto_mode": 31    //自動模式的比例 單位為%
    };

    let data = [];
    data.push(dataset.cold_mode, dataset.dehumid_mode, dataset.fan_mode, dataset.warm_mode, dataset.auto_mode);
    
    let svg = d3.select(".mode-chart")
        .append("svg")
        .attr("width",100+"%")
        .attr("height",100+"%");

    let svg_height = $(".mode-chart > svg").height();
    let svg_width = $(".mode-chart > svg").width();

    let g = svg.append("g")
            .attr('transform', `translate(${svg_width/2 - 40}, ${svg_height/2 + 15} )`);

    let color = d3.scaleOrdinal(['#3FA9F5','#4DE262 ','#F7931E','#FF0040','#F932EF']);

    // Generate the pie
    let pie = d3.pie();

    // Generate the arcs
    let arc_path = d3.arc()
                .innerRadius(0)
                .outerRadius(70);

    let label_path = d3.arc()
                .innerRadius(60)
                .outerRadius(100);

    //Generate groups
    let arcs = g.selectAll(".arc")
                .data(pie(data))
                .enter()
                .append("g")
                .attr("class", "arc");

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc_path);

    arcs.append("text")
        .attr("transform", function(d) { 
            return "translate(" + label_path.centroid(d) + ")"; 
         })
        .style('font-size', '16px')
        .attr('fill', function(d,i){
            return color(i);
        })
        .attr("text-anchor", function(d) {
            // are we past the center?
            return (d.endAngle + d.startAngle)/2 > Math.PI ?
                "end" : "start";
        })
        .text(function(d) { return d.data+'%'});
     

    //文字說明
    svg.append('text') 
        .attr('x', 118)
        .attr('y', 22)
        .attr('fill', '#000000')
        .text('設定模式比例')
        .style('font-size', '22px');
    
    let note = svg.append('g');
    let note_offset = 13;

    note
        .attr('transform', `translate(350,0)`);

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 32)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill','#3FA9F5');
    
    note
        .append('text')
        .attr('x', 20)
        .attr('y', 32 + note_offset)
        .text('冷氣')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 65)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill','#4DE262');
    
    note
        .append('text')
        .attr('x', 20)
        .attr('y', 65 + note_offset)
        .text('除溼')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 98)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill','#F7931E');
    
    note
        .append('text')
        .attr('x', 20)
        .attr('y', 98 + note_offset)
        .text('送風')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 130)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill','#FF0040');
    
    note
        .append('text')
        .attr('x', 20)
        .attr('y', 130 + note_offset)
        .text('暖氣')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 162)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill','#F932EF');
    
    note
        .append('text')
        .attr('x', 20)
        .attr('y', 162 + note_offset)
        .text('自動')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

}


//連線區域比例畫圖
function region_connect_svg(){
    let data = {
        'north': 50,  //北部連線區域比例 單位為%
        'west': 33,   //西部連線區域比例 單位為%
        'east': 53,   //東部連線區域比例 單位為%
        'south': 10,   //南部連線區域比例 單位為%
        'island': 2   //外島連線區域比例 單位為%
    };
    
    let svg = d3.select(".region-connect-item > svg");

    let svg_height = 841.9; //svg viewbox 不能直接用jquery獲得svg的height及width 這只是viewport 並不是viewbox 
    let svg_width = 750; //svg viewbox
    
    let xScale = d3.scaleLinear()
        .domain([0,100])
        .range([0,svg_width]); 

    let yScale = d3.scaleLinear()
        .domain([0,100])
        .range([0,svg_height]);
    
    // north circle
    svg
        .append('circle')
        .attr('cx', xScale(40))
        .attr('fill', '#FF0040')
        .attr('cy', yScale(9))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(44))
        .attr('y', yScale(11))
        .attr('font-weight', 'bold')
        .text(`${data.north}%`)
        .style('font-size', '48px')
        .style('fill', '#FF0040');
    
    // west circle
    svg
        .append('circle')
        .attr('cx', xScale(26))
        .attr('fill', '#3FA9F5')
        .attr('cy', yScale(27))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(30))
        .attr('y', yScale(29))
        .attr('font-weight', 'bold')
        .text(`${data.west}%`)
        .style('font-size', '48px')
        .style('fill', '#3FA9F5');

    // south circle
    svg
        .append('circle')
        .attr('cx', xScale(18))
        .attr('fill', '#F7931E')
        .attr('cy', yScale(83))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(22))
        .attr('y', yScale(85))
        .attr('font-weight', 'bold')
        .text(`${data.south}%`)
        .style('font-size', '48px')
        .style('fill', '#F7931E');

    // east circle
    svg
        .append('circle')
        .attr('cx', xScale(82))
        .attr('fill', '#4DE262')
        .attr('cy', yScale(50))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(86))
        .attr('y', yScale(52))
        .attr('font-weight', 'bold')
        .text(`${data.east}%`)
        .style('font-size', '48px')
        .style('fill', '#4DE262');

    // island circle
    svg
        .append('circle')
        .attr('cx', xScale(3))
        .attr('fill', '#F932EF')
        .attr('cy', yScale(7))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(7))
        .attr('y', yScale(9))
        .attr('font-weight', 'bold')
        .text(`${data.island}%`)
        .style('font-size', '48px')
        .style('fill', '#F932EF');

}


//各區域運轉台數比例畫圈
function region_home_svg(){
    let data = {
        'north': 50,  //北部連線區域比例 單位為%
        'west': 33,   //西部連線區域比例 單位為%
        'east': 53,   //東部連線區域比例 單位為%
        'south': 10,   //南部連線區域比例 單位為%
        'island': 2   //外島連線區域比例 單位為%
    };
    
    let svg = d3.select(".region-home-item > svg");

    let svg_height = 841.9; //svg viewbox 不能直接用jquery獲得svg的height及width 這只是viewport 並不是viewbox 
    let svg_width = 750; //svg viewbox
    
    let xScale = d3.scaleLinear()
        .domain([0,100])
        .range([0,svg_width]); 

    let yScale = d3.scaleLinear()
        .domain([0,100])
        .range([0,svg_height]);

    // north circle
    svg
        .append('circle')
        .attr('cx', xScale(40))
        .attr('fill', '#FF0040')
        .attr('cy', yScale(9))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(44))
        .attr('y', yScale(11))
        .attr('font-weight', 'bold')
        .text(`${data.north}%`)
        .style('font-size', '48px')
        .style('fill', '#FF0040');
    
    // west circle
    svg
        .append('circle')
        .attr('cx', xScale(26))
        .attr('fill', '#3FA9F5')
        .attr('cy', yScale(27))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(30))
        .attr('y', yScale(29))
        .attr('font-weight', 'bold')
        .text(`${data.west}%`)
        .style('font-size', '48px')
        .style('fill', '#3FA9F5');

    // south circle
    svg
        .append('circle')
        .attr('cx', xScale(18))
        .attr('fill', '#F7931E')
        .attr('cy', yScale(83))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(22))
        .attr('y', yScale(85))
        .attr('font-weight', 'bold')
        .text(`${data.south}%`)
        .style('font-size', '48px')
        .style('fill', '#F7931E');

    // east circle
    svg
        .append('circle')
        .attr('cx', xScale(82))
        .attr('fill', '#4DE262')
        .attr('cy', yScale(50))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(86))
        .attr('y', yScale(52))
        .attr('font-weight', 'bold')
        .text(`${data.east}%`)
        .style('font-size', '48px')
        .style('fill', '#4DE262');

    // island circle
    svg
        .append('circle')
        .attr('cx', xScale(3))
        .attr('fill', '#F932EF')
        .attr('cy', yScale(7))
        .attr('r', 13);

    svg
        .append('text')
        .attr('x', xScale(7))
        .attr('y', yScale(9))
        .attr('font-weight', 'bold')
        .text(`${data.island}%`)
        .style('font-size', '48px')
        .style('fill', '#F932EF');

}

//日曆上的月份顯示
function text_on_calendar(){
    let svg = d3.select(".calendar > svg");

    svg
        .append('text')
        .attr('x', 13)
        .attr('y', 44)
        .attr('font-weight', 'bold')
        .text(`9月`)
        .style('font-size', '24px')
        .style('fill', '#00000');
}

async function callAPI(path, action){
    let url = 'http://140.118.121.111:8354' + path;

    fetch(url)
    .then(function(response) {
        return(response.json());
    })
    .then(function(myJson) {
        action(myJson);
    });
}

//for test, to see what information returns.
async function testAPI(path){
    let url = 'http://140.118.121.111:8354' + path;

    fetch(url)
    .then(function(response) {
        return(response.json());
    })
    .then(function(myJson) {
        console.log(myJson);
    });
}

sum_login_chart();
connect_amount_chart();
connect_48h_chart();
detail_chart();
text_on_calendar();
mode_chart();
region_connect_svg();
region_home_svg();
click_event();
// testAPI("/air-conditioner/information?ID=0");
setInterval(show_time, 1000);//show time per sec