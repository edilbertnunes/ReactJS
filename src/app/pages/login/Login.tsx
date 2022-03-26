import { useNavigate } from "react-router-dom";

export const Login = () => {
    const history = useNavigate();

    const handleClick = () => {
        history('/inicial');
    }

    return (
        <div>
            <p>Login</p>
            <button onClick={handleClick}>Pagina Inicial</button>
        </div>
    );
}