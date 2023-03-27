import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [id, setId] = useState("");


  async function getStudents() {
    const response = await axios.get("https://api-aluno.vercel.app/aluno");
    console.log(response.data);
    setStudents(response.data);
  }

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>Bem-Vindo ao CRUD de alunos:</h1>
      <h2>Estes são os alunos cadastrados na plataforma:</h2>
      <div style={{display: 'flex'}}>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            <h2>{student.nome}</h2>
            <h2>{student.matricula}</h2>
            <h2>{student.curso}</h2>
            <h2>{student.bimestre}</h2>
            <button onClick={() => navigate(`/form/${student._id}`)}>editar</button>
            <button onClick={() => deleteStudent(student._id)}>apagar</button>
          </li>
        ))}
      </ul>
      <Link to={"/form"}>Ir para o cadastro de alunos.</Link>
    </div>
      </div>
  );
}
