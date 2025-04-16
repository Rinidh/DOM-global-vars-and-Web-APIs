const cards = document.querySelectorAll(".card")

const updateDOM = function () {
  // c.classList.toggle("move")
  // c.textContent = "moved"

  const newCard = document.createElement("div")
  newCard.style.viewTransitionName = "slidingCard"
  newCard.style.height = "200px"
  newCard.style.width = "200px"
  newCard.style.backgroundColor = "darkred"
  newCard.textContent = "new card"

  document.body.replaceChildren(newCard)

}

cards.forEach(c => {
  c.addEventListener("click", async () => {
    if (!document.startViewTransition) {
      updateDOM()
      return
    }

    const transition = document.startViewTransition(() => {
      updateDOM()
    })
    await transition.finished
  })
})