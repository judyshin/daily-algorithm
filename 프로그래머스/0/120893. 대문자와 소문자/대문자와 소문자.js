function isUpperCase(char) {
  return char === char.toUpperCase();
}

function solution(my_string) {
    let answer = '';
    return [...my_string].map((e)=> {
        if (isUpperCase(e)) {
            return e.toLowerCase();
        }
        else return e.toUpperCase();
    }).join('')
}