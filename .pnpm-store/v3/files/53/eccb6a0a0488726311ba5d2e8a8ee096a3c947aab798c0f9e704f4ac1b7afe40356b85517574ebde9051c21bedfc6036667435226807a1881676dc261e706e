var assert = require('chai').assert
var cint = require('../src/cint.js')

/***********************************
 * String
 ***********************************/

describe('supplant', function() {

	it('should supplant an array by index', function() {
		assert.equal(cint.supplant('{0} walks his {1} in the {2}.', 
			['Jim', 'dinosaur', 'park']), 
			'Jim walks his dinosaur in the park.')
	})

	it('should supplant an object by key', function() {
		assert.equal(cint.supplant('{owner} walks his {pet} in the {place}.', 
			{ owner: 'Jim', pet: 'dinosaur', place: 'park' }), 
			'Jim walks his dinosaur in the park.', 
			'Supplant with object by key')
	})

	it('should ignore non-existant keys', function() {
		assert.equal(cint.supplant('{owner} walks his {pet} in the {place}.', 
			{ owner: 'Jim', pet: 'dinosaur' }), 
			'Jim walks his dinosaur in the {place}.', 
			'Ignores non-existant keys')
	})

	it('should toString all values to be interpolated', function() {
		var Dino = function() {}
		Dino.prototype.toString = function() { return 'dinosaur' }
		assert.equal(cint.supplant('{owner} walks his {pet}.', 
			{ owner: 'Jim', pet: new Dino() }), 
			'Jim walks his dinosaur.'
		)
	})
})

describe('startsWith', function() {
	it('abc starts with a', function() {
		assert.equal(cint.startsWith('abc', 'a'), true)
	})
	it('abc doesn\'t start with c', function() {
		assert.equal(cint.startsWith('abc', 'c'), false)
	})
	it('Testing if something starts with empty string is always false.', function() {
		assert.equal(cint.startsWith('abc', ''), false)
	})
})

describe('before', function() {
	it('Return the substring before the given delimiter', function() {
		assert.equal(cint.before('ab,cd,ef', ','), 'ab')
	})
})

describe('after', function() {
	it('Return the substring after the first given delimiter', function() {
		assert.equal(cint.after('ab,cd,ef', ','), 'cd,ef')
	})
})

describe('between', function() {
	it('Return the substring between the given two delimiters', function() {
		assert.equal(cint.between('abcdef', 'ab', 'ef'), 'cd')
	})
})

describe('bookend', function() {
	it('Add a string to the beginning and a string to the end of a string.', function() {
		assert.equal(cint.bookend('b', 'a', 'c'), 'abc')
	})
	it('Wrap a string with another string', function() {
		assert.equal(cint.bookend('b', 'a'), 'aba')
	})
	it('Ignores falsey begin and end values', function() {
		assert.equal(cint.bookend('b'), 'b')
	})
})

describe('repeatString', function() {
	it('Repeat a string n times', function() {
		assert.equal(cint.repeatString('abc', 3), 'abcabcabc')
	})
	it('Repeating a string 0 times returns an empty string', function() {
		assert.equal(cint.repeatString('abc', 0), '')
	})
})

describe('toTitleCase', function() {
	it('Capitalize the first letter of each word in a sentence', function() {
		assert.equal(cint.toTitleCase('this is a test'), 'This Is A Test')
	})
	it('Lowercase the rest', function() {
		assert.equal(cint.toTitleCase('tHis is A tEst'), 'This Is A Test')
	})
	it('Do not alter punctuation.', function() {
		assert.equal(cint.toTitleCase('don\'t fail the test.'), 'Don\'t Fail The Test.')
	})
})


/***********************************
 * Number
 ***********************************/

describe('ordinal', function() {
	it('should add the correct ordinal', function() {
		assert.equal(cint.ordinal(1), '1st')
		assert.equal(cint.ordinal(2), '2nd')
		assert.equal(cint.ordinal(3), '3rd')
		assert.equal(cint.ordinal(4), '4th')
		assert.equal(cint.ordinal(5), '5th')
		assert.equal(cint.ordinal(6), '6th')
		assert.equal(cint.ordinal(7), '7th')
		assert.equal(cint.ordinal(8), '8th')
		assert.equal(cint.ordinal(9), '9th')
		assert.equal(cint.ordinal(10), '10th')
		assert.equal(cint.ordinal(11), '11th')
		assert.equal(cint.ordinal(12), '12th')
		assert.equal(cint.ordinal(13), '13th')
		assert.equal(cint.ordinal(14), '14th')
		assert.equal(cint.ordinal(15), '15th')
		assert.equal(cint.ordinal(16), '16th')
		assert.equal(cint.ordinal(17), '17th')
		assert.equal(cint.ordinal(18), '18th')
		assert.equal(cint.ordinal(19), '19th')
		assert.equal(cint.ordinal(20), '20th')
		assert.equal(cint.ordinal(21), '21st')
		assert.equal(cint.ordinal(22), '22nd')
		assert.equal(cint.ordinal(23), '23rd')
		assert.equal(cint.ordinal(24), '24th')
		assert.equal(cint.ordinal(100), '100th')
		assert.equal(cint.ordinal(101), '101st')
		assert.equal(cint.ordinal(102), '102nd')
		assert.equal(cint.ordinal(103), '103rd')
		assert.equal(cint.ordinal(104), '104th')
	})
})

describe('mapNumber', function() {
	it('should map numbers', function() {
		var xTwo = function(n) { return n*2 }
		assert.deepEqual(cint.mapNumber(3, xTwo), [0, 2, 4])
	})
})

describe('addTwo', function() {
	it('Add two numbers.', function() {
		assert.equal(cint.addTwo(4,5), 9)
	})
})

describe('add', function() {
	it('No arguments returns 0', function() {
		assert.equal(cint.add(), 0)
	})
	it('1 argument returns the argument', function() {
		assert.equal(cint.add(1), 1)
	})
	it('2 arguments are added', function() {
		assert.equal(cint.add(1,2), 3)
	})
	it('More than 2 arguments are added', function() {
		assert.equal(cint.add(1,2,3), 6)
	})
})

/***********************************
 * Array
 ***********************************/

// test('orderedGroup', function() {
// })

// test('tally', function() {
// })

describe('tallyProps', function() {
	it('should tally property values', function() {

		var data = [
			{
				ideal: 4,
				past: 3,
				present: 7
			},
			{
				ideal: 3,
				past: 7,
				present: 7
			}
		]

		var expectedTallies = {
			"4": {
				ideal: 1
			},
			"3": {
				past: 1,
				ideal: 1
			},
			"7": {
				present: 2,
				past: 1
			}
		}

		assert.deepEqual(cint.tallyProps(data), expectedTallies)

	})
})

describe('index', function() {
	var arr = [1,2,3,4,5]
	it('Index into an array as normal', function() {
		assert.equal(cint.index(arr, 2), 3)
	})
	it('Negative index', function() {
		assert.equal(cint.index(arr, -1), 5)
	})
	it('Out of bounds index', function() {
		assert.equal(cint.index(arr, 16), 2)
	})

	var str = 'abcde'
	it('Index into an array-like object as normal', function() {
		assert.equal(cint.index(str, 2), 'c')
	})
	it('Negative index of array-like object', function() {
		assert.equal(cint.index(str, -1), 'e')
	})
	it('Out of bounds index of array-like object', function() {
		assert.equal(cint.index(str, 16), 'b')
	})
})

describe('rotate', function() {
	var arr = ['a', 'b', 'c']
	var resultArr = cint.rotate(arr, 0)
	it('Rotate array 0 spaces.', function() {
		assert.deepEqual(resultArr, ['a', 'b', 'c'])
	})
	it('Rotate array 1 space to the left.', function() {
		assert.deepEqual(cint.rotate(['a', 'b', 'c'], 1), ['b', 'c', 'a'])
	})
	it('Returns a new array instance', function() {
		assert.notEqual(arr, resultArr)
	})
	it('Does not modify the original array', function() {
		assert.deepEqual(arr, ['a', 'b', 'c'])
	})
	it('Rotate an array more spaces than its length.', function() {
		assert.deepEqual(cint.rotate(['a', 'b', 'c'], 5), ['c', 'a', 'b'])
	})
	it('Rotate array 1 space to the left.', function() {
		assert.deepEqual(cint.rotate(['a', 'b', 'c'], -1), ['c', 'a', 'b'])
	})
})

describe('toObject', function() {
	it('should convert an array to an object', function() {
		var animals = ['cat', 'dog', 'gecko']
		var pluralAnimals = cint.toObject(animals, function(animal) {
			return cint.keyValue(animal, animal + 's')
		})
		assert.deepEqual(pluralAnimals, {
			cat: 'cats',
			dog: 'dogs',
			gecko: 'geckos'
		})
	})
})

describe('spliced', function() {
	var arr = [1,2,3,4,5]
	it('should splice an array', function() {
		assert.deepEqual(cint.spliced(arr, 2, 1, 100, 200, 300), [1,2,100,200,300,4,5])
	})
	it('Original array is unchanged.', function() {
		assert.deepEqual(arr, [1,2,3,4,5])
	})
})

describe('chunk', function() {
	var arr = [1,2,3,4,5,6,7,8,9,10]
	it('should split an array into chunks', function() {
		assert.deepEqual(cint.chunk(arr, 1), [[1,2,3,4,5,6,7,8,9,10]])
		assert.deepEqual(cint.chunk(arr, 2), [[1,2,3,4,5], [6,7,8,9,10]])
		assert.deepEqual(cint.chunk(arr, 3), [[1,2,3,4], [5,6,7], [8,9,10]])
		assert.deepEqual(cint.chunk(arr, 7), [[1,2], [3,4], [5,6], [7], [8], [9], [10]])
		assert.deepEqual(cint.chunk(arr, 10), [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])
	})
	it('Original array is unchanged', function() {
		assert.deepEqual(arr, [1,2,3,4,5,6,7,8,9,10])
	})
})


/***********************************
 * Object
 ***********************************/

// object
describe('keyValue', function() {
	it('Creates a key-value pair.', function() {
		assert.deepEqual(cint.keyValue('a',1), {a:1})
	})
	it('Creates a new object instance each time.', function() {
		assert.notEqual(cint.keyValue('a',1), cint.keyValue('a',1))
	})
})

describe('getValue', function() {
	var o = {a:1}
	it('Gets the value of a key of the gven object', function() {
		assert.equal(cint.getValue(o, 'a'), 1)
	})
})

describe('setValue', function() {
	var o = {a:1}
	it('Sets the value of the given existing key', function() {
		cint.setValue(o, 'a', 2)
		assert.deepEqual(o, {a:2})
	})

	it('Sets the value of the given new key', function() {
		cint.setValue(o, 'b', 10)
		assert.deepEqual(o, {a:2, b:10})
	})

	it('Returns the object', function() {
		assert.equal(cint.setValue(o, 'a', 10), o)
	})
})

describe('mapOverKey', function() {
	
	var increment = function(n) { return ++n }
	var people = [
		{ name: 'Bob', age: 26 },
		{ name: 'Tia', age: 32 },
		{ name: 'José', age: 40 }
	]
	it('Maps the given function over the values of a key', function() {
		var olderPeople = [
			{ name: 'Bob', age: 27 },
			{ name: 'Tia', age: 33 },
			{ name: 'José', age: 41 }
		]
		var incrementAge = cint.mapOverKey(increment, 'age')
		assert.deepEqual(people.map(incrementAge), olderPeople)
	})

	it('Maps the given function over the values of a key and assigns them to a new key', function() {
		var nextPeople = [
			{ name: 'Bob', age: 27, nextAge: 28 },
			{ name: 'Tia', age: 33, nextAge: 34 },
			{ name: 'José', age: 41, nextAge: 42 }
		]
		var incrementNextAge = cint.mapOverKey(increment, 'age', 'nextAge')
		assert.deepEqual(people.map(incrementNextAge), nextPeople)
	})

})

describe('joinObject', function() {
	var o = { a: 1, b: 2, c: 3 }
	it('Join object keys and values together into a string', function() {
		assert.equal(cint.joinObject(o, '&', '='), 'a=1&b=2&c=3')
	})
	it('Empty object gets joined into an empty string', function() {
		assert.equal(cint.joinObject({}, '&', '='), '')
	})
})

describe('mapObject', function() {
	it('should map an object to an object with new key/values', function() {
		var o = { a: 1, b: 2, c: 3 }
		var swap = function(k,v) { return cint.keyValue(v,k) }
		assert.deepEqual(cint.mapObject(o, swap), { '1': 'a', '2': 'b', '3': 'c' })
	})
})

describe('toArray', function() {
	var o = { a: 1, b: 2, c: 3 }
	it('should convert an object to an array', function() {
		assert.deepEqual(cint.toArray(o, function(key, value) {
			return key + '-' + value
		}), ['a-1', 'b-2', 'c-3'])
	})

	it('should convert an object to an array of { key: ____, value: ____ } objects if no function is given.', function() {
		assert.deepEqual(cint.toArray(o), [
			{ key: 'a', value: 1 },
			{ key: 'b', value: 2 },
			{ key: 'c', value: 3 }
		])
	})
})

describe('filterObject', function() {
	var o = { a: 1, b: 2, c: 3 }

	it('Filter an object based on its keys and values', function() {
		assert.deepEqual(cint.filterObject(o, function(key, value) {
			return key !== 'b' && value !== 3
		}), { a: 1 })
	})

	it('Original object is not modified.', function() {
		assert.deepEqual(o, { a: 1, b: 2, c: 3 })
	})
})

describe('changeKeys', function() {
	// Assertions, ok, equal, notEqual, deepEqual, notDeepEqual, strictEqual, notStrictEqual
	var oldObject = { fname: 'Raine', lname: 'Lourie', specialty: 'Javascript' }
	var newObject = cint.changeKeys( oldObject, { fname: 'first', lname: 'last' })
	it('Old object is unmodified.', function() {
		assert.deepEqual(oldObject, { fname: 'Raine', lname: 'Lourie', specialty: 'Javascript' })
	})
	it('New object ontains modified keys.', function() {
		assert.deepEqual(newObject, { first: 'Raine', last: 'Lourie', specialty: 'Javascript' })
	})

})

describe('tap', function() {
	
	var o = { a: 10 }
	var incrementA = function(o) { o.a++ }

	it('Returns the given object', function() {
		assert.equal(cint.tap(incrementA, o), o)
	})
	it('Invokes the given function on the object', function() {
		assert.deepEqual(o, { a: 11 })
	})

})

describe('look', function() {
	it('Returns the argument', function() {
		assert.equal(cint.look('test:look'), 'test:look')
	})
	// Cant' really test the console.log
})


/***********************************
 * Function
 ***********************************/

describe('not', function() {
	var yes = function() { return true }
	var no = function() { return false }
	var I = function(x) { return x }
	it('Reverses true to false.', function() {
		assert.equal(cint.not(yes)(), false)
	})
	it('Reverses false to true.', function() {
		assert.equal(cint.not(no)(), true)
	})
	it('Works with arguments.', function() {
		assert.equal(cint.not(I)(true), false)
	})
	it('Works with arguments.', function() {
		assert.equal(cint.not(I)(false), true)
	})
	it('Works with non-booleans.', function() {
		assert.equal(cint.not(I)('a'), false)
	})
	it('Works with non-booleans', function() {
		assert.equal(cint.not(I)(undefined), true)
	})
})

describe('partialAt', function() {
	var subtract = function(x,y) { return x - y }
	it('Inject arguments at the beginning.', function() {
		var subtractFromTen = cint.partialAt(subtract, 0, [10])
		assert.equal(subtractFromTen(1), 9)
	})

	it('Inject arguments in the middle.', function() {
		var subtractTen = cint.partialAt(subtract, 1, [10])
		assert.equal(subtractTen(100), 90)
	})

	it('Handles negative indexes', function() {
		var subtractTwenty = cint.partialAt(subtract, -1, [20])
		assert.equal(subtractTwenty(100), 80)
	})
})

describe('aritize', function() {
	it('should limit the arity of a function', function() {
		var joinEm = function() { 
			var givenArgs = Array.prototype.slice.call(arguments, 0)
			return givenArgs.join('')
		}
		var joinTwo = cint.aritize(joinEm, 2)
		assert.equal(joinTwo('a', 'b', 'c', 'd', 'e'), 'ab')
	})
})

// describe('callTillValue', function() {
// })

describe('spy', function() {
	it('should call a custom log function', function(done) {
		
		function add(x, y) { return x + y }

		function log(f, args, out) { 
			assert.equal(f, add, 'first argument is the function')
			assert.deepEqual(args, [1,2], 'second argument is an array of arguments to that function')
			assert.equal(out, 3, 'third argument is the return value of the function')
			done()
		}

		cint.spy(add, log)(1,2)
	})
})

describe('inContext', function() {
	var person = { name: 'Cecil' }
	it('calls the given function in the context of the first argument', function() {
		var getName = function() { return this.name }
		var getNameInContext = cint.inContext(getName)
		assert.equal(getNameInContext(person), 'Cecil')
	})

	it('passes other arguments as normal', function() {
		var greet = function(greeting) { return greeting + ' ' + this.name }
		var greetInContext = cint.inContext(greet)
		assert.equal(greetInContext(person, 'Hi'), 'Hi Cecil')
	})
})

describe('toAsync', function() {
	it('should return a function that invokes the given function and passes its results to a node-style callback', function(done) {
		function add(x, y) { return x + y }
		var addAsync = cint.toAsync(add)

		addAsync(1, 2, function(error, result) {
			assert.notOk(error, 'error is null when successful')
			assert.equal(result, 3, 'gives the result in a callback')
			done()
		})
	})
	it('pass error as first argument to callback', function(done) {
		function toss() { throw new Error('Got tossed') }
		var tossAsync = cint.toAsync(toss)

		tossAsync(function(error, result) {
			assert.instanceOf(error, Error)
			assert.equal(error.message, 'Got tossed')
			assert.notOk(result, 'no result')
			done()
		})
	})
})


/***********************************
 * Utility
 ***********************************/

describe('compare', function() {
	it('Returns 1 if a > b', function() {
		assert.equal(cint.compare(2,1), 1)
	})
	it('Returns 0 if a == b', function() {
		assert.equal(cint.compare(1,1), 0)
	})
	it('Returns -1 if a < b', function() {
		assert.equal(cint.compare(1,2), -1)
	})
	it('Returns 1 if a > b for strings', function() {
		assert.equal(cint.compare('ace', 'Ann'), 1)
	})
	it('Returns 0 if a == b for strings', function() {
		assert.equal(cint.compare('ace', 'ace'), 0)
	})
	it('Returns -1 if a < b for strings', function() {
		assert.equal(cint.compare('Ann', 'ace'), -1)
	})
})

describe('compareProperty', function() {
	var small = { n: 1 }
	var big = { n: 2 }
	var compareN = cint.compareProperty.bind(cint, 'n')
	it('Returns 1 if a > b', function() {
		assert.equal(compareN(big, small), 1)
	})
	it('Returns 0 if a == b', function() {
		assert.equal(compareN(big, big), 0)
	})
	it('Returns -1 if a < b', function() {
		assert.equal(compareN(small, big), -1)
	})
})

// test('dynamicCompare', function() {
// })

// test('equals', function() {
// })

describe('isValue', function() {
	it('false is not valueful', function() {
		assert.equal(cint.isValue(null), false)
	})
	it('undefined is not valueful', function() {
		assert.equal(cint.isValue(undefined), false)
	})
	it('empty string is not valueful', function() {
		assert.equal(cint.isValue(''), false)
	})
	it('0 is valueful', function() {
		assert.equal(cint.isValue(0), true)
	})
	it('1 is valueful', function() {
		assert.equal(cint.isValue(1), true)
	})
	it('false is valueful', function() {
		assert.equal(cint.isValue(false), true)
	})
	it('true is valueful', function() {
		assert.equal(cint.isValue(true), true)
	})
	it('a string is valueful', function() {
		assert.equal(cint.isValue('test'), true)
	})
})

// test('hash', function() {
// })

// test('guid', function() {
// })

describe('typeOf', function() {
	it('should work for null', function() {
		assert.equal(cint.typeOf(null), 'null')
	})
	it('should work for undefined', function() {
		assert.equal(cint.typeOf(undefined), 'undefined')
	})
	it('should work for string', function() {
		assert.equal(cint.typeOf('test'), 'string')
	})
	it('should work for number', function() {
		assert.equal(cint.typeOf(1), 'number')
		assert.equal(cint.typeOf(NaN), 'number')
	})
	it('should work for array', function() {
		assert.equal(cint.typeOf([]), 'array')
	})
	it('should work for object', function() {
		assert.equal(cint.typeOf({}), 'object')
	})
	it('should work for function', function() {
		assert.equal(cint.typeOf(function(){}), 'function')
	})
})

describe('new', function() {
	it('should create an instance using the given constructor', function() {
		var Person = function(name, age) {
			this.name = name
			this.age = age
		}
		var p = cint.new(Person, ['Raine', 26])
		assert.instanceOf(p, Person)
		assert.equal(p.name, 'Raine')
		assert.equal(p.age, 26)
	})
})

describe('intoString', function() {
	it('Converts a number to a string', function() {
		assert.equal(cint.intoString(4), '4')
	})
	it('Converts a boolean to a string', function() {
		assert.equal(cint.intoString(true), 'true')
	})
	it('should throw a TypeError if null is passed', function() {
		assert.throws(function() { cint.intoString(null) }, 'Cannot read property \'toString\' of null')
	})
	it('should throw a TypeError if undefined is passed', function() {
		assert.throws(
			cint.intoString.bind(cint, undefined), 'Cannot read property \'toString\' of undefined')
	})
})

