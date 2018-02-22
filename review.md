## JS review for Angular

#### Variables
- Loosely typed, case-sensitive
- 5 primitives: number, string, boolean, undefined, null. Everything else complex object.
- What is scope of a var.
- How test for undeclared variable.
- truthy/falsy
- strict equality

#### Arrays
- push, pop, unshift, shift
- Write frontToBack, backToFront functions

#### Objects
- Mutable name/value pairs.
- Difference object and JSON
- Iterate over array of objects: price/name using forEach and console.log
- for-loop block-scope
- Copy by reference/by value

#### Functions
- Create function: director/title returns object.
- Call before define: hoisting
- Function expression: hoisting diff.
- Function expression with anon functions
- Self-executing IIFE.
- Functions using closure and module patterns
- Runtime scope using THIS and BIND.

#### DOM manipulation

		document.getElementById("fred").style.visibility = "hidden";
		
- What is the DOM?
- jQuery: concise, cross-browser

		$("#fred").hide();
		
- Both: code tightly coupled with DOM.

#### Functional

- map, reduce, fiter, forEach

#### ES6

- Arrow
- Class
- Const
- Destructuring
- let-block
- modules
- template-strings

#### Typescript

- Add types to JS : write-time debugging help, read-time clarity of intent

#### Angular 5

- Uses ES6 Classes and Modules
- Uses Typescript
- Based around idea components
- Angular CLI uses Babel and Webpack to transpile and bundle code to work as ES5 code on older browsers.