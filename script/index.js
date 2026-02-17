// get all data fetch
const getAllData = () => {
  const url = `https://fakestoreapi.com/products`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayAllData(data));
};
// display all data
const displayAllData = (cards) => {
  const allData = document.getElementById("allData");
  allData.innerHTML = " ";
  cards.forEach((card) => {
    const data = document.createElement("div");
    data.innerHTML = `
      <div class="shadow-sm card bg-base-100 w-96">
          <figure>
            <img
            class="w-30 h-30"
               src="${card?.image}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
             ${card?.category}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <h2 class="card-title">
             ${card?.title}
            </h2>
            <p>
             ${card?.description}
            </p>
            <div class="justify-between card-actions">
            <button onclick="loadDetail(${card?.id})" class="btn btn-outline flex">
            <i class="fa-solid fa-eye"></i>
            Details</button>
             <button class="btn btn-primary flex">
             <i class="fa-solid fa-cart-shopping"></i>
             Add</button>
            </div>
          </div>
        </div>
    `;

    allData.appendChild(data);
  });
};
// get category item
const loadLession = () => {
  fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .then((data) => dispalyLession(data));
};
const dispalyLession = (lessions) => {
  const levelContainer = document.getElementById("level-container");
  // levelContainer.innerHTML = "";

  for (let lession of lessions) {
    console.log(lession);
    const btn = document.createElement("button");
    btn.classList = "btn btn-dash btn-primary  lession-btn";
    btn.id = `lesson-${lession}`;
    btn.innerText = lession;
    btn.addEventListener("click", () => {
      loadCategoryCard(lession);
    });

    levelContainer.appendChild(btn);
  }
};
const removeAction = () => {
  const lessionButton = document.querySelectorAll(".lession-btn");
  lessionButton.forEach((btn) => btn.classList.remove("active"));
};
// category data fetch
const loadCategoryCard = (lession) => {
  const url = `https://fakestoreapi.com/products/category/${lession}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      removeAction();
      const clickBtn = document.getElementById(`lesson-${lession}`);
      clickBtn.classList.add("active");
      // console.log(clickBtn)
      displayCategoryCard(data);
    });
};
//function for detail page
const loadDetail = (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayDetail(data);
    });
};
//function for display detail page
const displayDetail = (details) => {
  console.log(details);
  const detailPage = document.getElementById("details-container");
  document.getElementById("my_modal_5").showModal();
  detailPage.innerHTML = `
  <div class="min-h-screen hero bg-base-200">
            <div class="flex-col hero-content lg:flex-row-reverse">
              
              <div>
                <h1 class="text-5xl font-bold">category: ${details?.category}</h1>
                <h1 class="text-5xl font-bold">title:${details?.title}</h1>
                <h1 class="text-5xl font-bold">category:${details?.category}</h1>
                <p class="py-6">
               description: ${details?.description}
                </p>
                <button class="btn btn-primary">Price:${details?.Price}</button>
              </div>
            </div>
          </div>`;
};
// category data display
const displayCategoryCard = (category) => {
  const categoryContainer = document.getElementById("card-container");
  categoryContainer.innerHTML = " ";
  category.forEach((categori) => {
    // console.log(categori);
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
            <div class="justify-between card-actions">
            <button onclick="loadDetail(${categori?.id})" class="btn btn-outline flex">
            <i class="fa-solid fa-eye"></i>
            Details</button>
             <button class="btn btn-primary flex">
             <i class="fa-solid fa-cart-shopping"></i>
             Add</button>
            </div>
          </div>
        </div>
  `;
    categoryContainer.append(card);
  });
};

loadLession();
getAllData();
