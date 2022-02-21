const dataBuku = [];
const RENDER_EVENT = "render-book";
// create book data
const addBook = () => {
  // inisialisasi variabel and local storage
  const id = genedrateID();
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const bookStatus = document.getElementById("inputBookIsComplete").checked;

  // make object
  const bookObject = generateBookObject(id, title, author, year, bookStatus);

  // insert data to array & local storage
  dataBuku.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  localStorage.setItem(bookData, JSON.stringify(dataBuku));
};
// function for generated ID
const genedrateID = () => {
  return +new Date();
};
// function for generated book object
const generateBookObject = (id, title, author, year, bookStatus) => {
  return {
    id,
    title,
    author,
    year,
    bookStatus,
  };
};
