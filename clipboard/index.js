const textDiv = document.querySelector("#text")
const copyBtn = document.querySelector("#copy-button")
const pasteBtn = document.querySelector("#paste-button")
const pasteArea = document.querySelector("#paste-area")

copyBtn.addEventListener('click', async () => {
  const text = textDiv.textContent.trim();
  await navigator.clipboard.writeText(text)
  console.log(text)
})

pasteBtn.addEventListener('click', async () => {
  pasteArea.value = await navigator.clipboard.readText()
})
