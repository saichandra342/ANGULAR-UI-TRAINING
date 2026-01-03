// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}
let str = "entertainment";
let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);

  if (result.includes(ch)) continue;

  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str.charAt(j) === ch) {
      count++;
    }
  }

  result = result.concat(ch + ":" + count + " ");
}

console.log(result);


// 2. Print the character which is repeated max no of times
//    input: 'hello world'
//    output : 'L'

let str1 = "hello world".toLowerCase();
let maxChar = "";
let maxCount = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str.charAt(i);
  if (ch === " ") continue;

  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str.charAt(j) === ch) count++;
  }

  if (count > maxCount) {
    maxCount = count;
    maxChar = ch;
  }
}

console.log(maxChar.toUpperCase());

// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'
let str2 = "Hello World";
let result2 = "";

for (let i = 0; i < str.length; i++) {
  let ch = str2.charAt(i);

  if (ch === ch.toUpperCase()) {
    result2 = result2.concat(ch.toLowerCase());
  } else {
    result2 = result2.concat(ch.toUpperCase());
  }
}

console.log(result2);


// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'
let str3 = "Rabindra Nath Tagore";
let words = str3.split(" ");

let result3 =
  words[0].charAt(0).concat(". ") +
  words[1].charAt(0).concat(". ") +
  words[2];

console.log(result3);


// 5. Shift the characters by the next character
//    input:  'abcxyz'
//    output: 'bcdyza'
let str4 = "abcxyz";
let result4 = "";

for (let i = 0; i < str4.length; i++) {
  let ch = str4.charAt(i);

  if (ch === "z") {
    result4 = result4.concat("a");
  } else {
    result4 = result4.concat(
      String.fromCharCode(ch.charCodeAt(0) + 1)
    );
  }
}

console.log(result4);

// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true
function isValid(str5) {
  let prev = "";

  while (str5.length !== prev.length) {
    prev = str5;
    str5 = str5.replace("()", "")
             .replace("[]", "")
             .replace("{}", "")
             .trim();
  }

  return str5.length === 0;
}

console.log(isValid("([{ }])"));

// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...
let str6 = "ABC";

for (let i = 0; i < str6.length; i++) {
  for (let j = 0; j < str6.length; j++) {
    for (let k = 0; k < str6.length; k++) {
      if (i !== j && j !== k && i !== k) {
        console.log(
          str6.charAt(i)
            .concat(str6.charAt(j))
            .concat(str6.charAt(k))
        );
      }
    }
  }
}


// 8. Ask user to enter a number and convert that to Roman value
//    input:   9    12
//    output : IX   XII
function intToRoman(num) {
  let values = [10, 9, 5, 4, 1];
  let symbols = ["X", "IX", "V", "IV", "I"];
  let result7 = "";

  for (let i = 0; i < values.length; i++) {
    let times = Math.floor(num / values[i]);
    result7 = result7.concat(symbols[i].repeat(times));
    num = num % values[i];
  }

  return result7;
}

console.log(intToRoman(9));
console.log(intToRoman(12));


// 9. Ask user to enter a roman string and convert that to integer value
//    input:   IX    XII
//    output : 9     12
function romanToInt(str) {
  let total = 0;

  for (let i = 0; i < str.length; i++) {
    let curr = str.charAt(i);
    let next = str.charAt(i + 1);

    let currVal =
      curr === "I" ? 1 :
      curr === "V" ? 5 :
      curr === "X" ? 10 : 0;

    let nextVal =
      next === "I" ? 1 :
      next === "V" ? 5 :
      next === "X" ? 10 : 0;

    if (nextVal > currVal) {
      total -= currVal;
    } else {
      total += currVal;
    }
  }

  return total;
}

console.log(romanToInt("IX"));
console.log(romanToInt("XII"));


// 10. Ask user to enter a  string , and display in below format
//     input: aaabbc
//     output : a3b2c1
let str8 = "aaabbc";
let result8 = "";

for (let i = 0; i < str8.length; i++) {
  let ch = str8.charAt(i);

  if (str8.indexOf(ch) !== i) continue;

  let count = 0;
  for (let j = 0; j < str8.length; j++) {
    if (str8.charAt(j) === ch) count++;
  }

  result8 = result8.concat(ch + count);
}

console.log(result8);
