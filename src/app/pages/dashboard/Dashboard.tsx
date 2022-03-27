import { useRef } from "react";
import { Link } from "react-router-dom";
// Link equivale ao href do html

export const Dashboard = () => {
  const counterRef = useRef(0);
    return (
    <div>
     <p>Dashboard</p>

     <p>Contador: {counterRef.current}</p>
      <button onClick={()=>counterRef.current++}>Somar</button>
      <button onClick={()=>console.log(counterRef.current)}>Log</button>


     <Link to="/entrar">Login</Link>
      </div> 
    );      
}

