<?php

function WProgressJS() {
	wp_enqueue_style( 'style-name', get_stylesheet_uri() );
	wp_enqueue_script( 'script-name', get_template_directory_uri() . '/js/progress.js', array(), '0.1', true );
}

add_action( 'wp_enqueue_scripts', 'WProgressJS' );
