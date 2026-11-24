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

    const table = document.querySelector("table");
    const oldTableBody = document.querySelector("tbody");
    table.removeChild(oldTableBody);
    const tableBody = document.createElement("tbody");

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
    table.appendChild(tableBody);

}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Best Book", "Amazing Author", 137, true);
updateTable();


// Input to new book

const addNewButton = document.querySelector(".add-new");
const submitButton = document.querySelector(".submit");
const cancelButton = document.querySelector(".cancel");

const form = document.querySelector("form");

addNewButton.addEventListener("click", () => form.removeAttribute("hidden"));

submitButton.addEventListener("click", () => {

    const inputTitle = document.querySelector("#title").value;
    const inputAuthor = document.querySelector("#author").value;
    const inputPages = document.querySelector("#pages").value;
    const inputRead = document.querySelector("#read").checked;

    addBookToLibrary(inputTitle, inputAuthor, inputPages, inputRead);
    updateTable();
    
});

cancelButton.addEventListener("click", () => form.setAttribute("hidden", ""));