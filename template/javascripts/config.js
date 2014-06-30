/*global requirejs*/
requirejs.config({
    //points to vendor so that you don't have to
    //fill in `paths` config for every library
	baseUrl: 'javascripts/vendor',
    //shim maps global objects to require.js modules,
    //meant for libraries not intended for use with require.js
	shim: {
		'async': { exports: 'async' },
		'modernizr': { exports: 'Modernizr' },
		'd3': { exports: 'd3' },
		'three': { exports: 'THREE' },
		'Stats': { exports: 'Stats' }
	},
	paths: {
		'app': '../app'
	}
});
