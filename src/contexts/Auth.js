import { createContext, useContext, useReducer } from "react";
import jwt_decode from "jwt-decode";

import { LOGOUT, SET_AUTH } from "../actions/auth";
import { authReducer, initialState } from "../reducers/auth";

export const AuthContext = createContext();
const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    
    const logout = () => {
        dispatch({ tipe: LOGOUT });
        localStorage.removeItem("auth");
    }
    const getUserInformation = () => jwt_decode(state.jwt);
    
    const login = ({ username, password }) => {
        //PETICION HTTP axios.post ({username, password} el server responde un token)
        //Una vez se ejecuta el metodo del login del contexto este realiza una peticion http(post) el backend /autentication
        //El backend verifica el usuario password enviado
        //Si el usuario y el password es correcto el backend crea un JWT (iat, nombre, id)
        //Si los datos de ingresos son incorrectos -> jwt : null
        

        if (username === "admin" && password === "1234") {
            const { jwt } = {
                ok: true,
                jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1YW4gQ2FybG9zIiwiaWF0IjoxNTE2MjM5MDIyfQ.BoWium1Xk2792z3pI87FCgIlzjlEdflcHnEYC1qagck"
            };
            setAuth({ jwt });
            localStorage.setItem("auth", jwt)
            return jwt;
        } else {
            return null;
        }
    }

    const setAuth = ({ jwt }) => {
        dispatch({ type: SET_AUTH, payload: { jwt } });
    }
    return (
        <Provider value={{ state, setAuth, logout, login, getUserInformation }}>
        {children}</Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be wrapped with AuthProvider");
    return context;
}
