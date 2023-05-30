var page = 0;

function alterPage(offset) {
    page = offset;
    parseInt(page)
}

let urlapi = `https://api.escuelajs.co/api/v1/products?offset=${page}&limit=20`;

document.addEventListener('DOMContentLoaded', function () {

    let products = document.querySelector('.products')
    async function fecthProducts(url) {
        try {
            let data = await fetch(url);
            let response = await data.json();

            for (let i = 0; i < response.length; i++) {
                let description = response[i].description;
                let title = response[i].title;
                products.innerHTML +=
                    `
                <div class="product">
                        <img src="${response[i].images[1]}" alt="${response[i].category.name}" class="product-img">
                        <div class="product-content">
                        
                        <h2 class="product-title">${title.length > 15 ?
                        title.substring(0, 18).concat('...') : title}</h2>
                        <p class="description-product">${description.length > 20 ? description.substring(0, 80).concat('...more') : description}</p>
                        <div class="product-price">
                            <h3 class="price">$${response[i].price}</h3>
                            <a href="#!" data-productId="${response[i].id}" class="cart-add"><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                        </div>

                        </div>
                </div>
            `;
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    fecthProducts(urlapi);
})
