/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  let arrayLetter = [];
  const result = {};

  for (let i = 0; i < words.length; i++) {
    if (arrayLetter.indexOf(words[i][0]) === -1) {
      arrayLetter.push(words[i][0]);
    }
  }

  for (let i = 0; i < arrayLetter.length; i++) {
    for (let j = 0; j < words.length; j++) {

      if (words[j][0] === arrayLetter[i]) {
        if (typeof result["" + arrayLetter[i]] === "undefined"){
          result["" + arrayLetter[i]] = [];
          result["" + arrayLetter[i]].push( words[j] );
        } else {
          
          result["" + arrayLetter[i]].push( words[j] );
        }
      }
    }

    result["" + arrayLetter[i]].sort();
  }

  return result;
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  // YOUR CODE HERE
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  // YOUR CODE HERE
}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  // YOUR CODE HERE
}
