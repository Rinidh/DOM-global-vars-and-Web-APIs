const cards = document.querySelectorAll(".card")

cards.forEach(c => {
  c.addEventListener("click", async () => {
    if (!document.startViewTransition) {
      c.classList.toggle("move")
      return
    }

    const transition = document.startViewTransition(() => {
      // c.classList.toggle("move")
      c.textContent = "moved"
    })
    await transition.finished
  })
})