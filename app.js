fetch('https://fakestoreapi.com/products')
    .then((data) => data.json())
    .then(result => {
        // console.log(result);
        renderUi(result)
    }).catch(error => {
        console.log(error);
    });

const renderUi = (items) => {
    const parentCrad = document.getElementById("parentCrad");
    // console.log(items);
    for (let products of items) {
        parentCrad.innerHTML += `<div class="parent-container"><img src="${products.image}" alt="" width="100%" height="200px">
            <div class="discraptions">
            <h6 class="card-title">${products.title.slice()}</h6>
            <p class="card-text">${products.description.slice(0, 100)}</p>
            </div>
            <a href="#" class="card-btn">See More..</a>
            </div>`
    }
}

