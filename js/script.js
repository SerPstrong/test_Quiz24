$(function () {
    $("#tel").mask("+7 (999) 999-99-99");
});

setTimeout(function () {

    var time = 100;
    var initialOffset = '440';
    var i = 1

    $('.circle_animation').css('stroke-dashoffset', initialOffset - (1 * (initialOffset / time)));

    var interval = setInterval(function () {
        $('.vl').text(i + "%");
        if (i === time) {
            clearInterval(interval);
            return;
        }
        $('.circle_animation').css('stroke-dashoffset', initialOffset - ((i + 1) * (initialOffset / time)));
        i++;
    }, 30);

}, 0)

let value = document.querySelector(".vl");

function val() {
    return value.innerHTML = "<img src=\"img/tick.png\" alt=\"tick\">";
}

setTimeout(val, 4000);