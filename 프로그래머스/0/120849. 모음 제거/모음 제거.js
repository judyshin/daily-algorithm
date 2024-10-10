function solution(my_string) {
    let answer = [...my_string]
    let vowels = ['a', 'e', 'i', 'o', 'u']
    return answer.filter((e) => !vowels.includes(e)).join('')
}