function solution(my_string) {
    let answer = [];
    [...my_string].forEach((e)=> {
        if(!answer.includes(e)) {
            answer.push(e)
        }
    })
    return answer.join("");
}