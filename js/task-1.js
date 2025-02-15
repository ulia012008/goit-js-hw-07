const catList = document.querySelector('#categories');
const catItem = catList.querySelectorAll('.item');

console.log('Number of categories:', catItem.length);

catItem.forEach(category => {
  const titleContent = category.querySelector('h2').textContent;
  console.log('Category:', titleContent);
  const elContent = category.querySelectorAll('ul li').length;
  console.log('Elements:', elContent);
});
