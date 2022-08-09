const searchInput = document.querySelector(".search-panel");
const searchImg = document.querySelector(".search-img");
const search = document.querySelector('.search')

console.log(searchInput.classList);
//open/close input
searchImg.addEventListener("click", () => {
  searchInput.classList.toggle("active-search");
  searchInput.value = "";
});

//close if keyup enter
searchInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    searchInput.classList.remove("active-search");
    searchInput.value = "";
  }
});

// close if clicked on outside
search.addEventListener('click',(e)=>{
    e.stopPropagation()
  })
document.addEventListener("click", () => {
  searchInput.classList.remove("active-search");
  searchInput.value = "";
});
