(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('你终于来了'))
        .then(() => engine.shake())
        .then(() => engine.toText('对不起用这种方式'))
        .then(() => engine.shake())
        .then(() => engine.toText('和你说对不起'))
        .then(() => engine.shake())
	.then(() => engine.toText('这是我写给你的'))
        .then(() => engine.shake())
        .then(() => engine.toText('希望你能收下'))
        .then(() => engine.shake())
	.then(() => engine.toText('原谅我可以吗'))
        .then(() => engine.shake())
	.then(() => engine.toText('如果你同意了'))
        .then(() => engine.shake())
	.then(() => engine.toText('能加我好友吗？'))
        .then(() => engine.shake())
	.then(() => engine.toText('我有话对你说'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
