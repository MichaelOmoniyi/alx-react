const { Map } = require("immutable");
obj = {
  1: "Liam",
  2: "Noah",
  3: "Elijah",
  4: "Oliver",
  5: "Jacob",
  6: "Lucas",
};

export const map = Map(obj);

export const map2 = map.withMutations((values) => {
  values.set(2, "Benjamin").set(4, "Oliver");
});
