let img = document.createElement("img");
img.src = "https://picsum.photos/200/301";

img.addEventListener("click", function() {
  console.log("clicked");
})

document.body.appendChild(img);
module.exports = {img}