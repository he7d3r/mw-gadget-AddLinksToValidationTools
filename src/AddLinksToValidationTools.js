/**
 * CSS validator
 * @author: [[User:Kwj2772]]
 * @source: [[commons:User:Kwj2772/validator.js]]?
 * License: Creative Commons Attribution-ShareAlike (BY-SA) 3.0
 */

if (/\.css$/i.test( mw.config.get( 'wgTitle' ) )
	&& $.inArray( mw.config.get( 'wgNamespaceNumber' ), [ 2, 8 ] ) > -1
) {
	$(function () {
		var validator = 'http://jigsaw.w3.org/css-validator/validator?&usermedium=all&warning=1&lang=en&uri=',
			uri = mw.config.get( 'wgServer' ) + mw.config.get( 'wgScript' ) + '?title=' + mw.config.get( 'wgPageName' ) + '&action=raw&ctype=text/css',
			encodeduri = encodeURIComponent(uri);
		mw.util.addPortletLink('p-cactions', validator + encodeduri, 'validate CSS', 'ca-validatecss', 'validate CSS', 'v', null);
	});
}