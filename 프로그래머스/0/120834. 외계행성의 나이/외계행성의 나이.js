function solution(num) {
    var letters = ['a', 'b', 'c','d','e','f','g','h','i','j','k', 'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var age = '' + num;
    return [...age].map((e)=> letters[e]).join('')
}