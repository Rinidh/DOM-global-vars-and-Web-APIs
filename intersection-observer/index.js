const options = {
  root: null,
  threshold: 0.5
}

const callback = function (entry) {
  if (entry.intersectionRatio > 0.5) console.log("yeah!");

}

const observer = new IntersectionObserver(callback, options)