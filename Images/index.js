// const card_button=document.getElementById("card_button").style.backgroundColor='aqua';

// const container = document.getElementById('grid');

const productData = [{
    img: "images/download-2.jpg",
    title: "Product",
    price: "$50",
    button: "Add to Cart"
},{
    img: "images/download-1.jpg",
    title: "Product",
    price: "$50",
    button: "Add to Cart"
}
]

//Container of all the cards
const container = document.getElementById('grid');

productData.forEach((result) => {
    //Create a card element
    const card = document.getElementById('div');
    //Construct card content
    const content = `
    <div class="card">
    <img src=${result.img} class="card-img-top" alt="product">
    <div class="card-body">
    <h5 class="card-title text-center">${result.title}</h5>
    <p class="card-text text-center">${result.price}</p>
    <div class="d-grid gap-2 col- mx-auto">
    <button type="button" class="btn btn-secondary" id="card_button">${result.button}</button>
    </div>`;

      container.innerHTML += content
})