//1)Create an iffe that returns an object with three fields: variable value, function showValue() and function reverseValue(). 
//Calling functions either logs the value or reverse it in an object. 
//If value was not provided yet or is empty showValue function is to return information about that. 
//Value type string or number if number to (*(-1)) is string can be converted to umber do so.  

// const iifeObject = (function (value) {
//     let functionObject = {
//         variableValue: value = 3,
//         showValue: (function(){
//             if (value) {
//                 return value
//             } else {
//                 return 'Value is empty'
//             }
//         })(),
//         reverseValue: (function(){
//             if (typeof value == 'number') {
//                 return value*(-1);
//             } else if (typeof value == 'string' && !isNaN(Number(value))) {
//                 return (Number(value))*(-1);
//             } else if (typeof value == 'string' && isNaN(Number(value))) {
//                 return value.split('').reverse().join('')
//             } else {
//               return "Value cannot be converted to number"  
//             } 
//         })() 
//     };
//     return functionObject
// })()

// console.log(iifeObject)


/*2)Change the above iffe. So that returned object doesn’t publicly allow access 
to value but instead of that gives us a function setValue(). Purpose of this function
is quite easy to grasp. Closure pattern. */

// const iifeObject = (function () {
//         let value = 7
//         let functionObject = {
//                 showValue: (function(){
//                 if (value) {
//                     return value
//                 } else {
//                     return 'Value is empty'
//                 }
//             })(),
//             reverseValue: (function(){
//                 if (typeof value == 'number') {
//                     return value*(-1);
//                 } else if (typeof value == 'string' && !isNaN(Number(value))) {
//                     return (Number(value))*(-1);
//                 } else if (typeof value == 'string' && isNaN(Number(value))) {
//                     return value.split('').reverse().join('')
//                 } else {
//                   return "Value cannot be converted to number"  
//                 } 
//             })() 
//         };
//         let getValue = function(){
//             return value;
//         };
//         let setValue = function(newValue){
//            return value = newValue;
//         }
//         return {
//             innerData: getValue,
//             setInnerData: setValue
//     };
//     })()
    
//     console.log(iifeObject.innerData())
    
//     console.log(iifeObject.setInnerData(5))

/* 3)Create a function definition (arrow ). This function is to take one input string/number 
and is to return object described in point above with value set to input. */
// const myFunc = (input) => {
//     let value = input;
//     return {
//             showValue: (function(){
//             if (value) {
//                 return value
//             } else {
//                 return 'Value is empty'
//             }
//         })(),
//         reverseValue: (function(){
//             if (typeof value == 'number') {
//                 return value*(-1);
//             } else if (typeof value == 'string' && !isNaN(Number(value))) {
//                 return (Number(value))*(-1);
//             } else if (typeof value == 'string' && isNaN(Number(value))) {
//                 return value.split('').reverse().join('')
//             } else {
//                 return "Value cannot be converted to number"  
//             } 
//         })() 
//     };
//     let getValue = function(){
//         return value;
//     };
//     let setValue = function(newValue){
//         return value = newValue;
//     }
//     return {
//         innerData: getValue,
//         setInnerData: setValue
// };
// }

// const myObj = myFunc('tekst');
// console.log(myObj);


/* 4) Create four function definitions. One for every basic math operations and taking two input parameters. 
Create one more function. This function is to return calculation object. 
This object is to have parameters object field that holds two operation parameters inside (x and y). 
Function field that points to a function with math operation (defined at the beginning). 
A function setOperation() that sets the field from previous sentence and a Calculate function that makes calculation and returns its value.  */

// const add = (a,b) => a+b;

// const substract = (a,b) => a-b;

// const multiply = (a,b) => a*b;

// const divide = (a,b) => a/b

// const calculationObject = (function (p1, p2) {
//     let operationParams = {
//         x: p1,
//         y: p2,
//     };
//     let operationField
//     let setOperation = (operation) => {
//         if (operation == '+') {
//          operationField = add   
//         } else if (operation == '-') {
//          operationField = substract   
//         } else if (operation == '*') {
//          operationField = multiply   
//         } else if (operation == '/') {
//          operationField = divide
//         } else {
//           return 'wrong'  
//         }
//     };
//     let calculate = () => operationField(operationParams.x,operationParams.y);

//     return {
//         setOperation: setOperation,
//         calculate: calculate
//     }
    
// })(7,5)

// console.log(calculationObject)
// calculationObject.setOperation('*')
// console.log(calculationObject.calculate())


/* 5)Create an array (by hand) of objects and call sum() function in context of each one of them. 
Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.X+this.y}} */

// let objArray = [
//     {
//         X: 1,
//         y: 2
//     },
//     {
//         X:3,
//         y:4
//     },
//     {
//         X:5,
//         y:6
//     }
// ];

// let BaseObject = { X:0,y:0, sum: function (){ return this.X+this.y}};

// (function(array) {
//     for (let i = 0; i < array.length; i++) {
//         let showSum = BaseObject.sum.bind(objArray[i]);
//         console.log(showSum());
//     }
    
// })(objArray)

/* 6)Create an array (by hand) of objects and call sum() function in context of each one of them. 
Sum function is to come from this object BaseObject = { X, sum: function (y){ return this.X+y}}*/

// let objArray = [
//     {
//         X: 1,
//         y: 2
//     },
//     {
//         X:3,
//         y:4
//     },
//     {
//         X:5,
//         y:6
//     }
// ];

// let BaseObject = { X:0, sum: function (y){ return this.X+y}};

// (function(array) {
//     for (let i = 0; i < array.length; i++) {
//     
//         console.log(BaseObject.sum.bind(array[i])(array[i].y));
//     };
// })(objArray)   
/* 7)Given an array of objects, for each object call operation() function in its context but from next object. 
If object is last get back to start of the array for operation function. In loop  (for or while)*/

// const objArray = [
//     {
//         x: 1,
//         y: 'object one value',
//         operation: function () {return 'object one prafix' + this.x + this.y}
//     },
//     {
//         x: 2,
//         y: 'object two value',
//         operation: function () {return 'object two prafix' + this.x + this.y}
//     },
//     {
//         x: 3,
//         y: 'object three value',
//         operation: function () {return 'object three prafix' + this.x + this.y}
//     },
// ]

// function callOperation(array) {
//     for (let i = 0; i < array.length; i++) {
//         let result;
//         if (i == array.length-1) {
//             result = array[i].operation.call(array[0]);
//         } else {
//             result = array[i].operation.call(array[i+1]);
//         }
//     console.log(result);    
//     }
        
// }

// callOperation(objArray)
