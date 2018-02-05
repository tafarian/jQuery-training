$(function() {
    console.log("DOM Loaded");

    let tabs = $("ul").find("li");
    let text = $(".tabs").find("div");
    console.log(tabs, text);

    tabs.on('click', function (event) {

        if ($(this).html() === "Tab 1") {
            text.eq(0).slideToggle(200);
        } else if ($(this).html() === "Tab 2") {
            text.eq(1).slideToggle(200);
        } else if ($(this).html() === "Tab 3") {
            text.eq(2).slideToggle(200);
        } else if ($(this).html() === "Tab 4") {
            text.eq(3).slideToggle(200);
        }

    });



});