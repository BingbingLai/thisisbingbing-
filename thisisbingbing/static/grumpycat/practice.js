function forLoop() {
	'use strict';
	for (let i=0; i < 10; i++) {
		console.log(i);
	}
	console.log(i);
}

/* forLoop(); */


function forLoop2() {
	'use strict';
	var funcs = [];
	var i;

    for (let i = 0; i < 10; i++) {
    	funcs.push(function() { console.log(i); });
    }
    funcs.forEach(function(func){func();})

}

forLoop2();

/* 

function color() {
	"use strict";
	var name;
	console.log(typeof name);

	if(2>1) {
		// let value = 'o';
		console.log(typeof name);
		const name = "ha";
	}
}
color();

function specialMultiply() {
	var args = Array.prototype.slice.call(arguments);
	if (args.length === 2){
		return args[0] * args[1];
	}
	return function(anotherNum) { 
		return anotherNum * args[0];
	}

}
function specialMultiplyB() {
	var argument1 = arguments;
	return argument1[0]*argument1[1] || function later(){
		return argument1[0]*arguments[0];
	}
}

function findIndex(arr, callback) {
	var res = arr.filter(callback)[0];
	return arr.indexOf(res);
}

function find(arr, callback) {
	if (arr.length == 0) {
		return "Undefined";
	}
	var first = arr[0], 
	rest = arr.slice(1);
	if(callback(first)) {
		return first;
	}
	return find(rest, callback);
}

	function find2(arr, callback){
		return arr.filter(callback)[0];
	}

function isEven(num) {
	return num%2 === 0;
}

function isOdd(num) {
	return num%2 === 1;
}

function numberFact(num, callback) {
	return callback(num);
}

function randomGame() {
	return funA(0);
}
function funA(counter) {
	return setTimeout(function() {
		var num = Math.random();
		console.log(num);
		if( num > 0.75) {
			console.log(counter);
			return clearTimeout(funA(counter));
		}
		return funA(counter+1);
	}, 1000);
}

function countDown1(num) {
	return setTimeout(function() {
		if(num > 1) {
			num = --num;
			console.log(num);
			return countDown(num);
		}
		console.log("DONE!");
	}, 1000);
}

function reject(arr, callback) {
	console.log(arr.filter(function (elem) {
		return !(callback(elem));
	}));
}

reject([1,2,3,4], function(val){
    return val > 2;
});

reject([2,3,4,5], function(val){
    return val % 2 === 0;
});

function map(arr, callback) {
	var res = arr.reduce(function (acc, elem) {
		acc.push(callback(elem));
		return acc;
	}, []);
	console.log(res);
}

map([1,2,3,4], function(val){
    return val * 2;
});

function each(arr, callback) {
	return arr.map(function(elem){
		return callback(elem);
	})
}

each([1,2,3,4], function(val){
    console.log(val);
});
each([1,2,3,4], function(val){
    console.log(val*2);
});

function makeXOGrid(rows, columns) {
    var arr = funA(rows, columns, 1, []);
    return funB(arr, columns, []);
}

function funA(rows, columns, count, acc){
    if (count > rows* columns) {
        return acc; 
    }
    if (count%2 === 1) {
    	acc.push("X");
    } else {
    	acc.push("O");
    }
    return funA(rows, columns, count+1, acc);
}

function funB(arr, columns, acc) {
	if (arr.length === 0) {
		return acc;
	}
	var first = arr.slice(0, columns), 
	    rest = arr.slice(columns);
	    acc.push(first);
	    return funB(rest, columns, acc); 
}

rotate = function(arr, num) {
	return res = arr.reduce(function(acc, elem) {
		var count = arr.indexOf(elem);
		if(num+count >= arr.length) {
			var pos = (num+count)%arr.length;
			acc[pos] = elem;
			return acc;
		}
		acc[count+num] = elem;
		return acc;
	}, [])
}

var nestedObject = {
	speakers: [{name:"Elie"}, {name:"Tim"}, {name:"Matt"}],
	data: {
		continents: {
			europe: {
				countries: {
					switzerland: {
						capitial: "Bern",
						population: 8000000
					}
				}
			}
		},
		languages: {
			spanish: {
				hello: "Hola"
			},
			french: {
				hello: "Bonjour"
			}
		}
	},
	addSpeaker: function(name) {
		this.speakers.push({name: name});
	}, 
	addLanguage: function(type, language) {
		this.data.languages[type] = {
			hello: language
		}
	},
	addCountry: function(country, capital, population) {
		this.data.continents.europe.countries[country] = {
			capital: capital,
			population: population
		}
	}
}

var nestedData = {
	innerData: {
		order: ['first', 'second', 'third'],
		snacks: ['chips', 'fruit', 'crackers'], 
		numberData: {
			primeNumbers: [2, 3, 5, 7, 11], 
			fibonnaci: [1, 1, 2, 3, 5, 8, 13]
		},
		addSnack: function(snack) {
			console.log(this);
			this.snacks.push(snack);
			return this;
		}
	}
}

var primeNo = nestedData.innerData.numberData.primeNumbers;
var fib = nestedData.innerData.numberData.fibonnaci;
var order = nestedData.innerData.order;

primeNo.map(function (num ) {
	console.log(num);
});

fib.filter(function (num) {
	if(num%2 == 0) {
		console.log(num);
	}
})

console.log(order.second);

nestedData.innerData.addSnack("chocolate");

console.log(nestedData.innerData.snacks);


 
var Dec = function (arr, month) {
	var num = 0, 
	    first = arr[0],
	    rest = arr.slice(1);

	    if(first[1] === month) {
	    	return Dec(rest, month, num+1);
	    } 
}

function cakes(recipe, available) {
	var recipe_keys = Object.getOwnPropertyNames(recipe);

	return Math.min.apply(null, recipe_keys.reduce( function (acc, item) {
		var num = available[item] / recipe[item];
		if (isNaN(num)) {
			toPush = 0;
		} else {
			toPush = Math.round(num-0.5);
		}
		acc.push(toPush);
		return acc;
	}, []));
}

 (ask later Weight weight)
function orderWeight(strng) {
	return strng.split(" ").sort(function (a, b) {
		if (sum(a) === sum(b)) {
			return sum(a) > sum(b) ;
		}
		return sum(a) - sum(b);
	}).join(" ");
}

function sum(str) {
	return str.split('').reduce(function (acc, single) {
		return acc += Number(single);
	}, 0);
}


function pigIt(str){
	return str.split(" ").reduce (function (acc, arr) {
		var s = arr.slice(1).concat(arr[0]).concat("ay");
		return acc = acc.concat(s);
	}, [ ]).join(" ");
}

var moveZeros = function (arr) {
	return arr.reduce(function (acc, item) {
		if(item != 0) {
			acc.res.push(item);

		} else {
			acc.zero.push(item);
		}

	}, { res: [ ],  zero: [ ] });
	var final = acc.res + acc.zero;
	return final ;
}


function findEvenIndex(arr) {
	var res = arr.reduce(function (acc, item) {
    var indexx = acc.currentIndex ++;
		    start = arr.slice(0, indexx), 
		    end = arr.slice(indexx+1);

		    if (sum(start) === sum(end)) {
           acc.ret.push(indexx);
		    }
        return acc;
		    
		}, {ret: [], currentIndex: 0});
	if (res.ret.length > 0) {
		return res.ret[0];
	}
	return -1;

}


function sum(arr) {
  return arr.reduce(function(acc, single) {
    acc += single;
    return acc;
  }, 0);
}



wei's answer
function findEvenIndex(arr) {
	var indexies = arr.map(function(item) {
		return arr.indexOf(item);
	});

	var qualified = indexies.filter(function(index){
		return sum(arr.slice(0, index)) == sum(arr.slice(index+1));
	});

	if (qualified != []) {
		return qualified[0];
	}
	return -1;
}


function sum(arr) {
  return arr.reduce(function(acc, single) {
    acc += single;
    return acc;
  }, 0);
}


function array_diff(a, b){
	return a.filter(function(item) {
		b.map(function(bitem) {
    return item != bitem;
	})
	}
}




function spinWords(s) {
	single = s.split(" ");
	return single.map(function(item) {
		if (item.length < 5) {
			return item;
		} 
		return item.split("").reverse().join("");

		}).join(" ");
}

*/