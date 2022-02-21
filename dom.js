// function make data element
const makeElement = (bookData) => {
  const article = document.createElement("article");
  article.className("book_item");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const div = document.createElement("div");
  div.className("action");
  div.setAttribute("id");
  const btn = document.createElement("button");
  btn.className("green");
  const btn1 = document.createElement("button");
  btn1.className("green");
  const btn2 = document.createElement("button");
  btn2.className("red");
  // isi element
  const id = document.createTextNode(bookData);
};
// let bookElement = makeBookElement(text);
// // check inputan book status
// if (obj.status == true) {
//   completedList.appendChild(bookElement);
// } else {
//   unCompletedList.appendChild(bookElement);
// }
// function for make data element
// const makeBookElement = () => {
//   // parse to object from local storage
//   let data = JSON.parse(localStorage.getItem("dataBuku"));
//   console.log(data);
// };
// // make article section
// let article = document.createElement("article");
// article.classList.add("book_item");

// // make article content
// let h3 = document.createElement("h3");
// h3.setAttribute("id", "book_title");
// let p = document.createElement("p");
// let p2 = document.createElement("p");
// let p3 = document.createElement("p");
// let div = document.createElement("div");
// div.setAttribute("class", "action");
// let btn = document.createElement("button");
// btn.setAttribute("class", "green");
// btn.setAttribute("id", "done");
// let btnUndone = document.createElement("button");
// btnUndone.setAttribute("class", "green");
// btnUndone.setAttribute("id", "undone");
// let btn2 = document.createElement("button");
// btn2.setAttribute("class", "red");
// btn2.setAttribute("id", "delete");

// // H3 content
// let contentH3 = document.createTextNode(objectDataBuku.judul);
// h3.appendChild(contentH3);
// article.appendChild(h3);

// // p Content
// let contentP = document.createTextNode(`ID : ${objectDataBuku.id}`);
// let contentP2 = document.createTextNode(
//   `Penulis : ${objectDataBuku.penulis}`
// );
// let contentP3 = document.createTextNode(`Tahun : ${objectDataBuku.tahun}`);
// p.appendChild(contentP);
// p2.appendChild(contentP2);
// p3.appendChild(contentP3);
// article.appendChild(p);
// article.appendChild(p2);
// article.appendChild(p3);

// // btn content
// const textBtnDone = document.createTextNode("Selesai dibaca");
// const textBtnUnDone = document.createTextNode("Belum selesai dibaca");
// const textBtnDelete = document.createTextNode("Hapus Buku");
// if (objectDataBuku.status == true) {
//   btnUndone.appendChild(textBtnUnDone);
//   div.appendChild(btnUndone);
// } else {
//   btn.appendChild(textBtnDone);
//   div.appendChild(btn);
// }
// btn2.appendChild(textBtnDelete);
// div.appendChild(btn2);
// article.appendChild(div);

// return article;
// };

// function for action button
// const changeToUndone = () => {
//   const idValue = document.getElementById;
// };
