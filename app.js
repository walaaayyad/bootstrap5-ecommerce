const newItem = document.getElementById('newItem')
console.log('js work')

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data=> {
        console.log(data);
        let card = '';
        data.map(i => {
            card += `<div id=${i.id} class="card col-lg-2 col-md-3 col-sm-5 col-xs-9 m-2 bg-body pt-3">
            <img src=${i.image} class="img-fluid" alt="">
            <p class='title'>${i.title}</p>
            <p>${i.description}</p>
            <p>${i.category}</p>
            <p>${i.price}</p>
            </div>`
        })
        newItem.innerHTML = card;
    })


