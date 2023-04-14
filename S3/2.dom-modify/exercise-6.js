const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement("ul")
ul$$.innerText = apps.join(", ")
//apps.map((app) => ul$$.innerText += app)
document.body.appendChild(ul$$)