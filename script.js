function toggleMode() {
  const html = document.documentElement
  /*eu preciso definir oque será o HTML encontrado no index.html: caso contrário, se eu não definir document.documentElement ele não saberá oque oque é o elemento HTML encontrado no index. Não tenho certeza dessa afirmação
  Na verdade , eu acho que eu preciso definir os elementos encontrados no index.html para  javaScript por meio de variaveis, com qualquer nome que eu quiser, nesse caso acima eu coloquei o nome dela de HTML, mas poderia ser qualquer*/

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  /*reparar que tive que especificar , que era a lista que estava no HTML. classlist, porque se não ele ia ficar perdido*/
  /*lembrar do comando hmtl.classlist.toggle  :  ele já faz automaticamente, esse tipo de if e else*/
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "src",
      "./assets/avatar-light.png"
    ) /*Aqui , eu estou pedindo para ele pegar o atributo SRC e dar um novo valor pra ele, e eu conto onde esta o novo valor.*/
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    /*Reparar que tive definir o padrão de novo. Acredito que seja , porque caso eu não colocasse de novo, ele ia mudar somente uma vez, e depois não ia mudar mais*/
  }
  
}
