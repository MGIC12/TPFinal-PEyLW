const filterContainer = document.querySelector(".gallery-filter");
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-item")) {
    filterContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const filterValue = e.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {
      if (item.classList.contains(filterValue) || filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    });
  }
});
