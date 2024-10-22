function solution(s) {
    let answer = []
    let map = new Map();
    s.split('').forEach((e)=> {
        if (map.has(e)){
        map.set(e, map.get(e) + 1)}
        else map.set(e, 1)
    })
    map.forEach((val, key)=> {
        if (val === 1) {
            answer.push(key)
        }
    })
    return answer.sort().join('');
}