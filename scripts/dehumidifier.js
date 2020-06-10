var chartScale = 1000;

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

    //平均溫度&濕度&運轉台數圖表的click event
    $(".detail-item").on('click', '.button-north', function () {
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
            callAPI(`/dehumidifier/information?ID=0&month=${month}`, detail_chart);
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

            let month = $('.active-month').text();
            month = month.substring(0, month.length - 1);

            $('.detail-chart > svg').remove();
            callAPI(`/dehumidifier/information?ID=1&month=${month}`, detail_chart);
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

            let month = $('.active-month').text();
            month = month.substring(0, month.length - 1);

            $('.detail-chart > svg').remove();
            callAPI(`/dehumidifier/information?ID=2&month=${month}`, detail_chart);
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
            callAPI(`/dehumidifier/information?ID=3&month=${month}`, detail_chart);
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
            callAPI('/dehumidifier/region-mode?ID=0', mode_chart);
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
            callAPI('/dehumidifier/region-mode?ID=1', mode_chart);
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
            callAPI('/dehumidifier/region-mode?ID=2', mode_chart);
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
            callAPI('/dehumidifier/region-mode?ID=3', mode_chart);
        }
    });

    //點日曆圖示的click event
    $(".calendar").on('click', 'svg', function () {
        $('.month-picker').toggleClass('display-none');
    });

    $(".calendar").on('click', '.months', function () {
        if ($(this).hasClass('active-month')) {

        }

        else {
            $('.calendar .months').removeClass('active-month');
            $(this).addClass('active-month');

            let month = $(this).text();
            text_on_calendar(month);
            month = month.substring(0, month.length - 1);

            $('.month-picker').addClass('display-none');

            //按下月曆的月份時判斷按鈕是在北部、中部、南部、東部，並call API
            let button_active = $('.detail-item .button-pressed');
            $('.detail-chart > svg').remove();
            if (button_active.hasClass('button-north')) {
                callAPI(`/dehumidifier/information?ID=0&month=${month}`, detail_chart);
            }

            else if (button_active.hasClass('button-center')) {
                callAPI(`/dehumidifier/information?ID=1&month=${month}`, detail_chart);
            }

            else if (button_active.hasClass('button-south')) {
                callAPI(`/dehumidifier/information?ID=2&month=${month}`, detail_chart);
            }

            else if (button_active.hasClass('button-east')) {
                callAPI(`/dehumidifier/information?ID=3&month=${month}`, detail_chart);
            }
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
            return yAxisScale(d.builtIn / chartScale);
        })
        .y1(function (d) {
            return yAxisScale(d.all / chartScale);
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
            return yAxisScale(d.builtIn / chartScale);
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
        .text('單位:千台')
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
            return yAxisScale(d.builtIn / chartScale);
        })
        .y1(function (d) {
            return yAxisScale(d.all / chartScale);
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
            return yAxisScale(d.builtIn / chartScale);
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
        .text('單位:千台')
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

    // let dataset = [
    //     {
    //         'hour': '00',   //時間為00時
    //         'today_connect': 37,   //今日連線數 單位為萬台
    //         'today_amount': 32,   //今日??台數 單位為萬台
    //         'yesterday_connect': 34,  //昨日連線數 單位為萬台
    //         'yesterday_amount': 65   //昨日??台數 單位為萬台
    //     },
    //     {
    //         'hour': '01',   
    //         'today_connect': 45,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '02',   
    //         'today_connect': 11,   
    //         'today_amount': 44,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 77  
    //     },
    //     {
    //         'hour': '03',   
    //         'today_connect': 23,   
    //         'today_amount': 13,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 32  
    //     },
    //     {
    //         'hour': '04',   
    //         'today_connect': 17,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 15  
    //     },
    //     {
    //         'hour': '05',   
    //         'today_connect': 41,   
    //         'today_amount': 97,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 88  
    //     },
    //     {
    //         'hour': '06',   
    //         'today_connect': 46,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '07',   
    //         'today_connect': 23,   
    //         'today_amount': 22,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '08',   
    //         'today_connect': 44,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '09',   
    //         'today_connect': 36,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '10',   
    //         'today_connect': 17,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '11',   
    //         'today_connect': 23,   
    //         'today_amount': 77,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '12',   
    //         'today_connect': 33,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '13',   
    //         'today_connect': 54,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '14',   
    //         'today_connect': 34,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '15',   
    //         'today_connect': 12,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 65,  
    //         'yesterday_amount': 19  
    //     },
    //     {
    //         'hour': '16',   
    //         'today_connect': 46,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '17',   
    //         'today_connect': 5,   
    //         'today_amount': 57,  
    //         'yesterday_connect': 2,  
    //         'yesterday_amount': 12  
    //     },
    //     {
    //         'hour': '18',   
    //         'today_connect': 12,   
    //         'today_amount': 54,  
    //         'yesterday_connect': 66,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '19',   
    //         'today_connect': 34,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '20',   
    //         'today_connect': 12,   
    //         'today_amount': 78,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '21',   
    //         'today_connect': 23,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 18,  
    //         'yesterday_amount': 65  
    //     },
    //     {
    //         'hour': '22',   
    //         'today_connect': 43,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 36  
    //     },
    //     {
    //         'hour': '23',   
    //         'today_connect': 13,   
    //         'today_amount': 32,  
    //         'yesterday_connect': 34,  
    //         'yesterday_amount': 65  
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
        .attr('y', (d) => yAxisScale(d.today_connect / chartScale))
        .attr('width', xAxisScale.bandwidth())
        .style('fill', '#F7931E')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale(d.today_connect / chartScale));

    svg.selectAll('.rect_yd_connect') //append yesterday connect bar in bar chart
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_yd_connect')
        .attr('x', (d) => xAxisScale(d.hour))
        .attr('y', (d) => yAxisScale(d.today_connect / chartScale + d.yesterday_connect / chartScale))
        .attr('width', xAxisScale.bandwidth())
        .style('fill', '#3FA9F5')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale(d.yesterday_connect / chartScale));

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
            return yAxisScale(d.today_amount / chartScale);
        });

    let offset = xAxisScale.bandwidth() / 2;

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_td_running(dataset))
        .attr('stroke', '#006837')
        .attr('stroke-width', 1.5)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);

    //畫出昨日運轉台數曲線
    let line_yd_running = d3.line()
        .x(function (d) {
            return xAxisScale(d.hour);
        })
        .y(function (d) {
            return yAxisScale(d.yesterday_amount / chartScale);
        });

    svg.append('path')
        .transition().duration(1000)
        .attr('d', line_yd_running(dataset))
        .attr('stroke', '#FF0040')
        .attr('stroke-width', 1.5)
        .attr('fill', 'none')
        .attr('transform', `translate(${offset},0)`);


    svg.append('text')
        .attr('x', 0)
        .attr('y', yAxisScale(0) + 23)
        .text('單位:千台')
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
        .append('line')
        .attr('x1', line_length + 84)
        .attr('y1', 5)
        .attr('x2', line_length + 100)
        .attr('y2', 5)
        .attr('stroke-width', 2)
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
        .style('fill', '#F7931E');

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
        .attr('stroke-width', 2)
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
function detail_chart(dataset) {
    // dataset = [
    //     {
    //         'date': '4/1', 
    //         'temp': 12,   //平均氣溫 單位為度c
    //         'humidity': 70,   //濕度 單位為%
    //         'amount': 70   //運轉台數 單位萬台
    //     },
    //     {
    //         'date': '4/4', 
    //         'temp': -5,   
    //         'humidity': 70,   
    //         'amount': 70
    //     },
    //     {
    //         'date': '4/7', 
    //         'temp': 30,   
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/10', 
    //         'temp': 27,  
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/13', 
    //         'temp': 29,   
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/16', 
    //         'temp': 18,   
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/19', 
    //         'temp': 22,  
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/22', 
    //         'temp': 31,   
    //         'humidity': 70,   
    //         'amount': 70  
    //     },
    //     {
    //         'date': '4/25', 
    //         'temp': 11,  
    //         'humidity': 70,   
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/28', 
    //         'temp': 7,   
    //         'humidity': 70,  
    //         'amount': 70   
    //     },
    //     {
    //         'date': '4/30', 
    //         'temp': 38,  
    //         'humidity': 70,   
    //         'amount': 70  
    //     }
    // ];

    let Xdata = dataset.map(function (d) {
        return d.date;
    });

    let svg = d3.select(".detail-chart")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 100 + "%")
        .style("margin-top", 1 + "px");

    let svg_height = $(".detail-chart").height() - 40;
    let svg_width = $(".detail-chart").width() - 30;

    let yAxisScale_temp = d3.scaleLinear()
        .domain([-10, 40])
        .range([svg_height, 30]);

    let yAxisScale_run = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 30]);

    let yAxisScale_humid = d3.scaleLinear()
        .domain([0, 100])
        .range([svg_height, 30]);

    let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([40, svg_width])
        .paddingInner(0.5)
        .paddingOuter(0.2);

    svg.append('g') //y temprature axis
        .call(d3.axisLeft(yAxisScale_temp).tickSize(0).ticks(10, ".0f"))
        .attr('transform', `translate(40, 0)`)
        .style('color', '#FF0040')
        .select('path')
        .style('opacity', '0');

    svg.append('g') //y running axis
        .call(d3.axisLeft(yAxisScale_run).tickSize(0).ticks(10, ".0f"))
        .attr('transform', `translate(23, 0)`)
        .select('path')
        .style('opacity', '0');

    svg.append('g') //y humidity axis
        .call(d3.axisLeft(yAxisScale_humid).tickSize(0).ticks(10, ".0f"))
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
        .style('opacity', '0.3');

    //append humidity bar in bar chart
    svg.selectAll('.rect_humidity')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_humidity')
        .attr('x', (d) => xAxisScale(d.date))
        .attr('y', (d) => yAxisScale_humid(d.humidity))
        .attr('width', xAxisScale.bandwidth() / 2)
        .style('fill', '#3FA9F5')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale_humid(d.humidity));

    //append "運轉台數" bar in bar chart
    svg.selectAll('.rect_run')
        .data(dataset)
        .enter()
        .append('rect')
        .attr('class', 'rect_run')
        .attr('x', (d) => xAxisScale(d.date) + xAxisScale.bandwidth() / 2)
        .attr('y', (d) => yAxisScale_run(d.amount / chartScale))
        .attr('width', xAxisScale.bandwidth() / 2)
        .style('fill', '#F7931E')
        .transition().duration(1000)
        .attr('height', (d) => svg_height - yAxisScale_run(d.amount / chartScale));

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
        .attr('stroke-width', 1.5)
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
        .text('(單位:千台)')
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
        .attr('stroke-width', 2)
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
        .style('fill', '#3FA9F5');

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
        .style('fill', '#F7931E');

    note
        .append('text')
        .attr('x', line_length + 117)
        .attr('y', 10)
        .text('運轉台數')
        .style('font-size', '12px')
        .style('font-weight', 'bold');

}


//設定模式比例畫圖
function mode_chart(dataset) {
    // let dataset = {
    //     "cold_mode": 24,     //冷氣模式的比例 單位為%
    //     "dehumid_mode": 16,     //除溼模式的比例 單位為%
    //     "fan_mode": 14,     //送風模式的比例 單位為%
    //     "warm_mode": 15,    //暖氣模式的比例 單位為%
    //     "auto_mode": 31    //自動模式的比例 單位為%
    // };

    let data = [];
    data.push(dataset.continuous, dataset.auto, dataset.defense, dataset.fan, dataset.dry);

    let svg = d3.select(".mode-chart")
        .append("svg")
        .attr("width", 100 + "%")
        .attr("height", 100 + "%");

    let svg_height = $(".mode-chart > svg").height();
    let svg_width = $(".mode-chart > svg").width();

    let g = svg.append("g")
        .attr('transform', `translate(${svg_width / 2 - 40}, ${svg_height / 2 + 15} )`);

    let color = d3.scaleOrdinal(['#3FA9F5', '#4DE262 ', '#F7931E', '#FF0040', '#F932EF']);

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
        .attr("fill", function (d, i) {
            return color(i);
        })
        .attr("d", arc_path);

    arcs.append("text")
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
        .style('fill', '#3FA9F5');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 32 + note_offset)
        .text('連續除溼')
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
        .text('自動除溼')
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
        .text('防霉抑菌')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 130)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill', '#FF0040');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 130 + note_offset)
        .text('送風模式')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

    note
        .append('rect')
        .attr('x', 0)
        .attr('y', 162)
        .attr('width', 14)
        .attr('height', 14)
        .style('fill', '#F932EF');

    note
        .append('text')
        .attr('x', 20)
        .attr('y', 162 + note_offset)
        .text('衣物乾燥')
        .style('font-size', '16px')
        .style('font-weight', 'bold');

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

//日曆上的月份顯示
function text_on_calendar(month) {
    let svg = d3.select(".calendar > svg");

    d3.select(".calendar svg text").remove();

    if (month == '10月' || month == '11月' || month == '12月') {
        svg
            .append('text')
            .attr('x', 6)
            .attr('y', 44)
            .attr('font-weight', 'bold')
            .text(`${month}`)
            .style('font-size', '24px')
            .style('fill', '#00000');
    }

    else {
        svg
            .append('text')
            .attr('x', 13)
            .attr('y', 44)
            .attr('font-weight', 'bold')
            .text(`${month}`)
            .style('font-size', '24px')
            .style('fill', '#00000');
    }

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

//initial calendar & detail chart
(function () {
    let today = new Date();
    let today_month = today.getMonth() + 1 + '月';

    let month_items = $(".months");

    month_items.each(function () {
        if ($(this).text() == today_month) {
            $('.calendar .months').removeClass('active-month');
            $(this).addClass('active-month');

            let month = $(this).text();
            text_on_calendar(month);
            month = month.substring(0, month.length - 1);
            callAPI(`/dehumidifier/information?ID=0&${month}`, detail_chart); //show 平均溫溼度&運轉台數圖表(頁面正中間)
        }

    });

})();

callAPI('/dehumidifier/basic-information', show_basic_information); //show 基本資料(頁面左上角總登錄數等)
callAPI('/dehumidifier/sum-login', sum_login_chart); //show 累積登錄台數圖表(頁面左中) 待測:測資不正常導致顯示錯誤
callAPI('/dehumidifier/connect-amount', connect_amount_chart); //show 連線台數圖表(頁面左下)
callAPI('/dehumidifier/connect-48h', connect_48h_chart); //show 48h連線數與運轉台數(頁面中上)
callAPI('/dehumidifier/region-mode?ID=0', mode_chart); //show 設定模式比例圓餅圖(頁面中下圓餅圖)
callAPI('/dehumidifier/trouble', show_trouble_report); //show 異常回報資料(頁面最下)
callAPI('/dehumidifier/connect-region-rate', region_connect_svg); //show 台灣圖之連線區域比例(頁面右上台灣圖)
callAPI('/dehumidifier/amount-region-rate', region_home_svg); //show 台灣圖之各區域運轉比例(頁面右中台灣圖)

click_event();
// testAPI("/dehumidifier/information?ID=0");
setInterval(show_time, 1000);//show time per sec