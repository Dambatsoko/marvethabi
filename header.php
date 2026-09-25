<?php
/**
 * Header template.
 *
 * @package MarveThabi
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="nav" id="site-nav">
	<div class="wrap nav-inner">
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" aria-label="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
			<img src="<?php echo marvethabi_img( 'logo.png' ); ?>" alt="MarveThabi Consulting Engineers">
		</a>
		<nav class="nav-links" id="nav-links" aria-label="<?php esc_attr_e( 'Primary', 'marvethabi' ); ?>">
			<a href="<?php echo esc_url( home_url( '/services/' ) ); ?>"><?php esc_html_e( 'Services', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#industries' ) ); ?>"><?php esc_html_e( 'Industries', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#about' ) ); ?>"><?php esc_html_e( 'About', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#leadership' ) ); ?>"><?php esc_html_e( 'Leadership', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#process' ) ); ?>"><?php esc_html_e( 'Process', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"><?php esc_html_e( 'Contact', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="btn btn-brand btn-sm"><?php esc_html_e( 'Request Consultation', 'marvethabi' ); ?></a>
		</nav>
		<button class="burger" id="burger" aria-label="<?php esc_attr_e( 'Menu', 'marvethabi' ); ?>" aria-expanded="false" aria-controls="nav-links">
			<span></span><span></span><span></span>
		</button>
	</div>
</header>
