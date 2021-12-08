import React, { useContext } from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthContext from '../context/auth';

import AuthRoutes from '../routes/auth.routes';
import AppRoutes from '../routes/app.routes';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;