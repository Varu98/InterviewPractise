function createUser(initialName) {
  let name = initialName;

  return {
    getName() {
      return name;
    },
    setName(newName) {
      name = newName;
    },
  };
}

let p1 = createUser("Vardaan");
let p2 = createUser("Agarwal");

p2.setName(null);
console.log(p1.getName());
