function fact(n) {
    if (n === 1) return n;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(balls, share) { 
    
    if (balls === share) return 1;
    
    let numer = fact(balls);
    let denom = fact(balls - share) * fact(share);
    
    return Math.round(numer / denom);
}
