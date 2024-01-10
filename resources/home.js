$(document).ready(function() {

    //GET DATE
    var curDay = function(sp) {
        today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; // bc January is 0
        var yyyy = today.getFullYear();
        
        if (dd < 10) dd ='0' + dd;
        if (mm < 10) mm = '0' + mm;
        return (mm + sp + dd + sp + yyyy);
    };
    // console.log(curDay('-'));

    // GET DAY OF THE WEEK (Sun: 0 - Sat: 6)
    today = new Date();
    var dow = today.getDay();
    // console.log(dow);

    // GET TIME
    let currentDate = new Date();
    var hh = currentDate.getHours();
    var mm = currentDate.getMinutes();
    var ss = currentDate.getSeconds();
    let time = hh + ":" + mm + ":" + ss;
    // console.log(time);

    //##########################//
    //      CAMPUS DINING       //
    //##########################//

    // Restaurants & Cafes
    $.ajax({
        type: "GET",
        url: "./resources/dining.json",
        dataType: "json",
        success: function(data, status) {
            $.each(data.restaurants, function(i, cafe) {
                var output = "";
                output = "<li><strong>" + cafe.name + "</strong> ";

                //OPEN or CLOSED
                if(hh > cafe.open[dow] && hh < cafe.close[dow]) {
                    output += "<strong class='open'>OPEN</strong>"; 
                }
                else {
                    output += "<strong class='closed'>CLOSED</strong>";
                }

                output += "</br><em>" + cafe.address + "</em></br></br></li>";
                
                $('#cafe-list').append(output);
            });
        }, error: function(msg) {
            // error message
      	    alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    //Resident Dining
    $.ajax({
        type: "GET",
        url: "./resources/dining.json",
        dataType: "json",
        success: function(data, status) {
            $.each(data.dining, function(i, cafe) {
                var output = "";
                output = "<li><strong>" + cafe.name + "</strong> ";

                //OPEN or CLOSED
                if((hh > cafe.break_open[dow] && hh < cafe.break_close[dow]) 
                || (hh > cafe.dinner_open[dow] && hh < cafe.dinner_close[dow])) {
                    output += "<strong class='open'>OPEN</strong>"; 
                }
                else {
                    output += "<strong class='closed'>CLOSED</strong>";
                }

                output += "</br><em>" + cafe.address + "</em></br></br></li>";
                
                $('#resdin-list').append(output);
            });
        }, error: function(msg) {
            // error message
      	    alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });

    //Student Union
    $.ajax({
        type: "GET",
        url: "./resources/dining.json",
        dataType: "json",
        success: function(data, status) {
            $.each(data.union, function(i, cafe) {
                var output = "";
                output = "<li><strong>" + cafe.name + "</strong> ";

                //OPEN or CLOSED
                if(hh > cafe.open[dow] && hh < cafe.close[dow]) {
                    output += "<strong class='open'>OPEN</strong>"; 
                }
                else {
                    output += "<strong class='closed'>CLOSED</strong>";
                }

                output += "</br><em>" + cafe.address + "</em></br></br></li>";
                
                $('#union-list').append(output);
            });
        }, error: function(msg) {
            // error message
      	    alert("There was a problem: " + msg.status + " " + msg.statusText);
        }
    });


    //##########################//
    //       BOX HEIGHTS        //
    //##########################//
    // var cafe_height = $("#cafe.column").outerHeight();
    // console.log("cafe_height = " + cafe_height);
    // var resdin_height = $("#resdin").height();
    // console.log("resdin_height = " + resdin_height);
    // var union_height = $("#union").height();
    // console.log("union_height = " + union_height);
});