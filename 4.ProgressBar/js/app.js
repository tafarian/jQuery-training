$(function() {
    console.log("DOM Loaded");

    let buttons = $("button");
    let progressBar = $(".progress-bar");
    console.log(buttons, progressBar);

    buttons.on("click", function() {
        let width = $(this).data("width");
        let number = $(this).data("number");
        let color = $(this).data("color");
        console.log(width, number, color);

        if ( number === 1 ) {
            let bar = $("#bar1").find("span");
            bar.toggleClass(color);
            bar.css({width: width});
        } else if ( number === 2 ) {
            let bar = $("#bar2").find("span");
            bar.toggleClass(color);
            bar.css({width: width});
        } else if ( number === 3 ) {
            let bar = $("#bar3").find("span");
            bar.toggleClass(color);
            bar.css({width: width});
        }

    });

});