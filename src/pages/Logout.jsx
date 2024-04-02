import { useContext, useEffect } from 'react';
import Context from '../utils/Context.js';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const {
    setSessionToken,
    setLoggedInUser,
    setIsLoggedIn,
  } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    (async function() {
      setLoggedInUser(null);
      setIsLoggedIn(false);
      setSessionToken(null);
      localStorage.clear();
      navigate('/');
    })()
  }, []);

  return (
    <>
    </>
  );
}
