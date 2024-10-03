const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closemodalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");
const addressWarnOrder = document.getElementById("address-warn-order");
const addressWarnname = document.getElementById("address-warn-name");
const nomeinput = document.getElementById("nomeinput");
const cartobservation = document.getElementById("cart-observation");
let cart = [];

async function displayburguers() {
  try {
    const url = "https://deploy-node-uoxr.onrender.com/api/produtos";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed, status: ${response.status}`);
    }
    const Burguers = await response.json();

    const menuBurguer = document.getElementById("menu-burguers");

    if (Burguers.categoria = "burger") {
      Burguers.forEach((burger) => {
        const burgerItem = document.createElement("div");
        burgerItem.className = "flex gap-2";

        burgerItem.innerHTML = `
    <div class="w-full ">
      <img src="./assets/hamb-2.png" alt="${burger.nome}"
        class="img-custom-size-burguer rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
      <p class="font-bold">${burger.nome}</p>
      <p class="text-sm">${burger.descricao}</p>
      <div class="flex flex-col mt-auto" id="obs">
              <label for="cart-observation-${burger.id}" class="font-bold text-red-600" id="label-obs">Observação:</label>
              <input type="text" id="cart-observation-${burger.id}" name="observation" placeholder="Ex: sem cebola, hambúrguer mal passado">
            </div>
      <div class="flex items-center gap-2 justify-between">
        <p class="font-bold text-lg">R$ ${burger.preco}</p>
        <button class="bg-gray-900 px-7 rounded add-to-cart-btn" data-name="${burger.nome}" data-price="${burger.preco}" data-id="${burger.id}">
          <i class="fa fa-cart-plus text-3xl"></i>
        </button>
      </div>
  
    </div>
  `;
        menuBurguer.appendChild(burgerItem);
      });
    }
  } catch (error) {
    console.error("Error fetching burguers", error);
  }
}

async function displaycombos() {
  try {
    const url = "https://deploy-node-uoxr.onrender.com/api/produtoscombos";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed, status: ${response.status}`);
    }
    const combos = await response.json();

    const menucombos = document.getElementById("menu-combos");

    combos.forEach((combos) => {
      const CombosItem = document.createElement("div");
      CombosItem.className = "flex gap-2";

      CombosItem.innerHTML = `
  <div class="w-full ">
    <img src="./assets/combo.jpeg" alt="${combos.nome}"
      class="img-custom-size-burguer rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    <p class="font-bold">${combos.nome}</p>
    <p class="text-sm">${combos.descricao}</p>
    <div class="flex flex-col mt-auto" id="obs">
            <label for="cart-observation-${combos.id}" class="font-bold text-red-600" id="label-obs">Observação:</label>
            <input type="text" id="cart-observation-${combos.id}" name="observation" placeholder="Ex: sem cebola, hambúrguer mal passado">
          </div>
    <div class="flex items-center gap-2 justify-between">
      <p class="font-bold text-lg">R$ ${combos.preco}</p>
      <button class="bg-gray-900 px-7 rounded add-to-cart-btn" data-name="${combos.nome}" data-price="${combos.preco}" data-id="${combos.id}">
        <i class="fa fa-cart-plus text-3xl"></i>
      </button>
    </div>

  </div>
`;
      menucombos.appendChild(CombosItem);
    });
  } catch (error) {
    console.error("Error fetching burguers", error);
  }
}

async function displayporcoes() {
  try {
    const url = "https://deploy-node-uoxr.onrender.com/api/produtosporcoes";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed, status: ${response.status}`);
    }
    const porcoes = await response.json();

    const menuporcoes = document.getElementById("menu-porcoes");

    porcoes.forEach((porcoes) => {
      const PorcoesItem = document.createElement("div");
      PorcoesItem.className = "flex gap-2";

      PorcoesItem.innerHTML = `
  <div class="w-full ">
    <img src="./assets/porcao.jpg" alt="${porcoes.nome}"
      class="img-custom-size-burguer rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
    <p class="font-bold">${porcoes.nome}</p>
    <p class="text-sm">${porcoes.descricao}</p>
    <div class="flex flex-col mt-auto" id="obs">
            <label for="cart-observation-${porcoes.id}" class="font-bold text-red-600" id="label-obs">Observação:</label>
            <input type="text" id="cart-observation-${porcoes.id}" name="observation" placeholder="Ex: sem cebola, hambúrguer mal passado">
          </div>
    <div class="flex items-center gap-2 justify-between">
      <p class="font-bold text-lg">R$ ${porcoes.preco}</p>
      <button class="bg-gray-900 px-7 rounded add-to-cart-btn" data-name="${porcoes.nome}" data-price="${porcoes.preco}" data-id="${porcoes.id}">
        <i class="fa fa-cart-plus text-3xl"></i>
      </button>
    </div>

  </div>
`;
      menuporcoes.appendChild(PorcoesItem);
    });
  } catch (error) {
    console.error("Error fetching burguers", error);
  }
}

async function displaybebidas() {
  try {
    const url = "https://deploy-node-uoxr.onrender.com/api/produtosbebidas";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed, status: ${response.status}`);
    }

    const bebidas = await response.json();

    const menuBebidas = document.getElementById("menu-bebidas");

    bebidas.forEach((bebidas) => {
      const bebidaItem = document.createElement("div");
      bebidaItem.className = "flex gap-2";

      bebidaItem.innerHTML = `
      <div class="w-full ">
        <img src="./assets/refri-8.png" alt="${bebidas.nome}"
          class="img-custom-size rounded-md hover:scale-110 hover:-rotate-2 duration-300" />
        <p class="font-bold">${bebidas.nome}</p>
        <div class="hidden mt-auto" id="obs">
                <label for="cart-observation-${bebidas.id}" class="font-bold text-red-600" id="label-obs">Observação:</label>
                <input type="text" id="cart-observation-${bebidas.id}" name="observation" hidden>
              </div>
        <div class="flex items-center gap-2 justify-between">
          <p class="font-bold text-lg">R$ ${bebidas.preco}</p>
          <button class="bg-gray-900 px-7 rounded add-to-cart-btn" data-name="${bebidas.nome}" data-price="${bebidas.preco}" data-id="${bebidas.id}">
            <i class="fa fa-cart-plus text-3xl"></i>
          </button>
        </div>
    
      </div>
    `;
      menuBebidas.appendChild(bebidaItem);
    });
  } catch (error) {
    console.error("Error fetching bebidas", error);
  }
}

displayburguers();
displaycombos();
displayporcoes();
displaybebidas();

// abrir carrinho
cartBtn.addEventListener("click", function () {
  updatecartmodal();
  cartModal.style.display = "flex";
});

// fechar carrinho
cartModal.addEventListener("click", function (event) {
  if (event.target === cartModal) {
    cartModal.style.display = "none";
  }
});

closemodalBtn.addEventListener("click", function () {
  cartModal.style.display = "none";
});

menu.addEventListener("click", function (event) {
  let parentbutton = event.target.closest(".add-to-cart-btn");

  if (parentbutton) {
    const name = parentbutton.getAttribute("data-name");
    const price = parseFloat(parentbutton.getAttribute("data-price"));
    const id = parseInt(parentbutton.getAttribute("data-id"));
    const obs = document.getElementById(`cart-observation-${id}`).value;
    addtocart(name, price, obs);
  }
});

// funcao para adicionar no carrinho
function addtocart(name, price, obs) {
  const existingItem = cart.find((item) => item.name === name);

  if (existingItem) {
    // se o item ja existe a quantidade aumenta +1
    existingItem.quantity += 1;
  } else {
    cart.push({
      name,
      price,
      quantity: 1,
      obs,
    });
    console.log(cart);
  }

  updatecartmodal();
}

function updatecartmodal() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.classList.add(
      "flex",
      "justify-between",
      "mb-4",
      "flex-col"
    );

    cartItemElement.innerHTML = `
    <div class="flex items-center justify-between mb-2">
      <div>
        <p class="font-medium">${item.name}</p>
        <p>Quantidade: ${item.quantity}</p>
        <p class="font-medium mt-2">R$ ${item.price.toFixed(2)}</p>
        <p class="font-medium mt-2">${item.obs}</p>
        </div>
      <button class="remove-from-cart-btn" data-name="${item.name}">
        Remover
      </button>
    </div>
    `;

    total += item.price * item.quantity;

    cartItemsContainer.appendChild(cartItemElement);
  });

  document
    .getElementById("delivery")
    .addEventListener("change", updatecartmodal);

  const delivery = parseFloat(document.getElementById("delivery").value);
  total += delivery;

  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  cartCounter.innerHTML = cart.length;
}

// funcao para remover item do carrinho
cartItemsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-from-cart-btn")) {
    const name = event.target.getAttribute("data-name");

    removeItemCart(name);
  }
});

function removeItemCart(name) {
  const index = cart.findIndex((item) => item.name === name);

  if (index !== -1) {
    const item = cart[index];

    if (item.quantity > 1) {
      item.quantity -= 1;
      updatecartmodal();
      return;
    }
    cart.splice(index, 1);
    updatecartmodal();
  }
}

addressInput.addEventListener("input", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== "") {
    addressWarn.classList.add("hidden");
  }
});

nomeinput.addEventListener("input", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== "") {
    addressWarnname.classList.add("hidden");
  }
});

cartTotal.addEventListener("click", function (event) {
  let inputvalue = event.target.value;

  if (inputvalue !== 0.0 || null || "" || undefined) {
    addressWarnOrder.classList.add("hidden");
  }
});

checkoutBtn.addEventListener("click", function () {
  const isOpen = checkrestauranteopen();

  if (!isOpen) {
    Toastify({
      text: "O restaurante está fechado no momento!",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#ef4444",
      },
    }).showToast();
    return;
  }

  if (cart.length === 0) {
    addressWarnOrder.classList.remove("hidden");
    return;
  }

  if (addressInput.value === "") {
    addressWarn.classList.remove("hidden");
    addressInput.classList.add("border-red-500");
    return;
  }

  if (nomeinput.value === "") {
    addressWarnname.classList.remove("hidden");
    nomeinput.classList.add("border-red-500");
    return;
  }

  const payment = document.getElementById("payment");
  const select = document.getElementById("delivery");
  const bairro = select.options[select.selectedIndex].textContent;
  const troco = document.getElementById("troco");

  const cartItems = cart
    .map((item) => {
      return `
      - ${item.name}
        Preço: R$${item.price.toFixed(2)}
        Qtd: ${item.quantity}
        Observação: ${item.obs}
       `;
    })
    .join("");

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  const delivery = parseFloat(document.getElementById("delivery").value);
  total += delivery;

  const ordercart = `
    *Pedido de Cliente:*
    Nome: ${nomeinput.value}
    Forma de Pagamento: ${payment.value}
    Endereço: ${addressInput.value}, ${bairro}
    
    *Itens do Carrinho:*
    ${cartItems}

    *Total:*
    R$${total.toFixed(2)}

    *Troco*
    Precisa de troco para: R$${troco.value}

    *Obrigado por seu pedido! Entraremos em contato em breve para confirmar os detalhes.*
`;

  const encodedMessage = encodeURIComponent(ordercart);

  const phone = "47996202485";
  window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");

  cart = [];
  updatecartmodal();
});

function checkrestauranteopen() {
  const data = new Date();
  const hours = data.getHours();
  const minutos = data.getMinutes();

  if (hours > 16 && hours < 22) {
    return true;
  } else if (hours === 18 && minutos >= 30) {
    return true;
  } else if (hours === 22 && minutos === 0) {
    return true;
  } else {
    return false;
  }
}

const spanItem = document.getElementById("data-span");
const isOpen = checkrestauranteopen();

if (spanItem) {
  if (isOpen) {
    spanItem.classList.remove("bg-red-600");
    spanItem.classList.add("bg-green-500");
  } else {
    spanItem.classList.remove("bg-green-500");
    spanItem.classList.add("bg-red-600");
  }
}
