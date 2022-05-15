import { useEffect } from 'react';
import { useAppDispatch, useAppselector } from '../../../redux/hooks';
import { getUser } from '../../../redux/slice/authSlice';

type AuthContextType = {
    children: JSX.Element;
};

const AuthContext = ({ children }: AuthContextType) => {
    const user = useAppselector((state) => state.auth.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!Object.keys(user).length) {
            dispatch(getUser());
        }
    });
    return children;
};

export default AuthContext;
