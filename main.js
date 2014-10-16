requirejs.config({
	paths: {
		'angular': 'bower_components/angular/angular'
	},
	shim: {
		'angular': {
			exports: 'angular'
		}
	},
	deps: [ 'bootstrap' ]
});
