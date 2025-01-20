const API_URL = "https://majazocom.github.io/Data/books.json"

fetch(API_URL)
.then(
    (res) => res.json()
)
.then((books) =>
   console.log(books)
)
.catch((error) => console.error(error)
)


console.log("Hej från koden!");
const fetchBooks = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`HTTP-fel! Statuskod ${response.status}`);
           }
        const books = await response.json();
        console.log(books);

        localStorage.setItem("books", JSON.stringify(books));
    } catch (error) {
        console.error(`Felet är:`, error);
    }
}

fetchBooks();

localStorage.setItem("name", "Suzan");
localStorage.setItem("date", "20 januari");


const bookBtnEl = document.getElementById("check-books");
bookBtnEl.addEventListener("click", () => {
    const booksFormLS = localStorage.getItem("books");
    console.log(JSON.parse(booksFormLS));
});

const clearBooksBtnEl = document.getElementById("clear-books");
clearBooksBtnEl.addEventListener("click", () => {
    localStorage.removeItem("books");
    localStorage.clear();
   let a = localStorage
});

