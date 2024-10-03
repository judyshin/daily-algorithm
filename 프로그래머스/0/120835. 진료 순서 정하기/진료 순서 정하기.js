function solution(emergency) {
    let copy = [...emergency];
    let answer = Array(emergency.length);
    emergency.sort((a,b)=>b-a).forEach((e, idx)=> {
         answer[copy.indexOf(e)] = idx + 1
    });
    return answer;
}