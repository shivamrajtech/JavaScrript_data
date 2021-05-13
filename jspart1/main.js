// //  Math operator
// const now = 2037;
// const ageShivam = now - 1997;
// const ageUtkarsh = now - 1990;

// console.log(ageShivam,ageUtkarsh);

// console.log(ageUtkarsh*2,ageUtkarsh/2,2**3);
// // here  2**3 means  2*2*2

// // Now we concatination of two string

// let firstName = "Utkarsh";
// let lastName="gandu";

// console.log( firstName+" "+lastName);

//         // Assigment operator 
// let x = 15;
// x +=10;  // x+=10 is x = x+10;
// x *=4;
// x++;
// x--;
// console.log(x);

// // comparsion operators

// console.log(ageUtkarsh>ageShivam);    //   <,>,>=,<=

// console.log(ageShivam >= 18);

// console.log(now-1990 > now -1997);


// let z , y;
// z = y = 25-10-5;

// console.log(z , y);

// let averageAge = (ageUtkarsh + ageShivam)/2;
// console.log(averageAge);
// console.log(ageShivam, ageUtkarsh, averageAge);


//    challenge 1  BMI calculate

// let  shivamMass=83 ;
// let  utkarshMass=90;
// let  shivamHeight=1.8;
// let  utkarshHeight=1.6;

// let bmiShivam =  shivamMass / shivamHeight **2;
// console.log(bmiShivam);

// let bmiUtkarsh= utkarshMass / utkarshHeight **2;
// console.log(bmiUtkarsh);

//          Strings ,Templete and literals

// 

//  If else example

// const shiavmAge = 13;
// //const isoldEnough = shiavmAge >=18;

// if(shiavmAge>=18){
//     console.log("Shivam can start driving licence !");
// }else{
//     const yearLeft = 18 - shiavmAge;

//     console.log(`Shivam is to young for driving licence. Wait for  ${yearLeft} years .`)
// }

// // control structure 

// // if {

// // }else{

// // }
// const birthyear = 2001;
// let centure ;
// if(birthyear<=2000){
//   centure=20;
// }else{
//     centure=21;
// }
// console.log(centure);


// Challenge no 2

//  let  shivamMass=83 ;
// let  utkarshMass=90;
// let  shivamHeight=1.8;
// let  utkarshHeight=1.6;

// let bmiShivam =  shivamMass / shivamHeight **2;
// console.log(bmiShivam);

// let bmiUtkarsh= utkarshMass / utkarshHeight **2;
// console.log(bmiUtkarsh);

// if (bmiShivam>bmiUtkarsh){
//     console.log (`Shivam BMI ${bmiShivam} is higher than Utkarsh BMI ${bmiUtkarsh}!`)
// }else{
//     console.log(`Utkarsh BMI ${bmiUtkarsh} is higher than Shivam BMI ${bmiShivam}!`)
// }

//    Type conversion and coercion

//   //  conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear)+18);
// console.log(inputYear + 18);
// // + convert into string 
// console.log(inputYear-10);
// console.log(Number('shivam raj'));
// console.log(NaN);
// console.log(String(23) , 23);

// //coercion

// console.log('I am' + 23 + 'year old!');
// console.log('23'- '10' -'3');
// console.log('23' + '10' + '3'); // + always behav different  
// console.log('23'>'10');
 
// let n = '1' + 1;
// n -= 1;
// console.log(n);

// // Truthy and Falsy  values
// //  5 Falsy values :-> 0, null, undefined,' ', NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('shivam'));
// console.log(Boolean({})); // empty object
// console.log(Boolean(0));

// const money = 0;
// if(money){
//     console.log("Don't Spend to much money !");
// }else{
//     console.log("You should get a Job!");
// }

// // == vs ===

// const age = '18';
//  if(age === 18) console.log(" You  just become an adult (srtict) ");

//  if (age == 18 ) console.log(" You just become an adult (loose)");

//  const fav=Number(prompt("What's your favourite Number :"));
//  console.log( fav);
 
//  if (fav ===23){
//      console.log(" Cool ! 23 is an  amazing number !")
//  }else if (fav===7){
//     console.log(" Cool ! 7 is an  amazing number !")
//  }
//  else if( fav ===9 ){
//     console.log(" Cool ! 9 is an  amazing number !")
//  }
//  else{
//      console.log("The number is not 23 or 7 or 9")
//  }
 
//  if(fav != 23) console.log("The number is not cool!")

//  Boolean logic : And (&&), OR ( || ) and NOT (!)

// const hasDriversLicense =  true; //A
// const hasGoodVision= false ; //B

// console.log(hasDriversLicense && hasDriversLicense);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const Utkarsh =  hasDriversLicense && hasGoodVision && !isTired;

// if(Utkarsh){
//     console.log("Utkarsh able to driver the car....");
// }else
// {
//     console.log("Utkarsh not able to drive the car , someone else have to drive the car...")
// }

// const isTired = false;

// console.log( hasDriversLicense || hasGoodVision || !isTired);


// Challenge  3  
/*
 1. Calculate the average socre for each team ,using the test data below 
  2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that can be a draw , so test  for that as well (draw means they have the same score average score  ).
  3. Bonus 1: Include a requirement for a minimum score of 100, with this rule , a team only wins if it has a higher score than the other team , and the same time a score of at least 100 point . HINT:  use a logical operator to test for minimum score , as well as multiple  else-if blocks.
  4. Bonus 2 : minimum  socre also applies to a draw! So  a draw  only happens when both teams have the same score and both have a score greater or equal 100 points , otherwise , no team wins the trophy .
  
  Test Data :  Dolphins score 96 , 108  , 89  and Koalas score : 88 , 91 , 110; 
   Test Data :  Dolphins score 97, 112 , 101  and Koalas score : 189 , 95  , 123;  Test Data :  Dolphins score 97 , 112  , 101  and Koalas score :189 , 95 , 186;



*/
// const avgteamDolphins =  (189+ 95 + 186 )/3;
// const avgteamKoalas = (189+ 95 + 186)/3;
//  console.log (avgteamDolphins, avgteamKoalas);
// if( avgteamDolphins>avgteamKoalas && avgteamDolphins >= 100 ){
//     console.log(`Team Dolphins Score : ${avgteamDolphins}  ,  Team Koalas Score: ${avgteamKoalas}`);
//     console.log( " Team Dolphin is Winner !");
// }else if( avgteamKoalas >avgteamDolphins && avgteamKoalas>= 100 ) {
//     console.log(`Team Dolphins Score : ${avgteamDolphins}  ,  Team Koalas Score: ${avgteamKoalas}`);
//     console.log(" Team Koalas is winner !");
// }else if ( avgteamDolphins === avgteamKoalas && avgteamDolphins>=100 && avgteamKoalas >= 100 ){
//     console.log(`Team Dolphins Score : ${avgteamDolphins}  ,  Team Koalas Score: ${avgteamKoalas}`);
//     console.log(" Match is Draw !");
// }else {
//     console.log (" No one win the trophy , Shivam is winner now");
// }

// switch statement 

// const day = 'sunday';

// switch(day){
//     case 'monday':
//         console.log('Plane for course structure');
//         console.log('Go to coding meetup');
//         break;
//         case 'tuesday':
//             console.log('Prepaer for the Theory Videos');
//             break;
//             case 'wednesday':
//                 case 'thursday':
//                     console.log('Write code examples');
//                     break;
//                     case'saturday':
//                     case'sunday':
//                     console.log('Enjoy the Weekend!');
//                     break;
//                     default:
//                         console.log('Not Valid day!');

// }
// //  Compare with if else

// if (day ==='monday') {
//     console.log('Plane for course structure');
//     console.log('Go to coding meetup');
// }else if (day ==='tuesday') {
//     console.log('Prepaer for the Theory Videos');
// }else if(day === 'wednesday' ||  day === 'thursday'){
//     console.log('Write code examples');
// }else if (day === 'saturday' || day === 'sunday')
// {
//     console.log('Enjoy the Weekend!');
// }else{
//     console.log('Not Valid day!');

// }

// Statment And Expression

// let sum= 2+ 5;   // statment 
// console.log(sum); //expression

// let wel = "Hello ! "; // statment 
// console.log(wel); //expression;


// Ternary operator 

// const age = 23;

// age >= 18 ? console.log('I love to drink Wine') : console.log('I love to drink Water!');

// function getFee(isMember) {
//     return (isMember ? '$2.00' : '$10.00');
//   }
  
//   console.log(getFee(true));
//   // expected output: "$2.00"
  
//   console.log(getFee(false));
//   // expected output: "$10.00"
  
//   console.log(getFee(null));
//   // expected output: "$10.00"
  
// Challenge 4

// Claculate  Tip charge according to the price 

// const bill = 250 ;
// const tip = bill <=300 && bill >=50 ?  bill*0.15 : bill*0.20 ;
//   console.log(`The bill was ${bill} , the tip was ${tip } , and the total value: ${ bill + tip}`);


// (a+b)^2

// let  a =  Number (prompt("Enter your first number : "));

// let b = Number(prompt("Enter your second number: "));
//  let wholeSquare = a*a + 2*a*b + b*b;

// console.log( `  your whole square is : ${wholeSquare}`);