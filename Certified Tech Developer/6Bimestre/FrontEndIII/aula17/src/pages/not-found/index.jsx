import { Link } from "react-router-dom";


export default function NotFoundPage(){
    return (
        <div>
            <h1>
                Página não encontrada
            </h1>
            <Link to="/">Ir para a página inicial</Link>
        </div>
    )
}