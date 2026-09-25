<?php
/**
 * Footer template.
 *
 * @package MarveThabi
 */

$mt = marvethabi_data();
?>
<footer class="foot">
	<div class="wrap foot-grid">
		<div>
			<div class="foot-logo">
				<img src="<?php echo marvethabi_img( 'logo.png' ); ?>" alt="MarveThabi Consulting Engineers" loading="lazy">
			</div>
			<p class="foot-tag"><?php esc_html_e( 'National infrastructure. Technical excellence. Government confidence.', 'marvethabi' ); ?></p>
		</div>
		<div>
			<span class="foot-h"><?php esc_html_e( 'Engineering Services', 'marvethabi' ); ?></span>
			<?php foreach ( $mt['services'] as $svc ) : ?>
				<a href="<?php echo esc_url( home_url( '/services/' ) ); ?>"><?php echo esc_html( $svc['title'] ); ?></a>
			<?php endforeach; ?>
		</div>
		<div>
			<span class="foot-h"><?php esc_html_e( 'Company', 'marvethabi' ); ?></span>
			<a href="<?php echo esc_url( home_url( '/services/' ) ); ?>"><?php esc_html_e( 'Our Services', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#about' ) ); ?>"><?php esc_html_e( 'About', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#leadership' ) ); ?>"><?php esc_html_e( 'Leadership', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#process' ) ); ?>"><?php esc_html_e( 'Process', 'marvethabi' ); ?></a>
			<a href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"><?php esc_html_e( 'Contact', 'marvethabi' ); ?></a>
		</div>
		<div>
			<span class="foot-h"><?php esc_html_e( 'Contact', 'marvethabi' ); ?></span>
			<span class="foot-addr">Unit 68 Saliehout Street, Stenostelma, Annlin, Pretoria 0182</span>
			<span class="num foot-num">info@marvethabi.co.za</span>
			<span class="num foot-num">+27 82 412 3847</span>
			<span class="num foot-num">+27 72 834 7953</span>
			<a href="https://www.linkedin.com/company/marvethabi-consulting-engineers/" target="_blank" rel="noopener">LinkedIn</a>
		</div>
	</div>
	<div class="wrap foot-base">
		<span class="num">&copy; <?php echo esc_html( gmdate( 'Y' ) ); ?> MarveThabi Consulting Engineers (Pty) Ltd</span>
		<span class="num">Reg No. 2013/000000/07</span>
	</div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
