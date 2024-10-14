function solution(array, n) {
    let answer = 0;
    array.forEach((e)=> {if (e === n) {answer++}})
    return answer;
}