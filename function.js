// function add(a,b){
//     let c=a+b;
//     console.log(c);
// }
// function sub(a,b){
//     if(a>b){
//         console.log (a-b);
//     }
//     else{
//         console.log (b-a);
//     }
// }
// function mul(a,b){
//     console.log (a*b);
// }
// function div(a,b){
//     console.log (a/b);
// }
// let a = prompt("Enter the first number : ");
// let b = prompt("Enter the second number : ");
// let num=prompt("Enter 1 for addition , 2 for subtraction, 3 for multiplication,4 for division : ");
// if(num==1){
//     add(a,b);
// }
//     else if(num==2){
//         sub(a,b);
//     }
//     else if(num==3){
//         mul(a,b);
//     }
//     else if(num==4){
//         div(a,b);
//     }
//     else{
//        let num=prompt("Enter the correct value");
//     }
// <!-- create a function which return the number of vowels in given string from the user -->
// let a = prompt("Enter the word : ");
// let count = 0;
// vowel(a);
// function vowel(a1){
//     for(let ch of a1){
//         if(ch=="a"||ch=="i"|| ch=="o"|| ch=="u"|| ch=="e"){
//             count++
//         }

//     }
//     console.log(count);
// }




// <!-- create a function which return the number of vowels in given string from the user -->
// let str = ["instagram","Whatsup","snapchat","facebook","Youtube"];
// let index = str.indexOf["facebook"];
// if(index !=-1){
//     str[3]="gmail";
// }
// str.push("linkedin");
// console.log(str);
const numberTocheck = 153;
if(isArmstrongNumber(numberToCheck)){
    console.log('${numberTocheck} is an Armstrong number');

}else {
    console.log('${numberTocheck} is not an Armstrong number');
}
function isArmstrongNumber(num){
    //convert number to string
    const strNum = num.toString();
    const numDigits = strNum.length;
    // Calculator the sum of each digit raised to the  power of the number of digits

    let sum = 0;
    for(let i =0;i<numDigits;i++){
        const digit = parseInt(strNum[i],10);
        sum += Math.pow(digit, numDigits);
    }
    // Check if the sum is equal to the original number
    return sum === num;
}