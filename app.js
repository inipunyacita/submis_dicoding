// make unique id with date
const getUniqueID = () => {
  return Date.now();
};

// create book data
const addBook = () => {
  // inisialisasi variabel and local storage
  let id = getUniqueID();
  let judul = document.getElementById("inputBookTitle").value;
  let penulis = document.getElementById("inputBookAuthor").value;
  let tahun = document.getElementById("inputBookYear").value;
  let status = document.getElementById("inputBookIsComplete").checked;
  let text = {
    id: id,
    judul: judul,
    penulis: penulis,
    tahun: tahun,
    status: status,
  };
  let obj = JSON.stringify(text);
  // call function for make book data
  makeBookData(obj);
};

// search book data
const searchBook = () => {
  const searchValue = document.getElementById("searchBookTitle").value;
  const searchSubmit = document.getElementById("searchSubmit");
  if (searchSubmit) {
    console.log(searchValue);
  }
};

// function for make book data
const makeBookData = (dataBuku) => {
  const completedList = document.getElementById("completeBookshelfList");
  const unCompletedList = document.getElementById("incompleteBookshelfList");
  let obj = JSON.parse(dataBuku);
  // make object
  let text = {
    id: obj.id,
    judul: obj.judul,
    penulis: obj.penulis,
    tahun: obj.tahun,
    status: obj.status,
  };
  let bookElement = makeBookElement(text);
  // check inputan book status
  if (obj.status == true) {
    completedList.appendChild(bookElement);
  } else {
    unCompletedList.appendChild(bookElement);
  }
};
const makeBookElement = (objectDataBuku) => {
  // make article section
  let article = document.createElement("article");
  article.classList.add("book_item");

  // make article content
  let h3 = document.createElement("h3");
  h3.setAttribute("id", "book_title");
  let p = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let div = document.createElement("div");
  div.setAttribute("class", "action");
  let btn = document.createElement("button");
  btn.setAttribute("class", "green");
  btn.setAttribute("id", "done");
  let btn2 = document.createElement("button");
  btn2.setAttribute("class", "red");
  btn2.setAttribute("id", "delete");

  // H3 content
  let contentH3 = document.createTextNode(objectDataBuku.judul);
  h3.appendChild(contentH3);
  article.appendChild(h3);

  // p Content
  let contentP = document.createTextNode(`ID : ${objectDataBuku.id}`);
  let contentP2 = document.createTextNode(
    `Penulis : ${objectDataBuku.penulis}`
  );
  let contentP3 = document.createTextNode(`Tahun : ${objectDataBuku.tahun}`);
  p.appendChild(contentP);
  p2.appendChild(contentP2);
  p3.appendChild(contentP3);
  article.appendChild(p);
  article.appendChild(p2);
  article.appendChild(p3);

  // btn content
  const textBtnDone = document.createTextNode("Selesai dibaca");
  const textBtnDelete = document.createTextNode("Hapus Buku");
  btn.appendChild(textBtnDone);
  btn2.appendChild(textBtnDelete);
  div.appendChild(btn);
  div.appendChild(btn2);
  article.appendChild(div);

  return article;
};
