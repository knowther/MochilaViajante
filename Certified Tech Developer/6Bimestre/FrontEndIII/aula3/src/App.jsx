import { useState } from "react";
import worldImage from "./assets/mundo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          backgroundColor: "#0B973A",
          textAlign: "center",
          color: "white",
          padding: "35px",
        }}
      >
        Mesa de trabalho 3
      </div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "25px",
          fontWeight: 400,
          marginTop: "30px",
        }}
      >
        Lorem Ipsum
      </h1>
      <div style={{ margin: "50px", textAlign: "justify" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          lectus sit amet est placerat in egestas. Sit amet consectetur
          adipiscing elit ut aliquam purus sit amet. Viverra aliquet eget sit
          amet tellus cras adipiscing enim. Mauris rhoncus aenean vel elit
          scelerisque mauris. Volutpat diam ut venenatis tellus in metus
          vulputate. Lectus sit amet est placerat in egestas. Ac placerat
          vestibulum lectus mauris ultrices eros in cursus turpis. Accumsan in
          nisl nisi scelerisque eu ultrices. Id ornare arcu odio ut sem. Enim ut
          sem viverra aliquet eget sit amet tellus. Ac auctor augue mauris augue
          neque. In egestas erat imperdiet sed. Purus ut faucibus pulvinar
          elementum. Neque vitae tempus quam pellentesque nec nam aliquam. Nibh
          nisl condimentum id venenatis. Arcu ac tortor dignissim convallis
          aenean et tortor at risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          lectus sit amet est placerat in egestas. Sit amet consectetur
          adipiscing elit ut aliquam purus sit amet. Viverra aliquet eget sit
          amet tellus cras adipiscing enim. Mauris rhoncus aenean vel elit
          scelerisque mauris. Volutpat diam ut venenatis tellus in metus
          vulputate. Lectus sit amet est placerat in egestas. Ac placerat
          vestibulum lectus mauris ultrices eros in cursus turpis. Accumsan in
          nisl nisi scelerisque eu ultrices. Id ornare arcu odio ut sem. Enim ut
          sem viverra aliquet eget sit amet tellus. Ac auctor augue mauris augue
          neque. In egestas erat imperdiet sed. Purus ut faucibus pulvinar
          elementum. Neque vitae tempus quam pellentesque nec nam aliquam. Nibh
          nisl condimentum id venenatis. Arcu ac tortor dignissim convallis
          aenean et tortor at risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          lectus sit amet est placerat in egestas. Sit amet consectetur
          adipiscing elit ut aliquam purus sit amet. Viverra aliquet eget sit
          amet tellus cras adipiscing enim. Mauris rhoncus aenean vel elit
          scelerisque mauris. Volutpat diam ut venenatis tellus in metus
          vulputate. Lectus sit amet est placerat in egestas. Ac placerat
          vestibulum lectus mauris ultrices eros in cursus turpis. Accumsan in
          nisl nisi scelerisque eu ultrices. Id ornare arcu odio ut sem. Enim ut
          sem viverra aliquet eget sit amet tellus. Ac auctor augue mauris augue
          neque. In egestas erat imperdiet sed. Purus ut faucibus pulvinar
          elementum. Neque vitae tempus quam pellentesque nec nam aliquam. Nibh
          nisl condimentum id venenatis. Arcu ac tortor dignissim convallis
          aenean et tortor at risus.
        </p>

        <p style={{ fontSize: "18px", marginTop: "30px" }}>
          Equipe: Johnny Wesley, Diogo de Moraes
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          width:'100%',
          bottom:0,
          backgroundColor: "#0B973A",
          textAlign: "center",
          color: "white",
          padding: "35px",
        }}
      >
        Todos os direitos reservados 2022
      </div>
    </div>
  );
}
export default App;
