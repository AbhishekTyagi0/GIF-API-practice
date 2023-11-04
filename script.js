const img = document.querySelector("img");
const button = document.querySelector("button");
const container = document.getElementById("container");
let getImage;

function fetchImage() {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Vnp4So5DugG5nDIqu1OJfBZJlwZLJre6&s=dogs`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();

    })

    .then(function (response) {
      getImage = response.data.images.original.url;

      img.src = getImage;
    });
  }

  fetchImage();

  button.addEventListener("click", () => {

    container.style.display = 'block';
    img.src = getImage;
    container.appendChild(img)
    fetchImage();
  });

const input = document.querySelector("input");
const button2 = document.querySelector(".btn2");

function searchFetch() {

  let find = input.value;

  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=Vnp4So5DugG5nDIqu1OJfBZJlwZLJre6&s=${find}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })

    .then((response) => {

      getImage = response.data.images.original.url;
      img.src = getImage;
      container.appendChild(img);
    });


}


button2.addEventListener('click',searchFetch);