function solution(numbers, direction) {
  return  direction === "right" ? numbers.map((e,idx)=> numbers[(idx-1+numbers.length)%numbers.length]) : numbers.map((e,idx)=> numbers[(idx+1)%numbers.length])
}