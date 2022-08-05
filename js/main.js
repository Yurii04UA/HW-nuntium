const searchInput = document.querySelector(".seatch-panel");
const searchImg = document.querySelector(".search-img");

searchInput.addEventListener("click", () => {
  document.querySelector(".seatch-panel").classList.add("active-search");
});

searchImg.addEventListener("click", () => {
  document.querySelector(".seatch-panel").classList.toggle("active-search");
  searchInput.value = "";
});

searchInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    document.querySelector(".seatch-panel").classList.remove("active-search");
    searchInput.value = "";
  }
});


//need to add close input when i click on window