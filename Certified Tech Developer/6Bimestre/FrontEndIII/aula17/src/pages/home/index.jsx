
import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'

export default function HomePage(){
    const [alunos, setAlunos] = useState([])

    async function getAlunos(){
        try{
            const {data} = await api.get('/aluno')
            setAlunos(data)
        }catch(err){
            alert(err)
        }
        
    }

    async function deletarAluno(id){
        try{
            await api.delete(`/aluno/${id}`)
            getAlunos()
        }catch(err){
            alert(err)
        }
        
    }

    useEffect(
        ()=> {
            getAlunos();
        }, []
    )

    return (
        <div>
    <h1>Form PAGE</h1>
        <ul>
        {alunos.map((aluno) => (
          <li key={aluno._id}>
            <Link to={`formulario/${aluno._id}`}>
                <p>{aluno.nome}</p>
            </Link>
            <button onClick={() => deletarAluno(aluno._id)}>Excluir</button>
          </li>
        ))}
        </ul>
        </div>
        
    )
}