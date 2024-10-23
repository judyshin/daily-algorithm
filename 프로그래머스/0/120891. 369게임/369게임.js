function solution(order) {
    var answer = 0;
    while(order > 1){
        if(order % 10 === 0){
            order = Math.floor(order /= 10);
            continue;
        }
        (order % 10) % 3 === 0 ? answer++ : null;
        order = Math.floor(order /= 10);
    }
    return answer;
}