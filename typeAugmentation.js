/**
 * @author Dustin Moorman <dustin.moorman@gmail.com>
 * A little type augmentation for methods I use in the
 * chronograph.
 */

//Give Number a zero fill method.
Number.prototype.zf = function(len){

    if(isNaN(len)) len = 2;

    return (this + '').pad(len, '0');
};

//Give String a padding method.
String.prototype.pad = function(len, str){

    var output = this.valueOf();

    while(output.length < len){
        output = str + output;
    }

    return output;
};
