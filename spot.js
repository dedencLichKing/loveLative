(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
//    document.getElementById('go').addEventListener('click', start);
    start();
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('悦'))
        .then(() => engine.shake())
	    .then(() => engine.toText('刻'))
        .then(() => engine.shake())
	    .then(() => engine.toText('经销商'))
        .then(() => engine.shake())
	    .then(() => engine.toText('雄起'))
        .then(() => engine.shake())
	    .then(() => engine.toText('咱们组'))
        .then(() => engine.shake())
	    .then(() => engine.toText('牛逼'))
        .then(() => engine.shake())
	    .then(() => engine.toText('！'))
        .then(() => engine.shake())
	    .then(() => engine.toText(''))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
