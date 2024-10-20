function solution(sides) {
    let maxNum = Math.max(sides[0], sides[1], sides[2])
    let maxNumIdx = sides.indexOf(maxNum)
    let sum = 0;
    sides.forEach((e, idx)=>{
        if (idx !== maxNumIdx) {
            sum += e;
        }
    })
    return maxNum < sum ? 1 : 2;
}