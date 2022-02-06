document.addEventListener("DOMContentLoaded", () => {
  // inisialisasi form
  const submitBuku = document.getElementById("inputBook");
  const submitSearch = document.getElementById("searchBook");

  // make the form not reload after submited
  submitBuku.addEventListener("submit", (e) => {
    e.preventDefault();
    addBook();
  });
  submitSearch.addEventListener("submit", (e) => {
    e.preventDefault();
    searchBook();
  });
});
