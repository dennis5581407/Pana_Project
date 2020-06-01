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

click_event();
setInterval(show_time, 1000);//show time per sec

new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        date: new Date().toISOString().substr(0, 10),
        menu: false
    }
})