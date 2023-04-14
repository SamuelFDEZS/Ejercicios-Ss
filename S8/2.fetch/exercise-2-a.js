//No entendí la parte de pasar como parámetro de la API el input
const button$$ = document.querySelector("button")
const input$$ = document.querySelector("input")
const get = async () => {
    button$$.addEventListener("click", async() =>{
    const response = await fetch("https://api.agify.io?name=michael");
    const res = await response.json()
    console.log(res)
    })
}
console.log(input$$)
const init = async() => {
    await get(input$$.value)
}
init()