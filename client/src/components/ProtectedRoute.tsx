import React, { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import {Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}) => {
    const {isAuthorized} = useSelector((state:RootState) => state.user);
    if(isAuthorized){
        return <>{children}</>
    }
    return <Navigate to='/' />; // or you can return a redirect component or message
}

export default ProtectedRoute