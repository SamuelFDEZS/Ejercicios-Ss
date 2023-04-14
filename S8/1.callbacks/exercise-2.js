const userAnwsers = [];

function confirmExample(description){
    return(confirm(description))
}

function promptExample(description){
    return(prompt(description))
    
}

function father(description, callback){
    userAnwsers.push(callback(description))
}

father("Esta es una prueba", confirmExample)
father("Esta es una segunda prueba", promptExample)
console.log(userAnwsers)