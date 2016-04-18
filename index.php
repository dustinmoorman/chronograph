<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Chronograph</title>
        <link rel="stylesheet" href="css/style.css" />
        <!--
            @author Dustin Moorman <dustin.moorman@gmail.com>
            Chronograph index page.
        -->
    </head>
    <body>
        <div id="time">
            <input type="hidden" id="hour" value="<?php echo date('H'); ?>" />
            <input type="hidden" id="minute" value="<?php echo date('i'); ?>" />
            <input type="hidden" id="second" value="<?php echo date('s'); ?>" />
        </div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
        <script src="js/typeAugmentation.js"></script>
        <script src="js/clocky.js"></script>

        <?php

            require_once 'classes/SpanGenerator.php';

            $seconds = new SpanGenerator([
	            '1' => 'one',
	            '2' => 'two',
	            '3' => 'three',
	            '4' => 'four',
	            '5' => 'five',
	            '6' => 'six',
	            '7' => 'seven',
	            '8' => 'eight',
	            '9' => 'nine',
	            '10' => 'ten',
	            '11' => 'eleven',
	            '12' => 'twelve',
	            '13' => 'thirteen',
	            '14' => 'fourteen',
	            '15' => 'fifteen',
	            '16' => 'sixteen',
	            '17' => 'seventeen',
	            '18' => 'eighteen',
	            '19' => 'nineteen',
	            '20' => 'twenty',
	            '30' => 'thirty',
	            '40' => 'fourty',
	            '50' => 'fifty'
            ]);

            $minutes = clone $seconds;

            $Hours = new SpanGenerator(
                array(
                    '1' => 'one',
                    '2' => 'two',
                    '3' => 'three',
                    '4' => 'four',
                    '5' => 'five',
                    '6' => 'six',
                    '7' => 'seven',
                    '8' => 'eight',
                    '9' => 'nine',
                    '10' => 'ten',
                    '11' => 'eleven',
                    '12' => 'twelve'
                )
            );

            $seconds->setHMS('s');
            $minutes->setHMS('m');
            $Hours->setHMS('h');

        ?>

        <div id="epic_container">
            <p id="s_container" style="display: inline;">
	            <?php echo $seconds->getTextOutput(); ?>
            </p>
            <span id="sec">second</span><span id="sec_s">s</span>
            <span id="sec_plus">and</span>
            <p id="m_container" style="display: inline;">
	            <?php echo $minutes->getTextOutput(); ?>
            </p>
            <span id="min">minute</span><span id="min_s">s</span>
            <span id="min_plus">past</span>
            <p id="h_container" style="display: inline;">
                <?php echo $Hours->getTextOutput(); ?>
            </p>
            <span id='ar' class="always_r">in the</span>
            <p id="meridien_container" style="display:inline;">
                <span id="morning">morning</span>
                <span id="afternoon">afternoon</span>
                <span id='evening'>evening</span>
            </p>
        </div>
    </body>
</html>
