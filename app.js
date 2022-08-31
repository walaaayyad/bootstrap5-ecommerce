const item = document.getElementById('item')
console.log('js work')

// fetch('https://fakestoreapi.com/products')
//   .then(res=>res.json())
//   .then(data=> {
//       console.log(data);
//       let card = '';
//       data.map(i => {
//           card += `<div id=${i.id} class="card col-lg-2 col-md-3 col-sm-5 col-xs-9 m-2 bg-body pt-3">
//           <img src=${i.image} class="img-fluid" alt="">
//           <p class='title'>${i.title}</p>
//           <p>${i.description}</p>
//           <p>${i.category}</p>
//           <p>${i.price}</p>
//           </div>`
//       })
//       newItem.innerHTML = card;
//     })


// Data comes from [https://fakeapi.platzi.com/]
fetch('https://api.escuelajs.co/api/v1/products')
  .then(res=>res.json())
  .then(data=> {
      console.log(data);
      let card = '';
      data.map(i => {
          card += `
          <div class="col-lg-2 col-md-3 col-sm-5 col-xs-9">
            <img src=${i.images} class="img-fluid" alt="">
            <div class="row mt-2 border">
              <div class="col-9 text-start">
                <p class='title mb-0'>${i.title}</p>
                <div class="stars">
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star-half-stroke"></i>
                  <i class="fa-regular fa-star"></i>
                </div>
                <p class="price">$ ${i.price}</p> 
              </div>
              <div class="col-3 mt-3">
                <div class="border">
                  <i id="heart" class="bi bi-suit-heart-fill" onclick="clickedHeart(this)"></i>
                </div>
                <div class="border">
                  <i id="basket" class="bi bi-cart3" onclick="clickedBasket(this)"></i>
                </div>
              </div>
            </div>
          </div> 
          `
      })
      item.innerHTML = card;
    })
  .catch(err=> {
    console.log(err);
  })
// Swiper.js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 15
    }
  }
});
// end Swiper.js

// Handel Item heart & basket
function clickedHeart(e) {
  e.classList.toggle('red')
}
function clickedBasket(e) {
  e.classList.toggle('blue')
}

// Get data from json file
// console.log('json part here')
// fetch("items.json")
// .then(res=> res.json())
// .then(data=> console.log(data))