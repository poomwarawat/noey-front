window.onload = Pageload;

/**
 * First function run when start page
 */
function Pageload() {
  const userID = localStorage.getItem("userID");
  document.getElementById("userid").innerHTML = userID;
  loadAllProduct();
}

async function loadAllProduct() {
  const res = await axios.get("http://localhost:3000/product/all-product");
  const data = await res.data;
  console.log(data);
  for (let index = 0; index < data.length; index++) {
    const productData = data[index];
    createProductCard(productData);
  }
}

function createProductCard(data) {
  const container = document.getElementById("card-row");
  let div = document.createElement("div");
  div.className = "col-3";
  div.innerHTML = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">
        ${data.price}
    </p>
    <a href="./product.html?id=${data.id}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  container.appendChild(div);
}

function logout() {
  localStorage.clear();
  window.location.href = "./login.html";
}
