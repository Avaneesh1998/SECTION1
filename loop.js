// for(let i=0; i<=10; i++)
// {
//     console.log(i);
// }
// for(let i=20; i<=50; i++){
//  if(i%2!=0){
//     console.log(i)
//  }
// }

// for(let c of nyname){
//     console.log(c);
// }
// for(let n of [23,35,55,95,30]){
//     console.log(n);
// }
// myname = "madam mohan malviya";
// for(let c of myname){
//     if(c=='a'|| c=="i")
//     {
//         console.log(c);
//     }
// }

// console.log(myname.includes('mad'));

// for(let v of 'aeiou')
// {
//     if(myname.includes(v)){
//         console.log(v);
//     }
// }

// FIBONACI

// number = 7;
// n1 = 0, n2 = 1, nextTerm = 0;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }

// PRIME

// const number = 3;
// let isPrime = true;
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// 7&11

// num=23;
// if(num%7==0){
//     if(num%11==0){
//         console.log("didvisible by both");
//     }
//     else{
//         console.log("only didvisible by 7");
//     }
// }
// else{
//     if(num%11==0){
//         console.log("only didvisible by 11");
//     }
//     else{
//         console.log("divisible by none");
//     }
// }

//---------------------------------------------------------------------- ARRAY--------------------------------------------------------------------//

let myarr =['apple', 35476 , 46.45 , false , Math];

// console.log(myarr);

let movies = ['Pathan','KGF','Farzi','Zero','Vedha','Fan'];

// console.log(movies[3]);
// console.log(movies.length);
// console.log(movies.at(-2));
// console.log(movies.slice(1,4));
// console.log(movies.slice(2));
// console.log(movies.slice(2,50));

//addiing elements
movies.push('flashpoint');

// console.log(movies);


movies.unshift('ant man');

// console.log(movies);
 console.log(['batman',...movies,'Inceptio']);
//  console.log([...movies]);
// movies=(['batman',...movies,'Inceptio']);
console.log([...movies.slice(0,4),'jersey',...movies.slice(5)]);







