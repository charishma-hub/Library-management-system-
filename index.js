function login(role) {
    alert("Welcome! You selected " + role + " Login.");
}

function searchBooks() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let books = document.querySelectorAll(".book");

    books.forEach(function(book) {
        let text = book.innerText.toLowerCase();

        if (text.includes(input)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }
    });
}
