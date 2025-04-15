export class shapes {
  constructor() {}
  display() {
    console.log(`{your parameters}`);
  }
}
export class circle extends shapes {
  #r;
  constructor(r) {
    super();
    this.#r = r;
  }
  area() {
    let area = Math.PI * this.#r * this.#r;
    console.log("the circle area is = ", area);
  }
  display() {
    console.log(`{your parameters is radius = ${this.#r}}`);
    super.display();
  }
}
export class rec extends shapes {
  #w;
  #h;
  constructor(w, h) {
    super();
    this.#w = w;
    this.#h = h;
  }
  area() {
    let area = this.#w * this.#h;
    console.log("the rectangle area is = ", area);
  }
  display() {
    console.log(`{your parameters is width = ${this.#w} height = ${this.#h}}`);
    super.display();
  }
}
export class square extends shapes {
  #l;

  constructor(value) {
    super();
    this.#l = value;
  }
  area() {
    let area = this.#l * this.#l;
    console.log("the square area is = ", area);
  }
  display() {
    console.log(`{your parameters is length = ${this.#l}}`);
    super.display();
  }
}
