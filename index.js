function login(role) {
    if (role === "Student") {
        window.location.href = "student-login.html";
    } 
    else if (role === "Admin") {
        window.location.href = "admin-login.html";
    } 
    else if (role === "Librarian") {
        window.location.href = "librarian-login.html";
    }
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
