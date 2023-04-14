const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
alumns.map((alumn) => {
    let contador = 0
    console.log(alumn)
    for (const x in alumn) {
        console.log(alumn[x])
        if(alumn[x] == true) (contador++)
    }
    if(contador >= 2){
        alumn.isApproved = true
    } else {
        alumn.isApproved = false
    }
})

console.log(...alumns)