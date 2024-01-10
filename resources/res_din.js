function setMeal(curr_meal) {
    //reset button style
    $("#week-bar button").addClass("inactive");
    $("#week-bar button").removeClass("active");
    //set active button to active style
    $("#week-bar #" + curr_meal).addClass("active");

    //hide other meals
    $(".meal-list").hide();
    $("." + curr_meal).show();
}

$(document).ready(function() {

    var curr_meal = 1;

    setMeal(curr_meal);

    $("#week-bar button").click(function() {
        curr_meal = (this).id;

        setMeal(curr_meal);

    });
});