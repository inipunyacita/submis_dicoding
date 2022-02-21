window.addEventListener("load", () => {
  const formSubmit = document.getElementById("inputBook");
  formSubmit.addEventListener("submit", (ev) => {
    ev.preventDefault();
    addBook();
  });
});
