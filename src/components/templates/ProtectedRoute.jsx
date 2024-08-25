import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import routes from '../../constant/routes';
import { loginNeedMessage, authInvalidMessage } from '../../utils/alert';

const ProtectedRoute = ({ children, requiredAdmin }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthVaild, setIsAuthValid] = useState(false);

  // eslint-disable-next-line consistent-return
  const checkUserToken = () => {
    const userToken = localStorage.getItem('accessToken');
    if (!userToken) {
      setIsLoggedIn(false);
      Swal.fire(loginNeedMessage);
      navigate(routes.login);
    }
    setIsLoggedIn(true);
  };

  const checkUserAuth = () => {
    // requiredAuth 중 하나라도 만족하면, 페이지 접근 권한 유효함
    const userAuth = localStorage.getItem('admin');
    if (!requiredAdmin || requiredAdmin.includes(userAuth)) {
      setIsAuthValid(true);
    } else {
      setIsAuthValid(false);
      Swal.fire(authInvalidMessage);
      navigate(routes.home);
    }
  };

  useEffect(() => {
    checkUserToken();
    checkUserAuth();
  }, [isLoggedIn, isAuthVaild]);

  // eslint-disable-next-line react/jsx-no-useless-fragment, react/destructuring-assignment
  return <>{isLoggedIn && isAuthVaild ? children : null}</>;
};
export default ProtectedRoute;
