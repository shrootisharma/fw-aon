
import fetch from 'node-fetch';

console.log('\x1Bc');

let line = () => console.log("==================================");

class Server{
    path:string;
}

class Oscar implements Server{
    title: string;
    path:string = "http://localhost:1200/json/movies.json";
}

class Booker implements Server{
    author: string;
    path:string = "http://localhost:1200/json/books.json";
}

function getAsync<T extends Server>( s:T): Promise<T[]> {

    return fetch(s.path)
        .then((response: Response) => response.json());
}

getAsync<Oscar>(new Oscar())
    .then(movies => {
        movies.forEach(movie => console.log(movie.title));
        line();
    })


getAsync<Booker>(new Booker())
    .then( books => {
        books.forEach(book => console.log(book.author))
        line();
    })
