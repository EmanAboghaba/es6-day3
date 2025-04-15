// task3==========================

///generator for array
let arr = [10, 20, "mona", "eman", 50];
arr[Symbol.iterator] = function* () {
  for (let i = 0; i < this.length; i++) {
    yield this[i];
  }
};

console.log("array generator  ");

// arr[Symbol.iterator] = function () {
//   let i = 0;
//   return {
//     next: () => {
//       if (i < this.length) {
//         return { value: this[i++], done: false };
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//   };
// };

for (let val of arr) {
  console.log(val);
}

//iterator for object

console.log("object iterator");
obj = { fname: "eman", age: 25, address: "alex" };

obj[Symbol.iterator] = function () {
  let entries = Object.entries(this);
  let i = 0;

  return {
    next: () => {
      if (i < entries.length) {
        let [key, value] = entries[i++];
        return { value: `${key} = ${value}`, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
};

for (let val of obj) {
  console.log(val);
}

// console.log("object generator");
// obj = { fname: "eman", age: 25, address: "alex" };
// obj[Symbol.iterator] = function* generator() {
//   for (let key of Object.keys(this)) {
//     yield this[key];
//   }
// };

// for (let val of obj) {
//   console.log(val);
// }
