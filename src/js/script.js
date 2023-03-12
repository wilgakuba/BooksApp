{
    ('use-strict');

const select = {
    bookTemplate: '#template-book',
}
const bookImage = '.books__image';
const bookList = '.books-list';
const bookTemplate = Handlebars.compile(
    document.querySelector(select.bookTemplate).innerHTML);

function render(){
    for(const book of dataSource.books){
        const generatedHTML = bookTemplate(book);
        generatedDOM = utils.createDOMFromHTML(generatedHTML);
        const bookContainer = document.querySelector(bookList);
        bookContainer.appendChild(generatedDOM);
    }
}
render();
}