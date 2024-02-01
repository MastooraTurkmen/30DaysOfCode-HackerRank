function processData(input) {
    //Enter your code here

    const s = input.split('\n');

  for (i = 1; i < s.length; i++) {
    let splitWord = s[i].split('');

    let even = '';
    let odd = '';

    for (let i = 0; i < splitWord.length; i++) {
      if (i % 2 === 0) {
        even = even + splitWord[i];
      } else {
        odd = odd + splitWord[i];
      }
    }
    console.log(even + ' ' + odd);
  }
} 