const { List } = require("immutable");
const { Map } = require("immutable");

export function concatElements(page1, page2) {
  const page1 = List(page1);
  const page2 = List(page2);

  return page1.concat(page2);
}

export function mergeElements(page1, page2) {
  const page1 = Map(page1);
  const page2 = Map(page2);

  return page1.mergeDeep(page2);
}