
let div$$ = Array.from(document.querySelectorAll(".fn-insert-here"))

div$$.map((element) => {
let p$$ = document.createElement("p")
p$$.innerText = "Voy dentro!"
element.appendChild(p$$)
}
)