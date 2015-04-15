$(function(){


    var rules = [false, false, false, false, false, false, false, false]


    createParents();


    $(".result-cell").on("click", function(){
        var cell = $(this);
        var rule = cell.parent().attr("id").slice(1);
        rules[rule] = !rules[rule]
        cell.toggleClass("on");
        cell.toggleClass("off");

        console.log(rules)
    });



    $(".parent-cell").on("click", function(){
        var cell = $(this);

        cell.toggleClass("on");
        cell.toggleClass("off");

    });










    function createParents() {
        var mainDiv = $("#main");
        for (var i = 0; i < 100; i++) {
            mainDiv.append($("<div class='parent-cell off'></div>"))
        }
    }




});