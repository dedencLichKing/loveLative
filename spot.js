(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('小'))
        .then(() => engine.shake())
	    .then(() => engine.toText('翠'))
        .then(() => engine.shake())
	    .then(() => engine.toText('祝'))
        .then(() => engine.shake())
	    .then(() => engine.toText('你'))
        .then(() => engine.shake())
	    .then(() => engine.toText('结'))
        .then(() => engine.shake())
	    .then(() => engine.toText('婚'))
        .then(() => engine.shake())
	    .then(() => engine.toText('快'))
        .then(() => engine.shake())
	    .then(() => engine.toText('乐'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
