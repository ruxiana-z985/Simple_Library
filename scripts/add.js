const bookAdder=document.querySelector('.book_adder');
const addBook_dialog=document.getElementById('addBook_dialog');
const maincontent=document.getElementById('maincontent');
const submit=document.getElementById('submit');
const add_form=document.getElementById('addBookForm');
class Book{
    constructor(title,author,description,genre,cover){
        this.title=title;
        this.author=author;
        this.description=description;
        this.genre=genre;
        this.cover=cover
    }

    display(){
        let newDiv=document.createElement('div');
        newDiv.innerHTML = `

            ${this.cover ? `<div class="image_displayer">
                <img class='bookcover' src="${this.cover}" alt="book cover">
            </div>` : ''}

            <div class="book_information">
                <h3>Title: ${this.title}</h3>
                <h3>Author: ${this.author}</h3>
                <h3>Genre: ${this.genre}</h3>
                ${this.description ? `<h3>Description: ${this.description}</h3>` : ''}
            </div>
        `;
        newDiv.classList.add('card')
        maincontent.appendChild(newDiv);
    }
}



submit.addEventListener('click',function(event){
    event.preventDefault()
    let title=add_form.bookTitle.value;
    let author=add_form.bookAuthor.value;
    let description=add_form.bookDescription.value || "";
    let genre=add_form.bookGenre.value;
    let fileInput = add_form.bookCover;
let coverFile = fileInput.files[0]; // the uploaded file (if any)
let cover;

if (coverFile) {
    // Turn the file into a temporary URL the browser can display
    cover = URL.createObjectURL(coverFile);
} else {
    // Use default image
    cover = "../ai-generated-8304279_1280.jpg";
}


    addBook_dialog.close()
    const newBook= new Book(title,author,description,genre,cover);
    newBook.display()
});
