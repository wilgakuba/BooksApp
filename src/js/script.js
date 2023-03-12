

{
    ('use-strict');

const select = {
    bookTemplate: '#template-book',
    bookList: '.books-list',
    bookImage: '.book__image',
    active: '.favorite',

}
const bookTemplate = Handlebars.compile(
    document.querySelector(select.bookTemplate).innerHTML);

function render(){
    for(const book of dataSource.books){
        const generatedHTML = bookTemplate(book);
        generatedDOM = utils.createDOMFromHTML(generatedHTML);
        const bookContainer = document.querySelector(select.bookList);
        bookContainer.appendChild(generatedDOM);
    }
}


favoriteBooks = [];

function initActions(){
    const imageBooks = document.querySelectorAll(select.bookImage);
    for(const bookImage of imageBooks){
        bookImage.addEventListener('click', function(event){
            event.preventDefault();
            const bookID = event.target.offsetParent.getAttribute('data-id');
            
            if(!favoriteBooks.includes(bookID)){
                event.target.offsetParent.classList.add(select.active);
                favoriteBooks.push(bookID);
            }else{
                event.target.offsetParent.classList.remove(select.active);
                const index = favoriteBooks.indexOf(bookID);
                console.log('index: ', index);
                favoriteBooks.splice(index, 1);
            }
            console.log('favoriteBooks: ', favoriteBooks);
        });

    }
}
render();
initActions();
}