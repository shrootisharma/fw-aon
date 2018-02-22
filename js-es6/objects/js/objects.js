
// ES5 function declaration

function createCity( name, region ) {

	return {
		name : name,
		region : region
	}
}

// ES5 function expression

var createCity = function( name, region ) {

	return {
		name : name,
		region : region
	}
}

// ES6 concise object literal syntax

function createCity( name, region ) {
	return {
		name,
		region
	}
}

// ES6 concise object literal syntax and arrow function

var createCity = (name, region) => ({ name, region })

createCity( "Seville","Andalusia" );

// ===================================================

// The function keyword can be omitted in object literals

var person = {
	name: "Fred",
	greet() {
		console.log(this.name);
	}
};

// ===================================================

// Object.assign supports mixins : objects acquire the properties/methods of another
// Multiple objects can be merged.

var sing = {
	song : "Yellow Rose Of Texas",
	sing() {
		return this.name + " sings " + this.song;
	}
}

Object.assign( person, sing );

// ===================================================

// Prototypal links to objects can be explicitly set.

let Mongolian = {
	nation : "Mongolian",
	code : "MN",
	greet() {
		return "Сайн уу";
	},
	getCapital() {
		return "Ulaanbaatar";
	}
}

let Icelandic = {
	nation : "Icelandic",
	code : "IS",
	greet() {
		return "halló";
	},
	getCapital() {
		return "Reykjavik";
	}
};

let fred = {
	__proto__ : Mongolian,
	name : "Fred Smith"
}

console.log( fred.greet() , fred.getCapital() );

fred.__proto__ = Icelandic;

console.log( fred.greet() , fred.getCapital() );
