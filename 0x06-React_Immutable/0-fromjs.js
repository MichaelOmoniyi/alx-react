const { fromJS } = require("immutable");

obj = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132,
};

export default function getImmutableObject(object) {
  return fromJS(object);
}

getImmutableObject(obj);
