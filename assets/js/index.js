$("i").mouseenter(function () {
    $(this).attr('id', 'da-new');
});

$("i").mouseout(function () {
    $(this).attr("id", "");
});

$(".project-screenshot").mouseenter(function () {
    $(this).css({ "border-color": "rgb(90, 4, 189)" })
});

$(".project-screenshot").mouseout(function () {
    $(this).css({ "border-color": "rgb(114, 3, 189)" })
});