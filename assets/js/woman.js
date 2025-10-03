let womanlist = document.getElementById("womanlist");
let women = shoes.filter((p) => p.gender === "women");
let perPage = 8; // items per page

function renderWomen(pageNumber) {
  womanlist.innerHTML = "";

  let start = (pageNumber - 1) * perPage;
  let end = start + perPage;
  let items = women.slice(start, end);

  items.forEach((p) => {
    womanlist.innerHTML += `
      <div class="col-6 col-md-3">
        <div class="product-card text-center">
          <a href="/pages/product.html?name=${p.name}" class="text-decoration-none">
              <img src="${p.img}" alt="${p.name}">
              <h6 class="mt-2 fw-bold">${p.name}</h6>
              <p>$${p.price} USD</p>
          </a>
        </div>
      </div>`;
  });
}

// Initialize simplePagination.js
$(function () {
  $("#pagination-women").pagination({
    items: women.length,
    itemsOnPage: perPage,
    cssStyle: "", // we’ll style with Bootstrap
    onPageClick: function (pageNumber) {
      renderWomen(pageNumber);
    },
  });

  // Load first page
  renderWomen(1);
});
