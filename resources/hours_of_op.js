$(document).ready(function() {

    // GET DAY OF THE WEEK (Sun: 0 - Sat: 6)
    today = new Date();
    var dow = today.getDay();
    // console.log(dow);

    loadInfo();

    //reset button style
    $("#week-bar button").addClass("inactive");
    $("#week-bar button").removeClass("active");
    //set active button to active style
    $("#week-bar #" + dow).addClass("active");

    $("#week-bar button").click(function() {
        dow = (this).id;
        // console.log(dow);

        //reset button style
        $("#week-bar button").addClass("inactive");
        $("#week-bar button").removeClass("active");
        //set active button to active style
        $("#week-bar #" + dow).addClass("active");

        loadInfo();

    });

    function loadInfo() {
        // Restaurants & Cafes
        $.ajax({
            type: "GET",
            url: "./resources/dining.json",
            dataType: "json",
            success: function(data, status) {
                // clear old info
                $('#cafe-list').html("");

                $.each(data.restaurants, function(i, cafe) {
                    var output = "";
                    output += "<li> <strong>" + cafe.name + "</strong> </br>";
                    //Check if OPEN today
                    if(cafe.open[dow] == 0) {
                        output += "CLOSED";
                    } else {
                        var open_time = (cafe.open[dow] % 12) - (cafe.open[dow] % 1);
                        if(open_time == 0) {open_time = 12;} //if 12 PM
                        var close_time = cafe.close[dow] % 12 - (cafe.close[dow] % 1);
                        if(close_time == 0) {close_time = 12;} //if 12 PM
                        // AM or PM
                        var o_ampm = "AM";
                        if(cafe.open[dow] / 12 >= 1) {o_ampm = "PM";}
                        var c_ampm = "AM";
                        if(cafe.close[dow] / 12 >= 1) {c_ampm = "PM";}

                        var open_min = "00";
                        var close_min = "00";
                        var c = cafe.open[dow] % 1;
                        // console.log(cafe.open[dow] + " " + c);
                        if(cafe.open[dow] % 1 > 0) {
                            open_min = 60 * (cafe.open[dow] % 1);
                        }
                        if(cafe.close[dow] % 1 > 0) {
                            close_min = 60 * (cafe.close[dow] % 1);
                        }

                        output += open_time + ":" + open_min + " " + o_ampm;
                        output += " - " + close_time + ":" + close_min + " " + c_ampm;
                    }
                    output += "</br></br></li>";
                    
                    $('#cafe-list').append(output);
                });
            }, error: function(msg) {
                // error message
                alert("There was a problem: " + msg.status + " " + msg.statusText);
            }
        });

        // Student Union
        $.ajax({
            type: "GET",
            url: "./resources/dining.json",
            dataType: "json",
            success: function(data, status) {
                // clear old info
                $('#union-list').html("");

                $.each(data.union, function(i, cafe) {
                    var output = "";
                    output += "<li> <strong>" + cafe.name + "</strong> </br>";
                    //Check if OPEN today
                    if(cafe.open[dow] == 0) {
                        output += "CLOSED";
                    } else {
                        var open_time = (cafe.open[dow] % 12) - (cafe.open[dow] % 1);
                        if(open_time == 0) {open_time = 12;} //if 12 PM
                        var close_time = cafe.close[dow] % 12 - (cafe.close[dow] % 1);
                        if(close_time == 0) {close_time = 12;} //if 12 PM
                        // AM or PM
                        var o_ampm = "AM";
                        if(cafe.open[dow] / 12 >= 1) {o_ampm = "PM";}
                        var c_ampm = "AM";
                        if(cafe.close[dow] / 12 >= 1) {c_ampm = "PM";}

                        var open_min = "00";
                        var close_min = "00";
                        var c = cafe.open[dow] % 1;

                        if(cafe.open[dow] % 1 > 0) {
                            open_min = 60 * (cafe.open[dow] % 1);
                        }
                        if(cafe.close[dow] % 1 > 0) {
                            close_min = 60 * (cafe.close[dow] % 1);
                        }

                        output += open_time + ":" + open_min + " " + o_ampm;
                        output += " - " + close_time + ":" + close_min + " " + c_ampm;
                    }
                    output += "</br></br></li>";
                    
                    $('#union-list').append(output);
                });
            }, error: function(msg) {
                // error message
                alert("There was a problem: " + msg.status + " " + msg.statusText);
            }
        });

        // Resident Dining
        $.ajax({
            type: "GET",
            url: "./resources/dining.json",
            dataType: "json",
            success: function(data, status) {
                // clear old info
                $('#resdin-list').html("");
                
                $.each(data.dining, function(i, cafe) {
                    var output = "";
                    output += "<li> <strong>" + cafe.name + "</strong> </br>";

                    // "BREAKFAST" HOURS
                    var break_open_time = (cafe.break_open[dow] % 12) - (cafe.break_open[dow] % 1);
                    if(break_open_time == 0) {break_open_time = 12;} //if 12 PM
                    var break_close_time = cafe.break_close[dow] % 12 - (cafe.break_close[dow] % 1);
                    if(break_close_time == 0) {break_close_time = 12;} //if 12 PM
                    // AM or PM
                    var o_ampm = "AM";
                    if(cafe.break_open[dow] / 12 >= 1) {o_ampm = "PM";}
                    var c_ampm = "AM";
                    if(cafe.break_close[dow] / 12 >= 1) {c_ampm = "PM";}

                    var break_open_min = "00";
                    var break_close_min = "00";
                    var c = cafe.break_open[dow] % 1;

                    if(cafe.break_open[dow] % 1 > 0) {
                        break_open_min = 60 * (cafe.break_open[dow] % 1);
                    }
                    if(cafe.break_close[dow] % 1 > 0) {
                        break_close_min = 60 * (cafe.break_close[dow] % 1);
                    }

                    output += break_open_time + ":" + break_open_min + " " + o_ampm;
                    output += " - " + break_close_time + ":" + break_close_min + " " + c_ampm;

                    // DINNER HOURS
                    if(cafe.dinner_open[dow] != 0) {
                        var dinner_open_time = (cafe.dinner_open[dow] % 12) - (cafe.dinner_open[dow] % 1);
                        if(dinner_open_time == 0) {dinner_open_time = 12;} //if 12 PM
                        var dinner_close_time = cafe.dinner_close[dow] % 12 - (cafe.dinner_close[dow] % 1);
                        if(dinner_close_time == 0) {dinner_close_time = 12;} //if 12 PM
                        // AM or PM
                        var o_ampm = "AM";
                        if(cafe.dinner_open[dow] / 12 >= 1) {o_ampm = "PM";}
                        var c_ampm = "AM";
                        if(cafe.dinner_close[dow] / 12 >= 1) {c_ampm = "PM";}

                        var dinner_open_min = "00";
                        var dinner_close_min = "00";
                        var c = cafe.dinner_open[dow] % 1;

                        if(cafe.dinner_open[dow] % 1 > 0) {
                            dinner_open_min = 60 * (cafe.dinner_open[dow] % 1);
                        }
                        if(cafe.dinner_close[dow] % 1 > 0) {
                            dinner_close_min = 60 * (cafe.dinner_close[dow] % 1);
                        }

                        output += "</br>" + dinner_open_time + ":" + dinner_open_min + " " + o_ampm;
                        output += " - " + dinner_close_time + ":" + dinner_close_min + " " + c_ampm;
                    }

                    output += "</br></br></li>";
                    
                    $('#resdin-list').append(output);
                });
            }, error: function(msg) {
                // error message
                alert("There was a problem: " + msg.status + " " + msg.statusText);
            }
        });

    }

    

    

});