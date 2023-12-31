const data = [
    {
      id: 1,
      name: "Invicta Men's Pro Diver",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Invicta Watch",
    },
    {
      id: 11,
      name: "Invicta Men's Pro Diver 2",
      img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
      price: 74,
      cat: "Men Watch",
    },
    {
      id: 2,
      name: "Timex women's Expedition Scout",
      img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
      price: 150,
      cat: "Women Watch",
    },
    {
      id: 3,
      name: "Breitling Superocean Heritage",
      img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
      price: 200,
      cat: "Classic Watch",
    },
    {
      id: 4,
      name: "Casio Classic Resin Strap ",
      img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
      price: 60,
      cat: "Casio Watch",
    },
    {
      id: 5,
      name: "Garmin Venu Smartwatch ",
      img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
      price: 74,
      cat: "Smart Watch",
    },
  ];


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");


const displayProducts = (products) => {
    productsContainer.innerHTML =  products.map(
        (product) => 
        `
            <div class="product">
                <img src=${product.img} alt="" />
                <span class="name">${product.name}</span>
                <span class="priceText">$${product.price}</span>
            </div>
        `
    ).join("")

}


displayProducts(data);


searchInput.addEventListener("keyup", (e) => {

    const userGivenValue =  e.target.value.toLowerCase();

    if(userGivenValue) {
        displayProducts(data.filter( (item) => item.name.toLocaleLowerCase().indexOf(userGivenValue) !== -1));
    } else {
        displayProducts(data)
    }

});


setCategories = () => {
    const allCats = data.map( (item) => item.cat);
 

    const categories = ["All", ...allCats.filter((item,index) => {
    
        return allCats.indexOf(item) === index;
    })];


    categoriesContainer.innerHTML = categories.map((category) => 

    `<span class="cat">${category}</span>`
    
    ).join("")


    categoriesContainer.addEventListener("click", (e) => {

        const selectedCat = e.target.textContent;

        selectedCat === "All" ? displayProducts(data) : 
        displayProducts(data.filter((item) => item.cat === selectedCat))
    })
  
}

const setPrices = () => {
  const priceList = data.map((item) => item.price);

  const minPrice = Math.min(...priceList);
  const maxPrice = Math.max(...priceList);

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;

  priceValue.textContent = "$" + maxPrice;

  priceRange.addEventListener("input", (e) => {
    priceValue.textContent = "$" + e.target.value;

    displayProducts(data.filter((item) => item.price <= e.target.value ));
  })


}


setCategories()
setPrices();

