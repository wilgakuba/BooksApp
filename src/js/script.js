

{
    ('use-strict');

const select = {
    bookTemplate: '#template-book',
    bookList: '.books-list',
    bookImage: '.book__image',
    active: '.favorite',
    filters: '.filters',

}


const bookTemplate = Handlebars.compile(
    document.querySelector(select.bookTemplate).innerHTML);

function render(){
    for(let book of dataSource.books){
        const generatedHTML = bookTemplate(book);
        generatedDOM = utils.createDOMFromHTML(generatedHTML);
        const bookContainer = document.querySelector(select.bookList);
        bookContainer.appendChild(generatedDOM);
        book.ratingWidth = book.rating *10;
        book.ratingBgc = determineRatingBgc(book.rating);
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
    filters = [];
    filtersContainer = document.querySelector(select.filters);

    filtersContainer.addEventListener('click', function(event){
        if(  event.target.tagName == 'INPUT' &&
        event.target.type == 'checkbox' &&
        event.target.name == 'filter'){
            console.log(event.target.value);
        }
        if(event.target.checked == true){
            filters.push(event.target.value);
        }else if(event.target.checked == false){
            const indexOf = filters.indexOf(event.target.value);
            filters.splice(indexOf, 1);
        }
    });
    filterBooks();
}
function filterBooks() {
    for (let book in dataSource.books) {
      let shouldBeHidden = false;
      const bookId = dataSource.books[book].id;
      for (const filter of filters) {
        if (!dataSource.books[book].details[filter]) {
          shouldBeHidden = true;
          break;
        }
      }
      const imageElement = document.querySelector(`[data-id="${bookId}"]`);
      if (shouldBeHidden == true) {
        imageElement.classList.add('hidden');
      } else {
        imageElement.classList.remove('hidden');
      }
    }
}
function determineRatingBgc(rating) {
    let ratingBgc = '';
    if(rating < 6){
      ratingBgc = 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%';
    }else if(rating > 6 && rating <= 8){
      ratingBgc = 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%';
    }else if(rating > 8 && rating <= 9){
      ratingBgc = 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%';
    }else if(rating > 9){
      ratingBgc = 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%';
    }
    return ratingBgc;
  }


render();
determineRatingBgc();
initActions();
}