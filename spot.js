(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('快'))
        .then(() => engine.shake())
	    .then(() => engine.toText('点'))
        .then(() => engine.shake())
	    .then(() => engine.toText('发'))
        .then(() => engine.shake())
	    .then(() => engine.toText('一'))
        .then(() => engine.shake())
	    .then(() => engine.toText('个'))
        .then(() => engine.shake())
	    .then(() => engine.toText('大'))
        .then(() => engine.shake())
	    .then(() => engine.toText('红'))
        .then(() => engine.shake())
	    .then(() => engine.toText('包'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
