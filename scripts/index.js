$(document).ready(function(){
         
    function chart_1(dataset_1){ //-------------------------chart_1---------------------------

        let Xdata_1 = dataset_1.map(function(d){
            return d.month;
        });
        

        let Ydata_1 = dataset_1.map(function(d){
            return d.value;
        });

        let svg_1 = d3.select("#chart_1")
            .append("svg")
            .attr("width",100+"%")
            .attr("height",85+"%")
            .style("margin-top",10+"px");
    
        let svg_height_1 = $("#chart_1 > svg").height() - 50;
        let svg_width_1 = $('#chart_1 > svg').width() - 30;
        

        let yAxisScale_1 = d3.scaleLinear()
            .domain([0,100])
            .range([svg_height_1,20]);
        
        let xAxisScale = d3.scaleBand()
            .domain(Xdata_1)
            .range([50,svg_width_1])
            .padding(0.4);
        
        svg_1.append('g') //y axis
            .call(d3.axisLeft(yAxisScale_1).tickSize(0).ticks(10,".0f" ))
            .attr('transform', `translate(50, 0)`)
            .attr('class', 'axis')
            .select('path')
            .style('opacity', '0.3');
        
        svg_1.append('g') //x axis
            .call(d3.axisBottom(xAxisScale).tickSize(0))
            .attr('transform', `translate(0, ${svg_height_1})`)
            .attr('class', 'axis')
            .select('path')
            .style('opacity', '0.3');

        svg_1.append('g') //網狀格
            .call(d3.axisLeft(yAxisScale_1).tickSize(-svg_width_1 + 50).tickFormat(' '))
            .attr('transform', `translate(50, 0)`)
            .style('opacity','0.3');

        svg_1.selectAll('rect') //append bar in bar chart
            .data(dataset_1)
            .enter()
            .append('rect')
            .attr('x', (d) => xAxisScale(d.month))
            .attr('y', (d) => yAxisScale_1(d.value))
            .attr('width', xAxisScale.bandwidth())
            .style('fill','#6030ff')
            .transition().duration(1000)
            .attr('height', (d) => svg_height_1 - yAxisScale_1(d.value));
        
        svg_1.selectAll('rect') //display value when mouserover on bar
            .data(dataset_1)
            .append('title')
            .text((d) => "連線數：" + d.value +
                           "  連線率：" + d.connect);
        

        let line = d3.line()
            .x(function (d) {
                return xAxisScale(d.month);
            })
            .y(function (d) {
                return yAxisScale_1(d.connect);
            });
        
        let offset_1 = xAxisScale.bandwidth() / 2;

        svg_1.append('path')
            .transition().duration(1000)
            .attr('d', line(dataset_1))
            .attr('stroke', '#F87C00')
            .attr('stroke-width',1)
            .attr('fill', 'none')
            .attr('transform', `translate(${offset_1},0)`);
        
        svg_1.selectAll('circle')
            .data(dataset_1)
            .enter()
            .append('circle')
            .attr('cx', (d) => xAxisScale(d.month))
            .attr('fill', '#F87C00')
            .attr('cy', (d) => yAxisScale_1(d.connect))
            .attr('r', '2.5')
            .style('opacity','0')
            .transition().duration(1000)
            .style('opacity','1')
            .attr('transform', `translate(${offset_1},0)`);

        svg_1.append('text') 
            .attr('x', 10)
            .attr('y', yAxisScale_1(0) + 23)
            .text('單位萬台')
            .style('font-size', '11px');

        let note_1 = svg_1.append('g');
        
        note_1
            .attr('transform', `translate(50, ${svg_height_1+33})`);

        note_1
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill','#6030ff');

        note_1
            .append('text')
            .attr('x', 15)
            .attr('y', 9)
            .text('連線數')
            .style('font-size', '11px');
        
        let line_x = 60; //line initial position

        note_1
            .append('line')
            .attr('x1', line_x)
            .attr('y1', 5)
            .attr('x2', line_x + 20)
            .attr('y2', 5)
            .style('stroke', '#F87C00');

        note_1
            .append('circle')
            .attr('cx', line_x + 10)
            .attr('fill', '#F87C00')
            .attr('cy', 5)
            .attr('r', '2.5');
        
        note_1
            .append('text')
            .attr('x', 87)
            .attr('y', 9)
            .text('連線率')
            .style('font-size', '11px');
    }
    

    function chart_2(dataset){ //-------------------------chart_2---------------------------


        let svg = d3.select("#chart_2")
            .append("svg")
            .attr("width",100+"%")
            .attr("height",85+"%")
            .style("margin-top",10+"px");
        
        let Xdata = dataset.map(function(d){
            return d.year;
        });
        
        let Ydata_sell = dataset.map(function(d){
            return d.sell;
        });

        let Ydata_login = dataset.map(function(d){
            return d.login;
        });

        let Ydata_accept = dataset.map(function(d){
            return d.accept;
        });

        let svg_height = $("#chart_2 > svg").height() - 50;
        let svg_width = $('#chart_2 > svg').width() - 30;
        
        let yAxisScale = d3.scaleLinear()
            .domain([0,100])
            .range([svg_height,20]); 
        
        let xAxisScale = d3.scaleBand()
            .domain(Xdata)
            .range([50,svg_width])
            .padding(0.5);

        let offset = xAxisScale.bandwidth() / 2;

        svg.append('g') //y axis
            .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
            .attr('transform', `translate(50, 0)`)
            .select('path')
            .style('opacity', '0');

        svg.append('g') //x axis
            .call(d3.axisBottom(xAxisScale).tickSize(0))
            .attr('transform', `translate(0, ${svg_height})`)
            .attr('font-size', 12)
            .select('path')
            .style('opacity', '0.3');

        svg.append('g') //網狀格
            .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 50).tickFormat(' '))
            .attr('transform', `translate(50, 0)`)
            .style('opacity','0.3');

        svg.selectAll('.rect_sell')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('class', 'rect_sell')
            .attr('x', (d) => xAxisScale(d.year))
            .attr('y', (d) => yAxisScale(d.sell))
            .attr('width', xAxisScale.bandwidth()/2)
            .style('fill','#128FFB')
            .transition().duration(1000)
            .attr('height', (d) => svg_height - yAxisScale(d.sell));
     

        svg.selectAll('.rect_login')
            .data(dataset)
            .enter()
            .append('rect')
            .attr('class', 'rect_login')
            .attr('x', (d) => xAxisScale(d.year) + xAxisScale.bandwidth()/2)
            .attr('y', (d) => yAxisScale(d.login))
            .attr('width', xAxisScale.bandwidth()/2)
            .style('fill','#F38001')
            .transition().duration(1000)
            .attr('height', (d) => svg_height - yAxisScale(d.login));

        svg.selectAll('.rect_sell') //display value when mouserover on bar
            .data(dataset)
            .append('title')
            .text((d) => "販賣數：" + d.sell +
                           "  登錄數：" + d.login + 
                           "  接續率：" + d.accept);
        
        svg.selectAll('.rect_login') //display value when mouserover on bar
            .data(dataset)
            .append('title')
            .text((d) => "販賣數：" + d.sell +
                           "  登錄數：" + d.login + 
                           "  接續率：" + d.accept);

                           

        let line = d3.line()
            .x(function (d) {
                return xAxisScale(d.year);
            })
            .y(function (d) {
                return yAxisScale(d.accept);
            });
        
        svg.append('path')
            .transition().duration(1000)
            .attr('d', line(dataset))
            .attr('stroke', '#E81703')
            .attr('stroke-width',1.5)
            .attr('fill', 'none')
            .attr('transform', `translate(${offset},0)`);
        
        svg.selectAll('circle')
            .data(dataset)
            .enter()
            .append('circle')
            .attr('cx', (d) => xAxisScale(d.year))
            .attr('fill', '#E81703')
            .attr('cy', (d) => yAxisScale(d.accept))
            .attr('r', '2.5')
            .style('opacity','0')
            .transition().duration(1000)
            .style('opacity','1')
            .attr('transform', `translate(${offset},0)`);

        svg.append('text') 
            .attr('x', 10)
            .attr('y', yAxisScale(0) + 23)
            .text('單位萬台')
            .style('font-size', '11px');

        let note = svg.append('g');
        
        note
            .attr('transform', `translate(50, ${svg_height+33})`);

        note
            .append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill','#128FFB');

        note
            .append('text')
            .attr('x', 15)
            .attr('y', 9)
            .text('販賣數')
            .style('font-size', '11px');
        
        note
            .append('rect')
            .attr('x', 60)
            .attr('y', 0)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill','#F38001');

        note
            .append('text')
            .attr('x', 75)
            .attr('y', 9)
            .text('登錄數')
            .style('font-size', '11px');

        let line_x = 118; //line initial position

        note
            .append('line')
            .attr('x1', line_x)
            .attr('y1', 5)
            .attr('x2', line_x + 20)
            .attr('y2', 5)
            .style('stroke', '#E81703');

        note
            .append('circle')
            .attr('cx', line_x + 10)
            .attr('fill', '#E81703')
            .attr('cy', 5)
            .attr('r', '2.5');
        
        note
            .append('text')
            .attr('x', line_x + 27)
            .attr('y', 9)
            .text('接續率')
            .style('font-size', '11px');
        
    }
    
    function chart_3(){

        let dataset = [{hour:'3', connect:70},
            {hour:'6', connect:23},
            {hour:'9', connect:30},
            {hour:'12', connect:93},
            {hour:'15', connect:55},
            {hour:'18', connect:67},
            {hour:'21', connect:15},
            {hour:'24', connect:87},
        ];

        let Xdata = dataset.map(function(d){
            return d.hour;
        });
        
        let Ydata = dataset.map(function(d){
            return d.connect;
        });

        let svg = d3.select("#chart_3")
            .append("svg")
            .attr("width",100+"%")
            .attr("height",87+"%")
            .style("margin-top",5+"px");

        let svg_height = $("#chart_3 > svg").height() - 15;
        let svg_width = $("#chart_3 > svg").width() - 40;

        let yAxisScale = d3.scaleLinear()
            .domain([0,100])
            .range([svg_height,20]); 
        
        let xAxisScale = d3.scaleBand()
        .domain(Xdata)
        .range([40,svg_width])
        .padding(0.5);

        svg.append('g') //y axis
            .call(d3.axisLeft(yAxisScale).tickSize(0).ticks(10,".0f" ))
            .attr('transform', `translate(40, 0)`)
            .select('path')
            .style('opacity', '0');

        svg.append('g') //x axis
            .call(d3.axisBottom(xAxisScale).tickSize(0))
            .attr('transform', `translate(0, ${svg_height})`)
            .select('path')
            .style('opacity', '0.3');

        svg.append('g') //網狀格
            .call(d3.axisLeft(yAxisScale).tickSize(-svg_width + 40).tickFormat(' '))
            .attr('transform', `translate(40, 0)`)
            .style('opacity','0.3');

        let line = d3.line()
        .x(function (d) {
            return xAxisScale(d.hour);
        })
        .y(function (d) {
            return yAxisScale(d.connect);
        });

        let offset = xAxisScale.bandwidth() / 2;

        svg.append('path')
            .transition().duration(1000)
            .attr('d', line(dataset))
            .attr('stroke', '#5656D6')
            .attr('stroke-width',1.5)
            .attr('fill', 'none')
            .attr('transform', `translate(${offset},0)`);

        svg.append('text') 
            .attr('x', 0)
            .attr('y', yAxisScale(100) - 10)
            .text('連線數(萬台)')
            .style('font-size', '11px');

        svg.append('text') 
            .attr('x', xAxisScale(24) + 20)
            .attr('y', yAxisScale(0) + 5)
            .text('時間(H)')
            .style('font-size', '11px');
            
    }

    function taiwan_svg(){
        let dataset = [{
            north : 50,
            west : 30,
            east : 8,
            south : 10,
            island : 2
        }];

        let data = dataset[0];

        let svg = d3.select("#taiwan > svg");
        let height = 841.9; //svg viewbox
        let width = 750; //svg viewbox

        let xScale = d3.scaleLinear()
            .domain([0,100])
            .range([0,width]); 

        let yScale = d3.scaleLinear()
            .domain([0,100])
            .range([0,height]);
        
        let circleScale = d3.scaleLinear()
            .domain([0,100])
            .range([15,50]);

        // north circle
        svg
            .append('circle')
            .attr('cx', xScale(40))
            .attr('fill', '#FF0040')
            .attr('cy', yScale(9))
            .attr('r', circleScale(data.north));

        svg
            .append('text')
            .attr('x', xScale(47))
            .attr('y', yScale(11))
            .attr('font-weight', 'bold')
            .text(`${data.north}%`)
            .style('font-size', '50px')
            .style('fill', '#FF0040');
        
        // west circle
        svg
            .append('circle')
            .attr('cx', xScale(26))
            .attr('fill', '#3FA9F5')
            .attr('cy', yScale(27))
            .attr('r', circleScale(data.west));

        svg
            .append('text')
            .attr('x', xScale(32))
            .attr('y', yScale(29))
            .attr('font-weight', 'bold')
            .text(`${data.west}%`)
            .style('font-size', '50px')
            .style('fill', '#3FA9F5');

        // south circle
        svg
            .append('circle')
            .attr('cx', xScale(18))
            .attr('fill', '#F7931E')
            .attr('cy', yScale(83))
            .attr('r', circleScale(data.south));

        svg
            .append('text')
            .attr('x', xScale(24))
            .attr('y', yScale(85))
            .attr('font-weight', 'bold')
            .text(`${data.south}%`)
            .style('font-size', '50px')
            .style('fill', '#F7931E');

        // east circle
        svg
            .append('circle')
            .attr('cx', xScale(86))
            .attr('fill', '#4DE262')
            .attr('cy', yScale(50))
            .attr('r', circleScale(data.east));

        svg
            .append('text')
            .attr('x', xScale(91))
            .attr('y', yScale(52))
            .attr('font-weight', 'bold')
            .text(`${data.east}%`)
            .style('font-size', '50px')
            .style('fill', '#4DE262');

        // island circle
        svg
            .append('circle')
            .attr('cx', xScale(2))
            .attr('fill', '#F932EF')
            .attr('cy', yScale(7))
            .attr('r', circleScale(data.island));

        svg
            .append('text')
            .attr('x', xScale(7))
            .attr('y', yScale(9))
            .attr('font-weight', 'bold')
            .text(`${data.island}%`)
            .style('font-size', '50px')
            .style('fill', '#F932EF');


    }

    function click_event(){
        $("#chart-1-1").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   
                $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{month:'1月', value:getRandom(), connect:getRandom()},
                {month:'2月', value:getRandom(), connect:getRandom()},
                {month:'3月', value:getRandom(), connect:getRandom()},
                {month:'4月', value:getRandom(), connect:getRandom()},
                {month:'5月', value:getRandom(), connect:getRandom()},
                {month:'6月', value:getRandom(), connect:getRandom()},
                {month:'7月', value:getRandom(), connect:getRandom()},
                {month:'8月', value:getRandom(), connect:getRandom()},
                {month:'9月', value:getRandom(), connect:getRandom()},
                {month:'10月', value:getRandom(), connect:getRandom()},
                {month:'11月', value:getRandom(), connect:getRandom()},
                {month:'12月', value:getRandom(), connect:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_1 > svg').remove();
                chart_1(data);
            }
            
        });

        $("#chart-1-2").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   
                $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{month:'1月', value:getRandom(), connect:getRandom()},
                {month:'2月', value:getRandom(), connect:getRandom()},
                {month:'3月', value:getRandom(), connect:getRandom()},
                {month:'4月', value:getRandom(), connect:getRandom()},
                {month:'5月', value:getRandom(), connect:getRandom()},
                {month:'6月', value:getRandom(), connect:getRandom()},
                {month:'7月', value:getRandom(), connect:getRandom()},
                {month:'8月', value:getRandom(), connect:getRandom()},
                {month:'9月', value:getRandom(), connect:getRandom()},
                {month:'10月', value:getRandom(), connect:getRandom()},
                {month:'11月', value:getRandom(), connect:getRandom()},
                {month:'12月', value:getRandom(), connect:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_1 > svg').remove();
                chart_1(data);
            }
        });

        $("#chart-1-3").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   
                $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{month:'1月', value:getRandom(), connect:getRandom()},
                {month:'2月', value:getRandom(), connect:getRandom()},
                {month:'3月', value:getRandom(), connect:getRandom()},
                {month:'4月', value:getRandom(), connect:getRandom()},
                {month:'5月', value:getRandom(), connect:getRandom()},
                {month:'6月', value:getRandom(), connect:getRandom()},
                {month:'7月', value:getRandom(), connect:getRandom()},
                {month:'8月', value:getRandom(), connect:getRandom()},
                {month:'9月', value:getRandom(), connect:getRandom()},
                {month:'10月', value:getRandom(), connect:getRandom()},
                {month:'11月', value:getRandom(), connect:getRandom()},
                {month:'12月', value:getRandom(), connect:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_1 > svg').remove();
                chart_1(data);
            }
        });

        $("#chart-1-4").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   
                $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{month:'1月', value:getRandom(), connect:getRandom()},
                {month:'2月', value:getRandom(), connect:getRandom()},
                {month:'3月', value:getRandom(), connect:getRandom()},
                {month:'4月', value:getRandom(), connect:getRandom()},
                {month:'5月', value:getRandom(), connect:getRandom()},
                {month:'6月', value:getRandom(), connect:getRandom()},
                {month:'7月', value:getRandom(), connect:getRandom()},
                {month:'8月', value:getRandom(), connect:getRandom()},
                {month:'9月', value:getRandom(), connect:getRandom()},
                {month:'10月', value:getRandom(), connect:getRandom()},
                {month:'11月', value:getRandom(), connect:getRandom()},
                {month:'12月', value:getRandom(), connect:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_1 > svg').remove();
                chart_1(data);
            }
        });

        $("#chart-1-5").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   
                $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{month:'1月', value:getRandom(), connect:getRandom()},
                {month:'2月', value:getRandom(), connect:getRandom()},
                {month:'3月', value:getRandom(), connect:getRandom()},
                {month:'4月', value:getRandom(), connect:getRandom()},
                {month:'5月', value:getRandom(), connect:getRandom()},
                {month:'6月', value:getRandom(), connect:getRandom()},
                {month:'7月', value:getRandom(), connect:getRandom()},
                {month:'8月', value:getRandom(), connect:getRandom()},
                {month:'9月', value:getRandom(), connect:getRandom()},
                {month:'10月', value:getRandom(), connect:getRandom()},
                {month:'11月', value:getRandom(), connect:getRandom()},
                {month:'12月', value:getRandom(), connect:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_1 > svg').remove();
                chart_1(data);
            }
        });

        $("#chart-2-1").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   

                $('.item-5 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-5 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{year:'2018年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2019年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2020年', sell:getRandom(), login:getRandom(), accept:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_2 > svg').remove();
                chart_2(data);
            }
        });

        $("#chart-2-2").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   

                $('.item-5 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-5 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{year:'2018年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2019年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2020年', sell:getRandom(), login:getRandom(), accept:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_2 > svg').remove();
                chart_2(data);
            }
        });

        $("#chart-2-3").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   

                $('.item-5 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-5 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{year:'2018年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2019年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2020年', sell:getRandom(), login:getRandom(), accept:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_2 > svg').remove();
                chart_2(data);
            }
        });

        $("#chart-2-4").click(function(){
            if($(this).hasClass('button-pressed'))
            {

            }

            else
            {   

                $('.item-5 > div > div:nth-child(1) > div').removeClass('button-pressed');
                $('.item-5 > div > div:nth-child(1) > div').addClass('button-unpressed');

                let data = [{year:'2018年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2019年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                    {year:'2020年', sell:getRandom(), login:getRandom(), accept:getRandom()}
                ];
                $(this).addClass('button-pressed');
                $(this).removeClass('button-unpressed');
                $('#chart_2 > svg').remove();
                chart_2(data);
            }
        });

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
    async function userAction(){
        var url = 'http://140.118.121.111:8000/test';
        var data = [
                        { 
                        "ID" : '0'
                        }    
                   ];
        const response = await fetch(url,  {
        method: 'POST', 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        }});

        const result = await response.json();
        console.log(result);
    }

    //generate random data function for test
    function getRandom(){ 
        return Math.floor(Math.random()*99)+1;
    };

    //initial chart_2
    (function(){
        if($("#chart-2-1").hasClass('button-pressed'))
        {

        }

        else
        {   

            $('.item-5 > div > div:nth-child(1) > div').removeClass('button-pressed');
            $('.item-5 > div > div:nth-child(1) > div').addClass('button-unpressed');

            let data = [{year:'2018年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                {year:'2019年', sell:getRandom(), login:getRandom(), accept:getRandom()},
                {year:'2020年', sell:getRandom(), login:getRandom(), accept:getRandom()}
            ];
            $("#chart-2-1").addClass('button-pressed');
            $("#chart-2-1").removeClass('button-unpressed');
            $('#chart_2 > svg').remove();
            chart_2(data);
        }
    })();

    //initial chart_1
    (function(){
        if($("#chart-1-1").hasClass('button-pressed'))
        {

        }

        else
        {   
            $('.item-3 > div > div:nth-child(1) > div').removeClass('button-pressed');
            $('.item-3 > div > div:nth-child(1) > div').addClass('button-unpressed');

            let data = [{month:'1月', value:getRandom(), connect:getRandom()},
            {month:'2月', value:getRandom(), connect:getRandom()},
            {month:'3月', value:getRandom(), connect:getRandom()},
            {month:'4月', value:getRandom(), connect:getRandom()},
            {month:'5月', value:getRandom(), connect:getRandom()},
            {month:'6月', value:getRandom(), connect:getRandom()},
            {month:'7月', value:getRandom(), connect:getRandom()},
            {month:'8月', value:getRandom(), connect:getRandom()},
            {month:'9月', value:getRandom(), connect:getRandom()},
            {month:'10月', value:getRandom(), connect:getRandom()},
            {month:'11月', value:getRandom(), connect:getRandom()},
            {month:'12月', value:getRandom(), connect:getRandom()}
            ];
            $("#chart-1-1").addClass('button-pressed');
            $("#chart-1-1").removeClass('button-unpressed');
            $('#chart_1 > svg').remove();
            chart_1(data);
        }
        
    })();

    // userAction(); //API test
    

    click_event();
    chart_3(); //draw chart_3
    taiwan_svg(); //draw taiwan
    setInterval(show_time, 1000);//show time per sec

});