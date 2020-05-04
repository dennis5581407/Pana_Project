
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

function sum_login_chart(){

    let dataset = [
        {
            'year': '2018年', 
            'all': 13,  
            'addOn': 34,  
            'buildIn': 25    
        },
        {
            'year': '2019年',
            'all': 35, 
            'addOn': 85,  
            'buildIn': 25  
        },
        {
            'year': '2020年',
            'all': 93,   
            'addOn': 2,  
            'buildIn': 25  
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
    .padding(-0.7);

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(40, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 40).tickFormat(' '))
        .attr('transform', `translate(40, 0)`)
        .style('opacity','0.3');


    //畫出全般累積登錄台數曲線
    let line_all_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.all);
    })
    .curve(d3.curveBasis);

    let offset = xAxisScale.bandwidth() / 2;

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_all_wifi(dataset))
        .attr('stroke', '#3FA9F5')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出外掛累積登錄台數曲線
    let line_plugin_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.addOn);
    })
    .curve(d3.curveBasis);

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_plugin_wifi(dataset))
        .attr('stroke', '#F7931E')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出內建累積登錄台數曲線
    let line_buildin_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.buildIn);
    })
    .curve(d3.curveBasis);

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_buildin_wifi(dataset))
        .attr('stroke', '#FF0040')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

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
        .text('外掛')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 96)
        .attr('y1', 5)
        .attr('x2', line_length + 112)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#FF0040');
    
    note
        .append('text')
        .attr('x', line_length + 114)
        .attr('y', 9)
        .text('內建')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 20})`);
}

function connect_amount_chart(){

    let dataset = [
        {
            'year': '2018年', 
            'all': 100,  
            'addOn': 55,  
            'buildIn': 60    
        },
        {
            'year': '2019年',
            'all': 50, 
            'addOn': 32,  
            'buildIn': 91  
        },
        {
            'year': '2020年',
            'all': 90,   
            'addOn': 2,  
            'buildIn': 25  
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
    .padding(-0.7);

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
        .attr('transform', `translate(40, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');
       

    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 40).tickFormat(' '))
        .attr('transform', `translate(40, 0)`)
        .style('opacity','0.3');


    //畫出全般連線台數曲線
    let line_all_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.all);
    })
    .curve(d3.curveBasis);

    let offset = xAxisScale.bandwidth() / 2;

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_all_wifi(dataset))
        .attr('stroke', '#3FA9F5')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出外掛連線台數曲線
    let line_plugin_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.addOn);
    })
    .curve(d3.curveBasis);

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_plugin_wifi(dataset))
        .attr('stroke', '#F7931E')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出內建連線台數曲線
    let line_buildin_wifi = d3.line()
    .x(function (d) {
        return xAxisScale(d.year);
    })
    .y(function (d) {
        return yAxisScale(d.buildIn);
    })
    .curve(d3.curveBasis);

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_buildin_wifi(dataset))
        .attr('stroke', '#FF0040')
        .attr('stroke-width',2)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

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
        .text('外掛')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('line')
        .attr('x1', line_length + 96)
        .attr('y1', 5)
        .attr('x2', line_length + 112)
        .attr('y2', 5)
        .attr('stroke-width',2)
        .style('stroke', '#FF0040');
    
    note
        .append('text')
        .attr('x', line_length + 114)
        .attr('y', 9)
        .text('內建')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 20})`);
}

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
        .attr('stroke', '#FF0040')
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
        .attr('stroke', '#4DE262')
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
        .style('stroke', '#4DE262');
    
    note
        .append('text')
        .attr('x', line_length + 292)
        .attr('y', 9)
        .text('昨日運轉台數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note.attr('transform', `translate(0,${yAxisScale(0) + 16})`);
}

sum_login_chart();
connect_amount_chart();
connect_48h_chart();
click_event();
setInterval(show_time, 1000);//show time per sec