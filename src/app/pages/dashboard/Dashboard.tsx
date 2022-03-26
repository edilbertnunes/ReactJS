import { Link } from "react-router-dom";
// Link equivale ao href do html

export const Dashboard = () =>{
    return (
    <div>
     <p>Dashboard</p>
     <Link to="/entrar">Login</Link>
      </div> 
    );      
}

