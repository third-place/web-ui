import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../src/utils/Context';
import { Role } from '../../src/utils/role';

export default function ProtectedRoute({ component: Component, minimumRole }) {
  const {
    isAppLoaded,
    isLoggedIn,
    loggedInUser,
  } = useContext(Context);
  const navigate = useNavigate();

  const satisfiesRole = r => {
    switch (minimumRole || Role.user) {
      case Role.user:
        return true;
      case Role.moderator:
        return r === Role.moderator || r === Role.admin;
      case Role.admin:
        return r === Role.admin;
    }
  }

  useEffect(() => {
    if (isAppLoaded && (!isLoggedIn || !satisfiesRole(loggedInUser.role))) {
      navigate("/login");
    }
  }, [isAppLoaded]);

  return (
    <Component />
  );
}
