let response = fetch("https://api.agify.io?name=michael")
.then((x) => x.json())
.then((res) => console.log(res));