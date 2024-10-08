function solution(num_list, n) {
    let answer = Array.from(Array(num_list.length / n), () => new Array(n))
    for(let i = 0 ; i < num_list.length / n ; i++){
        answer[i] = num_list.slice(i * n, i * n + n)
    }
    return answer;
}