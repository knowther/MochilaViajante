import { useState, useEffect } from "react";

function App() {
  const [listUser, setListUser] = useState([]);

  async function getUsers() {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setListUser(data.users);
    } catch (erro) {
      console.log("Erro ao buscar dados" + erro);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>Produtos</h1>
      <div>
        <ul>
        {listUser.map((user) => (
          <li
            key={user.id}
            style={{ border: "1px solid red", marginBottom: 20 }}
          >
            <h3>{user.firstName}</h3>
            <h3>{user.lastName}</h3>
            <h3>{user.maidenName}</h3>
            <h3>{user.age}</h3>
            <h3>{user.email}</h3>
            <h3>{user.password}</h3>
           <h3>{user.bloodGroup}</h3>
           <img src={user.image} alt="" srcset="" />
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
