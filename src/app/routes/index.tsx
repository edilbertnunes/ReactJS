import { BrowserRouter, Route, Routes as Switch,Navigate } from "react-router-dom";
import { Login } from "../pages";
import { Dashboard } from '../pages/dashboard/Dashboard';


export const Routes = () => {
    return (
    <BrowserRouter>
        <Switch>
        <Route path="/entrar" element={<Login />} />
        <Route path="/inicial" element={<Dashboard/>} />

        <Route path="*" element={<Navigate to="/pagina-inicial"/> } />
        </Switch>
    </BrowserRouter>
);
}
