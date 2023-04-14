const numbersList = [];

function sum(a, b){
    return a + b
}

function substract(a, b){
    return a - b
}

function father(a, b, callback){
    numbersList.push(callback(a, b))
}

father(10, 8, sum)
father(5, 2, substract)
console.log(numbersList)