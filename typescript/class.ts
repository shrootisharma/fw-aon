// Classes ====================

class Debt {

    amount:number;
    nation:string;

    constructor( n:string, a:number ) {
        this.nation=n;
        this.amount=a;
    }

    increase( by:number ) {
        this.amount += by;
        console.log( this.nation, this.amount );
    }

}

let uk:Debt = new Debt( "Uk",48 );
uk.increase( 12 );

let denmark:Debt = new Debt( "Denmark",24 );
denmark.increase( 2 );

let nations:Debt[] = [ uk,denmark ];

// ====================

interface Book{
    author:string;
    title:string
}

let b : Book = {
    author : "William Boyd",
    title : "Waiting for Sunrise"
}

console.log( JSON.stringify(b));

class MakeBook implements Book{

    author:string;
    title:string;
    year:number;
    firstEdition:boolean;

    constructor( a,t ) {
        this.author=a;
        this.title=t;
        this.year=2017;
        this.firstEdition=true;
    }
}

b = new MakeBook("Martin Amis","London Fields");
console.log( JSON.stringify(b));
