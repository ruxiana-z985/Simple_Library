const bookAdder=document.querySelector('.book_adder');
const addBook_dialog=document.getElementById('addBook_dialog');
const maincontent=document.getElementById('maincontent');
const submit=document.getElementById('submit');
const add_form=document.getElementById('addBookForm');
let arr=[]
class Book{
    constructor(title,author,genre,cover,status){
        this.title=title;
        this.author=author;
        this.genre=genre;
        this.cover=cover;
        this.status=status;
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
                <button class="statusBtn">${this.status}</button>
                <button class="deleteBtn">Delete</button>
               
            </div>
        `;
        newDiv.classList.add('card')
        maincontent.appendChild(newDiv);
        const statusBtn = newDiv.querySelector('.statusBtn');
        const deleteBtn = newDiv.querySelector('.deleteBtn');

    // Attach event listener for updating status
    statusBtn.addEventListener('click', function () {
        let text = statusBtn.textContent;

        if (text === "In Progress") {
            statusBtn.textContent = "Completed";
        } else if (text === "To Be Read") {
            statusBtn.textContent = "In Progress";
        } else if (text === "Completed") {
            statusBtn.textContent = "To Be Read";
        }
    });

    // Attach event listener for deleting the card
    deleteBtn.addEventListener('click', function () {
        let parent=deleteBtn.closest('.card');
        parent.remove()
    });
    }
}



submit.addEventListener('click',function(event){
    event.preventDefault()
    let title=add_form.bookTitle.value;
    let author=add_form.bookAuthor.value;
    let genre=add_form.bookGenre.value;
    let status=add_form.bookStatus.value;
    let fileInput = add_form.bookCover;
let coverFile = fileInput.files[0]; // the uploaded file (if any)
let cover;

if (coverFile) {
    // Turn the file into a temporary URL the browser can display
    cover = URL.createObjectURL(coverFile);
} else {
    // Use default image
    cover = "../icons/ai-generated-8304279_1280.jpg";
}
    let selectedStatusContent=""
    if (status == "Read"){
        selectedStatusContent="Completed"
    }
    else if (status == "reading"){
        selectedStatusContent= "In Progress";
    }
    else if (status == "TBR"){
        selectedStatusContent="To Be Read";
    }
    else if( status == "wishlist"){
        selectedStatusContent=status
    }
    else{
        alert("select status please");
    }

    addBook_dialog.close();
    const newBook= new Book(title,author,genre,cover,selectedStatusContent);
    newBook.display();
    arr.push(newBook);
});

