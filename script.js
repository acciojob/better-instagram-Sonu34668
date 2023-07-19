class Grid {
  constructor(element) {
    this.element = element;
    this.images = Array.from(element.querySelectorAll(".image"));
    this.init();
  }

  init() {
    this.images.forEach(image => {
      image.addEventListener("dragstart", this.onDragStart);
      image.addEventListener("drop", this.onDrop);
    });
  }

  onDragStart(event) {
    event.preventDefault();
    this.draggedImage = event.target;
    this.draggedImage.classList.add("dragged");
    this.draggedImage.style.cursor = "move";
  }

  onDrop(event) {
    event.preventDefault();
    this.draggedImage.classList.remove("dragged");
    this.draggedImage.style.cursor = "default";

    const target = event.target;
    const index = this.images.indexOf(target);
    const draggedIndex = this.images.indexOf(this.draggedImage);

    this.images.splice(index, 1);
    this.images.splice(draggedIndex, 0, this.draggedImage);
  }
}

const grid = new Grid(document.querySelector(".grid"));