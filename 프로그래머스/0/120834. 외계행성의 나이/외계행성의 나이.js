function solution(num) {
    var letters = ['a', 'b', 'c','d','e','f','g','h','i','j']
    var age = '' + num;
    return [...age].map((e)=> letters[e]).join('')
}