<?php
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
  include('includes/head.inc.php'); 
  include('includes/menubody.inc.php'); 
?>

<?php
  // 
  // ACCESS DATABASE
  // 
  $dbOk = false;

  /* Create a new database connection object, passing in the host, username,
     password, and database to use. The "@" suppresses errors. */
  @ $db = new mysqli('localhost', 'root', 'rpi235murrad6', 'tpr');

  // check if connects to database
  if ($db->connect_error) {
    echo '<div class="messages">Could not connect to the database. Error: ';
    echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
  } else {
    $dbOk = true;
  }
?>

<!DOCTYPE html>
<html>
<head>
    <title> Resident Dining </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel = "stylesheet" href = "style/style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
   <script type="text/javascript" src="./resources/res_din.js"></script>
</head>
<body>

  <div class="header">
    <img src="./style/RPI-logo.png" alt="RPI logo">
    <h1>Rensselaer Dining</h1>
 </div>
    
  <div class="topnav">
    <a href="index.html">Home</a>
    <a href="hours_of_operation.html">Hours of Operations</a> 
    <a href="resident_dining.php" class="active">Resident Dining</a>
  </div>


  <h3>Resident Dining</h3>

  <form action="" id="date-form">
    <input type="date" id="date" name="date">
    <input type="submit" id="submit">
  </form>

  <div id="week-bar">
    <button type="button" id="1">Breakfast</button>
    <button type="button" id="2">Lunch</button>
    <button type="button" id="3">Dinner</button>
    <button type="button" id="4">Late Night</button>>
  </div>
            
  <div class="row-4">
    <div class="column">
      <h2>BARH</h2>
      <?php
        if ($dbOk) {
            // $result = $db->query('select * from date_04_24_2023');
            //BREAKFAST
            $result = $db->query('select * from date_04_24_2023 where dining_hall="BARH" and meal="breakfast"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 1">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LUNCH
            $result = $db->query('select * from date_04_24_2023 where dining_hall="BARH" and meal="lunch"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 2">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //DINNER
            $result = $db->query('select * from date_04_24_2023 where dining_hall="BARH" and meal="dinner"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 3">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LATE NIGHT
            $result = $db->query('select * from date_04_24_2023 where dining_hall="BARH" and meal="late night"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 4">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
        }
    ?>
    </div>
    <div class="column">
      <h2>Blitman</h2>
      <?php
        if ($dbOk) {
            //BREAKFAST
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Blitman" and meal="breakfast"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 1">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LUNCH
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Blitman" and meal="lunch"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 2">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //DINNER
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Blitman" and meal="dinner"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 3">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LATE NIGHT
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Blitman" and meal="late night"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 4">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
        }
    ?>
    </div>
    <div class="column">
      <h2>Commons</h2>
      <?php
        if ($dbOk) {
            //BREAKFAST
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Commons" and meal="breakfast"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 1">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LUNCH
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Commons" and meal="lunch"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 2">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //DINNER
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Commons" and meal="dinner"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 3">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
            //LATE NIGHT
            $result = $db->query('select * from date_04_24_2023 where dining_hall="Commons" and meal="late night"');
            $numRecords = $result->num_rows;
            echo '<ul class="meal-list 4">';
            for ($i = 0; $i < $numRecords; $i++) {
                $record = $result->fetch_assoc();
                echo "\n".'<li> ' . $record['food'] . '</li>';
            }
            echo '</ul>';
            $result->free();
        }
    ?>
    </div>
    <div class="column">
      <h2>Russell Sage</h2>
      <?php
      if ($dbOk) {
        //BREAKFAST
        $result = $db->query('select * from date_04_24_2023 where dining_hall="Russell Sage" and meal="breakfast"');
        $numRecords = $result->num_rows;
        echo '<ul class="meal-list 1">';
        for ($i = 0; $i < $numRecords; $i++) {
            $record = $result->fetch_assoc();
            echo "\n".'<li> ' . $record['food'] . '</li>';
        }
        echo '</ul>';
        $result->free();
        //LUNCH
        $result = $db->query('select * from date_04_24_2023 where dining_hall="Russell Sage" and meal="lunch"');
        $numRecords = $result->num_rows;
        echo '<ul class="meal-list 2">';
        for ($i = 0; $i < $numRecords; $i++) {
            $record = $result->fetch_assoc();
            echo "\n".'<li> ' . $record['food'] . '</li>';
        }
        echo '</ul>';
        $result->free();
        //DINNER
        $result = $db->query('select * from date_04_24_2023 where dining_hall="Russell Sage" and meal="dinner"');
        $numRecords = $result->num_rows;
        echo '<ul class="meal-list 3">';
        for ($i = 0; $i < $numRecords; $i++) {
            $record = $result->fetch_assoc();
            echo "\n".'<li> ' . $record['food'] . '</li>';
        }
        echo '</ul>';
        $result->free();
        //LATE NIGHT
        $result = $db->query('select * from date_04_24_2023 where dining_hall="Russell Sage" and meal="late night"');
        $numRecords = $result->num_rows;
        echo '<ul class="meal-list 4">';
        for ($i = 0; $i < $numRecords; $i++) {
            $record = $result->fetch_assoc();
            echo "\n".'<li> ' . $record['food'] . '</li>';
        }
        echo '</ul>';
        $result->free();
    }
    ?>
    </div>
  </div>

  <script>
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
  </script>

</body>
</html>