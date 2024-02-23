import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginAction } from '../actions/session';
import Context from '../utils/Context';

export function useLogin() {
  const {
    setLoggedInUser,
    setIsLoggedIn,
    setSessionToken,
    tryGetNotifications,
  } = useContext(Context);
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (response && response.status === 201) {
      (async function() {
        const data = await response.json();
        setLoggedInUser(data.user);
        setIsLoggedIn(true);
        setSessionToken(data.token);
        localStorage.setItem("token", data.token);
        await tryGetNotifications(data.token);
        navigate("/");
      })()
    }
  }, [response]);
  return async (email, password) => {
    const response = await loginAction(email, password);
    setResponse(response);
    return response;
  }
}
