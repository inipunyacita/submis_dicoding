// inisialisasi variabel
// form buku
const judulBuku = document.getElementById("inputBookTitle");
const penulisBuku = document.getElementById("inputBookAuthor");
const tahunBuku = document.getElementById("inputBookYear");
const statusBaca = document.getElementById("inputBookIsComplete");
const submitBuku = document.getElementById("bookSubmit");
// form search buku
const searchBuku = document.getElementById("searchBook");
// list buku belum selesai dibaca
const statusBelumBaca = document.getElementById("incompleteBookshelfList");
// list buku selesai dibaca
const statusSudahBaca = document.getElementById("completeBookshelfList");
// data buku
const dataBuku = {
  judul: localStorage.getItem("judul"),
  penulis: localStorage.getItem("penulis"),
  tahun: localStorage.getItem("tahun"),
};

// create & show data buku
submitBuku.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.setItem("judul", judulBuku.value);
  localStorage.setItem("penulis", penulisBuku.value);
  localStorage.setItem("tahun", tahunBuku.value);
  if (statusBaca.checked) {
    localStorage.setItem("status", true);
    const bookReport = document.createElement("p");
    bookReport.innerText = `Judul : ${dataBuku.judul}
    Penulis: ${dataBuku.penulis}
    Tahun: ${dataBuku.tahun}
    `;
    statusSudahBaca.appendChild(bookReport);
  } else {
    localStorage.setItem("status", false);
    const bookReport = document.createElement("p");
    bookReport.innerText = `Judul : ${dataBuku.judul}
    Penulis: ${dataBuku.penulis}
    Tahun: ${dataBuku.tahun}
    `;
    statusBelumBaca.appendChild(bookReport);
  }
});
