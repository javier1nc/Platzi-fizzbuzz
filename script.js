//script.js
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    document.write("<strong>" + "fizzbuzz" + "</strong>");
  } else if (i % 3 == 0) {
    document.write("fizz");
  } else if (i % 5 == 0) {
    document.write("buzz");
  } else {
    document.write(i);
  }

  if (i < 100) {
    document.write(", ");
  }
  if (i == 100) {
    document.write(".");
  }
}