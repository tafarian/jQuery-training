$(function() {
    console.log("DOM Loaded");

    let questions = $("h1");
    let answers = $("p");
    console.log(questions, answers);

    answers.hide();

    questions.on("click", function(){
       console.log("Clicked question");
        let next = $(this).next();
        next.slideToggle(200);
    });

});