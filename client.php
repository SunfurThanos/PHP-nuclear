<?php
	$code_text = $_GET['text-IDE'];
	$python_debug = shell_exec("python build.py " . '"' . $code_text . '"' . " 2>&1");
	echo json_encode($python_debug);
?>
