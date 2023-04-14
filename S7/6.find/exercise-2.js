const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

let found = movies.filter((movie) => {if(movie.date == 2010){return movie}})
console.log(found)