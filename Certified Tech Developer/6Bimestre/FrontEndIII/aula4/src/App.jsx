import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="container">
      <Header />

      <main style={{display: 'flex', flexDirection: 'column'}}>
        <h1
          style={{
            fontSize: "1.5rem",
            color: "#171717",
            marginTop: "4.6rem",
            marginBottom: "4.6rem",
            textAlign: "center",
          }}
        >
          FastFood House
        </h1>
        <div
          style={{
            display: "flex",
            flexGrow: '1',
            alignItems: "stretch",
            gap: "20px",
            flexWrap: "wrap",
            padding: "30px",
          }}
        >
          <Card
            title={"Feijoada"}
            description={"Prato Principal"}
            image={
              "https://img.cybercook.com.br/receitas/368/como-fazer-feijoada-1.jpeg"
            }
          />
          <Card
            title={"Camarão"}
            description={"Frutos do mar"}
            image={
              "https://images-ext-1.discordapp.net/external/7sk1PO3WPRLcTW-F8uVUIERxhKnmb_9eyc3VxMPBmCE/%3Fv%3D1600709150/https/cdn.shopify.com/s/files/1/0426/7032/5912/products/12-08-2_1024x1024.jpg?width=671&height=671"
            }
          />
          <Card
            title={"Coxinha"}
            description={"Salgadinho"}
            image={
              "https://images-ext-1.discordapp.net/external/c4xFnpEw0yfXLXNcb-roVGr-3LG87ZFakfVf1MILIBM/https/nutrimassasesalgados.com/wp-content/uploads/2020/05/MG_6472-copiar-1.jpg?width=864&height=671"
            }
          />
          <Card
            title={"Torta de Limão"}
            description={"Sobremesa"}
            image={
              "https://images-ext-2.discordapp.net/external/ywxgYSK73SuYooBG1SOg4p1E7LOFbto23voHETQf4vI/https/conteudo.imguol.com.br/c/entretenimento/da/2021/05/28/torta-de-limao-simples-1622228849556_v2_4x3.jpg?width=895&height=671"
            }
          />
          <Card
            title={"Coca-cola"}
            description={"Bebida"}
            image={
              "https://images-ext-2.discordapp.net/external/78VRz_m3PuLvZ2W3_Kyt6b9RWRzUPrJVhO_SxQy70M0/https/images.tcdn.com.br/img/img_prod/686651/pack_6un_coca_cola_garrafa_250ml_35990609_1_c08dc6ed45738f8df55912b2b123d2d6.jpg?width=671&height=671"
            }
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default App;
