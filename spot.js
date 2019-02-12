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
        .then(() => engine.toText('是不是很好玩'))
        .then(() => engine.shake())
	.then(() => engine.toText('这是写给你的'))
        .then(() => engine.shake())
        .then(() => engine.toText('要不要收下呀'))
        .then(() => engine.shake())
	.then(() => engine.toText('如果你同意了'))
        .then(() => engine.shake())
	.then(() => engine.toText('要不要跟我'))
        .then(() => engine.shake())
	.then(() => engine.toText('说句话呀'))
        .then(() => engine.shake())
	.then(() => engine.toText('哈哈哈~'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
