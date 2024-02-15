<?php
/**
 * Redirect functions and definitions
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 * @package Redirect
 * @since Redirect 1.0
 */

add_action("init", function() {
	register_post_type("blog", [
		"public" => true,
		"label" => "Bejegyzések (Új)",
		"show_in_graphql" => true,
		"graphql_single_name" => "CustomPost",
		"graphql_plural_name" => "CustomPosts"
	]);
	register_post_type("tervrajzok", [
		"public" => true,
		"label" => "Tervrajzok",
		"show_in_graphql" => true,
		"graphql_single_name" => "Blueprint",
		"graphql_plural_name" => "Blueprints"
	]);
	register_post_type("oldalak", [
		"public" => true,
		"label" => "Oldalak (Új)",
		"show_in_graphql" => true,
		"graphql_single_name" => "CustomPage",
		"graphql_plural_name" => "CustomPages"
	]);
});

/* Remove the default post type */
/* https://wordpress.stackexchange.com/questions/293148/how-do-i-remove-the-default-post-type-from-the-admin-toolbar */
add_action( "admin_menu", "remove_default_post_type" );
function remove_default_post_type() {
	remove_menu_page( "edit.php" );
}

add_action( "admin_bar_menu", "remove_default_post_type_menu_bar", 999 );
function remove_default_post_type_menu_bar( $wp_admin_bar ) {
	$wp_admin_bar -> remove_node( "new-post" );
}

add_action( "admin_footer", "remove_add_new_post_href_in_admin_bar" );
function remove_add_new_post_href_in_admin_bar() {
    ?>
    <script type="text/javascript">
        function remove_add_new_post_href_in_admin_bar() {
            var add_new = document.getElementById("wp-admin-bar-new-content");
            if(!add_new) return;
            var add_new_a = add_new.getElementsByTagName("a")[0];
            if(add_new_a) add_new_a.setAttribute("href","#!");
        }
        remove_add_new_post_href_in_admin_bar();
    </script>
    <?php
}

add_action( "init", "remove_frontend_post_href" );
function remove_frontend_post_href(){
    if( is_user_logged_in() ) {
        add_action( "wp_footer", "remove_add_new_post_href_in_admin_bar" );
    }
}

add_action( "wp_dashboard_setup", "remove_draft_widget", 999 );
function remove_draft_widget(){
	remove_meta_box( "dashboard_quick_press", "dashboard", "side" );
}
