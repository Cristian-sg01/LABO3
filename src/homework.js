(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] *= 5;
}
console.log(numbers); 
  

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

names.sort();

console.log(names); 

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

const uniqueSet = new Set(data);

const uniqueData = Array.from(uniqueSet);

console.log(uniqueData); 


  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  const letterCount = {};
  
  const lowerCaseWord = largeWord.toLowerCase();
  
  for (const letter of lowerCaseWord) {
    if (!letterCount[letter]) {
      letterCount[letter] = 1;
    } else {
      letterCount[letter]++;
    }
  }
    console.log(letterCount); 
  /* Fourth excercise */

})();