<?php
/**
 * Front page: the full one-page MarveThabi site.
 *
 * @package MarveThabi
 */

get_header();
$mt = marvethabi_data();
?>

<main id="top">

	<!-- ============ HERO ============ -->
	<section class="hero">
		<div class="hero-photo" aria-hidden="true"></div>
		<div class="hero-photo-grey" aria-hidden="true"></div>
		<div class="hero-fade" aria-hidden="true"></div>
		<div class="wrap hero-grid">
			<div class="hero-copy">
				<div class="hero-reg label">
					<span>ECSA Registered</span>
					<span class="dot" aria-hidden="true"></span>
					<span>SACNASP Registered</span>
					<span class="dot" aria-hidden="true"></span>
					<span>CSD: Active</span>
				</div>
				<h1 class="hero-title"><?php esc_html_e( 'Engineering Solutions That Build South Africa', 'marvethabi' ); ?></h1>
				<p class="hero-sub lead"><?php esc_html_e( 'Delivering specialist Reliability Engineering, Asset Management, Electrical Engineering and Geo-Environmental solutions for government, municipalities, mining, energy and industrial sectors.', 'marvethabi' ); ?></p>
				<div class="hero-cta">
					<a href="#services" class="btn btn-brand"><?php esc_html_e( 'Explore Services', 'marvethabi' ); ?></a>
					<a href="#contact" class="btn btn-ghost"><?php esc_html_e( 'Request Consultation', 'marvethabi' ); ?></a>
				</div>
			</div>

			<div class="hero-right" aria-hidden="true">
				<div class="bp-wrap">
					<svg viewBox="0 0 520 560" class="bp-svg">
						<defs>
							<pattern id="bpGrid" width="26" height="26" patternUnits="userSpaceOnUse">
								<path d="M 26 0 L 0 0 0 26" fill="none" stroke="rgba(94,158,139,0.22)" stroke-width="0.6"/>
							</pattern>
							<pattern id="bpGridBig" width="130" height="130" patternUnits="userSpaceOnUse">
								<path d="M 130 0 L 0 0 0 130" fill="none" stroke="rgba(94,158,139,0.4)" stroke-width="1"/>
							</pattern>
						</defs>
						<rect width="520" height="560" fill="url(#bpGrid)" class="bp-drift"/>
						<rect width="520" height="560" fill="url(#bpGridBig)"/>
						<g stroke="rgba(255,255,255,0.6)" stroke-width="1.4" fill="none" class="bp-draw">
							<path d="M60 80 H460"/>
							<path d="M120 80 V150"/>
							<circle cx="120" cy="172" r="22"/>
							<circle cx="120" cy="205" r="22"/>
							<path d="M120 227 V300 H260"/>
							<path d="M320 80 V150"/>
							<circle cx="320" cy="172" r="22"/>
							<circle cx="320" cy="205" r="22"/>
							<path d="M320 227 V300 H260 V380"/>
							<path d="M200 380 H320"/>
							<path d="M220 380 V430 M260 380 V430 M300 380 V430"/>
							<path d="M205 430 H235 M245 430 H275 M285 430 H315"/>
							<path d="M60 80 V60 M460 80 V60"/>
							<path d="M400 80 V120 L420 140 M400 140 V180" stroke-dasharray="4 5"/>
						</g>
						<g fill="rgba(94,158,139,1)">
							<circle cx="120" cy="80" r="3.5" class="bp-node"/>
							<circle cx="320" cy="80" r="3.5" class="bp-node d2"/>
							<circle cx="260" cy="300" r="3.5" class="bp-node d3"/>
						</g>
						<g class="bp-labels" font-size="10" fill="rgba(255,255,255,0.45)">
							<text x="64" y="52">132kV BUS A</text>
							<text x="352" y="196">TRF-02</text>
							<text x="330" y="452">11kV DIST</text>
							<text x="404" y="200">NEC-R</text>
						</g>
					</svg>
				</div>
				<div class="float-stats">
					<div class="fstat"><span class="num fstat-v">13+</span><span class="fstat-l"><?php esc_html_e( 'Years Experience', 'marvethabi' ); ?></span></div>
					<div class="fstat"><span class="num fstat-v">Level 1</span><span class="fstat-l"><?php esc_html_e( 'B-BBEE Contributor', 'marvethabi' ); ?></span></div>
					<div class="fstat"><span class="num fstat-v">100%</span><span class="fstat-l"><?php esc_html_e( 'Black Owned', 'marvethabi' ); ?></span></div>
					<div class="fstat"><span class="num fstat-v">ISO55000</span><span class="fstat-l"><?php esc_html_e( 'Asset Specialists', 'marvethabi' ); ?></span></div>
				</div>
			</div>
		</div>
		<div class="hero-base label">
			<span>25.7479&deg; S, 28.2293&deg; E</span>
			<span>DWG NO. MT-2026-001</span>
			<span>REV C</span>
		</div>
	</section>

	<!-- ============ CLIENTS MARQUEE ============ -->
	<section class="cred">
		<div class="wrap">
			<p class="cred-head"><?php esc_html_e( 'Trusted Across Critical Infrastructure', 'marvethabi' ); ?></p>
		</div>
		<div class="marquee">
			<div class="marquee-track">
				<?php for ( $pass = 0; $pass < 2; $pass++ ) : ?>
					<?php foreach ( $mt['clients'] as $client ) : ?>
						<span class="marquee-item"<?php echo 1 === $pass ? ' aria-hidden="true"' : ''; ?>>
							<img src="<?php echo marvethabi_img( $client[0] ); ?>" alt="<?php echo 0 === $pass ? esc_attr( $client[1] ) : ''; ?>" loading="lazy">
						</span>
					<?php endforeach; ?>
				<?php endfor; ?>
			</div>
		</div>
	</section>

	<!-- ============ ABOUT ============ -->
	<section class="about" id="about">
		<div class="wrap about-grid">
			<div class="reveal">
				<div class="about-frame">
					<img src="<?php echo marvethabi_img( 'about.jpg' ); ?>" alt="<?php esc_attr_e( 'MarveThabi engineer testing an electrical distribution board', 'marvethabi' ); ?>" class="about-img" loading="lazy">
					<div class="about-badge">
						<span class="num">EST. 2013</span>
						<span><?php esc_html_e( 'Multidisciplinary Consultancy', 'marvethabi' ); ?></span>
					</div>
				</div>
			</div>
			<div class="reveal r-delay-1">
				<h2><?php esc_html_e( 'Our Story', 'marvethabi' ); ?></h2>
				<p class="lead"><?php esc_html_e( 'MarveThabi Consulting Engineers is a multidisciplinary South African engineering consultancy delivering sustainable engineering solutions across the public and private sectors.', 'marvethabi' ); ?></p>
				<p><?php esc_html_e( 'As a Level 1 B-BBEE contributor and 100% black-owned business, the company combines technical excellence with transformation, providing specialised expertise in Reliability Engineering, Asset Management, Electrical Engineering and Geo-Environmental Management.', 'marvethabi' ); ?></p>
				<div class="about-regs">
					<span class="num reg-chip">ECSA</span>
					<span class="num reg-chip">SACNASP</span>
					<span class="num reg-chip">ISO55000</span>
					<span class="num reg-chip">CIDB</span>
				</div>
				<a href="#leadership" class="btn btn-dark"><?php esc_html_e( 'Learn More', 'marvethabi' ); ?></a>
			</div>
		</div>
	</section>

	<!-- ============ SERVICES ============ -->
	<section class="services" id="services">
		<div class="wrap">
			<div class="sec-head reveal">
				<h2><?php esc_html_e( 'Engineering Services', 'marvethabi' ); ?></h2>
				<p><?php esc_html_e( 'Four specialist disciplines, one integrated consultancy.', 'marvethabi' ); ?></p>
			</div>
			<div class="svc-grid">
				<?php foreach ( $mt['services'] as $i => $svc ) : ?>
					<article class="svc-card reveal r-delay-<?php echo esc_attr( $i ); ?>">
						<div class="svc-top">
							<?php marvethabi_icon( $svc['icon'] ); ?>
							<span class="num svc-ref"><?php echo esc_html( $svc['ref'] ); ?></span>
						</div>
						<h3 class="card-title"><?php echo esc_html( $svc['title'] ); ?></h3>
						<ul>
							<?php foreach ( $svc['items'] as $item ) : ?>
								<li><?php echo esc_html( $item ); ?></li>
							<?php endforeach; ?>
						</ul>
						<svg class="svc-bp" viewBox="0 0 300 60" aria-hidden="true">
							<path d="M0 50 H60 V20 H120 V50 H180 L200 30 H260 V50 H300" fill="none" stroke="#336659" stroke-width="1.4"/>
							<circle cx="60" cy="50" r="3" fill="#336659"/>
							<circle cx="180" cy="50" r="3" fill="#336659"/>
						</svg>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ INDUSTRIES ============ -->
	<section class="industries" id="industries">
		<div class="ind-bg" aria-hidden="true"></div>
		<div class="wrap ind-content">
			<div class="sec-head sec-head-light reveal">
				<h2><?php esc_html_e( 'Industries We Serve', 'marvethabi' ); ?></h2>
				<p><?php esc_html_e( 'Specialist support for the sectors that keep the country running.', 'marvethabi' ); ?></p>
			</div>
			<div class="ind-grid">
				<?php foreach ( $mt['industries'] as $i => $ind ) : ?>
					<div class="ind-card reveal r-delay-<?php echo esc_attr( $i % 4 ); ?>">
						<svg viewBox="0 0 48 48" class="ind-icon" aria-hidden="true"><path d="<?php echo esc_attr( $ind[1] ); ?>" fill="none"/></svg>
						<span class="card-title"><?php echo esc_html( $ind[0] ); ?></span>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ WHY ============ -->
	<section class="why">
		<div class="wrap">
			<div class="sec-head reveal">
				<h2><?php esc_html_e( 'Why Choose Us', 'marvethabi' ); ?></h2>
			</div>
			<div class="why-grid">
				<?php foreach ( $mt['why'] as $i => $card ) : ?>
					<div class="why-card reveal r-delay-<?php echo esc_attr( $i ); ?>">
						<span class="num why-num"><?php echo esc_html( str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						<h3 class="card-title"><?php echo esc_html( $card[0] ); ?></h3>
						<p class="card-body"><?php echo esc_html( $card[1] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ STATS ============ -->
	<section class="stats">
		<div class="stats-grid-bg" aria-hidden="true"></div>
		<div class="wrap stats-row">
			<div class="stat"><span class="num stat-v" data-count="100" data-suffix="%">0%</span><span class="stat-l"><?php esc_html_e( 'Black Owned', 'marvethabi' ); ?></span></div>
			<div class="stat"><span class="num stat-v">Level 1</span><span class="stat-l"><?php esc_html_e( 'B-BBEE', 'marvethabi' ); ?></span></div>
			<div class="stat"><span class="num stat-v" data-count="13" data-suffix="+">0+</span><span class="stat-l"><?php esc_html_e( 'Years Experience', 'marvethabi' ); ?></span></div>
			<div class="stat"><span class="num stat-v" data-count="100" data-suffix="+">0+</span><span class="stat-l"><?php esc_html_e( 'Projects', 'marvethabi' ); ?></span></div>
			<div class="stat"><span class="num stat-v" data-count="3" data-suffix="">0</span><span class="stat-l"><?php esc_html_e( 'Core Engineering Disciplines', 'marvethabi' ); ?></span></div>
		</div>
	</section>

	<!-- ============ LEADERSHIP ============ -->
	<section class="leaders" id="leadership">
		<div class="wrap">
			<div class="sec-head reveal">
				<h2><?php esc_html_e( 'Leadership', 'marvethabi' ); ?></h2>
				<p><?php esc_html_e( 'Registered professionals accountable for every deliverable.', 'marvethabi' ); ?></p>
			</div>
			<div class="leader-grid">
				<?php foreach ( $mt['leaders'] as $i => $person ) : ?>
					<article class="leader-card reveal r-delay-<?php echo esc_attr( $i ); ?>">
						<div class="leader-photo">
							<img src="<?php echo marvethabi_img( $person['img'] ); ?>" alt="<?php echo esc_attr( $person['name'] ); ?>" loading="lazy">
							<div class="leader-reveal">
								<ul>
									<?php foreach ( $person['quals'] as $q ) : ?>
										<li><?php echo esc_html( $q ); ?></li>
									<?php endforeach; ?>
								</ul>
							</div>
						</div>
						<h3 class="card-title"><?php echo esc_html( $person['name'] ); ?></h3>
						<p class="leader-role"><?php echo esc_html( $person['role'] ); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ PROCESS ============ -->
	<section class="process" id="process">
		<div class="wrap">
			<div class="sec-head sec-head-light reveal">
				<h2><?php esc_html_e( 'Engineering Process', 'marvethabi' ); ?></h2>
				<p><?php esc_html_e( 'A disciplined path from first consultation to long-term support.', 'marvethabi' ); ?></p>
			</div>
			<div class="proc-grid">
				<?php foreach ( $mt['process'] as $i => $step ) : ?>
					<div class="proc-step reveal r-delay-<?php echo esc_attr( $i % 4 ); ?>">
						<span class="num proc-num"><?php echo esc_html( $step[0] ); ?></span>
						<h3 class="card-title"><?php echo esc_html( $step[1] ); ?></h3>
						<p class="card-body"><?php echo esc_html( $step[2] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ CAPABILITIES ============ -->
	<section class="caps">
		<div class="wrap caps-grid">
			<div class="reveal">
				<div class="caps-visual">
					<?php foreach ( $mt['capabilities'] as $i => $capab ) : ?>
						<img src="<?php echo marvethabi_img( $capab[2] ); ?>" alt="<?php echo esc_attr( $capab[0] ); ?>" class="caps-img<?php echo 0 === $i ? ' active' : ''; ?>" data-cap="<?php echo esc_attr( $i ); ?>" loading="lazy">
					<?php endforeach; ?>
					<span class="num caps-fig" id="caps-fig">FIG 01 &middot; MT-CAP-001</span>
				</div>
			</div>
			<div class="caps-copy reveal r-delay-1">
				<h2><?php esc_html_e( 'Featured Capabilities', 'marvethabi' ); ?></h2>
				<div class="caps-tabs" role="tablist">
					<?php foreach ( $mt['capabilities'] as $i => $capab ) : ?>
						<button class="caps-tab<?php echo 0 === $i ? ' active' : ''; ?>" data-cap="<?php echo esc_attr( $i ); ?>" role="tab" aria-selected="<?php echo 0 === $i ? 'true' : 'false'; ?>">
							<span class="num"><?php echo esc_html( str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span> <?php echo esc_html( $capab[0] ); ?>
						</button>
					<?php endforeach; ?>
				</div>
				<?php foreach ( $mt['capabilities'] as $i => $capab ) : ?>
					<div class="caps-body<?php echo 0 === $i ? ' active' : ''; ?>" data-cap="<?php echo esc_attr( $i ); ?>">
						<h3 class="card-title"><?php echo esc_html( $capab[0] ); ?></h3>
						<p><?php echo esc_html( $capab[1] ); ?></p>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<!-- ============ CONTACT ============ -->
	<section class="contact" id="contact">
		<div class="wrap contact-grid">
			<div class="reveal">
				<h2><?php esc_html_e( 'Start a Project', 'marvethabi' ); ?></h2>
				<p class="contact-lead lead"><?php esc_html_e( 'From municipal electrification to mine-wide asset strategies, the first step is a conversation with a registered engineer.', 'marvethabi' ); ?></p>
				<div class="contact-block">
					<span class="c-label label"><?php esc_html_e( 'Office', 'marvethabi' ); ?></span>
					<p><?php esc_html_e( 'Unit 68 Saliehout Street, Stenostelma, Annlin, Pretoria 0182', 'marvethabi' ); ?></p>
				</div>
				<div class="contact-block">
					<span class="c-label label"><?php esc_html_e( 'Enquiries', 'marvethabi' ); ?></span>
					<p class="num">info@marvethabi.co.za</p>
					<p class="num">+27 82 412 3847</p>
					<p class="num">+27 72 834 7953</p>
				</div>
				<div class="contact-block">
					<span class="c-label label"><?php esc_html_e( 'Professional Registrations', 'marvethabi' ); ?></span>
					<p class="num regs-line">ECSA &middot; SACNASP &middot; CIDB &middot; CSD</p>
				</div>
			</div>
			<div class="reveal r-delay-1">
				<form class="form-card" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>">
					<?php if ( isset( $_GET['sent'] ) && '1' === $_GET['sent'] ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
						<p class="form-notice form-notice-ok"><?php esc_html_e( 'Thank you. A registered engineer will respond within one business day.', 'marvethabi' ); ?></p>
					<?php elseif ( isset( $_GET['sent'] ) && '0' === $_GET['sent'] ) : // phpcs:ignore WordPress.Security.NonceVerification ?>
						<p class="form-notice form-notice-err"><?php esc_html_e( 'Your enquiry could not be sent. Please check the required fields and try again.', 'marvethabi' ); ?></p>
					<?php endif; ?>
					<input type="hidden" name="action" value="marvethabi_contact">
					<?php wp_nonce_field( 'marvethabi_contact', 'marvethabi_nonce' ); ?>
					<div class="form-row">
						<label><?php esc_html_e( 'Full Name', 'marvethabi' ); ?>
							<input type="text" name="mt_name" placeholder="<?php esc_attr_e( 'Your name', 'marvethabi' ); ?>" required>
						</label>
						<label><?php esc_html_e( 'Organisation', 'marvethabi' ); ?>
							<input type="text" name="mt_org" placeholder="<?php esc_attr_e( 'Department, municipality or company', 'marvethabi' ); ?>">
						</label>
					</div>
					<div class="form-row">
						<label><?php esc_html_e( 'Email', 'marvethabi' ); ?>
							<input type="email" name="mt_email" placeholder="you@organisation.gov.za" required>
						</label>
						<label><?php esc_html_e( 'Phone', 'marvethabi' ); ?>
							<input type="tel" name="mt_phone" placeholder="+27">
						</label>
					</div>
					<label><?php esc_html_e( 'Service Required', 'marvethabi' ); ?>
						<select name="mt_service">
							<option value="" disabled selected><?php esc_html_e( 'Select a discipline', 'marvethabi' ); ?></option>
							<?php foreach ( $mt['services'] as $svc ) : ?>
								<option><?php echo esc_html( $svc['title'] ); ?></option>
							<?php endforeach; ?>
						</select>
					</label>
					<label><?php esc_html_e( 'Project Details', 'marvethabi' ); ?>
						<textarea name="mt_details" rows="4" placeholder="<?php esc_attr_e( 'Scope, location and timeline', 'marvethabi' ); ?>"></textarea>
					</label>
					<button type="submit" class="btn btn-brand btn-full"><?php esc_html_e( 'Send Enquiry', 'marvethabi' ); ?></button>
				</form>
			</div>
		</div>
	</section>

</main>

<?php get_footer(); ?>
