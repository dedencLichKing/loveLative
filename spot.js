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
        .then(() => engine.toText('真的'))
        .then(() => engine.shake())
        .then(() => engine.toText('对不起'))
        .then(() => engine.shake())
	    .then(() => engine.toText('让你'))
        .then(() => engine.shake())
        .then(() => engine.toText('生气啦'))
        .then(() => engine.shake())
        .then(() => engine.toText('给你'))
        .then(() => engine.shake())
        .then(() => engine.toText('道歉啦'))
        .then(() => engine.shake())
        .then(() => engine.toText('我写的'))
        .then(() => engine.shake())
        .then(() => engine.toText('送给你'))
        .then(() => engine.shake())
	    .then(() => engine.toText('L'))
        .then(() => engine.shake())
	    .then(() => engine.toText('O'))
        .then(() => engine.shake())
	    .then(() => engine.toText('V'))
        .then(() => engine.shake())
	    .then(() => engine.toText('E'))
        .then(() => engine.shake())
	    .then(() => engine.toText('笑一笑~'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
