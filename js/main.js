const searchInput = document.querySelector(".search-panel");
const searchImg = document.querySelector(".search-img");

//open/close input
searchImg.addEventListener("click", () => {
  document.querySelector(".search-panel").classList.toggle("active-search");
  searchInput.value = "";
});

//close if keyup enter
searchInput.addEventListener("keyup", (event) => {
  if (event.code === "Enter" || event.code === "NumpadEnter") {
    document.querySelector(".search-panel").classList.remove("active-search");
    searchInput.value = "";
  }
});

// close if clicked on outside
document.addEventListener("click", (e) => {
  if (
    e.target.className != "search-img" &&
    e.target.className != "search-panel active-search"
  ) {
    document.querySelector(".search-panel").classList.remove("active-search");
    searchInput.value = "";
  }
});
