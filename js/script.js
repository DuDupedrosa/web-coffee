import MenuMobile from "./modules/menu-mobile.js";
import activeText from "./modules/creat-text-mobile.js";

const menuMobile = new MenuMobile(
  '[data-menu="button"]',
  '[data-menu="list"]',
  '[data-menu="img"]',
  "data-close",
  "active-menu"
);
menuMobile.init();

// method que cria o texto do responsivo
// e também o clone do button.
// ambos são criados e posicionados via JavaScript
// porém faz uma interação via css com adição de classes
// para garantir visibilidade no momento certo
activeText();
