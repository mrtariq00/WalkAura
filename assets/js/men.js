let manlist = document.getElementById("manlist");
let men = shoes.filter((p) => p.gender === "man");
let perPage = 8; // items per page

function renderMen(pageNumber) {
  manlist.innerHTML = "";

  let start = (pageNumber - 1) * perPage;
  let end = start + perPage;
  let items = men.slice(start, end);

  items.forEach((p) => {
    manlist.innerHTML += `
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
  $("#pagination-men").pagination({
    items: men.length,
    itemsOnPage: perPage,
    cssStyle: "", // leave blank, we’ll use Bootstrap style overrides
    onPageClick: function (pageNumber) {
      renderMen(pageNumber);
    },
  });

  // Load first page
  renderMen(1);
});
