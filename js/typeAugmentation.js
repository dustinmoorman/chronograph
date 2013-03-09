/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 * A little type augmentation for methods I use in the
 * chronograph.
 */

/**
 * Give Number a zero fill method.
 * @param len
 * @return String
 */
Number.prototype.zf = function(len){

    if(isNaN(len)) len = 2;

    return (this + '').pad(len, '0');
};

/**
 * Pads a String with the supplied str parameter,
 * to the length defined as len.
 * @param len
 * @param str
 * @return String
 */
String.prototype.pad = function(len, str){

    var output = this.valueOf();

    while(output.length < len){
        output = str + output;
    }

    return output;
};
