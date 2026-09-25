<?php
/**
 * Fallback template.
 *
 * @package MarveThabi
 */

get_header();
?>
<main class="page-shell">
	<div class="wrap">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>
				<article <?php post_class(); ?>>
					<h1><?php the_title(); ?></h1>
					<div class="entry"><?php the_content(); ?></div>
				</article>
			<?php endwhile; ?>
		<?php else : ?>
			<h1><?php esc_html_e( 'Nothing found', 'marvethabi' ); ?></h1>
			<p><?php esc_html_e( 'The page you are looking for does not exist. Use the menu above to continue.', 'marvethabi' ); ?></p>
		<?php endif; ?>
	</div>
</main>
<?php get_footer(); ?>
