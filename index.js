// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
  let cool = document.querySelector("#text");
  cool.textContent = "This is really cool!";
});

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );

  