if ($(window).width() < 600) {
    document.getElementById("drpp").classList.remove("drps");
    document.getElementById("drpps").classList.remove("drps");
    document.getElementById("drpp2").classList.remove("drps");
    document.getElementById("drpp3").classList.remove("drps");
}

$(".next").click(function() {
    $('html,body').animate({
        scrollTop: $(".sec2").offset().top},
        'slow');
});