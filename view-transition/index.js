const cards = document.querySelectorAll(".card")

cards.forEach(c => {
  c.addEventListener("click", () => {
    c.classList.toggle("expanded")
  })
})