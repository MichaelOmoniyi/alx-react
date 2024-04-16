import $ from "jquery";
import _ from "lodash";

$("body").append("<div id='logo'></div>");
$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Clcik here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

const updateCounter = _.debounce(() => {
  count++;
  $("#count").text(`${count} clicks on the button`);
}, 1000);

$("button").on("click", updateCounter);
