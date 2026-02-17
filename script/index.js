const loadLession = () => {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .then((data) => dispalyLession(data));
};

const loadCategoryCard = (lession) => {
  const url = `https://fakestoreapi.com/products/category/${lession}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCategoryCard(data));
};
const displayCategoryCard = (category) => {
  const categoryContainer = document.getElementById("card-container");
  categoryContainer.innerHTML = " ";
  category.forEach((categori) => {
    console.log(categori);
    const card = document.createElement("div");
    card.innerHTML = `
  <div class="shadow-sm card bg-base-100 w-96">
          <figure>
            <img
            class="w-30 h-30"
               src="${categori?.image}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
             ${categori?.category}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <h2 class="card-title">
             ${categori?.title}
            </h2>
            <p>
             ${categori?.description}
            </p>
            <div class="justify-end card-actions">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
  `;
    categoryContainer.append(card);
  });
};

const dispalyLession = (lessions) => {
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  for (let lession of lessions) {
    const btn = document.createElement("button");
    btn.className = "btn btn-dash btn-primary";
    btn.innerText = lession;

    btn.addEventListener("click", () => {
      loadCategoryCard(lession);
    });

    levelContainer.appendChild(btn);
  }
};

loadLession();
