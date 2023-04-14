//No entendí la parte de pasar como parámetro de la API el input
const button$$ = document.querySelector("button")
const input$$ = document.querySelector("input")
let acumulador = 0
const get = async () => {
    button$$.addEventListener("click", async() =>{
    const response = await fetch("https://api.agify.io?name=michael");
    const res = await response.json()
    
    let p$$ = document.createElement("p")
    p$$.innerText = `El nombre Abel tiene un ${acumulador+= 1} porciento de ser de ET y un 6 porciento de ser de MZ`
    document.body.appendChild(p$$)

    let button2$$ = document.createElement("button")
    button2$$.innerText = "X"
    p$$.appendChild(button2$$)

    button2$$.addEventListener("click", () =>{
        let padre = button2$$.parentElement
        document.body.removeChild(padre)
    })
    })
}
get()