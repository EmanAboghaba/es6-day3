//========================proxy================
let obj = new Proxy(
  {},
  {
    get: function (target, prop) {
      return target[prop];
    },
    set: function (target, prop, value) {
      if (prop === "name") {
        if (typeof value !== "string" || value.length != 7) {
          console.log("Value must be a string and length must be 7");
          return false;
        }
      } else if (prop === "address") {
        if (typeof value !== "string") {
          console.log("Value must be a string");
          return false;
        }
      } else if (prop === "age") {
        if (typeof value !== "number" || value < 25 || value > 60) {
          console.log("Value must be a number between 25 and 60");
          return false;
        }
      }
      target[prop] = value;
      return true;
    },
  }
);
obj.name = "mohamed";
obj.age = 27;
obj.address = "alex";
console.log(`name = ${obj.name} age = ${obj.age} address = ${obj.address}`);
