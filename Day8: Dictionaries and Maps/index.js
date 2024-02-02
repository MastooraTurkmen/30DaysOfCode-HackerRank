// Day 8: Dictionaries and Maps

function processData(input) {
  input = input.split('\n');
  let phoneBook = [];

  for (let i = 1; i <= parseInt(input[0]); i++) {
    let contactArray = input[i].split(' ');
    phoneBook[contactArray[0]] = contactArray[1];
  }

  for (let i = (parseInt(input[0]) + 1); i < input.length; i++) {
    if (phoneBook[input[i]]) {
      console.log(`${input[i]}=${phoneBook[input[i]]}`);
    } else {
      console.log("Not found");
    }
  }
} 