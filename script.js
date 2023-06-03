function toggleMode() {
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}

document.getElementById('formacao').addEventListener("click",function arrumar(t) {
  
  console.log(t)
  t.preventDefault()
  const conteudo = document.getElementById('conteudo')
                fetch(t.target.href)
                    .then(resp => resp.text())
                    .then(html => conteudo.innerHTML = html)
}
)
