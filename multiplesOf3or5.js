function solution(number){
    var output = 0
    for (var i = 0; i<number;i++){
        if(i % 3 == 0 || i % 5 == 0){
            output = output + i
        }
    }
    return output
}

console.log(solution(10))