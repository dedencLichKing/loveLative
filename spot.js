(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('群'))
        .then(() => engine.shake())
	    .then(() => engine.toText('主'))
        .then(() => engine.shake())
	    .then(() => engine.toText('是'))
        .then(() => engine.shake())
	    .then(() => engine.toText('我'))
        .then(() => engine.shake())
	    .then(() => engine.toText('小'))
        .then(() => engine.shake())
	    .then(() => engine.toText('弟'))
        .then(() => engine.shake())
	    .then(() => engine.toText('不'))
        .then(() => engine.shake())
	    .then(() => engine.toText('要'))
        .then(() => engine.shake())
        .then(() => engine.toText('欺'))
        .then(() => engine.shake())
        .then(() => engine.toText('负'))
        .then(() => engine.shake())
        .then(() => engine.toText('他'))
        .then(() => engine.shake())
	    .then(() => engine.toText('！'))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
