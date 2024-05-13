console.log('***** Strings *****');

// ******************************

// ! 1. Write a JavaScript function to convert a string into an abbreviated form.

// ? Example - 1: input = “John Doe”  => output= "John D."
// ? Example - 2: input = “John”  => output= "John"
// ? Example - 3: input = “John Doe Marcus”  => output= "John D."

// const input = 'John Doe Marcus';

// const abbreviateName = str => {
//   //   let indexOfSpace = 0;
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (str[i] === ' ') {
//   //       indexOfSpace = i;
//   //       break;
//   //     }
//   //   }
//   //   if (indexOfSpace === 0) {
//   //     return str;
//   //   } else {
//   //     let newStr = '';
//   //     for (let i = 0; i < indexOfSpace; i++) {
//   //       newStr += str[i];
//   //     }
//   //     return (newStr += ' ' + str[indexOfSpace + 1] + '.');
//   //   }

//   const positionOfSpace = str.search(' ');
//   if (positionOfSpace === -1) {
//     return str;
//   } else {
//     const name = str.slice(0, positionOfSpace);
//     return name + ' ' + str[positionOfSpace + 1] + '.';
//   }
// };

// console.log(abbreviateName(input));

// ******************************

// ! 2. Write a JavaScript function to hide email addresses to protect them from unauthorized users. Hint: Just display half of the characters before the @ sign in the email address

// ? Example: input = "nurettin@clarusway.com" => output = "nur*****@clarusway"

// const input = 'nurettin@clarusway.com';

// const emailProtection = str => {
//   //   let positionOfAt = 0;
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (str[i] === '@') {
//   //       positionOfAt = i;
//   //       break;
//   //     }
//   //   }
//   //   let firstPart = '';
//   //   let secondPart = '';
//   //   for (let i = 0; i < positionOfAt; i++) {
//   //     firstPart += str[i];
//   //   }
//   //   for (let i = positionOfAt; i < str.length; i++) {
//   //     secondPart += str[i];
//   //   }
//   //   const averageFirstPart = Math.floor(firstPart.length / 2);
//   //   const star = '*';
//   //   let newName = '';
//   //   for (let i = 0; i < averageFirstPart; i++) {
//   //     newName += firstPart[i];
//   //   }
//   //   for (let i = averageFirstPart; i < firstPart.length; i++) {
//   //     newName += star;
//   //   }
//   //   return newName + secondPart;

//   const position = str.search('@');
//   const name = str.slice(0, position);
//   const mail = str.slice(position);
//   const average = Math.floor(name.length / 2);
//   const newName = name.slice(0, average);
//   const stars = '*'.repeat(name.length - average);
//   return newName + stars + mail;
// };

// console.log(emailProtection(input));

// ******************************

// ! 3. Write a JavaScript function to convert a string into a title format (The first letters of each word should be in capital letters)

// ? Example: input = 'CLARUSWAY is a bOoTcAmP' => output = "Clarusway Is A Bootcamp"

// const input = 'CLARUSWAY is a bOoTcAmP';

// const titleFormat = str => {
//   //   let title = '';
//   //   let convert = true;
//   //   for (let i = 0; i < str.length; i++) {
//   //     if (convert) {
//   //       title += str[i].toUpperCase();
//   //       convert = false;
//   //     } else {
//   //       title += str[i].toLowerCase();
//   //     }
//   //     if (str[i] === ' ') {
//   //       convert = true;
//   //     }
//   //   }
//   //   return title;
//   let title = '';
//   const words = str.split(' ');
//   console.log(words);
//   for (let i = 0; i < words.length; i++) {
//     title += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
//   }
//   return title.trim();
// };

// console.log(titleFormat(input));

// ******************************

// ! 4. Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers.

// ? Example: input =  '025468' => output = `0 - 254 - 6 - 8'

// const input = 254680;

// const evenDash = nbr => {
//   const str = nbr.toString();
//   let evenDashedNbr = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
//       evenDashedNbr += str[i] + '-';
//     } else {
//       evenDashedNbr += str[i];
//     }
//   }
//   return evenDashedNbr;
// };

// console.log(evenDash(input));

// ******************************

// ! 5. Write a JavaScript program that accepts a string as input and swap the case of each character.

// ? Example: input = 'The Quick Brown Fox' => output = 'tHE qUICK bROWN fOX'

const input = 'The Quick Brown Fox';

const swapCase = str => {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    // if (str[i] === str[i].toUpperCase()) {
    //   newStr += str[i].toLowerCase();
    // } else {
    //   newStr += str[i].toUpperCase();
    // }
    newStr +=
      str[i] === str[i].toUpperCase()
        ? str[i].toLowerCase()
        : str[i].toUpperCase();
  }
  return newStr;
};

console.log(swapCase(input));