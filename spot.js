(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('Hi你好呀'))
        .then(() => engine.shake())
        .then(() => engine.toText('你看这个'))
        .then(() => engine.shake())
        .then(() => engine.toText('好玩吗'))
        .then(() => engine.shake())
	.then(() => engine.toText('送给你'))
        .then(() => engine.shake())
        .then(() => engine.toText('收下它吧'))
        .then(() => engine.shake())
	.then(() => engine.toText('L'))
        .then(() => engine.shake())
	.then(() => engine.toText('O'))
        .then(() => engine.shake())
	.then(() => engine.toText('V'))
        .then(() => engine.shake())
	.then(() => engine.toText('E'))
        .then(() => engine.shake())
	.then(() => engine.toText('哈哈哈~'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
