import { useContext } from "react";
import apiClient from '../api/apiClient';
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
    const {state, dispatch} = useContext(AuthContext)
    const login = async (email: string, password: string) => {
        try{
            const response = await apiClient.post('/login', {email, password});
            dispatch({type: 'LOGIN', payload: response.data});
        }catch(error){
            console.error('Login Failed: ', error);
        }
    }

    const register = async (email: string, password: string, name: string) => {
        try {
            const response = await apiClient.post("/register", {email, password, name});
            dispatch({type: 'LOGIN', payload: response.data});
        } catch (error) {
            console.error("Registration Failed: ", error);
        }
    }

    const logout = () => {
        dispatch({type: 'LOGOUT'});
    }

    return {login, register, logout, isAuthenticated: state.isAuthenticated};
};

export default useAuth;