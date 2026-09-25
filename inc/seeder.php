<?php
/**
 * Idempotent, version-triggered seeder.
 * Creates the front page and reading settings on activation or version bump.
 *
 * @package MarveThabi
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Run the seeder when the theme is activated or MARVETHABI_VER changes.
 */
function marvethabi_maybe_seed() {
	if ( get_option( 'marvethabi_seeded_ver' ) === MARVETHABI_VER ) {
		return;
	}

	// Home page.
	$home = get_page_by_path( 'home' );
	if ( ! $home ) {
		$home_id = wp_insert_post(
			array(
				'post_title'   => 'Home',
				'post_name'    => 'home',
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_content' => '',
			)
		);
	} else {
		$home_id = $home->ID;
	}

	if ( $home_id && ! is_wp_error( $home_id ) ) {
		update_option( 'show_on_front', 'page' );
		update_option( 'page_on_front', $home_id );
	}

	// Our Services page.
	$svc = get_page_by_path( 'services' );
	if ( ! $svc ) {
		$svc_id = wp_insert_post(
			array(
				'post_title'   => 'Our Services',
				'post_name'    => 'services',
				'post_type'    => 'page',
				'post_status'  => 'publish',
				'post_content' => '',
			)
		);
	} else {
		$svc_id = $svc->ID;
	}
	if ( $svc_id && ! is_wp_error( $svc_id ) ) {
		update_post_meta( $svc_id, '_wp_page_template', 'page-services.php' );
	}

	update_option( 'marvethabi_seeded_ver', MARVETHABI_VER );
}
add_action( 'after_switch_theme', 'marvethabi_maybe_seed' );
add_action( 'init', 'marvethabi_maybe_seed', 20 );
