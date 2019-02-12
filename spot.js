(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('容么么'))
        .then(() => engine.shake())
        .then(() => engine.toText('是你吗'))
        .then(() => engine.shake())
        .then(() => engine.toText('是不是'))
        .then(() => engine.shake())
	.then(() => engine.toText('很厉害呀'))
        .then(() => engine.shake())
        .then(() => engine.toText('biubiu'))
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
