$(function() {
    console.log("DOM Loaded");

    let tabs = $("ul").find("li");
    let text = $(".tabs").find("div");
    console.log(tabs, text);

    tabs.on("click", function(){

      text.slideToggle(200);

    });


    

});