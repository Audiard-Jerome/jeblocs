<?php

//ajoute du CSS + JS
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles(){
	//css du theme
	wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/css/theme.min.css', array(), filemtime(get_stylesheet_directory() . '/css/theme.min.css'));
	//Script JS menu burger
	wp_enqueue_script( 'script_burger', get_stylesheet_directory_uri() . '/js/burger.js', array(), filemtime(get_stylesheet_directory() . '/js/burger.js'), true );
}


// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Afficher le logo personnalisé sur la page de connexion
function jeblocs_custom_logo_login() {
    if ( has_custom_logo() ) {
        $image = wp_get_attachment_image_src( get_theme_mod( 'custom_logo' ), 'thumbnail' );
        $thumbnail_width = absint( $image[1] );
        $thumbnail_height = absint( $image[2] );
        ?>
        <style type="text/css">
            .login h1 a {
                background-image: url(<?php echo esc_url( $image[0] ); ?>);
                -webkit-background-size: <?php echo absint( $thumbnail_width ) ?>px;
                background-size: <?php echo absint( $thumbnail_width ) ?>px;
                height: <?php echo absint( $thumbnail_height ) ?>px;
                width: <?php echo absint( $thumbnail_width ) ?>px;
            }
        </style>
        <?php
    }
}
add_action( 'login_head', 'jeblocs_custom_logo_login', 100 );




