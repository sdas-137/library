// Library array
const myLibrary = [];


// Book object constructor

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}.`;
}


// Create book and store in library

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


// Display library books on page

function updateTable() {
    const tableBody = document.querySelector("tbody");
    for (const book of myLibrary) {
        const row = document.createElement("tr");
        for (const property in book) {
            if (property === "info") continue;
            const cell = document.createElement("td");
            cell.textContent = book[property];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("best book", "amazing author", 137, true);
updateTable();