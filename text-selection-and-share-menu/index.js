const textDiv = document.getElementById("text")
const displayDiv = document.getElementById("display")
const shareBtn = document.getElementById("share-button")


document.addEventListener('mouseup', () => {
  const text = window.getSelection().toString()

  if (text) displayDiv.textContent = text;
})

shareBtn.addEventListener('click', async () => {
  const text = displayDiv.textContent

  if (text) {
    const dataToShare = {
      title: "Demo - share api",
      text: text,
      url: 'https://blog.codingwinner.com/12-javascript-web-apis-to-build-futuristic-websites-you-didnt-know-8ba129027091#c951'
    }

    await navigator.share(dataToShare)
  }
})