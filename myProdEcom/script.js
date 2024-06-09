const products = document.querySelectorAll('.product');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

products.forEach(product => {
  product.addEventListener('click', () => {
    const imgSrc = product.querySelector('img').getAttribute('src');
    modalImage.setAttribute('src', imgSrc);
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});