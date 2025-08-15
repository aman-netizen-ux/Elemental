import React, {createContext, useReducer, ReactNode, Children} from 'react';

interface AuthState{
    isAuthenticated: boolean;
    user: any | null
}

const initialState: AuthState ={
    isAuthenticated: false,
    user: null,
};

type Action = 
    | {type: 'LOGIN'; payload: any}
    | {type: 'LOGOUT'};

const authReducer = (state: AuthState, action: Action): AuthState => {
    switch(action.type){
        case 'LOGIN':
            return {isAuthenticated: true, user: action.payload};
        case 'LOGOUT':
            return {isAuthenticated: false, user: null};
        default:
            return state;
    }
}

export const AuthContext = createContext<{
    state: AuthState;
    dispatch: React.Dispatch<Action>;
}>({state: initialState, dispatch: () => {} });

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    return (
        <AuthContext.Provider value = {{state, dispatch}}>
        {children}
        </AuthContext.Provider>
    );
};