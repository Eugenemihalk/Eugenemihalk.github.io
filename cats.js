const catBtn = document.querySelector(".random__btn");
const catImage = document.querySelector(".cat-image");

catBtn.addEventListener("click", () => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?api_key=live_7hGTbxau4pajxnyTUFFoAPFpEJOREX5d5n4uvoDxwBzANol81XWGC2tmklYwKVVZ"
    )
      .then((response) => response.json())
      .then((data) => {
        catImage.src = data[0].url;
      })
      .catch((error) => console.error("Error:", error));
  });