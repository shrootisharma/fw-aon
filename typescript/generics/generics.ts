import fetch from 'node-fetch';

console.log('\x1Bc');

// The function expects a parameter of some type T.
// It returns a value of the same type.
// That type T could be any of string, number, boolean, object

function identityLog<T>( v:T ):T {
    console.log(v);
    return v;
}

let line = () => console.log("==================================");

identityLog<string>("React");
line();

identityLog("Angular");
identityLog(2017);
identityLog(false);
identityLog({ framework:"React",version:16 });
line();

// ================================================

interface Oscar {
    title: string;
}

interface Booker {
    author: string;
}

function getAsync<T>(url: string): Promise<T[]> {

    let path = "http://localhost:1200/json/" + url;

    return fetch(path)
        .then((response: Response) => response.json());
}

getAsync<Oscar>("movies.json")
    .then(movies => {
        movies.forEach(movie => console.log(movie.title));
        line();
    })


getAsync<Booker>("books.json")
    .then( books => {
        books.forEach(book => console.log(book.author))
        line();
    })

/*
function getAsync(url: string) {

    // Using FETCH in NODE requires absolute urls.
    let path = "http://localhost:1200/json/" + url;

    // Return JSON data in Promise
    return fetch(path)
        .then((response: Response) => response.json());
}

getAsync("movies.json")
    .then(movies => {
        movies.forEach(movie => console.log(movie.title));
        line();
    })

getAsync("authors.json")
    .then(authors => {
        authors.forEach(author => console.log(author.title))
        line();
    })
*/
