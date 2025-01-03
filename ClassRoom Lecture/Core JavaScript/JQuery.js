// const heading = document.querySelector("h1");
const heading = $("h1");
const para = $("p");

heading.css({
  color: "orange",
});

$(heading[1]).css({
  color: "red",
});

para.css("color", "white");
para.css("backgroundColor", "green");

$(heading[1]).text("UnorderedList");

$(heading[1]).html("<em>UnOrdered</em>");

$('ul').addClass('one')
// $('ul').removeClass('one')
$('ul').toggleClass('one')