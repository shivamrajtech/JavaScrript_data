// 'use strict';

// console.log("Hello Javascript Part 2 !");

// let hasDriversLicense = false ;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(" I can drive ");

//  let interface = "Fun";
//  let private = 20;

// //  Function 

// function logger(){
//     console.log ( "Hello this function !")
// }

// // Function calling  / invoking / running 
// logger();
// logger();
// logger();

// function fruitProcessor(apples,oranges){
//     console.log(apples,oranges);
//     const juice =` Juice with ${apples} apples and ${oranges} oranges .`;
//     return juice;
// }

// fruitProcessor(5 , 9);
// //  we have to store in variable 

// const appleJuice = fruitProcessor(5 , 9);
// console.log(appleJuice);
// console.log(fruitProcessor(5 , 9));

// // square function
// function square(number){
//     return number* number;
// }

// const squareNumbre = square(3);
// console.log(`Square of your number is : ${squareNumbre}`);

// // odd or even 

// function oddEven(number){
//   if(number % 2 === 0){
//       console.log(`Your number ${number} is even number!`);
//   }else{
//       console.log(`Your number ${number} is odd number!` )
//   }
// }

// oddEven(9);

// Function declartion & expression

// // function declartion
// function birthYear(yourYear){
//     const age = 2021 - birthYear ;
//     return age;
// }
// // same process with different method
// function calAge(birthYear){
//     return 2021 - birthYear;
// }
// const yourAge = calAge(1997);
// console.log(`Your age is :-> ${yourAge} and you are a looser!`)

// // function expression

// const calcAge2 = function(birthYear){  // this is also called an
//     return 2021-birthYear;
// }
// If we call above function expression , it gives error 
// cannot access "calcAge2 " before initilization.
// but we have not any error in function declartion.
// Note: process called hoisting this 

// check utkarsh elgibal for sex

// function sexAge(age){
//  if (age>=18){
//      console.log('You able to sex with utkarsh 🦄 ');
//  }else {
//      console.log('You are sixer🔥  ')
//  }
// }
// sexAge(22);

// // Function calling other function 

// const  cutPieces =  function (fruit)
// {
//     return fruit * 4;
// };
// function fruitProcessor(apple,orange){
//     const applePieces = cutPieces(apple);
//     const orangePieces = cutPieces(orange);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// };

// console.log(fruitProcessor(5,9));


// // function revewing

// const calcAge = function(bornYear) {
//   return 2021 - bornYear;
// }
// const yearunitRetirement = function(firstName , bornYear){
//     const age = calcAge(bornYear);
//     const retirement = 65 - age ;
//     if (retirement >0) {
//         return retirement;
//         console.log(`${firstName} retires in ${retirement} years`);
//     }else{
//     return -1;
//     console.log(`${firstName} has already retires  `);
//     }
// }

// console.log(yearunitRetirement('Utkarsh',1990));

// // Challenge no 1

// /* 
// Back to the two gymnastics teams , the Dolphins and the Koalas! There is a new gymnastics discipline , which  works differently.
// Each team  completes 3 times , and then the average of the 3 scores is calculated (so one average score per team).

// */

// const calcAverage = (a,b,c) =>( a+ b+c)/3;

// console.log (calcAverage(10,4,2));

// let scoreDolphins = calcAverage( 4,4,4);
// let scoreKoalas = calcAverage();

// console.log(scoreDolphins,scoreKoalas);

// const checkWinner = function (avgDolphins,avgKoalas) {
//   if (avgDolphins >= 2*avgKoalas){
//       console.log(`Dolphins win *****  ${avgDolphins}  vs ${avgKoalas}`);
//   }else if (avgKoalas >= 2*avgDolphins) {
//        console.log(`Koalas  win **** ${avgKoalas} vs ${avgDolphins}`);
//   }else{
//       console.log('Both team are looser');
//   }
// }
// checkWinner(scoreDolphins,scoreKoalas);

// checkWinner(576,111);

// // test 2 
// // Dolphins score (85, 54,51)
// // koalas score (23,34,27)

// scoreKoalas = calcAverage(85, 54,51);
// scoreDolphins =calcAverage (23,34,27);
// console.log(scoreKoalas,scoreDolphins);
// checkWinner(scoreDolphins,scoreKoalas);


//  //*****************************      ARRAYS  ****************************/

//  const studentOne = 'Shivam';
//  const  studentSecond = 'Raina';
//  const studentThird ='Rytham';

// //In Array we can create in one place 

// const student = ['shivam ', 'raina ','rytham '];
// console.log(student);

// //Common Operation 

// const fruits =['apple' ,'banana'];
// console.log(fruits.length);

// //Access an Array item from end of Array
// let first = fruits[0];
// console.log(first);

// let last = fruits[fruits.length-1];
// console.log(last);

// //Loop over an Array 

// fruits .forEach(function(item,index,array) {
//     console.log(item,index);
// });

// const friends =['Shivam', 'suman', 'utkarsh'];

// const  firstName = 'Raj';
// const jonas = [ firstName ,'Maddy' , 2021 - 1997 , 'suraj' , friends];
// console.log(jonas);

// const  calAge=function(year){
//     return 2021- year;
// }
// const years = [1991,1990,1994,1995,1997];

// const age1 = calAge(years[0]);
// const age2 = calAge(years[1]);
// const age3 = calAge(years[2]);
// const age4 = calAge(years[years.length -1]);

// console.log (age1,age2,age3,age4);


// //  **********opertaion ***********

// //push & pop

//  // push
// const meet = ['sam' , 'maddy ', 'naddy'];
// meet.push('nuke'); //last
// meet.unshift('shivam raj'); //start
// console.log(meet);
// //pop
// const frnd = ['sunny', 'gin' , 'sum', 'petter'];
// const popped = frnd.pop();  // last
// console.log(frnd);
// console.log(popped);

// frnd.shift();   //start

// console.log(frnd.indexOf('sum'));
// console.log(frnd.indexOf('gin'));
// console.log(frnd.indexOf('bob'));

// console.log(frnd);

//  frnd.unshift(23);
// console.log(frnd.includes('gin'));
// console.log(frnd.includes('sum'));
// console.log(frnd.includes('bob'));
// console.log(frnd.includes(23));

// if( frnd.includes('sum')){
//     console.log('sum is present ');

// }else{
//     console.log('sum is absent');
// }


// challenge 2
// create a funtion to calculate the tip on the basis of condition if bill  is bettween or equal to 50>= , <=300 they tip 15%  else they tip 20%
// create array list of Bills with the help of  bills data create tips array 
// const calcTip = function(bill){
//     return bill <=300 && bill>=50 ? bill*0.15 : bill*0.20;
// }
// const bills =[40,200,250];
// const  tiplist = [ calcTip (bills[0]) , calcTip(bills[1]),calcTip(bills[0])   ];
// const  total = [bills[0]+tiplist[0 ],bills[1]+tiplist[1 ], bills[2]+tiplist[2]];
// console.log(tiplist , bills , total);


// Array vs object

// // Array  

// const shivamArray = [
//     'Shivam',
//     'raj',
//     2021-1997,
//     ['suman' , 'raina' ,'utkarsh']
// ];

// console.log(shivamArray);

// const shivamObject = {
//     firstName: 'shivam',
//     lastName:'raj',
//     age : 2021-1997,
//     friends: ['suman' ,'raina' , 'utkarsh' ]
// };
// console.log(shivamObject);

//  Dot vs Bracket

// const shivamObject = {
//     firstname: 'shivam',
//     lastname:'raj',
//     age : 2021-1997,
//     friends: ['suman' ,'raina' , 'utkarsh' ],
//     job : 'Devloper'
// };
// console.log(shivamObject.lastname);
// console.log(shivamObject['firstname']);

// const namekey = 'name'
// console.log(shivamObject['first' + namekey]);

// const intrestedIn = prompt('What are you want know about shivam Don ?');
// if (shivamObject[intrestedIn]){
//     console.log(shivamObject[intrestedIn]);
// }else{
//     console.log("You are gandu person");
// }

// // same approach in different way 

// console.log(shivamObject['firstname'] + ' has ' +shivamObject.friends.length+' friends, and his best friend is  called ' +shivamObject.friends[1] );

// console.log(`${shivamObject.firstname}  has ${shivamObject.friends.length} friends, and his best friend is  called ${shivamObject.friends[4]} `);


// Object method 

// const shivamObject = {
//         firstname: 'shivam',
//         lastname:'raj',
//         birthYear : 1997,
//         friends: ['suman' ,'raina' , 'utkarsh' ],
//         job : 'Devloper',
//         hasDriversLicense:true,
//         // caclAge: function (birthYear){
//         //     return 2021 - birthYear
//         //         }
//         caclAge: function (){
//             this.age = 2021 - this.birthYear;
//             return this.age;
//                 },
            
//             getSummary:function(){
//                return  `${shivamObject.firstname} is  a ${this.caclAge()} year old ${shivamObject.job} , and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;    //use ternary operator 
//             }
//     };

// //    console.log(shivamObject.caclAge(1997));
// //    console.log(shivamObject['caclAge'](1997));

// console.log(shivamObject.caclAge());

// console.log(shivamObject.getSummary());

// #######################Challenge 3#

// const shivamObj = {
//     firstname: 'shivam',
//     lastname:'raj',
//     mass:84,
//     height:1.8,
    
//     bmiCalc: function (){
//         this.bodyMass = this.mass / this.height  **2;
//         return this.bodyMass;
//     }
// }
// const utkarshGandu ={
//     firstname:'Utkarsh',
//      lastname:'gandu',
//      mass:65 ,
//      height:1.6,
     
//      bmiCalc: function (){
//          this.bodyMass = this.mass / this.height  **2;
//          return this.bodyMass;
//      }
 
//  }
 
//  shivamObj.bmiCalc();
//  utkarshGandu.bmiCalc();
//  console.log(shivamObj.bodyMass,utkarshGandu.bodyMass);
 
// if(shivamObj.bodyMass>utkarshGandu.bodyMass)
// {
//     console.log(`${shivamObj.firstname } ${shivamObj.lastname } is the king`);
// }else{
//     console.log(`${utkarshGandu.firstname } is the king`);
// }

// const factorial = function (number){
//     let answer = 1;
//     if(number===0 || number===0 ){
//         return answer;
//     }else{
//         for(let i=1;i<=number;i++){
//         answer= answer*i;
//         console.log(answer);
//         }
//         return answer;
//     }

// }


//     const n=5;
    
//     console.log(factorial(n));

// ++++++++++++++for loop+++++++++++

// for(let i =1; i<=10; i+=0.5){
//     console.log('utkarsh gandu',i);
// }




const shivamObject = [
    'shivam',
'raj',
    1997,
 ['suman' ,'raina' , 'utkarsh' ],
 'Devloper',
];


for(let i = shivamObject.length -1 ;  i>=0 ; i-=1){
    const reversedata=i+" " + shivamObject[i];
   console.log(reversedata);
}

for(let num = 1; num<=10; num+=2){
    console.log("*");
}

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.write('*');
    }
    document.write('<br />');
    
}

for(var i=1; i<=10; i*=2){
    console.log("* ".repeat(i));
 }
const number= 6;
if(number===5){
    for(let i =2 ; i<=10;i+=1){
        document.write('<h1>Happy birthday</h1>');
    }
}else{
    document.write('<h1>Not Birthday</h1>');
}

  

