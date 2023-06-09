function toggleMode() {
  const html = document.documentElement;
  const body = document.body;
  html.classList.toggle("light");
  body.classList.toggle("light");

  //pegar a tag img
  const img = document.querySelector("#profile img");

  //substituir a imagem
  if (body.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png");
  }
}
