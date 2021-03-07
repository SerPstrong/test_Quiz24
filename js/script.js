
window.randomize = function () {
    $('.ko-progress-circle').attr('data-progress', 100);
}
setTimeout(window.randomize, 100);
$('.ko-progress-circle').click(window.randomize);

