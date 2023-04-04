import { useState, useEffect, useContext } from "react";
import api from "../../services/api";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";

export default function LoginPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { saveName, saveToken } = useContext(AuthContext);

  async function authUser(event) {
    event.preventDefault();
    console.log(user);
    try {
      const response = await api.post("/auth", {
        email: user.email,
        password: user.password,
      });
      saveName(response.data.name);
      saveToken(response.data.token);
      navigate("/home");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className={styles.container}>
      <img src={logo} />
      <div className={styles.form_div}>
        <form className={styles.form} onSubmit={authUser}>
          <input
            type="text"
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
            placeholder="Insira seu email..."
            required
          />
          <br />
          <input
            type="password"
            value={user.password}
            onChange={(event) =>
              setUser({ ...user, password: event.target.value })
            }
            placeholder="Insira sua senha..."
            required
          />
          <br />
          <input type="submit" value="ENTRAR" />
        </form>
      </div>
    </div>
  );
}
