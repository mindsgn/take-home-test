const bestSellers = [
  {
    image: ["../assets/headphones.jpg", "../assets/headphones-secondary.jpg"],
    title: "HeadPhones",
    price: 100.45,
    reviews: 200,
    stars: 4,
    bestSeller: true,
    save: 6,
  },
  {
    image: ["../assets/shoe.jpeg", "../assets/shoe-secondary.jpeg"],
    title: "Nike Air Force 1",
    price: 100.45,
    reviews: 200,
    stars: 5,
    bestSeller: false,
    save: 5,
  },
  {
    image: ["../assets/watch.jpeg", "../assets/watch-secondary.jpeg"],
    title: "Smartwatch",
    price: 89.99,
    reviews: 150,
    stars: 2,
    bestSeller: true,
    save: null,
  },
  {
    image: ["../assets/earbud.jpg", "../assets/earbud-secondary.jpeg"],
    title: "Wireless Earbuds",
    price: 79.99,
    reviews: 120,
    stars: 4,
    bestSeller: false,
    save: 10,
  },
  {
    image: ["../assets/laptop.jpeg", "../assets/laptop-secondary.jpeg"],
    title: "Laptop",
    price: 999.99,
    reviews: 500,
    stars: 4,
    bestSeller: true,
    save: null,
  },
  {
    image: ["../assets/fitness.jpeg", "../assets/fitness-secondary.jpeg"],
    title: "Fitness Tracker",
    price: 49.99,
    reviews: 180,
    stars: 1,
    bestSeller: true,
    save: null,
  },
  {
    image: ["../assets/bluetooth.jpeg", "../assets/bluetooth-secondary.jpeg"],
    title: "Bluetooth Speaker",
    price: 69.99,
    reviews: 220,
    stars: 2,
    bestSeller: false,
    save: 5,
  },
  {
    image: ["../assets/camera.jpeg", "../assets/camera-secondary.jpeg"],
    title: "Camera",
    price: 349.99,
    reviews: 320,
    stars: 5,
    bestSeller: true,
    save: null,
  },
  {
    image: ["../assets/console.jpeg", "../assets/console-secondary.jpeg"],
    title: "Gaming Console",
    price: 299.99,
    reviews: 400,
    stars: 2,
    bestSeller: true,
    save: null,
  },
  {
    image: ["../assets/tablet.jpeg", "../assets/tablet-secondary.jpeg"],
    title: "Tablet",
    price: 199.99,
    reviews: 250,
    stars: 3,
    bestSeller: false,
    save: 8,
  },
];

const generateStarRating = (stars) => {
  let starHtml = "";
  for (let i = 0; i < stars; i++) {
    starHtml += `<span><svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.32279 0.887954C6.11862 0.790604 5.88141 0.790604 5.67723 0.887954C5.50072 0.972112 5.4034 1.11823 5.35433 1.19839C5.30359 1.28126 5.25151 1.38682 5.20075 1.48972L4.12288 3.67336L1.71185 4.02577C1.59836 4.04233 1.48191 4.05933 1.38745 4.08204C1.29607 4.10402 1.12711 4.15154 0.992657 4.29346C0.837112 4.45765 0.76396 4.68325 0.793571 4.90747C0.819166 5.10129 0.928088 5.23891 0.989188 5.31033C1.05235 5.38415 1.13667 5.46625 1.21885 5.54626L2.96275 7.24481L2.55127 9.64395C2.53184 9.75707 2.51192 9.87312 2.50424 9.97001C2.49682 10.0637 2.48965 10.2392 2.583 10.411C2.69098 10.6098 2.88292 10.7492 3.10535 10.7905C3.29766 10.8261 3.4623 10.7651 3.54912 10.729C3.63889 10.6918 3.7431 10.637 3.84468 10.5835L6.00001 9.45005L8.15535 10.5835C8.25693 10.637 8.36114 10.6918 8.45091 10.729C8.53773 10.7651 8.70237 10.8261 8.89467 10.7905C9.11711 10.7492 9.30904 10.6098 9.41702 10.411C9.51037 10.2392 9.5032 10.0637 9.49578 9.97001C9.48811 9.87312 9.46818 9.75708 9.44876 9.64397L9.03727 7.24481L10.7812 5.54624C10.8634 5.46623 10.9477 5.38414 11.0108 5.31033C11.0719 5.23891 11.1809 5.10129 11.2065 4.90747C11.2361 4.68325 11.1629 4.45765 11.0074 4.29346C10.8729 4.15154 10.704 4.10402 10.6126 4.08204C10.5181 4.05933 10.4017 4.04233 10.2882 4.02577L7.87714 3.67336L6.7993 1.48976C6.74853 1.38686 6.69644 1.28127 6.6457 1.19839C6.59662 1.11823 6.4993 0.972112 6.32279 0.887954Z" fill="#231F20"/>
</svg>
</span>`;
  }
  return starHtml;
};

const bestSellerList = document.getElementById("bestseller-list");

const maxItemsToShowOnSmallScreen = 4;
const isSmallScreen = window.innerWidth <= 640;

const itemsToDisplay = isSmallScreen
  ? bestSellers.slice(0, maxItemsToShowOnSmallScreen)
  : bestSellers;

itemsToDisplay.forEach((item, index) => {
  const bestSellerItem = document.createElement("div");
  bestSellerItem.classList.add("card");

  const defaultImage = `url(${item.image[0]})`;
  bestSellerItem.dataset.index = index;

  bestSellerItem.innerHTML = `
    <div class="item-card" data-index=${index}'>
        <div class="card-image" style="background-image: ${defaultImage};">
            <div class="card-image-row">
                ${
                  item.bestSeller
                    ? "<div class='tag'><p class='tag-text'>BEST SELLER</p></div>"
                    : "<div></div>"
                }

                ${
                  item.save
                    ? `<div class='tag tag-save'><p class='tag-text'>SAVE ${item.save} %</p></div>`
                    : "<div></div>"
                }
            </div>
        </div>
        <div class="card-content flex flex-col">
            <h3 class="card-title">
                ${item.title} 
            </h3>
            <div class="card-rating">
                ${generateStarRating(item.stars)}
                <p class="card-text text-gray-600">${item.reviews} Reviews</p>
            </div>
            
            <p class="card-price">$ ${item.price}</p>
        </div>
    </div>
  `;

  bestSellerItem.addEventListener("mouseenter", () => {
    const dataIndex = bestSellerItem.dataset.index;
    bestSellerItem.querySelector(
      ".card-image"
    ).style.backgroundImage = `url(${bestSellers[dataIndex].image[1]})`;
  });

  bestSellerItem.addEventListener("mouseleave", () => {
    const dataIndex = bestSellerItem.dataset.index;
    bestSellerItem.querySelector(
      ".card-image"
    ).style.backgroundImage = `url(${bestSellers[dataIndex].image[0]})`;
  });

  bestSellerList.appendChild(bestSellerItem);
});
