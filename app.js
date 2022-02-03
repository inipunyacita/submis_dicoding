const addBook = () => {
  // inisialisasi variabel
  const judul = document.getElementById("inputBookTitle");
  const penulis = document.getElementById("inputBookAuthor");
  const tahun = document.getElementById("inputBookYear");
  const status = document.getElementById("inputBookIsComplete");
  localStorage.setItem("id", getUniqueID());
  localStorage.setItem("judul", judul.value);
  localStorage.setItem("penulis", penulis.value);
  localStorage.setItem("tahun", tahun.value);
  localStorage.setItem("status", status.checked);
  let dataBuku = {
    id: localStorage.getItem("id"),
    judul: localStorage.getItem("judul"),
    penulis: localStorage.getItem("penulis"),
    tahun: localStorage.getItem("tahun"),
    status: localStorage.getItem("status"),
  };
  const messages = `
    ID : ${dataBuku.id}
    Judul : ${dataBuku.judul}
    Penulis : ${dataBuku.penulis}
    Tahun : ${dataBuku.tahun}
    Status : ${cekStatus(dataBuku.status)}
  `;
  console.log(messages);
  return dataBuku;
};

const getUniqueID = () => {
  for (let i = 0; i < 5; i++) {
    return Date.now();
  }
};

const cekStatus = (status) => {
  let pesan;
  if (status == "true") {
    pesan = `Selesai dibaca`;
  } else {
    pesan = `Belum selesai dibaca`;
  }
  return pesan;
};
