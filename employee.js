// Array med bok-objekt
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        numPages: 180
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        numPages: 585
    },
    {
        title: "1984",
        author: "George Orwell",
        numPages: 328
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        numPages: 281
    }
];

// Funktion som söker efter en bok baserat på titel
function findBookByTitle(booksArray, titleSearch) {
    // Söker efter en bok där titeln matchar
    const foundBook = booksArray.find(book => book.title.toLowerCase() === titleSearch.toLowerCase());
    return foundBook || null; // Returnerar boken om den hittas, annars null
}
// Testa funktionen med en boktitel
const searchResult = findBookByTitle(books, "1984");
if (searchResult) {
    console.log("Bok hittad:", searchResult);
} else {
    console.log("Bok ej funnen.");
}
