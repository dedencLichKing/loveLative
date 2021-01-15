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
	    .then(() => engine.toText('璇'))
        .then(() => engine.shake())
	    .then(() => engine.toText('璇'))
        .then(() => engine.shake())
	    .then(() => engine.toText('笑'))
        .then(() => engine.shake())
	    .then(() => engine.toText('一'))
        .then(() => engine.shake())
	    .then(() => engine.toText('个'))
        .then(() => engine.shake())
	    .then(() => engine.toText('别'))
        .then(() => engine.shake())
	    .then(() => engine.toText('生'))
        .then(() => engine.shake())
        .then(() => engine.toText('气'))
        .then(() => engine.shake())
        .then(() => engine.toText('了'))
        .then(() => engine.shake())
        .then(() => engine.toText('好'))
        .then(() => engine.shake())
	.then(() => engine.toText('不'))
        .then(() => engine.shake())
	    .then(() => engine.toText('好'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
