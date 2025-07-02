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
// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};

});