import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    // armazena a ref. do input
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    // o useState serve para que os valores dos componentes sejam atualizados
    // componente inicia com vazio
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    // permite armazenar na memória cálculos pesados
    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    },[email.length]);

    // useCallback armazena essa função em memória
    const handleEntrar = useCallback(()=>{
        console.log(email);
        console.log(password)

        // if (inputPasswordRef.current !== null) {
        //     inputPasswordRef.current.focus()
        // }
    },[email, password]);



    //useEffect executa o bloco apenas quando vc inicializa o componente
    //ideal para chamada de API
 /*   useEffect(() =>{
    },[]);

    useEffect(() =>{
        console.log(email);
        // Este useEffect vai ser executado toda vez que o email e password forem alterados
        /// por isso eles estão nas dependências abaixo
    },[email]);

    useEffect(() =>{
        console.log(password);
    },[password]);
*/
    // const handleEntrar = () => {
    //     console.log(email);
    //     console.log(password);
    // }

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email {emailLength}</p>
                <label>
                    <span>Email</span>
                    <input 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}
                    // input de senha foi focada após o enter
                    onKeyDown = {e=>e.key==='Enter'? inputPasswordRef.current?.focus(): undefined}
                    />
                </label>

                <label>
                    <span>Senha</span>
                    <input type="password" 
                    value={password} 
                    ref={inputPasswordRef}
                    onChange={e=>setPassword(e.target.value)}/>
                </label>
                <button type="button" /* tipo button para enviar o reload da pagina */ onClick={handleEntrar} >Entrar</button >
            </form>

            
        </div>
    );


    
}

