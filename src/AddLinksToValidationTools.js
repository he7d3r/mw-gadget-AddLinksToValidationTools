/**
 * Add links to CSS and HTML validators
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 * @author: [[User:Kwj2772]]
 * @source: [[commons:User:Kwj2772/validator.js]]?
 * License: Creative Commons Attribution-ShareAlike (BY-SA) 3.0
 */
( function ( mw, $ ) {
'use strict';

function addLinkToValidateCSS () {
	var validator = 'http://jigsaw.w3.org/css-validator/validator?&usermedium=all&warning=1&lang=en&uri=',
		uri = 'http:' + mw.config.get( 'wgServer' ) + mw.config.get( 'wgScript' ) + '?' +
			$.param( {
				title: mw.config.get( 'wgPageName' ),
				oldid: mw.config.get( 'wgCurRevisionId' ),
				action: 'raw',
				ctype: 'text/css'
			} );
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
			'?oldid=' + mw.config.get( 'wgCurRevisionId' );
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