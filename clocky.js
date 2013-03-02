/**
 * This is the engine of the chronograph. It handles the
 * mechanics of getting and setting time.
 */
(function(){

    /**
     * Clock Data component. Object that contains
     * hours, minutes, and seconds.
     * @type Object clock_data
     */
    var clock_data = {};

    /**
     * Hour element.
     */
    var $hour;

    /**
     * Minute element.
     */
    var $minute;

    /**
     * Second element.
     */
    var $second;

    /**
     * Executes when the document is ready. This is the
     * kick off point for the clock.
     */
    $(document).ready(function(){

        $hour   = $('#hour');
        $minute = $('#minute');
        $second = $('#second');

        if(document.getElementById('time')){

            clock_data.hour   = parseInt($hour.text());
            clock_data.minute = parseInt($minute.text());
            clock_data.second = parseInt($second.text());

            getCurrentTime(function(){
                setTimeDisplay();
            });
        }
    });

    /**
     * This is the beating heart of the clock. It uses
     * recursion to run continuously, and updates the
     * values of the page elements.
     */
    function setTimeDisplay() {

        if(clock_data.second > 59){

            clock_data.second = 0;

            if(++clock_data.minute > 59){

                clock_data.minute = 0;

                if(++clock_data.hour > 23) clock_data.hour = 0;

                $hour.text(clock_data.hour.zf(2));
            }

            $minute.text(clock_data.minute.zf(2));

            getCurrentTime();
        }

        $second.text(clock_data.second.zf(2));
        clock_data.second++;

        setTimeout(function(){
            setTimeDisplay()
        }, 1000);
    }

    /**
     * Uses an AJAX call to grab the time from the server.
     * @param callback
     */
    function getCurrentTime(callback) {

        $.getJSON('timeJSON.php', function(data) {

            var dataType = typeof data;

            if(dataType == 'object'){
                clock_data = {
                    'hour':   parseInt(data.hour),
                    'minute': parseInt(data.minute),
                    'second': parseInt(data.second)
                };
            }
            else{
                document.write('Oops! bad data...');
            }

            if(typeof callback == 'function'){
                callback();
            }
        })
    }
})();