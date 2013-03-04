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
     * Holds a map object, which contains a collection of key value
     * pairs. The key holds the current time value for seconds, the
     * value holds an object which contains up to two internal key and
     * value pairs that represent which ID's need to be lit up to represent
     * the second's value in the clock face.
     *
     * @example
     *
     * [second_map] ----------------
     *  |
     *  |        -[x: fourty]
     *  |-[43]--|
     *  |        -[y: three]
     *   ---------------------------
     */
    var $second_map;

    /**
     * Similar in operation to the $second_map, as seen above, but
     * holds the map for minutes.
     */
    var $minute_map;

    /**
     * Same as the above two, only less internal items mapped.
     */
    var $hour_map;

    /**
     * Executes when the document is ready. This is the
     * kick off point for the clock.
     */
    $(document).ready(function(){

        $hour   = $('#hour');
        $minute = $('#minute');
        $second = $('#second');
        $second_map = get60RegisterMap('s');
        $minute_map = get60RegisterMap('m');
        $hour_map = get24RegisterMap();

        $('span').addClass('regular');
        $('#ar').attr('class','always_r');

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
     * Gets a map with 60 internal components. Used for
     * minutes and seconds.
     * @param ms
     * @return Object
     */
    function get60RegisterMap(ms){
        return {
            '0': { 'x': null, 'y' : null},
            '1': {'x': '#'+ms+'1' },
            '2': {'x': '#'+ms+'2'},
            '3': {'x': '#'+ms+'3'},
            '4': {'x': '#'+ms+'4'},
            '5': {'x': '#'+ms+'5'},
            '6': {'x': '#'+ms+'6'},
            '7': {'x': '#'+ms+'7'},
            '8': {'x': '#'+ms+'8'},
            '9': {'x': '#'+ms+'9'},
            '10': {'x': '#'+ms+'10'},
            '11': {'x': '#'+ms+'11'},
            '12': {'x': '#'+ms+'12'},
            '13': {'x': '#'+ms+'13'},
            '14': {'x': '#'+ms+'14'},
            '15': {'x': '#'+ms+'15'},
            '16': {'x': '#'+ms+'16'},
            '17': {'x': '#'+ms+'17'},
            '18': {'x': '#'+ms+'18'},
            '19': {'x': '#'+ms+'19'},
            '20': {'x': '#'+ms+'20'},
            '21': {'x': '#'+ms+'1', 'y': '#'+ms+'20'},
            '22': {'x': '#'+ms+'2', 'y': '#'+ms+'20'},
            '23': {'x': '#'+ms+'3', 'y': '#'+ms+'20'},
            '24': {'x': '#'+ms+'4', 'y': '#'+ms+'20'},
            '25': {'x': '#'+ms+'5', 'y': '#'+ms+'20'},
            '26': {'x': '#'+ms+'6', 'y': '#'+ms+'20'},
            '27': {'x': '#'+ms+'7', 'y': '#'+ms+'20'},
            '28': {'x': '#'+ms+'8', 'y': '#'+ms+'20'},
            '29': {'x': '#'+ms+'9', 'y': '#'+ms+'20'},
            '30': {'x': '#'+ms+'30', 'y' : null},
            '31': {'x': '#'+ms+'1', 'y': '#'+ms+'30'},
            '32': {'x': '#'+ms+'2', 'y': '#'+ms+'30'},
            '33': {'x': '#'+ms+'3', 'y': '#'+ms+'30'},
            '34': {'x': '#'+ms+'4', 'y': '#'+ms+'30'},
            '35': {'x': '#'+ms+'5', 'y': '#'+ms+'30'},
            '36': {'x': '#'+ms+'6', 'y': '#'+ms+'30'},
            '37': {'x': '#'+ms+'7', 'y': '#'+ms+'30'},
            '38': {'x': '#'+ms+'8', 'y': '#'+ms+'30'},
            '39': {'x': '#'+ms+'9', 'y': '#'+ms+'30'},
            '40': {'x': '#'+ms+'40', 'y' : null},
            '41': {'x': '#'+ms+'1', 'y': '#'+ms+'40'},
            '42': {'x': '#'+ms+'2', 'y': '#'+ms+'40'},
            '43': {'x': '#'+ms+'3', 'y': '#'+ms+'40'},
            '44': {'x': '#'+ms+'4', 'y': '#'+ms+'40'},
            '45': {'x': '#'+ms+'5', 'y': '#'+ms+'40'},
            '46': {'x': '#'+ms+'6', 'y': '#'+ms+'40'},
            '47': {'x': '#'+ms+'7', 'y': '#'+ms+'40'},
            '48': {'x': '#'+ms+'8', 'y': '#'+ms+'40'},
            '49': {'x': '#'+ms+'9', 'y': '#'+ms+'40'},
            '50': {'x': '#'+ms+'50', 'y' : null},
            '51': {'x': '#'+ms+'1', 'y': '#'+ms+'50'},
            '52': {'x': '#'+ms+'2', 'y': '#'+ms+'50'},
            '53': {'x': '#'+ms+'3', 'y': '#'+ms+'50'},
            '54': {'x': '#'+ms+'4', 'y': '#'+ms+'50'},
            '55': {'x': '#'+ms+'5', 'y': '#'+ms+'50'},
            '56': {'x': '#'+ms+'6', 'y': '#'+ms+'50'},
            '57': {'x': '#'+ms+'7', 'y': '#'+ms+'50'},
            '58': {'x': '#'+ms+'8', 'y': '#'+ms+'50'},
            '59': {'x': '#'+ms+'9', 'y': '#'+ms+'50'}
        };
    }

    /**
     * Gets a map with 12 internal components.
     * @return Object
     */
    function get24RegisterMap(){
        return {
            '1': {'x': '#h1' },
            '2': {'x': '#h2'},
            '3': {'x': '#h3'},
            '4': {'x': '#h4'},
            '5': {'x': '#h5'},
            '6': {'x': '#h6'},
            '7': {'x': '#h7'},
            '8': {'x': '#h8'},
            '9': {'x': '#h9'},
            '10': {'x': '#h10'},
            '11': {'x': '#h11'},
            '12': {'x': '#h12'},
            '13': {'x': '#h13'},
            '14': {'x': '#h14'},
            '15': {'x': '#h15'},
            '16': {'x': '#h16'},
            '17': {'x': '#h17'},
            '18': {'x': '#h18'},
            '19': {'x': '#h19'},
            '20': {'x': '#h20'},
            '21': {'x': '#h1', 'y': '#h20'},
            '22': {'x': '#h2', 'y': '#h20'},
            '23': {'x': '#h3', 'y': '#h20'},
            '24': {'x': '#noon'}
        };
    }

    /**
     * Lights up 'and' and 's' for minutes or seconds.
     * @param min_or_sec
     * @param v
     */
    function managePeripherals(min_or_sec,v){

        var m_or_s = minsec == 'min' ? 'm' : 's';
        var min_or_sec_s = $('#'+min_or_sec+'_s');

        if(v != 0){
            $('#'+min_or_sec).attr('class', m_or_s+'_now');
            $('#'+min_or_sec+'_plus').attr('class', m_or_s+'_now');
        }

        if(v > 1){
            min_or_sec_s.attr('class', m_or_s+'_now');
        } else {
            min_or_sec_s.attr('class', 'regular');
        }
    }

    /**
     * Sets the morning/afternoon/evening indicator.
     */
    function setMeridiem(){
        if(clock_data.meridiem == 'am'){
            $('#morning').attr('class', 'h_now');
        } else if(clock_data.meridiem == 'pm' && clock_data.hour < 5 ) {
            $('#afternoon').attr('class', 'h_now');
        } else {
            $('#evening').attr('class', 'h_now');
        }
    }

   /**
    * Handles class toggling for hours, minutes, and seconds
    * @param map
    * @param hms
    */
    function changeColor(map, hms){

        managePeripherals('sec',parseInt(clock_data.second.toString(),10));
        managePeripherals('min',parseInt(clock_data.minute.toString(),10));
        setMeridiem();

        $('#'+hms+'_container').children().attr('class', 'regular');

        if(map.hasOwnProperty('x')){
            var thisx = $(map.x);
            if(thisx.attr('class') == 'regular'){
                thisx.toggleClass('regular '+hms+'_now');
            }
        }

        if(map.hasOwnProperty('y')){
            var thisy = $(map.y);

            if(thisy.attr('class') == 'regular'){
                thisy.toggleClass('regular '+hms+'_now');
            }
        }
    }

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

                if(++clock_data.hour > 11) clock_data.hour = 0;

                $hour.text(clock_data.hour.zf(2));
            }

            $minute.text(clock_data.minute.zf(2));

            getCurrentTime();
        }

        var $clean_s = parseInt(clock_data.second.toString(),10);
        var $clean_m = parseInt(clock_data.minute.toString(),10);
        var $clean_h = parseInt(clock_data.hour.toString(),10);

        changeColor($second_map[$clean_s], 's');
        changeColor($minute_map[$clean_m], 'm');
        changeColor($hour_map[$clean_h], 'h');

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
                    'second': parseInt(data.second),
                    'meridiem': data.meridiem
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