(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
