import { createContext } from 'react';
import LocalStorage from '../utils/LocalStorage';

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
    const [auth, setAuth] = LocalStorage('auth', null)
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;