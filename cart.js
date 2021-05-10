window.onload = Pageload;

function Pageload() {
  getMyCart();
}

async function getMyCart() {
  const userID = localStorage.getItem("userID");
  const res = await axios.get(
    `http://localhost:3000/cart/my-cart?userID=${userID}`
  );
  const data = await res.data;
  for (let index = 0; index < data.length; index++) {
    console.log(data[index]);
    createCartItem(data[index]);
  }
}

function createCartItem(data) {
  const container = document.getElementById("container");
  let div = document.createElement("div");
  div.innerHTML = `<div class="alert alert-primary">
        ${data.name} ${data.price}
        </div>
    `;
  container.appendChild(div);
}
