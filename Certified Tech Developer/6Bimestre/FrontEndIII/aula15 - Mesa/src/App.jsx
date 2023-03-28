import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [curso, setCurso] = useState("");
  const [bimestre, setBimestre] = useState("");

  function limpaCampos() {
    setId("");
    setNome("");
    setCurso("");
    setMatricula("");
    setBimestre("");
  }

  async function getStudents() {
    const response = await axios.get("https://api-aluno.vercel.app/aluno");
    console.log(response.data);
    setStudents(response.data);
  }

  function addStudent(event) {
    event.preventDefault();
    try {
      axios.post("https://api-aluno.vercel.app/aluno", {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      });
      limpaCampos();
      getStudents();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteStudent(id) {
    alert(id);
    try {
      await axios.delete(`https://api-aluno.vercel.app/aluno/${id}`);
      getStudents();
    } catch (err) {
      alert("Erro");
    }
  }

  function preencherForm(student) {
    setId(student._id);
    setNome(student.nome);
    setMatricula(student.matricula);
    setCurso(student.curso);
    setBimestre(student.bimestre);
  }

  async function editStudent(event) {
    event.preventDefault();
    try {
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {
        nome: nome,
        matricula: matricula,
        curso: curso,
        bimestre: bimestre,
      });
      getStudents();
    } catch (err) {
      alert("Erro editar estudante");
    }
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <form onSubmit={id ? editStudent : addStudent}>
        <label htmlFor="name">Nome:</label>
        <input
          id="name"
          type="text"
          placeholder="Insira o nome..."
          value={nome}
          onChange={(event) => setNome(event.target.value)}
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

        <input
          id="curso"
          type="text"
          value={curso}
          onChange={(event) => setCurso(event.target.value)}
        />

        {/* <select
          id="course"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        >
          <option value="">Escolha o Curso:</option>
          <option value="Front 3">Front III</option>
          <option value="Infra 2">Infra II</option>
          <option value="UX/UI">UX/UI</option>
        </select> */}
        <label htmlFor="bimestre">Bimestre:</label>
        <input
          id="bimestre"
          type="text"
          value={bimestre}
          onChange={(event) => setBimestre(event.target.value)}
        />
        <input type="submit" />
      </form>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h2>{student.nome}</h2>
            <h2>{student.matricula}</h2>
            <h2>{student.curso}</h2>
            <h2>{student.bimestre}</h2>
            <button onClick={() => preencherForm(student)}>editar</button>
            <button onClick={() => deleteStudent(student._id)}>apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
