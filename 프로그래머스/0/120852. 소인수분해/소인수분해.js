function solution(n) {
    let answer = [];
    let i = 2;
    while(n > Math.sqrt(n)) {
        if (n % i === 0) {
            if (!answer.includes(i)){
                answer.push(i);    
            }
            n = n / i;
        }
        else i++;
    }
    if (n > 1) {answer.push(n)}
    return answer;
}