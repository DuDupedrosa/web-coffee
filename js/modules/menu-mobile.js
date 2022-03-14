export default class MenuMobile {
  constructor(button, list, buttonImg, attribute, classe) {
    this.getButton = document.querySelector(button);
    this.getList = document.querySelector(list);
    this.getButtonImg = document.querySelector(buttonImg);
    this.attributeImg = attribute;
    this.classe = classe;
    this.events = ["touchstart", "click"];

    this.onMenu = this.onMenu.bind(this);
  }

  // assim que ocorre o click o toggle é dado no menu
  // e conforme add a classe de ativo e retira ela a
  // o menu é mostrado ou não.
  // também ocorre a mudança do src da img do button
  // para poder add o " x " para fechar o menu,
  // sempre fazendo a verificação com o atributo para
  // ter a lógica ocorrendo da maneira correta.
  onMenu(event) {
    event.preventDefault();
    this.getList.classList.toggle(this.classe);

    if (!this.getButtonImg.hasAttribute(this.attributeImg)) {
      this.getButtonImg.setAttribute(this.attributeImg, "");
      this.getButtonImg.setAttribute("src", "./img/icons/close-menu.svg");
    } else {
      this.getButtonImg.removeAttribute(this.attributeImg, "");
      this.getButtonImg.setAttribute("src", "./img/icons/Menu-hamburguer.svg");
    }
  }

  // add os eventos ao button
  addEventButton() {
    this.events.forEach((evento) => {
      this.getButton.addEventListener(evento, this.onMenu);
    });
  }

  init() {
    if (this.getButton && this.getList) {
      this.addEventButton();
    }
    return this;
  }
}
