<?php
/**
 * Template Name: Our Services
 *
 * The full MarveThabi service catalogue: three disciplines, twelve service
 * lines, scroll-spy directory, blueprint iconography and affiliations.
 *
 * @package MarveThabi
 */

get_header();

/**
 * Blueprint-style icon for a service line.
 *
 * @param string $key Icon key.
 */
function marvethabi_svc_icon( $key ) {
	$icons = array(
		'wave'     => '<path d="M4 24h6l4-12 6 24 5-18 4 10 4-6h11"/><circle cx="24" cy="24" r="21" stroke-dasharray="3 5"/>',
		'register' => '<rect x="8" y="6" width="32" height="36"/><path d="M14 14h20M14 21h20M14 28h12"/><path d="M30 30l4 4 7-8" stroke-width="2.4"/>',
		'plug'     => '<path d="M18 6v10M30 6v10M14 16h20v8a10 10 0 0 1-20 0v-8z"/><path d="M24 34v8"/><path d="M18 42h12"/>',
		'pylon'    => '<path d="M18 44L24 8l6 36M14 20h20M11 30h26M8 44h32"/><path d="M14 20l16 10M34 20L18 30"/>',
		'drop'     => '<path d="M24 4C24 4 10 20 10 30a14 14 0 0 0 28 0C38 20 24 4 24 4z"/><path d="M18 30a6 6 0 0 0 6 6"/>',
		'waste'    => '<path d="M12 14h24l-3 28H15l-3-28z"/><path d="M8 14h32M19 14V8h10v6"/><path d="M20 21v14M28 21v14"/>',
		'air'      => '<path d="M6 18h22a5 5 0 1 0-5-5"/><path d="M6 26h30a5 5 0 1 1-5 5"/><path d="M6 34h14"/>',
		'leaf'     => '<path d="M38 8C18 8 8 20 8 34c0 3 1 6 1 6s14 2 24-8S38 8 38 8z"/><path d="M12 38C20 28 28 22 36 12"/>',
		'borehole' => '<path d="M6 16h36M6 24h36M6 32h36" stroke-dasharray="5 4"/><path d="M22 6h4v36h-4z"/><circle cx="24" cy="42" r="4"/>',
		'permit'   => '<rect x="10" y="4" width="28" height="40"/><path d="M16 12h16M16 19h16M16 26h10"/><circle cx="30" cy="34" r="6"/><path d="M27 34l2.5 2.5L34 31" stroke-width="2"/>',
		'audit'    => '<circle cx="20" cy="20" r="12"/><path d="M29 29l13 13"/><path d="M15 20l4 4 7-8" stroke-width="2.4"/>',
		'rehab'    => '<path d="M4 40h40"/><path d="M8 40c4-8 8-10 12-10s6 4 10 4 8-6 14-14"/><path d="M30 14v8M26 18h8" stroke-width="2.4"/>',
	);
	$path  = isset( $icons[ $key ] ) ? $icons[ $key ] : $icons['wave'];
	echo '<svg viewBox="0 0 48 48" class="sline-icon" aria-hidden="true">' . $path . '</svg>'; // phpcs:ignore WordPress.Security.EscapeOutput
}

$groups = array(
	array(
		'no'       => '01',
		'id'       => 'engineering-services',
		'title'    => 'Engineering Services',
		'intro'    => 'Reliability, asset management and electrical engineering delivered to ISO55000, SANS and utility standards, from plant floor to municipal network.',
		'services' => array(
			array(
				'ref'   => 'RE-01',
				'icon'  => 'wave',
				'img'   => 'about.jpg',
				'title' => 'Reliability Engineering Services',
				'desc'  => 'Condition-based programmes that find failure before failure finds the plant.',
				'items' => array( 'Asset Criticality Development', 'Asset Hierarchy Development', 'Spare Criticality Analysis', 'Asset Strategies & Tactics Plan Development', 'Criticality Spares Analysis Development', 'Total Fluids Management', 'Defect Elimination and Root Cause Analysis', 'Condition Monitoring Systems (Vibration, Oil, Motor Circuit, Conveyor Health)' ),
			),
			array(
				'ref'   => 'AM-02',
				'icon'  => 'register',
				'img'   => 'hero.jpg',
				'title' => 'Asset Management Services',
				'desc'  => 'ISO55000 frameworks that account for every asset, from register to digital twin.',
				'items' => array( 'Physical Asset Management ISO55000 (Implementation)', 'Asset Management Policy, Philosophy and Strategy Development', 'Asset Life Cycle Management', 'Asset Performance Management', 'Asset Master Data', 'Asset Identification, Verification & Validation', 'Asset Register', 'Work Management', 'Asset Digital Twin' ),
			),
			array(
				'ref'   => 'EC-03',
				'icon'  => 'plug',
				'img'   => 'cap-asset.jpg',
				'title' => 'Electrical Construction',
				'desc'  => 'Installation, commissioning and certification for residential, commercial and industrial sites.',
				'items' => array( 'Generator Installation, Commissioning, Maintenance and Repair', 'Solar Power Installation, Commissioning, Maintenance and Repair', 'Electrical Wiring Services for Residential and Commercial', 'Electrical Fault Finding and Testing Services', 'Electrical Compliance Certificate (COC)', 'Geyser, Stove Electrical Repairs and Installations', 'Cable Fault Detecting & Thump Testing' ),
			),
			array(
				'ref'   => 'EE-04',
				'icon'  => 'pylon',
				'img'   => 'cap-electrical.jpg',
				'title' => 'Electrical and Electronic Engineering',
				'desc'  => 'Infrastructure engineering from transmission line to township reticulation.',
				'items' => array( 'Electrical Infrastructure Development', 'Electrical Reticulation & Distribution', 'Electrical Transmission & Distribution', 'Networks Municipal & Township Reticulation', 'Street Lighting and Area Lighting', 'Standby Generators & UPS', 'Lightning Protection', 'Voice & Data Infrastructure', 'Access Control, Security & CCTV Systems', 'Fire Detection & Alarm Systems', 'Supply and Delivery of Mining Spares and Equipment' ),
			),
		),
	),
	array(
		'no'       => '02',
		'id'       => 'environmental-management',
		'title'    => 'Environmental Resource Management',
		'intro'    => 'Licensing, monitoring and management plans that keep water, waste, air and carbon within regulation.',
		'services' => array(
			array(
				'ref'   => 'WM-05',
				'icon'  => 'drop',
				'img'   => 'cap-environmental.jpg',
				'title' => 'Water Management',
				'desc'  => 'From licence application to long-term monitoring of ground and surface water.',
				'items' => array( 'Water Use Licencing', 'Water Conservation and Water Demand Management Plans', 'Integrated Water and Waste Management Plans (IWWMP)', 'Ground and Surface Water Monitoring', 'Specialist Water Studies for EIAs' ),
			),
			array(
				'ref'   => 'WS-06',
				'icon'  => 'waste',
				'img'   => 'industries.jpg',
				'title' => 'Waste Management',
				'desc'  => 'Classification, licensing and plans that turn waste liabilities into managed streams.',
				'items' => array( 'Sewage Plant Performance Audit', 'Waste Licencing', 'Integrated Waste Management Plan', 'Waste Classification', 'Waste Awareness and Training' ),
			),
			array(
				'ref'   => 'AQ-07',
				'icon'  => 'air',
				'img'   => 'cap-reliability.jpg',
				'title' => 'Air Quality Management',
				'desc'  => 'Dust, emissions and noise kept measurable, reportable and compliant.',
				'items' => array( 'Dust Fallout Monitoring', 'Atmospheric Emission Licencing', 'Air Quality Management Plan', 'Noise Monitoring' ),
			),
			array(
				'ref'   => 'GG-08',
				'icon'  => 'leaf',
				'img'   => 'cap-power.jpg',
				'title' => 'Greenhouse Gas Management',
				'desc'  => 'Carbon accounting and national reporting done to the decimal.',
				'items' => array( 'NAEIS Reporting', 'Carbon Footprint Calculations' ),
			),
		),
	),
	array(
		'no'       => '03',
		'id'       => 'specialist-studies',
		'title'    => 'Specialist Studies',
		'intro'    => 'Hydrogeology, authorisations, audits and rehabilitation, the specialist work that unlocks and closes projects.',
		'services' => array(
			array(
				'ref'   => 'HS-09',
				'icon'  => 'borehole',
				'img'   => 'cap-hydro.jpg',
				'title' => 'Hydrogeological Studies',
				'desc'  => 'Reading the ground: geophysics, boreholes and aquifers characterised with precision.',
				'items' => array( 'Geophysical Survey Resistivity', 'Environmental Hydrogeology', 'Borehole Development and Aquifer Test', 'Ground Water Monitoring', 'Geological Services (Exploration, Resource Estimation)', 'Geotechnical Services (Soil, Rock)', 'Geophysical (GPR, Gravity, Resistivity)' ),
			),
			array(
				'ref'   => 'AP-10',
				'icon'  => 'permit',
				'img'   => 'hero.jpg',
				'title' => 'Authorisation, Permits and Licences',
				'desc'  => 'The full authorisation pathway, from EIA to mining right, managed end to end.',
				'items' => array( 'Water Use Licence Application', 'Environmental Management Programmes (EMPr)', 'Waste Permits', 'Mining Right, Licence and Permits', 'Environmental Impact Assessment (EIA)', 'Mining Closure Assessment', 'EMPr Performance Assessment', 'Public Participation' ),
			),
			array(
				'ref'   => 'CA-11',
				'icon'  => 'audit',
				'img'   => 'cap-environmental.jpg',
				'title' => 'Environmental Compliance Audits and Monitoring',
				'desc'  => 'Independent audits that find the gap before the regulator does.',
				'items' => array( 'Water Use Licence Audit', 'Waste Audits', 'Sewage Plant Performance Audit', 'Environmental Control Officer (ECO)', 'Biomonitoring' ),
			),
			array(
				'ref'   => 'ER-12',
				'icon'  => 'rehab',
				'img'   => 'industries.jpg',
				'title' => 'Environmental Rehabilitation',
				'desc'  => 'Returning disturbed land to stable, compliant, productive condition.',
				'items' => array( 'Rehabilitation and Remedial Plan', 'Rehabilitation of Contaminated Sites', 'Rehabilitation Strategy Implementation Plan (RSIP)' ),
			),
		),
	),
);

$affiliations = array(
	array( 'aff-ecsa.png', 'ECSA, Engineering Council of South Africa' ),
	array( 'aff-saiee.png', 'SAIEE, South African Institute of Electrical Engineers' ),
	array( 'aff-sacnasp.png', 'SACNASP, South African Council for Natural Scientific Professions' ),
);
?>

<main class="svc-page">

	<!-- ============ PAGE HERO ============ -->
	<section class="svc-hero">
		<div class="svc-hero-grid-bg" aria-hidden="true"></div>

		<!-- Self-drafting CAD plotter -->
		<div class="plotter" id="plotter" aria-hidden="true">
			<div class="plotter-shade"></div>
			<svg viewBox="0 0 1200 640" class="plotter-svg" preserveAspectRatio="xMidYMid slice">
				<!-- LAYER 1: CONTOURS -->
				<g data-layer="TOPO-CONTOURS" data-stroke="rgba(94,158,139,0.35)">
					<path class="plot" d="M700 620 C 800 560, 860 560, 940 500 S 1100 420, 1200 400"/>
					<path class="plot" d="M760 640 C 860 590, 920 580, 1000 520 S 1150 460, 1200 450"/>
					<path class="plot" d="M840 640 C 930 610, 990 600, 1060 550 S 1180 500, 1200 495"/>
				</g>
				<!-- LAYER 2: SITE BOUNDARY -->
				<g data-layer="SITE-BOUNDARY" data-stroke="rgba(255,255,255,0.4)" data-dash="10 8">
					<path class="plot" d="M640 120 H1160 V560 H700 L640 480 Z"/>
				</g>
				<!-- LAYER 3: ELEC RETICULATION -->
				<g data-layer="ELEC-RETIC 11kV" data-stroke="rgba(255,255,255,0.8)">
					<path class="plot" d="M660 500 L760 420 L870 440 L980 350 L1090 370 L1160 300"/>
					<path class="plot" d="M760 420 l0 -14 m-9 14 l18 0 M980 350 l0 -14 m-9 14 l18 0 M1090 370 l0 -14 m-9 14 l18 0"/>
				</g>
				<!-- LAYER 4: SUBSTATION -->
				<g data-layer="SUBSTATION MT-SS1" data-stroke="rgba(163,213,84,0.95)">
					<path class="plot" d="M900 170 h170 v110 h-170 z"/>
					<path class="plot" d="M930 200 a16 16 0 1 0 0.1 0 M930 245 a16 16 0 1 0 0.1 0"/>
					<path class="plot" d="M1000 185 v80 M1030 185 v80 M1000 225 h30"/>
				</g>
				<!-- LAYER 5: HYDRO BOREHOLES -->
				<g data-layer="HYDRO-BH SERIES" data-stroke="rgba(94,158,139,0.9)">
					<path class="plot" d="M730 250 a14 14 0 1 0 0.1 0 M730 236 v28 M716 250 h28"/>
					<path class="plot" d="M820 560 a14 14 0 1 0 0.1 0 M820 546 v28 M806 560 h28"/>
					<path class="plot" d="M1120 480 a14 14 0 1 0 0.1 0 M1120 466 v28 M1106 480 h28"/>
				</g>
			</svg>

			<!-- crosshair cursor -->
			<div class="xhair" id="xhair">
				<span class="xhair-v"></span>
				<span class="xhair-h"></span>
				<span class="xhair-ring"></span>
			</div>

			<!-- snap flash -->
			<span class="snap-pulse" id="snap-pulse"></span>

			<!-- approval stamp -->
			<div class="stamp num" id="plot-stamp">
				<span class="stamp-top">DRAFT APPROVED</span>
				<span class="stamp-mid">MT-SVC-2026</span>
				<span class="stamp-low">REV A &middot; PR. ENG.</span>
			</div>

			<!-- live HUD -->
			<div class="hud num" id="hud">
				<span class="hud-line">LAYER: <em id="hud-layer">TOPO-CONTOURS</em></span>
				<span class="hud-line">X: <em id="hud-x">25.7479 S</em></span>
				<span class="hud-line">Y: <em id="hud-y">28.2293 E</em></span>
				<span class="hud-line">SNAP: <em class="hud-on">ON</em> &nbsp;ORTHO: <em class="hud-on">ON</em></span>
			</div>
		</div>

		<div class="wrap">
			<div class="svc-hero-top label">
				<span>MarveThabi Consulting Engineers</span>
				<span class="dot" aria-hidden="true"></span>
				<span>Service Catalogue</span>
			</div>
			<h1 class="svc-hero-title"><?php esc_html_e( 'Engineering Services', 'marvethabi' ); ?></h1>
			<p class="lead svc-hero-sub"><?php esc_html_e( 'Three disciplines. Twelve service lines. One accountable consultancy for reliability, electrical and geo-environmental work across government, mining, energy and industry.', 'marvethabi' ); ?></p>
			<div class="svc-hero-index">
				<?php foreach ( $groups as $g ) : ?>
					<a href="#<?php echo esc_attr( $g['id'] ); ?>" class="svc-hero-chip">
						<span class="num"><?php echo esc_html( $g['no'] ); ?></span>
						<?php echo esc_html( $g['title'] ); ?>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
		<div class="hero-base label">
			<span>DOC NO. MT-SVC-2026</span>
			<span>12 SERVICE LINES</span>
			<span>REV A</span>
		</div>
	</section>

	<!-- ============ CATALOGUE ============ -->
	<section class="svc-catalogue">
		<div class="wrap svc-layout">

			<!-- Directory -->
			<aside class="svc-dir" aria-label="<?php esc_attr_e( 'Service directory', 'marvethabi' ); ?>">
				<span class="label svc-dir-h"><?php esc_html_e( 'Directory', 'marvethabi' ); ?></span>
				<?php foreach ( $groups as $g ) : ?>
					<a href="#<?php echo esc_attr( $g['id'] ); ?>" class="svc-dir-group" data-spy="<?php echo esc_attr( $g['id'] ); ?>">
						<span class="num"><?php echo esc_html( $g['no'] ); ?></span> <?php echo esc_html( $g['title'] ); ?>
					</a>
					<?php foreach ( $g['services'] as $svc ) :
						$sid = sanitize_title( $svc['title'] );
						?>
						<a href="#<?php echo esc_attr( $sid ); ?>" class="svc-dir-item" data-spy="<?php echo esc_attr( $sid ); ?>">
							<span class="num"><?php echo esc_html( $svc['ref'] ); ?></span> <?php echo esc_html( $svc['title'] ); ?>
						</a>
					<?php endforeach; ?>
				<?php endforeach; ?>
			</aside>

			<!-- Groups -->
			<div class="svc-flow">
				<?php foreach ( $groups as $g ) : ?>
					<section class="svc-group" id="<?php echo esc_attr( $g['id'] ); ?>">
						<div class="svc-group-head reveal">
							<span class="num svc-group-no"><?php echo esc_html( $g['no'] ); ?></span>
							<div>
								<h2><?php echo esc_html( $g['title'] ); ?></h2>
								<p class="svc-group-intro"><?php echo esc_html( $g['intro'] ); ?></p>
							</div>
						</div>

						<?php foreach ( $g['services'] as $svc ) :
							$sid = sanitize_title( $svc['title'] );
							?>
							<article class="sline reveal" id="<?php echo esc_attr( $sid ); ?>">
								<div class="sline-media">
									<img src="<?php echo marvethabi_img( $svc['img'] ); ?>" alt="<?php echo esc_attr( $svc['title'] ); ?>" loading="lazy">
									<span class="num sline-ref"><?php echo esc_html( $svc['ref'] ); ?></span>
									<div class="sline-scan" aria-hidden="true"></div>
								</div>
								<div class="sline-body">
									<div class="sline-head">
										<?php marvethabi_svc_icon( $svc['icon'] ); ?>
										<div>
											<h3 class="card-title"><?php echo esc_html( $svc['title'] ); ?></h3>
											<p class="sline-desc"><?php echo esc_html( $svc['desc'] ); ?></p>
										</div>
									</div>
									<ul class="sline-items">
										<?php foreach ( $svc['items'] as $item ) : ?>
											<li><?php echo esc_html( $item ); ?></li>
										<?php endforeach; ?>
									</ul>
								</div>
							</article>
						<?php endforeach; ?>
					</section>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ AFFILIATIONS ============ -->
	<section class="affil">
		<div class="wrap">
			<h2 class="affil-head reveal"><?php esc_html_e( 'Professional Affiliations', 'marvethabi' ); ?></h2>
			<p class="affil-sub reveal"><?php esc_html_e( 'Our engineers and scientists are registered with the statutory councils that govern South African engineering and natural science practice.', 'marvethabi' ); ?></p>
			<div class="affil-row">
				<?php foreach ( $affiliations as $i => $aff ) : ?>
					<div class="affil-card reveal r-delay-<?php echo esc_attr( $i ); ?>">
						<img src="<?php echo marvethabi_img( $aff[0] ); ?>" alt="<?php echo esc_attr( $aff[1] ); ?>" loading="lazy">
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ CTA ============ -->
	<section class="svc-cta">
		<div class="wrap svc-cta-inner">
			<div>
				<h2><?php esc_html_e( 'Scope It With an Engineer', 'marvethabi' ); ?></h2>
				<p class="svc-cta-sub"><?php esc_html_e( 'Send the requirement, receive a technically scoped response from a registered professional.', 'marvethabi' ); ?></p>
			</div>
			<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" class="btn btn-brand"><?php esc_html_e( 'Request Consultation', 'marvethabi' ); ?></a>
		</div>
	</section>

</main>

<?php get_footer(); ?>
