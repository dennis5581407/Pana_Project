function click_event() {
    //header click event
    $(".lang").on('click', '.lang-option-active', function () {
        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
    });

    $('.lang').on('click', '.lang-option-offset-0', function () {

        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
        $(".lang-option-active").addClass("lang-option");
        $(".lang > div").removeClass("lang-option-active");
        $(this).removeClass("lang-option");
        $(this).addClass("lang-option-active");

        if ($(this).hasClass('lang-japanese')) {

        }

        else if ($(this).hasClass('lang-chinese')) {

        }

        else if ($(this).hasClass('lang-english')) {

        }

        else {
            console("change language error")
        }
    });

    $('.lang').on('click', '.lang-option-offset-1', function () {

        $(".lang .lang-option:nth(0)").toggleClass('lang-option-offset-0');
        $(".lang .lang-option:nth(1)").toggleClass('lang-option-offset-1');
        $(".lang-option-active").addClass("lang-option");
        $(".lang > div").removeClass("lang-option-active");
        $(this).removeClass("lang-option");
        $(this).addClass("lang-option-active");

        if ($(this).hasClass('lang-japanese')) {

        }

        else if ($(this).hasClass('lang-chinese')) {

        }

        else if ($(this).hasClass('lang-english')) {

        }
    });

    //24H開機分布回數圖表的click event
    $(".detail-item").on('click', '.button-north', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {
            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');

            $('.detail-chart > svg').remove();
            callAPI(`/refrigerator/information?ID=0`, econavi_rate_chart);
        }
    });

    $(".detail-item").on('click', '.button-center', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');

            $('.detail-chart > svg').remove();
            callAPI(`/refrigerator/information?ID=1`, econavi_rate_chart);
        }
    });

    $(".detail-item").on('click', '.button-south', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');

            $('.detail-chart > svg').remove();
            callAPI(`/refrigerator/information?ID=2`, econavi_rate_chart);
        }
    });

    $(".detail-item").on('click', '.button-east', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.detail-item .button-region > div').removeClass('button-pressed');
            $('.detail-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');

            let month = $('.active-month').text();
            month = month.substring(0, month.length - 1);

            $('.detail-chart > svg').remove();
            callAPI(`/refrigerator/information?ID=3`, econavi_rate_chart);
        }
    });

    //設定模式比例圓餅圖的click event
    $(".mode-rate-item").on('click', '.button-north', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            callAPI('/refrigerator/region-mode?ID=0', mode_chart);
        }
    });

    $(".mode-rate-item").on('click', '.button-center', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            callAPI('/refrigerator/region-mode?ID=1', mode_chart);
        }
    });

    $(".mode-rate-item").on('click', '.button-south', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            callAPI('/refrigerator/region-mode?ID=2', mode_chart);
        }
    });

    $(".mode-rate-item").on('click', '.button-east', function () {
        if ($(this).hasClass('button-pressed')) {

        }

        else {

            $('.mode-rate-item .button-region > div').removeClass('button-pressed');
            $('.mode-rate-item .button-region > div').addClass('button-unpressed');

            $(this).addClass('button-pressed');
            $(this).removeClass('button-unpressed');
            $('.mode-chart > svg').remove();
            callAPI('/refrigerator/region-mode?ID=3', mode_chart);
        }
    });

}

function show_time() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
    let hour = today.getHours();
    let min = today.getMinutes();

    min = min.toString();
    if (min.length == 1) {
        min = 0 + min;
    }

    let date_string = `${year}/${month}/${date}&emsp;${hour}:${min}&emsp;`;

    $('.clock').html(date_string); //html的method也會把子元素一併取代掉
}

//累積登錄台數畫圖
function sum_login_chart(dataset) {

    let Xdata = dataset.map(function (d) {
        return d.year;
    });

    let svg = d3.select(".login-sum-item")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 92 + "%")
        .style("margin-top", -5 + "px");

    let svg_height = $(".login-sum-item > svg").height() - 35;
    let svg_width = $(".login-sum-item > svg").width() - 20;

    let yAxisScale = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 5]);

    let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([40, svg_width])
        .paddingInner(0.5)
        .paddingOuter(-0.25);

    let xAxisScale_year = d3.scaleLinear()
        .domain([0, 100])
        .range([40, svg_width]);


    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10, ".0f"))
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
        .style('opacity', '0.3');

    let offset = xAxisScale.bandwidth() / 2;

    //畫出全般累積登錄台數面積圖
    var area_generator = d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(function (d) {
            return yAxisScale(d.builtIn);
        })
        .y1(function (d) {
            return yAxisScale(d.all);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("class", "sum-login-area")
        .attr("d", area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill", "#3FA9F5")
        .attr('transform', `translate(${offset},0)`);

    // 畫出內建累積登錄台數面積圖
    var area_generator = d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(yAxisScale(0))
        .y1(function (d) {
            return yAxisScale(d.builtIn);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr("class", "sum-login-area")
        .attr("d", area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill", "#F7931E")
        .attr('transform', `translate(${offset},0)`);



    let today = new Date();
    let year = today.getFullYear();
    let today_month = today.getMonth() + 1;
    today_month = today_month.toString();
    if (today_month.length < 2) {
        today_month = '0' + today_month;
    }

    let yearmonth = year + today_month;
    let title_str;

    //title顯示文字處理
    dataset.forEach(function (element, i) {
        if (element.year == yearmonth) {
            title_str = `當月全般累積登錄台數: ${element.all}    當月內藏累積登錄台數: ${element.builtIn}`;
        }
    })

    svg.selectAll('.sum-login-area') //display value when mouserover on bar
        .append('title')
        .text(title_str);

    //x軸標示 
    svg.append('text')
        .attr('x', xAxisScale_year(1))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year - 2}年`)
        .style('font-size', '11px');

    svg.append('text')
        .attr('x', xAxisScale_year(45))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year - 1}年`)
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
        .attr('stroke-width', 2)
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
        .attr('stroke-width', 2)
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
function connect_amount_chart(dataset) {

    let Xdata = dataset.map(function (d) {
        return d.year;
    });

    let svg = d3.select(".connect-amount-item")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 92 + "%")
        .style("margin-top", -5 + "px");

    let svg_height = $(".connect-amount-item > svg").height() - 35;
    let svg_width = $(".connect-amount-item > svg").width() - 20;

    let yAxisScale = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 5]);

    let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([40, svg_width])
        .paddingInner(0.5)
        .paddingOuter(-0.25);

    let xAxisScale_year = d3.scaleLinear()
        .domain([0, 100])
        .range([40, svg_width]);

    let offset = xAxisScale.bandwidth() / 2;

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10, ".0f"))
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
        .style('opacity', '0.3');


    //畫出全般連線台數面積圖
    var area_generator = d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(function (d) {
            return yAxisScale(d.builtIn);
        })
        .y1(function (d) {
            return yAxisScale(d.all);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr('class', 'connect-amount-area')
        .attr("d", area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill", "#3FA9F5")
        .attr('transform', `translate(${offset},0)`);

    // 畫出內建連線台數面積圖
    var area_generator = d3.area()
        .x(function (d) {
            return xAxisScale(d.year);
        })
        .y0(yAxisScale(0))
        .y1(function (d) {
            return yAxisScale(d.builtIn);
        })
        .curve(d3.curveMonotoneX);

    svg.append("path")
        .attr('class', 'connect-amount-area')
        .attr("d", area_generator(dataset)) //d="M1,0L20,40.....  d-path data
        .style("fill", "#F7931E")
        .attr('transform', `translate(${offset},0)`);

    let today = new Date();
    let year = today.getFullYear();
    let today_month = today.getMonth() + 1;
    today_month = today_month.toString();
    if (today_month.length < 2) {
        today_month = '0' + today_month;
    }

    let yearmonth = year + today_month;
    let title_str;

    //title顯示文字處理
    dataset.forEach(function (element, i) {
        if (element.year == yearmonth) {
            title_str = `當月全般連線台數: ${element.all}    當月內藏連線台數: ${element.builtIn}`;
        }
    })

    svg.selectAll('.connect-amount-area') //display value when mouserover on bar
        .append('title')
        .text(title_str);

    //x軸標示 
    svg.append('text')
        .attr('x', xAxisScale_year(1))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year - 2}年`)
        .style('font-size', '11px');

    svg.append('text')
        .attr('x', xAxisScale_year(45))
        .attr('y', yAxisScale(0) + 14)
        .text(`${year - 1}年`)
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
        .attr('stroke-width', 2)
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
        .attr('stroke-width', 2)
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
function connect_48h_chart(dataset) {

    // dataset = [
    //     {
    //         'hour': '00',   //時間為00時
    //         'today_connect': 37,   //今日連線數 單位為萬台
    //         'yesterday_connect': 34,  //昨日連線數 單位為萬台
    //     },
    //     {
    //         'hour': '01',   
    //         'today_connect': 45,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '02',   
    //         'today_connect': 11,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '03',   
    //         'today_connect': 23,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '04',   
    //         'today_connect': 17,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '05',   
    //         'today_connect': 41,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '06',   
    //         'today_connect': 46,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '07',   
    //         'today_connect': 23,     
    //         'yesterday_connect': 34,          
    //     },
    //     {
    //         'hour': '08',   
    //         'today_connect': 44,   
    //         'yesterday_connect': 34,  

    //     },
    //     {
    //         'hour': '09',   
    //         'today_connect': 36,    
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '10',   
    //         'today_connect': 17,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '11',   
    //         'today_connect': 23,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '12',   
    //         'today_connect': 33,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '13',   
    //         'today_connect': 54,   
    //         'yesterday_connect': 34,   
    //     },
    //     {
    //         'hour': '14',   
    //         'today_connect': 34,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '15',   
    //         'today_connect': 12,   
    //         'yesterday_connect': 65,  
    //     },
    //     {
    //         'hour': '16',   
    //         'today_connect': 46,    
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '17',   
    //         'today_connect': 5,   
    //         'yesterday_connect': 2,   
    //     },
    //     {
    //         'hour': '18',   
    //         'today_connect': 12,   
    //         'yesterday_connect': 66,  
    //     },
    //     {
    //         'hour': '19',   
    //         'today_connect': 34,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '20',   
    //         'today_connect': 12,   
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '21',   
    //         'today_connect': 23,    
    //         'yesterday_connect': 18,   
    //     },
    //     {
    //         'hour': '22',   
    //         'today_connect': 43,    
    //         'yesterday_connect': 34,  
    //     },
    //     {
    //         'hour': '23',   
    //         'today_connect': 13,   
    //         'yesterday_connect': 34,  
    //     }
    // ];

    let Xdata = dataset.map(function (d) {
        return d.hour;
    });

    let svg = d3.select(".connect-48h-item")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 92 + "%")
        .style("margin-top", 3 + "px");

    let svg_height = $(".connect-48h-item > svg").height() - 35;
    let svg_width = $(".connect-48h-item > svg").width() - 10;

    let yAxisScale = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 5]);

    let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([20, svg_width])
        .padding(0.5);

    svg.append('g') //y axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10, ".0f"))
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
        .style('opacity', '0.3');

    svg.selectAll('.rect_td_connect') //append today connect bar in bar chart
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_td_connect')
        .attr('x', (d) => xAxisScale(d.hour))
        .attr('y', (d) => yAxisScale(d.today_connect))
        .attr('width', xAxisScale.bandwidth())
        .style('fill', '#F7931E')
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
        .style('fill', '#3FA9F5')
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
        .style('fill', '#3FA9F5');

    note
        .append('text')
        .attr('x', line_length + 15)
        .attr('y', 9)
        .text('昨日連線數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', line_length + 84)
        .attr('y', -1)
        .attr('width', 10)
        .attr('height', 10)
        .style('fill', '#F7931E');

    note
        .append('text')
        .attr('x', line_length + 99)
        .attr('y', 9)
        .text('當日連線數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');



    note.attr('transform', `translate(0,${yAxisScale(0) + 16})`);
}

//econavi比例畫圖
function econavi_rate_chart(dataset) {
    dataset = [
        {
            'hour': '00',   //時間為00時
            'econavi': 65   //當時econavi數量 單位為萬台
        },
        {
            'hour': '01',
            'econavi': 65
        },
        {
            'hour': '02',
            'econavi': 65
        },
        {
            'hour': '03',
            'econavi': 65
        },
        {
            'hour': '04',
            'econavi': 65
        },
        {
            'hour': '05',
            'econavi': 65
        },
        {
            'hour': '06',
            'econavi': 65
        },
        {
            'hour': '07',
            'econavi': 65
        },
        {
            'hour': '08',
            'econavi': 65
        },
        {
            'hour': '09',
            'econavi': 65
        },
        {
            'hour': '10',
            'econavi': 65
        },
        {
            'hour': '11',
            'econavi': 65
        },
        {
            'hour': '12',
            'econavi': 65
        },
        {
            'hour': '13',
            'econavi': 65
        },
        {
            'hour': '14',
            'econavi': 65
        },
        {
            'hour': '15',
            'econavi': 65
        },
        {
            'hour': '16',
            'econavi': 65
        },
        {
            'hour': '17',
            'econavi': 65
        },
        {
            'hour': '18',
            'econavi': 65
        },
        {
            'hour': '19',
            'econavi': 65
        },
        {
            'hour': '20',
            'econavi': 65
        },
        {
            'hour': '21',
            'econavi': 65
        },
        {
            'hour': '22',
            'econavi': 65
        },
        {
            'hour': '23',
            'econavi': 65
        }
    ];

    let Xdata = dataset.map(function (d) {
        return d.hour + ':00';
    });

    let xdata_show = ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];

    let svg = d3.select(".detail-chart")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 100 + "%")
        .style("margin-top", 1 + "px");

    let svg_height = $(".detail-chart").height() - 40;
    let svg_width = $(".detail-chart").width() - 10;

    let yAxisScale = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 30]);

    let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([23, svg_width])
        .paddingInner(0.35)
        .paddingOuter(0.3);


    svg.append('g') //y running axis
        .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10, ".0f"))
        .attr('transform', `translate(23, 0)`)
        .select('path')
        .style('opacity', '0');;


    svg.append('g') //x axis
        .call(d3.axisBottom(xAxisScale).tickSize(0).tickValues(xdata_show))
        .attr('transform', `translate(0, ${svg_height})`)
        .attr('font-size', 11)
        .select('path')
        .style('opacity', '0');


    svg.append('g') //網狀格
        .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 23).tickFormat(' '))
        .attr('transform', `translate(23, 0)`)
        .style('opacity', '0.3');

    //append "econavi比例"" bar in bar chart
    svg.selectAll('.rect_econavi')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_econavi')
        .attr('x', (d) => xAxisScale(d.hour + ':00'))
        .attr('y', (d) => yAxisScale(d.econavi))
        .attr('width', xAxisScale.bandwidth())
        .style('fill', '#3FA9F5')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale(d.econavi));


    svg.selectAll('.rect_econavi') //display value when mouserover on bar
        .data(dataset)
        .append('title')
        .text((d) => "EcoNavi:" + d.econavi);


    let offset = xAxisScale.bandwidth() / 2;

    //文字說明
    svg.append('text')
        .attr('x', 115)
        .attr('y', 22)
        .attr('fill', '#000000')
        .text('EcoNavi比例')
        .style('font-size', '22px');

    svg.append('text')
        .attr('x', 3)
        .attr('y', 185)
        .attr('fill', '#000000')
        .text('(單位:萬台)')
        .style('font-size', '11px');

}


//設定模式比例 畫圖

function mode_chart(dataset) {
    dataset_fridge = dataset.fridge;

    let data_fridge = [];
    data_fridge.push(dataset_fridge.strong, dataset_fridge.medium, dataset_fridge.weak);

    dataset_freeze = dataset.freeze;

    let data_freeze = [];
    data_freeze.push(dataset_freeze.strong, dataset_freeze.medium, dataset_freeze.weak);

    let svg = d3.select(".mode-chart")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 100 + "%");

    let svg_height = $(".mode-chart > svg").height();
    let svg_width = $(".mode-chart > svg").width();

    let g_fridge = svg.append("g")
        .attr('transform', `translate(${svg_width / 2 - 115}, ${svg_height / 2 + 10} )`);

    let color = d3.scaleOrdinal(['#3FA9F5', '#4DE262 ', '#F7931E']);

    // Generate the pie
    let pie = d3.pie();

    // Generate the arcs
    let arc_path = d3.arc()
        .innerRadius(0)
        .outerRadius(60);

    let label_path = d3.arc()
        .innerRadius(60)
        .outerRadius(84);

    //Generate groups
    let arcs_fridge = g_fridge.selectAll(".arc-fridge")
        .data(pie(data_fridge))
        .enter()
        .append("g")
        .attr("class", "arc-fridge");

    //Draw arc paths
    arcs_fridge.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc_path);

    arcs_fridge.append("text")
        .attr("transform", function (d) {
            return "translate(" + label_path.centroid(d) + ")";
        })
        .style('font-size', '16px')
        .attr('fill', function (d, i) {
            return color(i);
        })
        .attr("text-anchor", function (d) {
            // are we past the center?
            return (d.endAngle + d.startAngle) / 2 > Math.PI ?
                "end" : "start";
        })
        .text(function (d) {
            if (d.data != 0) {
                return d.data + '%';
            }
        });


    //文字說明
    svg.append('text')
        .attr('x', 118)
        .attr('y', 22)
        .attr('fill', '#000000')
        .text('設定模式比例')
        .style('font-size', '22px');

    svg.append('text')
        .attr('x', 93)
        .attr('y', 190)
        .attr('fill', '#000000')
        .text('冷藏')
        .style('font-size', '16px');

    let note = svg.append('g');
    let note_offset = 13;

    note
        .attr('transform', `translate(405,40)`);

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 32)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill', '#3FA9F5');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 32 + note_offset)
        .text('強')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 65)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill', '#4DE262');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 65 + note_offset)
        .text('中')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 98)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill', '#F7931E');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 98 + note_offset)
        .text('弱')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    let g_freeze = svg.append("g")
        .attr('transform', `translate(${svg_width / 2 + 80}, ${svg_height / 2 + 10} )`);


    //Generate groups
    let arcs_freeze = g_freeze.selectAll(".arc-freeze")
        .data(pie(data_freeze))
        .enter()
        .append("g")
        .attr("class", "arc-freeze");

    //Draw arc paths
    arcs_freeze.append("path")
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc_path);

    arcs_freeze.append("text")
        .attr("transform", function (d) {
            return "translate(" + label_path.centroid(d) + ")";
        })
        .style('font-size', '16px')
        .attr('fill', function (d, i) {
            return color(i);
        })
        .attr("text-anchor", function (d) {
            // are we past the center?
            return (d.endAngle + d.startAngle) / 2 > Math.PI ?
                "end" : "start";
        })
        .text(function (d) {
            if (d.data != 0) {
                return d.data + '%';
            }
        });


    //文字說明
    svg.append('text')
        .attr('x', 289)
        .attr('y', 190)
        .attr('fill', '#000000')
        .text('冷凍')
        .style('font-size', '16px');
}


//連線區域比例畫圖
function region_connect_svg(data) {
    // let data = {
    //     'north': 50,  //北部連線區域比例 單位為%
    //     'west': 33,   //西部連線區域比例 單位為%
    //     'east': 53,   //東部連線區域比例 單位為%
    //     'south': 10,   //南部連線區域比例 單位為%
    //     'island': 2   //外島連線區域比例 單位為%
    // };

    let svg = d3.select(".region-connect-item > svg");

    let svg_height = 841.9; //svg viewbox 不能直接用jquery獲得svg的height及width 這只是viewport 並不是viewbox 
    let svg_width = 750; //svg viewbox

    let xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, svg_width]);

    let yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, svg_height]);

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
function region_home_svg(data) {
    // let data = {
    //     'north': 50,  //北部連線區域比例 單位為%
    //     'west': 33,   //西部連線區域比例 單位為%
    //     'east': 53,   //東部連線區域比例 單位為%
    //     'south': 10,   //南部連線區域比例 單位為%
    //     'island': 2   //外島連線區域比例 單位為%
    // };

    let svg = d3.select(".region-home-item > svg");

    let svg_height = 841.9; //svg viewbox 不能直接用jquery獲得svg的height及width 這只是viewport 並不是viewbox 
    let svg_width = 750; //svg viewbox

    let xScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, svg_width]);

    let yScale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, svg_height]);

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


//左上角基本資料顯示
function show_basic_information(data) {
    let queue = [];
    queue.push(data.total_login.amount + '萬台', data.out_login.amount + '萬台',
        data.in_login.amount + '萬台', data.total_login.rate + '%',
        data.out_login.rate + '%', data.in_login.rate + '%');

    let basic_information_item = $(".information");
    basic_information_item.each(function (i, value) {
        $(this).text(queue[i]);
    });
};

//異常回報顯示
function show_trouble_report(dataset) {
    // dataset = {
    //     'today': 2,  //今日異常回報數量
    //     '30days': 5,   //30日內異常回報數量
    //     'trouble_list':  //當日異常回報list
    //         [
    //             {
    //                 'time': '20:23:53',  //異常發生時間
    //                 'GWID': '73HFJFJENG'  //異常機器的GWID
    //             },
    //             {
    //                 'time': '09:18:03', 
    //                 'GWID': 'OIHJ03JG22'
    //             }
    //         ]
    // };

    $('.today-trouble-count').text(dataset.today);
    $('.month-trouble-count').text(dataset['30days']);

    if (dataset.trouble_list != null) {
        dataset.trouble_list.forEach(function (element, i) {
            $(".trouble-list ul").append(`<li>LIST ${i + 1} - 時間：${element.time}, GWID：${element.GWID}, 異常</li>`);
        });
    }

}

async function callAPI(path, action) {
    let url = 'https://140.118.121.111:8354' + path;

    fetch(url)
        .then(function (response) {
            return (response.json());
        })
        .then(function (myJson) {
            action(myJson);
        });
}

//for test, to see what information returns.
async function testAPI(path) {
    let url = 'https://140.118.121.111:8354' + path;

    fetch(url)
        .then(function (response) {
            return (response.json());
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}


callAPI('/refrigerator/basic-information', show_basic_information); //show 基本資料(頁面左上角總登錄數等)
callAPI('/refrigerator/sum-login', sum_login_chart); //show 累積登錄台數圖表(頁面左中) 待測:測資不正常導致顯示錯誤
callAPI('/refrigerator/connect-amount', connect_amount_chart); //show 連線台數圖表(頁面左下)
callAPI('/refrigerator/connect-48h', connect_48h_chart); //show 48h連線數與運轉台數(頁面中上)
callAPI('/refrigerator/region-mode?ID=0', mode_chart); //show 設定模式比例圓餅圖_冷藏(頁面中下圓餅圖)
callAPI('/refrigerator/trouble', show_trouble_report); //show 異常回報資料(頁面最下)
callAPI('/refrigerator/connect-region-rate', region_connect_svg); //show 台灣圖之連線區域比例(頁面右上台灣圖)
callAPI('/refrigerator/amount-region-rate', region_home_svg); //show 台灣圖之各區域運轉比例(頁面右中台灣圖)
callAPI('/refrigerator/information?ID=0', econavi_rate_chart); //show 台灣圖之各區域運轉比例(頁面右中台灣圖)

click_event();
// testAPI("/refrigerator/information?ID=0");
setInterval(show_time, 1000);//show time per sec