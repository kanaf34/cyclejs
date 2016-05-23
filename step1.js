var Cycle = require('@cycle/core');
var CycleDOM = require('@cycle/dom');
var Rx = Cycle.Rx;

function main(responses) {
	return {
		DOM: Rx.Observable.just(CycleDOM.h('span', 'Hiiii there!'))
	};
}

var drivers = {
	DOM: CycleDOM.makeDOMDriver('#container')
};