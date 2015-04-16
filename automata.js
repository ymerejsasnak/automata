$(function(){


    var rules = [0, 0, 0, 0, 0, 0, 0, 0];
    var currentRow = [];
    

    createParents();







    $(".result-cell").on("click", function(){
        var cell = $(this);

        var rule = cell.parent().attr("id").slice(4); //get rule number from the element's id
        rules[rule] = (rules[rule] + 1) % 2  //toggle between 0 and 1

        cell.toggleClass("on");
        cell.toggleClass("off");
    });


    $(".parent-cell").on("click", function(){
        var cell = $(this);

        var cellNum = cell.attr("id").slice(4); //get rule number from the element's id
        currentRow[cellNum] = (currentRow[cellNum] + 1) % 2  //toggle between 0 and 1
        
        cell.toggleClass("on");
        cell.toggleClass("off");
    });










    function createParents() {
        var mainDiv = $("#main");
        for (var i = 0; i < 100; i++) {
            currentRow[i] = 0;
            mainDiv.append($("<div class='parent-cell off' id='cell" + i + "'></div>"))
        }
    }

    function createChildren() {


    }



});