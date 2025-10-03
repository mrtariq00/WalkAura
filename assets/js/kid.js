let kidlist = document.getElementById("kidlist");
let kids = shoes.filter((p) => p.gender === "kid");
let perPage = 8; // number of items per page

function renderKids(pageNumber) {
  kidlist.innerHTML = "";

  let start = (pageNumber - 1) * perPage;
  let end = start + perPage;
  let items = kids.slice(start, end);

  items.forEach((p) => {
    kidlist.innerHTML += `
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

// Initialize pagination
$(function () {
  $("#pagination").pagination({
    items: kids.length,
    itemsOnPage: perPage,
    cssStyle: "", // leave empty so our custom CSS applies
    onPageClick: function (pageNumber) {
      renderKids(pageNumber);
    },
  });
  renderKids(1);
});

// Select all <li> inside #pagination ul
