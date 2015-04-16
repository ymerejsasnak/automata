$(function(){


    var rules = {"111": 0,
                 "110": 0,
                 "101": 0,
                 "011": 0,
                 "100": 0,
                 "010": 0,
                 "001": 0,
                 "000": 0}

    var currentRow = createParents();

    


    $(".result-cell").on("click", function(){
        var cell = $(this);

        var rule = cell.parent().attr("id").slice(4); //get rule number from end of element's id
        rules[rule] = (rules[rule] + 1) % 2  //toggle between 0 and 1

        cell.toggleClass("on");
        cell.toggleClass("off");
    });


    $(".parent-cell").on("click", function(){
        var cell = $(this);

        var cellNum = parseInt(cell.attr("id").slice(4)); //get cell number from end of element's id
        currentRow[cellNum] = (currentRow[cellNum] + 1) % 2  //toggle between 0 and 1
        
        cell.toggleClass("on");
        cell.toggleClass("off");
    });


    $("#run").on("click", function(){
        for (var i = 0; i < 50; i++){
            currentRow = createChildren(currentRow);
        }
    });






    function createParents() {
        var mainDiv = $("#main");
        var parents = []
        for (var i = 0; i < 100; i++) {
            parents[i] = 0;
            mainDiv.append($("<div class='parent-cell off' id='cell" + i + "'></div>"))
        }
        return parents;
    }

    function createChildren(fromRow) {
        var mainDiv = $("#main");
        var neighborhood = "";
        var nextRow = [];

        mainDiv.append($("<div class='spacer'></div>")); //clears floats to start new row

        for (var i = 0; i < 100; i++) { 
            //(rethink this, must be a better way to do it w/ mod or something)
            if (i === 0) {
                neighborhood = fromRow[99].toString() + fromRow[0].toString() + fromRow[1].toString();
            }
            else if (i === 99) {
                neighborhood = fromRow[98].toString() + fromRow[99].toString() + fromRow[0].toString();
            }
            else {
                neighborhood = fromRow[i - 1].toString() + fromRow[i].toString() + fromRow[i + 1].toString();
            }
            
            var state = rules[neighborhood];

            nextRow.push(state);
            if (state) {
                mainDiv.append($("<div class='child-cell on' id='cell" + i + "'></div>"));
            }
            else {
                mainDiv.append($("<div class='child-cell off' id='cell" + i + "'></div>"));
            }

        }
        
        return nextRow;
    }



});