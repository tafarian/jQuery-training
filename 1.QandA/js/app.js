$(function() {
    console.log("DOM Loaded");

    var questions = $("h1");
    var answers = $("p");
    console.log(questions, answers);

    answers.hide();

    questions.on("click", function(){
       console.log("Clicked question");
        var next = $(this).next();
        next.slideToggle(200);
    });

});