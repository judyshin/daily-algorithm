function solution(my_string, n) {
    let arr = [...my_string]
    return arr.map((e,idx)=> e.repeat(n)).join('')
}