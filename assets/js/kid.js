let kidlist = document.getElementById("kidlist");

function kidslist() {
  kidlist.innerHTML = ``;
    shoes.filter((p) => p.gender === "kid").map((p) => {
        kidlist.innerHTML += `
    <div class="col-6 col-md-3">
    <div class="product-card text-center">
    <a href="/WalkAura/assets/pages/product.html?name=${p.name}&img=${p.img}&gender=${p.gender}&rater=${p.raters}&description=${p.description}&price=${p.price}&rating=${p.rating}" class="text-decoration-none">
        <img src="${p.img}" alt="${p.name}">
        <h6 class="mt-2 fw-bold">${p.name}</h6>
        <p>$${p.price} USD</p>
      </a>
    </div>
</div>`;
    });
}


kidslist()

