const button = document.getElementsByTagName('button')[0]

if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('ripple.js')
}

button.addEventListener('click', (mouseEvent) => {
  console.log('yah')
  //getting mouse click x & y rel to button top left
  const { x: buttonLeftEdge, y: buttonTopEdge } = button.getBoundingClientRect()
  const [
    xRelativeToElemTopLeft,
    yRelativeToElemTopLeft
  ] = [
      mouseEvent.clientX - buttonLeftEdge,
      mouseEvent.clientY - buttonTopEdge
    ]

  button.style.setProperty("--x", xRelativeToElemTopLeft)
  button.style.setProperty("--y", yRelativeToElemTopLeft)

  //tracking animation timeline with tick:
  const start = performance.now()
  requestAnimationFrame(function step(now) {
    const tick = Math.floor(now - start)
    button.style.setProperty("--tick", tick)

    if (tick > 1000) { //stop the animation after 1 sec
      button.style.setProperty("--tick", 0)
      return;
    } else {
      requestAnimationFrame(step)
    }
  })
})