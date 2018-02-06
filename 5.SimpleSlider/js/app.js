$(function() {
    console.log("DOM Loaded");

    let next = $("#nextPicture");
    let prev = $("#prevPicture");
    let pictures = $("li");
    let pictureWidth = 400;

    pictures.parent().css('width', (pictures.length * pictureWidth));

    next.on("click", function() {

        $('.slider ul').animate({
            left: - pictureWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    })

    prev.on("click", function() {

        $('.slider ul').animate({
            left: + pictureWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    })


});