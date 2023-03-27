import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
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

  async function getStudents() {
    const response = await axios.get("https://api-aluno.vercel.app/aluno");
    console.log(response.data);
    setStudents(response.data);
  }

  function addStudent(event) {
    event.preventDefault();
    try {
      axios.post("https://api-aluno.vercel.app/aluno", {
        nome: name,
        matricula: matricula,
        curso: course,
        bimestre: bimestre,
      });
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
    setName(student.nome);
    setMatricula(student.matricula);
    setCourse(student.curso);
    setBimestre(student.bimestre);
  }

  async function editStudent(event) {
    event.preventDefault();
    try {
      await axios.put(`https://api-todo-six.vercel.app/todo/${id}`, {
        nome: name,
        matricula: matricula,
        curso: course,
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
