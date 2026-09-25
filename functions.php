<?php
/**
 * MarveThabi Consulting Engineers theme functions.
 *
 * @package MarveThabi
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'MARVETHABI_VER', '1.3.3' );
define( 'MARVETHABI_DIR', get_template_directory() );
define( 'MARVETHABI_URI', get_template_directory_uri() );

/**
 * Theme setup.
 */
function marvethabi_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'custom-logo', array( 'height' => 104, 'width' => 900, 'flex-width' => true, 'flex-height' => true ) );

	register_nav_menus( array( 'primary' => __( 'Primary Menu', 'marvethabi' ) ) );
}
add_action( 'after_setup_theme', 'marvethabi_setup' );

/**
 * Enqueue fonts, styles and scripts.
 */
function marvethabi_assets() {
	wp_enqueue_style(
		'marvethabi-fonts',
		'https://fonts.googleapis.com/css2?family=Geist:wght@400..900&family=Fira+Sans:wght@400;500;600&display=swap',
		array(),
		MARVETHABI_VER
	);
	wp_enqueue_style( 'marvethabi-main', MARVETHABI_URI . '/assets/css/main.css', array( 'marvethabi-fonts' ), MARVETHABI_VER );
	wp_enqueue_script( 'marvethabi-main', MARVETHABI_URI . '/assets/js/main.js', array(), MARVETHABI_VER, true );
}
add_action( 'wp_enqueue_scripts', 'marvethabi_assets' );

/**
 * Preconnect for Google Fonts.
 *
 * @param array  $urls          Resource URLs.
 * @param string $relation_type Relation type.
 * @return array
 */
function marvethabi_resource_hints( $urls, $relation_type ) {
	if ( 'preconnect' === $relation_type ) {
		$urls[] = array( 'href' => 'https://fonts.googleapis.com' );
		$urls[] = array(
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		);
	}
	return $urls;
}
add_filter( 'wp_resource_hints', 'marvethabi_resource_hints', 10, 2 );

/**
 * Helper: theme image URL.
 *
 * @param string $file Filename inside assets/images.
 * @return string
 */
function marvethabi_img( $file ) {
	return esc_url( MARVETHABI_URI . '/assets/images/' . $file );
}

/**
 * Contact form handler.
 */
function marvethabi_handle_contact() {
	if ( ! isset( $_POST['marvethabi_nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_POST['marvethabi_nonce'] ) ), 'marvethabi_contact' ) ) {
		wp_safe_redirect( home_url( '/?sent=0#contact' ) );
		exit;
	}

	$name    = isset( $_POST['mt_name'] ) ? sanitize_text_field( wp_unslash( $_POST['mt_name'] ) ) : '';
	$org     = isset( $_POST['mt_org'] ) ? sanitize_text_field( wp_unslash( $_POST['mt_org'] ) ) : '';
	$email   = isset( $_POST['mt_email'] ) ? sanitize_email( wp_unslash( $_POST['mt_email'] ) ) : '';
	$phone   = isset( $_POST['mt_phone'] ) ? sanitize_text_field( wp_unslash( $_POST['mt_phone'] ) ) : '';
	$service = isset( $_POST['mt_service'] ) ? sanitize_text_field( wp_unslash( $_POST['mt_service'] ) ) : '';
	$details = isset( $_POST['mt_details'] ) ? sanitize_textarea_field( wp_unslash( $_POST['mt_details'] ) ) : '';

	if ( empty( $name ) || empty( $email ) ) {
		wp_safe_redirect( home_url( '/?sent=0#contact' ) );
		exit;
	}

	$subject = sprintf( 'Project enquiry: %s (%s)', $service ? $service : 'General', $name );
	$body    = "Name: {$name}\nOrganisation: {$org}\nEmail: {$email}\nPhone: {$phone}\nService: {$service}\n\nProject details:\n{$details}";
	$headers = array( 'Reply-To: ' . $name . ' <' . $email . '>' );

	wp_mail( get_option( 'admin_email' ), $subject, $body, $headers );

	wp_safe_redirect( home_url( '/?sent=1#contact' ) );
	exit;
}
add_action( 'admin_post_marvethabi_contact', 'marvethabi_handle_contact' );
add_action( 'admin_post_nopriv_marvethabi_contact', 'marvethabi_handle_contact' );

/**
 * Shared site data used by front-page sections.
 *
 * @return array
 */
function marvethabi_data() {
	return array(
		'services'     => array(
			array( 'ref' => 'RE-01', 'icon' => 'gear', 'title' => 'Reliability Engineering', 'items' => array( 'Asset Criticality', 'Root Cause Analysis', 'Condition Monitoring', 'Asset Strategies', 'ISO55000' ) ),
			array( 'ref' => 'AM-02', 'icon' => 'network', 'title' => 'Asset Management', 'items' => array( 'Lifecycle Management', 'Asset Registers', 'Digital Twins', 'Master Data', 'Performance Management' ) ),
			array( 'ref' => 'EE-03', 'icon' => 'bolt', 'title' => 'Electrical Engineering', 'items' => array( 'Transmission', 'Reticulation', 'Substations', 'Street Lighting', 'Generators', 'Solar' ) ),
			array( 'ref' => 'GE-04', 'icon' => 'terrain', 'title' => 'Geo-Environmental', 'items' => array( 'Environmental Studies', 'Hydrogeology', 'Water Licensing', 'Environmental Audits', 'Waste Management', 'Compliance' ) ),
		),
		'clients'      => array(
			array( 'client-anglo.png', 'Anglo American' ),
			array( 'client-glencore.png', 'Glencore' ),
			array( 'client-harmony.png', 'Harmony Gold' ),
			array( 'client-thungela.png', 'Thungela' ),
			array( 'client-valterra.png', 'Valterra Platinum' ),
			array( 'client-umgeni.png', 'Umgeni Water' ),
			array( 'client-ekurhuleni.png', 'City of Ekurhuleni' ),
		),
		'industries'   => array(
			array( 'Government', 'M8 40V20l16-12 16 12v20H28v-12h-8v12H8z' ),
			array( 'Mining', 'M10 38l10-18 6 8 6-12 6 22H10z M34 10l6 6' ),
			array( 'Energy', 'M26 6L14 26h9l-3 16 14-22h-9l1-14z' ),
			array( 'Municipalities', 'M8 40h32M12 40V22h6v18M22 40V14h6v26M32 40V26h6v14' ),
			array( 'Industrial', 'M6 40V24l10 6V24l10 6V16h10l4 24H6z' ),
			array( 'Commercial', 'M12 40V10h24v30M18 16h4M26 16h4M18 24h4M26 24h4M18 32h4M26 32h4' ),
			array( 'Infrastructure Development', 'M4 34h40M10 34V22M22 34V16M34 34V22M10 22l12-6 12 6' ),
		),
		'why'          => array(
			array( 'Engineering Excellence', 'Highly qualified specialists delivering technically sound, standards-driven solutions.' ),
			array( 'Government Ready', 'Experience supporting public-sector and municipal infrastructure requirements.' ),
			array( 'Transformation', '100% Black Owned. Level 1 B-BBEE Contributor.' ),
			array( 'Integrated Expertise', 'Engineering, environmental and asset management solutions under one roof.' ),
		),
		'process'      => array(
			array( '01', 'Consultation', 'Scoping the engineering requirement with the client and stakeholders.' ),
			array( '02', 'Investigation', 'Site assessments, data gathering, surveys and condition studies.' ),
			array( '03', 'Engineering Design', 'Standards-driven design, specifications and technical documentation.' ),
			array( '04', 'Implementation', 'Construction monitoring, commissioning and project management.' ),
			array( '05', 'Quality Assurance', 'Testing, compliance verification and as-built documentation.' ),
			array( '06', 'Long-Term Support', 'Asset strategies, monitoring and maintenance planning.' ),
		),
		'capabilities' => array(
			array( 'Electrical Infrastructure', 'Transmission, reticulation and substation engineering for utilities, municipalities and industry. From 11kV distribution networks to bulk supply upgrades, designs are delivered to SANS and utility standards with full compliance documentation.', 'cap-electrical.jpg' ),
			array( 'Asset Management', 'ISO55000-aligned asset management frameworks covering asset registers, master data, lifecycle costing and digital twins. Built for public entities that must account for every asset on their books.', 'cap-asset.jpg' ),
			array( 'Environmental Monitoring', 'Groundwater monitoring networks, environmental audits and compliance reporting that keep operations within licence conditions and ahead of regulatory review.', 'cap-environmental.jpg' ),
			array( 'Reliability Engineering', 'Criticality analysis, root cause analysis and condition monitoring programmes that reduce unplanned downtime across plant and network assets.', 'cap-reliability.jpg' ),
			array( 'Hydrogeology', 'Aquifer characterisation, borehole siting, water use licensing and geohydrological reporting for mines, municipalities and developers.', 'cap-hydro.jpg' ),
			array( 'Power Systems', 'Load studies, protection coordination, generator and solar integration, and network master planning for growing demand.', 'cap-power.jpg' ),
		),
		'leaders'      => array(
			array(
				'name'  => 'Marvelous Ngoatle',
				'role'  => 'Principal Reliability Engineer',
				'img'   => 'marvelous.jpg',
				'quals' => array( 'Electrical Engineer', 'ECSA Registered', 'ISO55000 Specialist', '13+ Years Experience' ),
			),
			array(
				'name'  => 'Thabang Ngoatle',
				'role'  => 'Environmental Specialist',
				'img'   => 'thabang.jpg',
				'quals' => array( 'Professional Scientist', 'SACNASP Registered', 'Environmental Compliance Expert', '10+ Years Experience' ),
			),
		),
	);
}

/**
 * Inline SVG service icon.
 *
 * @param string $key Icon key.
 */
function marvethabi_icon( $key ) {
	$icons = array(
		/* Reliability: condition gauge with needle on the warning edge */
		'gear'    => '<path d="M7 36a17 17 0 0 1 34 0"/><path d="M24 36L34 25"/><circle cx="24" cy="36" r="2.5"/><path d="M9 29l2.5 1.2M14 22l2 2M24 19v3M34 22l-2 2M39 29l-2.5 1.2"/><path d="M6 42h36"/>',
		/* Asset management: stacked asset layers, register lines */
		'network' => '<path d="M24 5l17 8-17 8L7 13z"/><path d="M7 23l17 8 17-8"/><path d="M7 33l17 8 17-8"/>',
		/* Electrical: slim transmission pylon */
		'bolt'    => '<path d="M19 44L24 6l5 38"/><path d="M15 15h18M11 26h26M8 44h32"/><path d="M15 15l16 11M33 15L17 26"/><path d="M11 26v5M37 26v5"/>',
		/* Geo-environmental: strata section with groundwater drop */
		'terrain' => '<path d="M5 18h38"/><path d="M5 27h38" stroke-dasharray="6 4"/><path d="M5 36h38" stroke-dasharray="2 4"/><path d="M31 5c0 0-5.5 6.5-5.5 10a5.5 5.5 0 0 0 11 0C36.5 11.5 31 5 31 5z"/><path d="M14 36v8M22 40v4"/>',
	);
	$path  = isset( $icons[ $key ] ) ? $icons[ $key ] : $icons['gear'];
	echo '<svg viewBox="0 0 48 48" class="svc-icon" aria-hidden="true">' . $path . '</svg>'; // phpcs:ignore WordPress.Security.EscapeOutput
}

require_once MARVETHABI_DIR . '/inc/seeder.php';
