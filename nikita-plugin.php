<?php

/*
Plugin Name: Amazon Super Url Generator
Description: This is Amazon Super Url Generator
Author: Nikita Ibragimov
Version: 1.0
Author URI: 
*/

/* ==== add CSS, JS ====== */
add_action( 'wp_enqueue_scripts', 'plugin_add_scripts' );

function plugin_add_scripts() {
	// additional styles
	wp_enqueue_style( 'jq-ui-calc-styles',     "https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/themes/smoothness/jquery-ui.css");
	// main STYLE file of finance plugin
	wp_enqueue_style( 'nikita-style', plugin_dir_url(__FILE__).'css/superurl.css');
	wp_enqueue_style('bootstrap4', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css');

	// additional scripts 
	wp_enqueue_script( 'ui-min-calculator',       "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js");
	wp_enqueue_script( 'ui-calculator',           "//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js");
	wp_enqueue_script( 'touch-mobile-calculator', "//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js");
	// main calculator script
	wp_enqueue_script( 'nikita-script', plugin_dir_url(__FILE__).'js/main.js');

}

add_action( 'wp_head', 'hook_css' );
function hook_css(){
	echo "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u' crossorigin='anonymous'>";
}


// ======== SHORTCODE =========
/* insert this shortcode in 
*  page / post / widget: 
*  [nikita_gen_shortcode]
*/

add_shortcode('nikita_gen_shortcode', 'add_generator_on_page');

function add_generator_on_page() {
	include_once 'nikita-frontend.php';
}