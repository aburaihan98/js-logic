const item = document.getElementById("allah");

const products = [
  { id: 1, category: "Electronics" },
  { id: 2, category: "Clothing" },
  { id: 3, category: "Electronics" },
  { id: 4, category: "Home" },
  { id: 5, category: "Electronics" },
];

const seenCategories = {};

products.forEach((product) => {
  const category = product.category;

  if (!seenCategories[category]) {
    seenCategories[category] = true;
    // console.log(category);
  }
});
