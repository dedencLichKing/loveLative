(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('小宝贝'))
        .then(() => engine.shake())
        .then(() => engine.toText('别不说话了'))
        .then(() => engine.shake())
        .then(() => engine.toText('赶紧找我'))
        .then(() => engine.shake())
	.then(() => engine.toText('听到没有'))
        .then(() => engine.shake())
        .then(() => engine.toText('么么哒'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
