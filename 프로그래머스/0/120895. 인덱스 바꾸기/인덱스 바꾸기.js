function solution(my_string, num1, num2) {
    let tmp = '';
    my_string = my_string.split('')
    tmp = my_string[num1]
    my_string[num1] = my_string[num2]
    my_string[num2] = tmp;
    return my_string.join("")
}