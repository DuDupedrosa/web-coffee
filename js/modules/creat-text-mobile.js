export default function activeText() {
  // duas variáveis que trazem o valor da caixa pai
  // que segura toda a intro, puxa também
  // a caixa que segura só o conteúdo da intro e ainda
  // o botão do header que vai ser clonado para poder
  // ser posicionado em uma nova posição em 820px
  const getBox = document.querySelector("[data-content]");
  const getBoxContent = document.querySelector('[data-content="content"]');
  const cloneBox = document.querySelector("[data-clone]");

  // criando o texto que só é acionado quando chega
  // em 820px, após criar colocamos ele antes da
  // caixa que segura o conteúdo geral.
  // add a classe que via css garante que só tera
  // visibilidade quando estiver menor que 820px
  // acima disso tal classe carregava o display de none
  // SEM A CLASSE ELE FUNCIONA EM QUALQUER TAMANHO.
  const creatTextCallback = () => {
    const textCallbackCoffee = document.createElement("p");
    textCallbackCoffee.classList.add("text-callback-responsive");
    textCallbackCoffee.innerText =
      "O café que fará seu código decolar para o próximo nível.";
    getBox.insertBefore(textCallbackCoffee, getBoxContent);
  };
  creatTextCallback();

  // criado um clone do botão de pegar cafe
  // colocando nele uma classe que via css
  // garante visibilidade menor que 820px e acima
  // de 820px ele fica com display de none.
  // foi colado antes da caixa que possui o conteúdo
  // principal, ficando assim embaixo do texto
  // callback.
  const creatButtonCoffeeRespose = () => {
    const clone = cloneBox.cloneNode(true);
    clone.classList.add("btn-get-coffee-response");
    getBox.insertBefore(clone, getBoxContent);
  };
  creatButtonCoffeeRespose();
}
