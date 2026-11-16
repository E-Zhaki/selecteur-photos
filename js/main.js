const photoList = document.getElementById("photo-list");
const countEl = document.querySelector("#total i");

function updateTotal() {
  const nb = photoList.querySelectorAll("li.selected").length;
  countEl.textContent = nb;
}

photoList.addEventListener("click", (event) => {
  const li = event.target.closest("li");
  if (!li) return;

  li.classList.toggle("selected");
  updateTotal();
});
