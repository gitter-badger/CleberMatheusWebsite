/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#xe000;',
			'icon-home-2' : '&#xe001;',
			'icon-newspaper' : '&#xe002;',
			'icon-pencil' : '&#xe003;',
			'icon-pencil-2' : '&#xe004;',
			'icon-droplet' : '&#xe005;',
			'icon-pictures' : '&#xe006;',
			'icon-picture' : '&#xe007;',
			'icon-camera' : '&#xe008;',
			'icon-music' : '&#xe009;',
			'icon-play' : '&#xe00a;',
			'icon-film' : '&#xe00b;',
			'icon-camera-2' : '&#xe00c;',
			'icon-spades' : '&#xe00d;',
			'icon-clubs' : '&#xe00e;',
			'icon-diamonds' : '&#xe00f;',
			'icon-mail' : '&#xe010;',
			'icon-phone' : '&#xe011;',
			'icon-IcoMoon' : '&#xe012;',
			'icon-safari' : '&#xe013;',
			'icon-opera' : '&#xe014;',
			'icon-IE' : '&#xe015;',
			'icon-firefox' : '&#xe016;',
			'icon-chrome' : '&#xe017;',
			'icon-css3' : '&#xe018;',
			'icon-html5' : '&#xe019;',
			'icon-html5-2' : '&#xe01a;',
			'icon-file-css' : '&#xe01b;',
			'icon-file-xml' : '&#xe01c;',
			'icon-file-zip' : '&#xe01d;',
			'icon-pinterest' : '&#xe01e;',
			'icon-apple' : '&#xe01f;',
			'icon-file-pdf' : '&#xe020;',
			'icon-file-openoffice' : '&#xe021;',
			'icon-file-word' : '&#xe022;',
			'icon-file-excel' : '&#xe023;',
			'icon-file-powerpoint' : '&#xe024;',
			'icon-pinterest-2' : '&#xe025;',
			'icon-stumbleupon' : '&#xe026;',
			'icon-stumbleupon-2' : '&#xe027;',
			'icon-delicious' : '&#xe028;',
			'icon-lastfm' : '&#xe029;',
			'icon-lastfm-2' : '&#xe02a;',
			'icon-libreoffice' : '&#xe02b;',
			'icon-yelp' : '&#xe02c;',
			'icon-linkedin' : '&#xe02d;',
			'icon-linkedin-2' : '&#xe02e;',
			'icon-paypal' : '&#xe02f;',
			'icon-paypal-2' : '&#xe030;',
			'icon-reddit' : '&#xe031;',
			'icon-skype' : '&#xe032;',
			'icon-paypal-3' : '&#xe033;',
			'icon-foursquare' : '&#xe034;',
			'icon-soundcloud' : '&#xe035;',
			'icon-soundcloud-2' : '&#xe036;',
			'icon-foursquare-2' : '&#xe037;',
			'icon-flattr' : '&#xe038;',
			'icon-windows' : '&#xe039;',
			'icon-android' : '&#xe03a;',
			'icon-xing' : '&#xe03b;',
			'icon-xing-2' : '&#xe03c;',
			'icon-finder' : '&#xe03d;',
			'icon-github' : '&#xe03e;',
			'icon-github-2' : '&#xe03f;',
			'icon-git' : '&#xe040;',
			'icon-github-3' : '&#xe041;',
			'icon-wordpress' : '&#xe042;',
			'icon-wordpress-2' : '&#xe043;',
			'icon-joomla' : '&#xe044;',
			'icon-blogger' : '&#xe045;',
			'icon-blogger-2' : '&#xe046;',
			'icon-tumblr' : '&#xe047;',
			'icon-tumblr-2' : '&#xe048;',
			'icon-yahoo' : '&#xe049;',
			'icon-yahoo-2' : '&#xe04a;',
			'icon-amazon' : '&#xe04b;',
			'icon-amazon-2' : '&#xe04c;',
			'icon-tux' : '&#xe04d;',
			'icon-github-4' : '&#xe04e;',
			'icon-vimeo' : '&#xe04f;',
			'icon-arrow-down-right' : '&#xe050;',
			'icon-menu' : '&#xe051;',
			'icon-left-to-right' : '&#xe052;',
			'icon-google-plus' : '&#xe053;',
			'icon-arrow-down' : '&#xe054;',
			'icon-arrow-down-2' : '&#xe055;',
			'icon-enter' : '&#xe056;',
			'icon-right-to-left' : '&#xe057;',
			'icon-gplus' : '&#xe058;',
			'icon-flickr' : '&#xe059;',
			'icon-arrow-down-left' : '&#xe05a;',
			'icon-arrow-left' : '&#xe05b;',
			'icon-arrow-up-left' : '&#xe05c;',
			'icon-arrow-up' : '&#xe05d;',
			'icon-arrow-up-right' : '&#xe05e;',
			'icon-arrow-right' : '&#xe05f;',
			'icon-arrow-down-right-2' : '&#xe060;',
			'icon-arrow-down-3' : '&#xe061;',
			'icon-arrow-down-left-2' : '&#xe062;',
			'icon-arrow-left-2' : '&#xe063;',
			'icon-arrow-up-left-2' : '&#xe064;',
			'icon-arrow-up-2' : '&#xe065;',
			'icon-arrow-up-right-2' : '&#xe066;',
			'icon-arrow-right-2' : '&#xe067;',
			'icon-arrow-left-3' : '&#xe068;',
			'icon-arrow-down-4' : '&#xe069;',
			'icon-arrow-right-3' : '&#xe06a;',
			'icon-arrow-down-left-3' : '&#xe06b;',
			'icon-backspace' : '&#xe06c;',
			'icon-google-drive' : '&#xe06d;',
			'icon-flickr-2' : '&#xe06e;',
			'icon-flickr-3' : '&#xe06f;',
			'icon-share' : '&#xe070;',
			'icon-arrow-left-4' : '&#xe071;',
			'icon-arrow-right-4' : '&#xe072;',
			'icon-arrow-up-3' : '&#xe073;',
			'icon-arrow-down-5' : '&#xe074;',
			'icon-arrow-left-5' : '&#xe075;',
			'icon-arrow-up-4' : '&#xe076;',
			'icon-arrow-right-5' : '&#xe077;',
			'icon-arrow-down-6' : '&#xe078;',
			'icon-arrow-left-6' : '&#xe079;',
			'icon-arrow-up-5' : '&#xe07a;',
			'icon-paragraph-justify' : '&#xe07b;',
			'icon-vimeo-2' : '&#xe07c;',
			'icon-github-5' : '&#xe07d;',
			'icon-google-plus-2' : '&#xe07e;',
			'icon-github-6' : '&#xe07f;',
			'icon-github-7' : '&#xe080;',
			'icon-deviantart' : '&#xe081;',
			'icon-deviantart-2' : '&#xe082;',
			'icon-forrst' : '&#xe083;',
			'icon-forrst-2' : '&#xe084;',
			'icon-dribbble' : '&#xe085;',
			'icon-dribbble-2' : '&#xe086;',
			'icon-dribbble-3' : '&#xe087;',
			'icon-picassa' : '&#xe088;',
			'icon-picassa-2' : '&#xe089;',
			'icon-facebook' : '&#xe08a;',
			'icon-backspace-2' : '&#xe08b;',
			'icon-paragraph-right' : '&#xe08c;',
			'icon-google-plus-3' : '&#xe08d;',
			'icon-youtube' : '&#xe08e;',
			'icon-feed' : '&#xe08f;',
			'icon-feed-2' : '&#xe090;',
			'icon-feed-3' : '&#xe091;',
			'icon-youtube-2' : '&#xe092;',
			'icon-twitter' : '&#xe093;',
			'icon-twitter-2' : '&#xe094;',
			'icon-twitter-3' : '&#xe095;',
			'icon-instagram' : '&#xe096;',
			'icon-facebook-2' : '&#xe097;',
			'icon-facebook-3' : '&#xe098;',
			'icon-new-tab' : '&#xe099;',
			'icon-embed' : '&#xe09a;',
			'icon-code' : '&#xe09b;',
			'icon-bluetooth' : '&#xe09c;',
			'icon-share-2' : '&#xe09d;',
			'icon-share-3' : '&#xe09e;',
			'icon-mail-2' : '&#xe09f;',
			'icon-mail-3' : '&#xe0a0;',
			'icon-mail-4' : '&#xe0a1;',
			'icon-google' : '&#xe0a2;',
			'icon-paragraph-center' : '&#xe0a3;',
			'icon-paragraph-left' : '&#xe0a4;',
			'icon-radio-unchecked' : '&#xe0a5;',
			'icon-font' : '&#xe0a6;',
			'icon-radio-checked' : '&#xe0a7;',
			'icon-checkbox-partial' : '&#xe0a8;',
			'icon-checkbox-unchecked' : '&#xe0a9;',
			'icon-checkbox' : '&#xe0aa;',
			'icon-tab' : '&#xe0ab;',
			'icon-tab-2' : '&#xe0ac;',
			'icon-new-tab-2' : '&#xe0ad;',
			'icon-help' : '&#xe0ae;',
			'icon-eye' : '&#xe0af;',
			'icon-power' : '&#xe0b0;',
			'icon-remove' : '&#xe0b1;',
			'icon-broadcast' : '&#xe0b2;',
			'icon-location' : '&#xe0b3;',
			'icon-box-add' : '&#xe0b4;',
			'icon-comments' : '&#xe0b5;',
			'icon-cog' : '&#xe0b6;',
			'icon-remove-2' : '&#xe0b7;',
			'icon-power-2' : '&#xe0b8;',
			'icon-lightning' : '&#xe0b9;',
			'icon-target' : '&#xe0ba;',
			'icon-target-2' : '&#xe0bb;',
			'icon-accessibility' : '&#xe0bc;',
			'icon-glasses' : '&#xe0bd;',
			'icon-accessibility-2' : '&#xe0be;',
			'icon-mic' : '&#xe0bf;',
			'icon-box-remove' : '&#xe0c0;',
			'icon-user' : '&#xe0c1;',
			'icon-pie' : '&#xe0c2;',
			'icon-briefcase' : '&#xe0c3;',
			'icon-briefcase-2' : '&#xe0c4;',
			'icon-cars' : '&#xe0c5;',
			'icon-bus' : '&#xe0c6;',
			'icon-cube' : '&#xe0c7;',
			'icon-puzzle' : '&#xe0c8;',
			'icon-glasses-2' : '&#xe0c9;',
			'icon-cube-2' : '&#xe0ca;',
			'icon-diamond' : '&#xe0cb;',
			'icon-loading' : '&#xe0cc;',
			'icon-loading-2' : '&#xe0cd;',
			'icon-flip' : '&#xe0ce;',
			'icon-calendar' : '&#xe0cf;',
			'icon-new' : '&#xe0d0;',
			'icon-book' : '&#xe0d1;',
			'icon-file' : '&#xe0d2;',
			'icon-file-2' : '&#xe0d3;',
			'icon-coffee' : '&#xe0d4;',
			'icon-search' : '&#xe0d5;',
			'icon-bell' : '&#xe0d6;',
			'icon-clock' : '&#xe0d7;',
			'icon-history' : '&#xe0d8;',
			'icon-compass' : '&#xe0d9;',
			'icon-flip-2' : '&#xe0da;',
			'icon-upload' : '&#xe0db;',
			'icon-database' : '&#xe0dc;',
			'icon-download' : '&#xe0dd;',
			'icon-user-2' : '&#xe0de;',
			'icon-user-3' : '&#xe0df;',
			'icon-busy' : '&#xe0e0;',
			'icon-trophy' : '&#xe0e1;',
			'icon-gift' : '&#xe0e2;',
			'icon-stats-up' : '&#xe0e3;',
			'icon-bars' : '&#xe0e4;',
			'icon-copy' : '&#xe0e5;',
			'icon-printer' : '&#xe0e6;',
			'icon-undo' : '&#xe0e7;',
			'icon-folder' : '&#xe0e8;',
			'icon-folder-2' : '&#xe0e9;',
			'icon-tag' : '&#xe0ea;',
			'icon-basket' : '&#xe0eb;',
			'icon-support' : '&#xe0ec;',
			'icon-calculate' : '&#xe0ed;',
			'icon-cart' : '&#xe0ee;',
			'icon-box' : '&#xe0ef;',
			'icon-comments-2' : '&#xe0f0;',
			'icon-equalizer' : '&#xe0f1;',
			'icon-remove-3' : '&#xe0f2;',
			'icon-lab' : '&#xe0f3;',
			'icon-fire' : '&#xe0f4;',
			'icon-dashboard' : '&#xe0f5;',
			'icon-meter-fast' : '&#xe0f6;',
			'icon-meter-medium' : '&#xe0f7;',
			'icon-meter-slow' : '&#xe0f8;',
			'icon-rocket' : '&#xe0f9;',
			'icon-zoom-in' : '&#xe0fa;',
			'icon-redo' : '&#xe0fb;',
			'icon-mouse' : '&#xe0fc;',
			'icon-screen' : '&#xe0fd;',
			'icon-forward' : '&#xe0fe;',
			'icon-key' : '&#xe0ff;',
			'icon-reply' : '&#xe100;',
			'icon-laptop' : '&#xe101;',
			'icon-mobile' : '&#xe102;',
			'icon-zoom-out' : '&#xe103;',
			'icon-drawer' : '&#xe104;',
			'icon-comments-3' : '&#xe105;',
			'icon-wrench' : '&#xe106;',
			'icon-unlocked' : '&#xe107;',
			'icon-comments-4' : '&#xe108;',
			'icon-drawer-2' : '&#xe109;',
			'icon-cabinet' : '&#xe10a;',
			'icon-comments-5' : '&#xe10b;',
			'icon-locked' : '&#xe10c;',
			'icon-key-2' : '&#xe10d;',
			'icon-reply-2' : '&#xe10e;',
			'icon-attachment' : '&#xe10f;',
			'icon-minus' : '&#xe110;',
			'icon-arrow-down-right-3' : '&#xe111;',
			'icon-arrow-right-6' : '&#xe112;',
			'icon-arrow-up-right-3' : '&#xe113;',
			'icon-arrow-up-6' : '&#xe114;',
			'icon-arrow-up-left-3' : '&#xe115;',
			'icon-loop' : '&#xe116;',
			'icon-exit' : '&#xe117;',
			'icon-enter-2' : '&#xe118;',
			'icon-plus' : '&#xe119;',
			'icon-minus-2' : '&#xe11a;',
			'icon-checkmark' : '&#xe11b;',
			'icon-cancel' : '&#xe11c;',
			'icon-cancel-2' : '&#xe11d;',
			'icon-blocked' : '&#xe11e;',
			'icon-help-2' : '&#xe11f;',
			'icon-eye-2' : '&#xe120;',
			'icon-clipboard' : '&#xe121;',
			'icon-clipboard-2' : '&#xe122;',
			'icon-flag' : '&#xe123;',
			'icon-plus-2' : '&#xe124;',
			'icon-flag-2' : '&#xe125;',
			'icon-link' : '&#xe126;',
			'icon-link-2' : '&#xe127;',
			'icon-neutral' : '&#xe128;',
			'icon-happy' : '&#xe129;',
			'icon-smiley' : '&#xe12a;',
			'icon-thumbs-up' : '&#xe12b;',
			'icon-thumbs-down' : '&#xe12c;',
			'icon-upload-2' : '&#xe12d;',
			'icon-upload-3' : '&#xe12e;',
			'icon-download-2' : '&#xe12f;',
			'icon-playlist' : '&#xe130;',
			'icon-grid-view' : '&#xe131;',
			'icon-tree-view' : '&#xe132;',
			'icon-cloud' : '&#xe133;',
			'icon-cloud-2' : '&#xe134;',
			'icon-heart' : '&#xe135;',
			'icon-heart-2' : '&#xe136;',
			'icon-star' : '&#xe137;',
			'icon-star-2' : '&#xe138;',
			'icon-star-3' : '&#xe139;',
			'icon-bookmark' : '&#xe13a;',
			'icon-bookmark-2' : '&#xe13b;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c) {
			addIcon(el, icons[c[0]]);
		}
	}
};