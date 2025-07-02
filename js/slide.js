export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
		this.wrapper.addEventListener('mousemove', this.onMove)
  }
	onMove() {
		console.log('moveu!')
	}
	onEnd() {
		console.log('acabou.')
		this.wrapper.removeEventListener('mousemove', this.onMove )
	}
  addSlideEvents() {
		this.wrapper.addEventListener("mousedown", this.onStart);
		this.wrapper.addEventListener('mouseup', this.onEnd)
  }
  init() {
		this.bindEvents()
		this.addSlideEvents()
	}
	bindEvents() {
		this.onStart = this.onStart.bind(this)
		this.onMove = this.onMove.bind(this)
		this.onEnd = this.onEnd.bind(this)
	}

  //onstart
  //init
  //bindevents
  //onmove
  //onEnd
}
