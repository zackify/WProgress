<?php
//so that we can show the progress of reading the post, not scrolling the whole page
function add_post_class() {
	$classes[] = 'wprogress-post';
	return $classes;
}

add_filter( 'post_class', 'add_post_class' );
