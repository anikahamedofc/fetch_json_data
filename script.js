// FETCHING API
// fetch("/assets/products/products.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
const allProductDiv = document.getElementById("all-product");

fetch("products.json")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      allProductDiv.innerHTML += `
      <div class="col-lg-4">
      <div class="single-product">
                <img src="${data[i].image}" alt="" />
                <h5>$<span id="product-price">${data[i].price}</span></h5>
                <h3>${data[i].name}</h3>
                <p>
                  ${data[i].text}
                </p>
                <button>
                  Add To Cart
                </button>
              </div>
              </div>
      `;
    }
  })
  .catch((err) => {
    console.log(err);
  });
