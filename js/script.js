// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};
// Toggle Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
const cartButton = document.querySelector('#shopping-cart-button');

cartButton.addEventListener('click', function (e) {
  e.preventDefault(); 
  shoppingCart.classList.toggle('active');
});

// menambah dan menghapus item dari keranjang
const removeItemButtons = document.querySelectorAll('.remove-item');

removeItemButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    this.parentElement.remove();
  });
});