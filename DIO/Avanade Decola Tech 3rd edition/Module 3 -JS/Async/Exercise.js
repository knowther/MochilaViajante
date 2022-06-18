//

onload = () => {
  getImage();
};

const BASE_URL = "https://api.thecatapi.com/v1/images/search";
const container = document.querySelector(".content");
const image = document.createElement("img");

// app.use(cors());
console.log(container);
const getImage = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();
    getCats(json[0].url);
    return json.url;
  } catch (err) {
    console.log(err.message);
  }
};

function getCats(urlImg) {
  image.src = urlImg;
  image.width = 400;
  image.height = 400;
  container.insertBefore(image, container.childNodes[2]);
}
