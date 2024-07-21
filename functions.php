<?php

//réglage du theme

//réglage pour le backoffice
function css_backoffice_setup(){
    //le fichier theme.min.css est utilisé dans l'éditeur
    add_editor_style(
        array(
            './assets/css/theme.min.css'
        )
    );

    // Suppression des compositions par défaut
    remove_theme_support('core-block-patterns');
}
add_action('after_setup_theme', 'css_backoffice_setup' );

//ajoute du CSS
add_action( 'wp_enqueue_scripts', 'jeblocs_enqueue_styles' );
function jeblocs_enqueue_styles(){
	//css du theme
	wp_enqueue_style('jeblocs-style', get_stylesheet_directory_uri() . '/assets/css/theme.min.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/theme.min.css'));
    //css animation du theme
	wp_enqueue_style('jeblocs-style-animation', get_stylesheet_directory_uri() . '/assets/css/animation.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/animation.css'));
    //Script JS menu
	wp_enqueue_script( 'jeblocs-javascript', get_stylesheet_directory_uri() . '/assets/js/javascript.js', array(), filemtime(get_stylesheet_directory() . '/assets//js/javascript.js'), true );
    };




