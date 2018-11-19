<?php

/**
 * Module Name: Tiled Galleries
 * Module Description: Display image galleries in a variety of elegant arrangements.
 * Jumpstart Description: Display image galleries in a variety of elegant arrangements.
 * First Introduced: 2.1
 * Requires Connection: No
 * Auto Activate: No
 * Module Tags: Photos and Videos
 * Feature: Appearance, Jumpstart
 * Sort Order: 24
 * Additional Search Queries: gallery, tiles, tiled, grid, mosaic, images
 */

function jetpack_load_tiled_gallery() {
	include dirname( __FILE__ ) . "/tiled-gallery/tiled-gallery.php";
}

jetpack_load_tiled_gallery();
