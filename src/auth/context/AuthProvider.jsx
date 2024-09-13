import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

export const AuthProvider = ({ children }) => {

    const initialState = {
        logged: false,
    }

    const init = () => {
        const user = JSON.parse(localStorage.getItem('user')); //localStorage es un mecanismo de almacenamiento web que permite a las aplicaciones guardar datos en el navegador del usuario. getItem('user') intenta recuperar el valor asociado con la clave 'user' del localStorage.Si no existe, devolverá null.

        return {
            logged: !!user, // !! en JavaScript es una forma concisa de convertir cualquier valor en su equivalente booleano.
            user,
        }
    }

    const [authState, dispatch] = useReducer(authReducer, initialState, init);

    const login = (name = '') => {

        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = { type: types.logout };
        dispatch(action);
    }

    return (
        <>
            <AuthContext.Provider value={{
                ...authState,
                login, logout
            }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}