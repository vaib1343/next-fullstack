import { useEffect } from 'react';
import { useAppselector } from '../../../redux/hooks';

type AuthContextType = {
    children: JSX.Element;
};

const AuthContext = ({ children }: AuthContextType) => {
    const user = useAppselector((state) => state.auth.user);
    useEffect(() => {
        if (!Object.keys(user).length) {
            console.log('should call user value');
        }
    });
    return children;
};

export default AuthContext;
