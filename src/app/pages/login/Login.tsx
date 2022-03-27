import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

import { ButtonLogin } from "./ButtonLogin";
import { InputLogin } from "./components/InputLogin";

export const Login = () => {
  // armazena a ref. do input
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const {nomeDoUsuario} = useUsuarioLogado();

  // o useState serve para que os valores dos componentes sejam atualizados
  // componente inicia com vazio
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // permite armazenar na memória cálculos pesados
  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length * 1000;
  }, [email.length]);

  // useCallback armazena essa função em memória
  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);

    // if (inputPasswordRef.current !== null) {
    //     inputPasswordRef.current.focus()
    // }
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email {emailLength}</p>
        <p>{nomeDoUsuario}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={password}
          ref={inputPasswordRef}
          onChange={(newValue) => setPassword(newValue)}
        />

        <ButtonLogin type="button" onClick={handleEntrar}>
          Entrar
        </ButtonLogin>

        <ButtonLogin type="button" onClick={handleEntrar}>
          Cadastrar
        </ButtonLogin>
      </form>
    </div>
  );
};
