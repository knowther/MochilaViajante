let body = document.querySelector("body");
let button = document.querySelector("input");
let h1 = document.querySelector("h1");
button.addEventListener("click", () => {
  body.classList.toggle("dark");
});

let animais = [
  {
    id: 1,
    name: "O tigre",
    image: "./imagens/tiger.jpg",
    description:
      "O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.",
  },
  {
    id: 2,
    name: "O leão",
    image: "./imagens/leon.jpg",
    description:
      "O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.",
  },
  {
    id: 3,
    name: "O leopardo",
    image: "./imagens/leopardo.jpg",
    description:
      "O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).",
  },
  {
    id: 4,
    name: "A pantera Negra",
    image: "./imagens/pantera-negra.jpg",
    description:
      "A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.",
  },
  {
    id: 5,
    name: "O jaguar",
    image: "./imagens/jaguar.jpg",
    description:
      "O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).",
  },
  {
    id: 6,
    name: "O guepardo",
    image: "./imagens/chita.jpg",
    description:
      "O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.",
  },
  
];

/* 
Passo a passo para executar o desafio - Aula 7
1 - Criar a opção de escolha do felino 
2 - Verificar qual foi a escolha
3 - Definir uma url da internet
4 - Alterar o atributo "src"
*/

window.onload = () => {
  //atribuindo a div pai em uma variável.
  let divParent = document.querySelector(".container");
  //percorrendo o array de animais
  animais.forEach((item) => {
    //criando a div animal
    let animalDiv = document.createElement("div");
    //setando os atributos da div:
    // o id é para identificar cada div do animais pra ser reconhecido no evento e o evento onclick é pra retorne o id do elemento clickado e chamar a função de substituir de acordo com esse id.
    animalDiv.setAttribute("id", item.id);
    animalDiv.setAttribute("onclick", "replyClick(this.id)");
    //criando elementos
    let img = document.createElement("img");
    img.setAttribute("src", item.image);
    let h2 = document.createElement("h2");
    h2.innerText = item.name;
    let paragraph = document.createElement("p");
    paragraph.innerText = item.description;
    animalDiv.classList.add("item");
    animalDiv.appendChild(img);
    animalDiv.appendChild(h2);
    animalDiv.appendChild(paragraph);
    divParent.appendChild(animalDiv);
  });
};

function replyClick(clicked_id) {
  changeImg(clicked_id - 1);
}
function changeImg(escolha) {
  let listafelinos = document.querySelectorAll("img");
  let div = listafelinos[escolha].parentElement;
  let h2 = div.querySelector("h2");
  let paragraph = div.querySelector("p");
  if (escolha == 4) {
    h2.innerText = "Jaguar tirica";
  }
  if (confirm("Transformar esse felino em bisteca?")) {
    listafelinos[escolha].setAttribute(
      "src",
      "https://media.discordapp.net/attachments/457264311161716749/951260951448002620/Captura_de_tela_2022-03-09_203022.png"
    );
    h2.innerText = "Bisteca";
    paragraph.innerText = "Bisteca é o gato de André Pedreschi, é isso..."
  } else {
    let url = prompt("Insira a URL da imagem que deseja.");
    listafelinos[escolha].setAttribute("src", url);
  }
}
