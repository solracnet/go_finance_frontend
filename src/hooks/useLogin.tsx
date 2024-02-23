import { useContext } from 'react';
import { AuthContext, AuthContextData } from '../Context';

const useLogin = (): AuthContextData => {
    const context = useContext(AuthContext);
    return context;
}

export default useLogin;
