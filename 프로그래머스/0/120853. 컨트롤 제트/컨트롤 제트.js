function solution(s) {
   let answer = []
   s.split(" ").forEach((e)=> {
       if (e === 'Z'){
            answer.pop();
       }
       else answer.push(e);
   })
    return answer.length === 0 ?  0 : answer.reduce((acc, cur)=> acc + Number(cur),0)
}