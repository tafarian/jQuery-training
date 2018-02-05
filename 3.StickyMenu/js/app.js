$(function() {
    console.log("DOM Loaded");

    let nav = $("nav");
    let menu = $(".menu");
    let menuPosition = menu.css("top", "");

    console.log(nav, menu, menuPosition)

    window.on("scroll", function() {
       console.log("scroll")
    });


});