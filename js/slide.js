export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.distances = {
      finalDistance: 0,
      startX: 0,
      movement: 0,
    };
  }

  onStart(event) {
    event.preventDefault();
    this.wrapper.addEventListener("mousemove", this.onMove);
    this.distances.startX = event.clientX; //o mesmo que pageX
  }
  moveSlide(distX) {
    this.distances.movePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;
  }
  updatePosition(clientX) {
    this.distances.movement = (this.distances.startX - clientX) * 1.5;
    return this.distances.finalDistance - this.distances.movement;
  }
  onMove(event) {
    const finalPosition = this.updatePosition(event.clientX);
    this.moveSlide(finalPosition);
  }
  onEnd(event) {
    this.wrapper.removeEventListener("mousemove", this.onMove);
    this.distances.finalDistance = this.distances.movePosition;
  }
  addSlideEvents() {
    this.wrapper.addEventListener("mousedown", this.onStart);
    this.wrapper.addEventListener("mouseup", this.onEnd);
  }
  init() {
    this.bindEvents();
    this.addSlideEvents();
    return this;
  }
  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  //onstart
  //init
  //bindevents
  //onmove
  //onEnd
}
