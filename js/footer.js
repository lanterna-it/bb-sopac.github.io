fetch("footer.html")
  .then((res) => res.text())
  .then((text) => {
    let newelem = document.querySelector("div#footer");
    newelem.innerHTML = text;
  });
