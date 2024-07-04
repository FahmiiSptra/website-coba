const jeansEl = document.getElementById('jeans');
const listJeans = document.querySelector('.list-jeans');
const aside = document.querySelector('aside');
jeansEl.addEventListener('click', () => {
  listJeans.classList.toggle('active-jeans');
  aside.classList.toggle('aside-scroll');
});
