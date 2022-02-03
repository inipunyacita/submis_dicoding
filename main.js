document.addEventListener("DOMContentLoaded", () => {
  // inisialisasi form
  const submitBuku = document.getElementById("inputBook");
  const submitSearch = document.getElementById("searchBook");

  // make the form not reload after submited
  submitBuku.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
    const dataBuku = addBook();
    const div = document.createElement("article");
    div.classList.add("book_item");
    const h3 = document.createElement("h3");
    h3.innerText = dataBuku.id;
    div.appendChild(h3);
  });
  submitSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBook();
  });
});
