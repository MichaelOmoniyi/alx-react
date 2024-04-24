const { Seq } = require("immutable");

function printBestStudents(obj) {
  const seq = Seq(obj);

  const filtered = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const JSObject = filtered.toJS();

  Object.keys(JSObject).map((key) => {
    JSObject[key].firstName = capFirstLetter(JSObject[key].firstName);
    JSObject[key].lastName = capFirstLetter(JSObject[key].lastName);
    return JSObject[key];
  });

  console.log(JSObject);
}

// Below is the test for the above function
const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
  2: {
    score: 100,
    firstName: "michael",
    lastName: "omoniyi",
  },
  3: {
    score: 70,
    firstName: "guillaume",
    lastName: "salva",
  },
  4: {
    score: 66,
    firstName: "guillaume",
    lastName: "salva",
  },
  5: {
    score: 40,
    firstName: "guillaume",
    lastName: "salva",
  },
};

printBestStudents(grades);
