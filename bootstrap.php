<?php
/**
* @author Dustin Moorman <dustin.moorman@gmail.com>
* Bootstrap it good!
*/

spl_autoload_register(function($className) {
	if (file_exists("classes/{$className}.php")) {
		include_once "classes/{$className}.php";
	}
});
