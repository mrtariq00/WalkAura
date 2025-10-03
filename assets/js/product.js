const param = new URLSearchParams(window.location.search);
const productName = param.get("name");

// find product
const product = shoes.find(p => p.name === productName);

let productDetails = document.getElementById("productDetails");

if (product) {
  productDetails.innerHTML = `
  <div class="row g-5">
    <div class="col-md-6">
      <img
        src="${product.img}"
        alt="${product.name}"
        class="product-image"
      />
    </div>
    <div class="col-md-6">
      <h2 class="fw-bold">${product.name}</h2>
      <p class="product-rating">
        <span class="text-muted ms-2">(${product.rating}/5 - ${product.raters} reviews)</span>
      </p>
      <p class="price">$ ${product.price} USD</p>
      <p>${product.description}</p>
      <form>
        <div class="mb-4">
          <label for="qty" class="form-label fw-semibold">Quantity:</label>
          <input
            type="number"
            class="form-control w-25"
            id="qty"
            value="1"
            min="1"
            max="5"
          />
        </div>
        <a class="btn btn-primary btn-add">
          <i class="bi bi-cart-plus"></i> Add to Cart
        </a>
      </form>
    </div>
  </div>`;
} else {
  productDetails.innerHTML = `<p class="text-danger">Product not found</p>`;
}
