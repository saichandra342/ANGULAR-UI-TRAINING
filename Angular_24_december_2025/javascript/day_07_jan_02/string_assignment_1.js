
// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let string = 'saichandra juvadi';
let stringother = '';

for (let m = string.length - 1; m >= 0; m--) {
    stringother = stringother+string[m];
}
console.log(stringother);

// // 2. WAP to reverse words
// 	WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

let strW = "This is javascript class";
let wordsW = strW.split(" ");
let resultW = "";

for (let i = wordsW.length - 1; i >= 0; i--) {
    resultW = resultW + wordsW[i] + " ";
}
console.log(resultW.trim());

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

let strF = "entertainment";
let resultF = "";

for (let i = 0; i < strF.length; i++) {
    let ch = strF[i];
    let count = 0;
    
    for (let j = 0; j < strF.length; j++) {
        if (strF[j] === ch) count++;
    }

    if (count === 1) {
        resultF = ch;
        break;
    }
}
console.log(resultF);

// 4. WAP to print a string in title case
// 	input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'

let strT = "this is javascript class";
let wordsT = strT.split(" ");
let resultT = "";

for (let i = 0; i < wordsT.length; i++) {
    let word = wordsT[i];
    resultT = resultT + word[0].toUpperCase() + word.slice(1) + " ";
}
console.log(resultT.trim());

// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript

let strL = "this is javascript class";
let wordsL = strL.split(" ");
let longest = "";

for (let i = 0; i < wordsL.length; i++) {
    if (wordsL[i].length > longest.length) {
        longest = wordsL[i];
    }
}
console.log(longest);

// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'

let accNo = "12345678987";
let resultAcc =
  accNo.slice(0, 2) + "*".repeat(accNo.length - 4) + accNo.slice(-2);
console.log(resultAcc);
   
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

let ccNo = "1111222233334444";
let resultCC = "";

for (let i = 0; i < ccNo.length; i++) {
    resultCC = resultCC + ccNo[i];
    if ((i + 1) % 4 === 0 && i !== ccNo.length - 1) {
        resultCC = resultCC + "-";
    }
}
console.log(resultCC);
   
// 8. WAP to check if 2 strings are anagram or not
// 	'listen' - 'silent'    anagram(every char of str1 should be there in str2)

let strA1 = "listen";
let strA2 = "silent";

let sorted1 = strA1.split("").sort().join("");
let sorted2 = strA2.split("").sort().join("");
console.log(sorted1 === sorted2);
	
// 9. WAP to remove special character from a string
//    input:- 'hello@#hi&'
//    output:- 'hellohi'

let strS = "hello@#hi&";
let resultS = "";

for (let i = 0; i < strS.length; i++) {
    let ch = strS[i];
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
        resultS = resultS + ch;
    }
}
console.log(resultS);
   
// 10. WAP to move all the special characters to the end of the string
// 	input:- 'hello@#hi&'
//    output:- 'hellohi@#&'

let strM = "hello@#hi&";
let lettersM = "";
let specialsM = "";

for (let i = 0; i < strM.length; i++) {
    let ch = strM[i];
    if ((ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z") || (ch >= "0" && ch <= "9")) {
        lettersM = lettersM + ch;
    } else {
        specialsM = specialsM + ch;
    }
}
console.log(lettersM + specialsM);