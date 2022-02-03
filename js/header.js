fetch("header.html")
  .then((res) => res.text())
  .then((text) => {
    let newelem = document.querySelector("div#header");
    newelem.innerHTML = text;
  });
