import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function FormularioPage() {
  const { id } = useParams();
  const [aluno, setAluno] = useState({});
  const navigate = useNavigate();

  async function getAluno() {
    const { data } = await api.get(`/aluno/${id}`);
    setAluno({ ...data });
  }

  async function editUser(event) {
    event.preventDefault();
    await api.put(`/aluno/${id}`, aluno);
    navigate("/");
  }

  useEffect(() => {
    getAluno();
  }, []);

  return (
    <form onSubmit={editUser}>
      <h1>Editando aluno {aluno.nome}</h1>
      <input
        value={aluno.nome}
        onChange={(event) => setAluno({ ...aluno, nome: event.target.value })}
        type="text"
      />
      <br />
      <input
        value={aluno.matricula}
        onChange={(event) =>
          setAluno({ ...aluno, matricula: event.target.value })
        }
        type="text"
      />
    <br />
      <input
        value={aluno.curso}
        onChange={(event) => setAluno({ ...aluno, curso: event.target.value })}
        type="text"
      />
        <br />
      <input
        value={aluno.bimestre}
        onChange={(event) =>
          setAluno({ ...aluno, bimestre: event.target.value })
        }
        type="text"
      />

      <input type="submit" value={"Salvar"} />
    </form>
  );
}
