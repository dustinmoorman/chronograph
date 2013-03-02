<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Chronograph</title>
        <!--
            @author Dustin Moorman <dustin.moorman@gmail.com>
            Chronograph index page.
        -->
    </head>
    <body>
        <?php
            echo '<div id="time"><span id="hour">'
                . date('H')
                . '</span>:<span id="minute">'
                . date('i')
                . '</span>:<span id="second">'
                . date('s')
                . '</span></div>';
        ?>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src='typeAugmentation.js'></script>
        <script src='clocky.js'></script>
    </body>
</html>