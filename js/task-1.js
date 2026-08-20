const categories = document.querySelector("#categories");
const categoryItems = categories.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${items}`);
});
