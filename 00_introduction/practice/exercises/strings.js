/*
write a function's body that concat all passed strings to one and returns it
*/
export function concat(...strings) {
  let result = "";

  for (let i = 0; i< strings.length; i++) {
    result += strings[i];
  }

  return  result;
}

/*
write a function's body that returns string
that contains element of initial strings with odd indexes

Example:
'abcd' -> 'ac'
'' -> ''
'test' -> 'ts'
*/
export function oddElements(string) {
  let result = "";

  for (let i = 0; i < string.length; i += 2) {
    result += string[i];
  }

  return  result;
}

/*
write a function's body that returns words count in passed string

Example:
'abcd' -> 1
'' -> 0
'foo bar' -> 2

Note: String has .split(separator) method where seprator is another string
*/
export function wordsCount(string) {
  let array = string.split(' ');

  return (array[0] === "") ? 0 : string.split(' ').length;
}
