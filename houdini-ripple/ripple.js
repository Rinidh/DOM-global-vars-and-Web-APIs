registerPaint('ripple', class {
  static get inputCSSProperties() {
    return ['--x', '--y', '--tick']
  }

  //drawing the circle (ripple) in button's bg
  paint(ctx, { width }, props) {
    //retrieve css props/vars
    const x = parseFloat(props.get('--x').toString())
    const y = parseFloat(props.get('--y').toString())
    let tick = parseFloat(props.get('--tick').toString())

    //clamp a tick in range [0, 1000] sec
    if (tick < 0) tick = 0
    if (tick > 1000) tick = 1000

    //draw ripple
    const rippleColor = 'rgba(255,255,255,0.5)'
    ctx.fillStyle = rippleColor;
    ctx.globalAlpha = 1 - tick / 1000 //fading effect
    ctx.arc(
      x, y, //center
      width * tick / 1000, //radius
      0, 2 * Math.PI //full circle
    )
    ctx.fill()
  }
})