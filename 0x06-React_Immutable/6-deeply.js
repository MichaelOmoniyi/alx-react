const { Map } = require("immutable");

function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(Map(page2));
}

// Below is a test for the above function
const page1 = {
  "user-1": {
    id: 1,
    name: "test",
    likes: {
      1: {
        uid: 1234,
      },
    },
  },
};

const page2 = {
  "user-1": {
    likes: {
      2: {
        uid: 134,
      },
    },
  },
};

mergeDeeplyElements(page1, page2).toJS();
