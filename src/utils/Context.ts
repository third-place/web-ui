import React from 'react';

export default React.createContext({
  isLoggedIn: false,
  sessionToken: '',
  loggedInUser: { uuid: '' },
});
