const booksDb = [
    {
        id: 1,
        title: 'Clean Code',
        authorId: 1
    },
    {
        id: 2,
        title: 'The pragmantic programmer',
        authorId: 2
    },
    {
        id: 3,
        title: 'Web Developement with Node.js',
        authorId: 3
    }
];

const authorsDb = [
    {
        id: 1,
        name: 'Robert C. Martin'
    },{
        id: 2,
        name: 'Steve Forest'
    }
];

async function getBookById(id){
    const book = booksDb.find((book) => book.id === id);
    if(!book){
        const error = new Error();
        error.message = 'Book not found!';
        throw error;
    }
    return book;
}

async function getAuthorById(id){
    const author = authorsDb.find((author) => author.id === id);
        if(!author){
            const error = new Error();
            error.message = 'Author not found!';
            throw error;       
        }
    return author;   
}

async function main(){
    try{
        const book = await getBookById(1);
        const author = await getAuthorById(book.authorId);
    
        console.log(`This book ${book.title} was writter by ${author.name}`);
    }catch(ex){
        console.log(ex.message);
    }
}

main();