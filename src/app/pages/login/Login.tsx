import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    // o State serve para que os valores dos componentes sejam atualizados
    // componete inicia com vazio
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEntrar = () => {
        console.log(email);
        console.log(password);
    }

    // const history = useNavigate();

    // const handleClick = () => {
    //     history('/inicial');
    // }

    // return (
    //     <div>
    //         <p>Login</p>
    //         <button onClick={handleClick}>Pagina Inicial</button>
    //     </div>
    // );
    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e=>setEmail(e.target.value)}/>
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </label>
                
                <button type="button" onClick={handleEntrar} /* tipo button para enviar o reload da pagina */>Entrar</button>
            </form>
        </div>
    );
}

