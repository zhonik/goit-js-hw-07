const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach(category => {
  console.log(`Category: ${category.querySelector('.item-title').textContent}`);
  console.log(
    `Elements: ${category.querySelectorAll('.secondary-item').length}`
  );
});
