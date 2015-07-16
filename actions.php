<?php

function WProgressJS() {
  if(!is_singular()) return true;
	wp_enqueue_style( 'wprogrecss', plugins_url( 'css/progress.css', __FILE__ ) );
  wp_enqueue_script('jquery');
	wp_enqueue_script( 'wprogress', plugins_url( 'js/progress.js', __FILE__ ), array(), '0.1', true );
}
  add_action( 'wp_enqueue_scripts', 'WProgressJS' );
