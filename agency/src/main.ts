import {CanvasSpace, Circle} from 'pts'

const space = new CanvasSpace("#spiderweb")
space.setup({
  bgcolor: "#f2f2f2",
  resize: true
})

const form = space.getForm()

space.add( () => {
  form
    .fill( 'rgba(170,30,240,0.3)' )
    .circle(
      Circle.fromCenter(space.pointer, 50)
    )
})

space.bindMouse().bindTouch().play()
