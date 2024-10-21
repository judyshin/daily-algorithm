function solution(cipher, code) {
    return [...cipher].filter((e,idx)=> (idx+1) % code === 0).join("");
}