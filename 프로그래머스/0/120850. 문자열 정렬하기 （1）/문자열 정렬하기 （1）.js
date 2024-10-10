function solution(my_string) {
    var answer = [];
    return Array.from(my_string).filter((e)=> !isNaN(e)).map((e)=> Number(e)).sort((a,b)=>a-b)
}