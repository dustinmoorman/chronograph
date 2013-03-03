<?php
/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 * Server time JSON for the clock engine.
 */

header('Expires: Thu, 18 Sep 2008 00:00:00 GMT');
header('Cache-Control: no-cache, must-revalidate');
header('Content-Type: application/json');

date_default_timezone_set('America/Chicago');

echo json_encode(
    array(
        'hour'   => date('h'),
        'minute' => date('i'),
        'second' => date('s'),
        'meridiem' => date('a')
    )
);