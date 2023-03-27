import axios from "axios";
import { useEffect, useState } from "react";
import {
  useNavigate,
  Link,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();
  const { studentID } = useParams();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [matricula, setMatricula] = useState("");
  const [course, setCourse] = useState("");
  const [bimestre, setBimestre] = useState("");

  function limpaCampos() {
    setId("");
    setName("");
    setCourse("");
    setMatricula("");
    setBismeste("");
  }

  async function getStudent() {
    try {
      alert(studentID);
      const response = await axios.get(
        `https://api-aluno.vercel.app/aluno/${studentID}`
      );
      const student = response.data;
      setId(student._id);
      setName(student.nome);
      setCourse(student.curso);
      setMatricula(student.matricula);
      setBimestre(student.bimestre);
    } catch (err) {
      alert("Erro");
    }
  }

  async function editStudent(event) {
    event.preventDefault();
    try {
      await axios.put(`https://api-todo-six.vercel.app/aluno/${id}`, {
        nome: name,
        matricula: matricula,
        curso: course,
        bimestre: bimestre,
      });
      limpaCampos();
      navigate("/");
    } catch (err) {
      alert("Erro editar estudante");
    }
  }

  useEffect(() => {
    getStudent();
  }, []);

  return (
    <div>
      <form onSubmit={editStudent}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          placeholder="Insira o nome..."
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="matricula">Num. Matrícula:</label>
        <input
          id="matricula"
          type="text"
          value={matricula}
          onChange={(event) => setMatricula(event.target.value)}
        />
        <br />
        <label htmlFor="course">Curso:</label>
        <select
          id="course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option value="Front 3">Front III</option>
          <option value="Infra 2">Infra II</option>
          <option value="UX/UI">UX/UI</option>
        </select>
        <label htmlFor="bimestre">Bimestre:</label>
        <input
          id="bimestre"
          type="test"
          value={bimestre}
          onChange={(event) => setBimestre(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormPage;
