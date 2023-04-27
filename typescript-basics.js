//Create an array books with the type Book[] and add a few sample books to the array 
var book_arr = [
    { id: 1,
        title: "apples",
        author: "bob",
        published: new Date(2005, 9, 2),
        available: true },
    { id: 2,
        title: "oranges",
        author: "kelly",
        published: new Date(1993, 7, 27),
        available: true },
    { id: 3,
        title: "strawberries",
        author: "debbie",
        published: new Date(2018, 5, 13),
        available: false }
];
//Define a function addBook(book: Book): void that takes a Book object as a parameter and adds it to the books array.
function addBook(book) {
    book_arr.push(book);
    //  console.log(book_arr)
}
console.log(addBook({
    id: 4,
    title: "grapes",
    author: "kyle",
    published: new Date(2015, 12, 13),
    available: false
}));
//Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter and returns the book with the given id or undefined if the book is not found.
var findBookById = function findBookById(id) {
    return book_arr.find(function (book) { return book.id === id; });
};
console.log(findBookById(1));
console.log(findBookById(6));
//Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array, and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.
function updateBook(book) {
    if (book_arr.find(function (book) { return book.id === book.id; })) {
        return true;
    }
    else {
        return false;
    }
}
console.log(updateBook({
    id: 2,
    title: "grapes",
    author: "kyle",
    published: new Date(2015, 12, 13),
    available: false
}));
// //Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array. The function should return true if the book was removed successfully or false if the book was not found.
// function removeBook(id:number):boolean {
// return available 
// }
