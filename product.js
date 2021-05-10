window.onload = Pageload;

let productID;

function Pageload() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  productID = id;
  document.getElementById("product-id").innerHTML = id;
  loadProductData(id);
}

async function loadProductData(id) {
  const res = await axios.get("http://localhost:3000/product/1");
  const data = await res.data;
  setProductData(data);
}

function setProductData(data) {
  let name = document.getElementById("product-name");
  let price = document.getElementById("product-price");
  name.innerHTML = data[0].name;
  price.innerHTML = data[0].price;
}

async function addProduct() {
  const userID = localStorage.getItem("userID");
  const data = {
    productID: productID,
    userID: userID,
  };
  const res = await axios.post("http://localhost:3000/cart/add-cart", data);
  const _data = await res.data;
  console.log(_data);
}
