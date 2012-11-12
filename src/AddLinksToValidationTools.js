/**
 * Add links to CSS and HTML validators
 * @author: [[User:Helder.wiki]]
 * @author: [[User:Kwj2772]]
 * @source: [[commons:User:Kwj2772/validator.js]]?
 * License: Creative Commons Attribution-ShareAlike (BY-SA) 3.0
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/AddLinksToValidationTools.js]] ([[File:User:Helder.wiki/Tools/AddLinksToValidationTools.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

function addLinkToValidateCSS () {
	var validator = 'http://jigsaw.w3.org/css-validator/validator?&usermedium=all&warning=1&lang=en&uri=',
		uri = mw.config.get( 'wgServer' ) + mw.config.get( 'wgScript' ) +
			'?title=' + mw.config.get( 'wgPageName' ) + '&action=raw&ctype=text/css';
	mw.util.addPortletLink(
		'p-cactions',
		validator + encodeURIComponent( uri ),
		'Validate CSS',
		'ca-validate-css',
		'Validate CSS',
		'v',
		null
	);
}

function addLinkToValidateHTML () {
	var validator = 'http://validator.w3.org/check?uri=',
		uri = 'http:' + mw.config.get( 'wgServer' ) + mw.config.get( 'wgScript' ) +
			'?' + mw.config.get( 'wgCurRevisionId' );
	mw.util.addPortletLink(
		'p-cactions',
		validator + encodeURIComponent( uri ),
		'Validate HTML',
		'ca-validate-html',
		'Validate HTML',
		'v',
		null
	);
}

if ( /\.css$/i.test( mw.config.get( 'wgTitle' ) ) && $.inArray( mw.config.get( 'wgNamespaceNumber' ), [ 2, 8 ] ) !== -1 ) {
	$( addLinkToValidateCSS );
} else {
	$( addLinkToValidateHTML );
}

}( mediaWiki, jQuery ) );