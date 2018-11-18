//1)Create a function that returns the sum of all elements passed in array as parameter. 
//Function (array)=>number

// function showSum(){
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
        
//     }
//        console.log('Sum equals: ' + sum);
// }
// showSum(1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11);

//2)Create a function that returns sum of first and last elements of given array.
// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
// function showSum(list) {
//     let x = list[0]
//     let y = list[list.length-1]
//     return x+y
// }
// console.log(showSum(array))

//3)Create a function that takes a number and return factorial of that number.
// function factorial(x) {
// let result = 1
// let i = 1
// while (i<=x) {
//     result = result*i
//     i++
//     }
//     return result
// }
// console.log(factorial(4))

//4)Create a function that returns given array in reverse order. 

// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
// let arrayReverse = []
// function reverseArray(list) {
//     for (let i = list.length-1; i >= 0; i--) {
//         arrayReverse.push(list[i])
        
//     }
//     return arrayReverse
    
// }
// console.log(reverseArray(array))

//5)Create a function that based on given array returns new array in 
//pattern [a,b,c,d,e,d] -> [a+b, c+d, e+d]

// let array= [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

// function samValues(list) {
//     newArray = [];
//     let valueHolder = 0;
//     for (let i = 0; i < list.length; i+=2) {
//         valueHolder = list[i] + list[i+1];
//         newArray.push(valueHolder);
//         valueHolder = 0;
        
//     }
//     return newArray;
// };

// console.log(sumValues(array));

//6)For time of this example remove last element from the given array. 
// Create a function that based on given array return new array in 
// pattern [a,b,c,d,e] -> [a+b, c+d, e+e]

// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20];

// function newArray(list) {
//     let newList = []
//     for (let i = 0; i < list.length; i+=2) {
//         if (!list[i+1]) {
//             newList.push(list[i]+list[i])
//         }
//         else{
//         newList.push(list[i]+list[i+1])
//         }
   
//     }
//     return newList
// }
// console.log(newArray(array))

//7)Create a function the return one random element from given array. // use random function 

// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]

// function randomElement(list) {
//     return list[Math.floor(Math.random()*list.length)]
// }

// console.log(randomElement(array))

// 8)Create a function that takes two parameters array and number off attempts. 
//Based on number of attempts choose a random number from table that many times and return lowest one.
// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11];

// function randNumber(list, numberOfAttempts) {
//     let container = [];
//     let randomer = 0;
//     let valueHolder = Infinity;
//     for (let i = 0; i < numberOfAttempts; i++) {
//         randomer = Math.floor(Math.random()*(list.length));
//         container.push(list[randomer]);
//     }
//     console.log(container)
//     for (let i = 0; i < container.length; i++) {
//         if (valueHolder > container[i]) {
//             valueHolder = container[i];
//         }
//     }
  
//     return valueHolder;
// };

// console.log(randNumber(array, 3))
// 9)Create a function that takes given array. Then takes a random element, removes it from the array and pushes it to result arrays. 
// This takes place as long as there are elements in source array. 
// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
// let resultArray = []
// function randomElement(list) {
//     for (let i = 0; i < list.length; i++) {
//         let random = Math.floor(Math.random()*list.length)
//         resultArray.push(list[random])
        
//     }
//     return resultArray
// }
// console.log(randomElement(array))

//10)Create a function that on given array will perform operation of adding or subtracting elements. 
//Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)

// let array = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20,11]
// function randomAddOrSubstract(list) {
//     let valueOfAnArray = 0;
//    for (let i = 0; i < list.length; i++) {
//        let randomer = Math.floor(Math.random()*2);
//        if (randomer === 0) {
//            valueOfAnArray = valueOfAnArray - list[i];
//        } else {
//            valueOfAnArray = valueOfAnArray + list[i];
//        };
//    };
//    return valueOfAnArray;
// };

// console.log(randomAddOrSubstract(array));

//11)Create a function that will return the current day name in Polish. 
// let today = new Date();

// function showDay() {
    
// switch (today.getDay()) {
//     case 0:
//        day = "Niedziela"
//         break;
//     case 1:
//         day = "Poniedziałek"
//         break;
//     case 2:
//         day = "Wtorek"
//         break;
//     case 3:
//         day = "Środa"
//         break;
//     case 4:
//         day = "Czwartek"
//         break;
//     case 5:
//         day = "Piątek"
//         break;
//     default:
//         day = "Sobota"
//         break;
//     }
//     return day
// }
// console.log(showDay())

//12)Create a function that tells us how many days till Friday 
// function tillFriday() {
//     const today = new Date().getDay()
//     if (today<5) {
//         console.log('There are ' + (5 - today) + ' days till Friday')
//     } else if (today === 5) {
//         console.log('Today is Friday')
//     } else {
//         console.log('There are ' + ((5 - today)+7) + ' days till Friday')
//     }    
// }
// tillFriday()

//13)Create a function that take two numbers and return the object with 4 fields. 
// Result on 4 basic arithmetic operations.

// function Arithmetic(n1, n2) {
//     let arithmeticObject = {
//         add: n1+n2,
//         substract: n1-n2,
//         multiply: n1*n2,
//         divide: n1/n2
//     }
//     return arithmeticObject;
// };

// let object = Arithmetic(5,8);

// console.log(object);
// console.log(object.add);

//14)Create a function that takes array of objects given below and calls ‘show’ function 
//if one is present on object.
// let objects = [{
//     id:1,
//     show: function(){
//         console.log('first show');
//     }
// },{
//     id:2
// },{
//     id:3,
//     show: function(){
//         console.log('third show');
//     }
// }];

// function showObject(array){
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].show) {
//             array[i].show();
//         }
//     }
// };

// showObject(objects);