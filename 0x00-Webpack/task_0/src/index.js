import $ from "jquery";

function addParagraph() {
    $("body").append("<p>Holberton Dashboard</p>");
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append("<p><Copyright - Holberton School/p>");
}

$(document).ready(() => {
    addParagraph();
})