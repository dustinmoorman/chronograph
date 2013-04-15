<?php
/**
* @author Dustin Moorman <dustin.moorman@gmail.com>
* Bootstrap it good!
*/

spl_autoload_register(function($class_name){
	if (file_exists("classes/$class_name.php"))
		include_once "classes/$class_name.php";
});