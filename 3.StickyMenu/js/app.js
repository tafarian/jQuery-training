$(function() {
    console.log("DOM Loaded");

    let nav = $("nav");
    let menu = $(".menu");
    let menuPosition = menu.offset().top;

    console.log(nav, menu, menuPosition);

    $(window).on("scroll", function() {
        if ( $(this).scrollTop() >= menuPosition ) {
            menu.addClass("sticky")
        } else {
            menu.removeClass("sticky")
        }
    });

    $(window).on("resize", function() {
        if ( menu.hasClass("sticky") ) {
            return menuPosition = menu.offset().top;
        } else {
            return menuPosition = nav.offset().top;
        }
    });


});