import { rec, circle, square } from "./task-2.js";

let obj = new circle(5);
obj.area();
obj.display();

let rect = new rec(4, 6);
rect.area();
rect.display();

let sq = new square(3);
sq.area();
sq.display();
