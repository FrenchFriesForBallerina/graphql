import { createContext } from 'react';

const UserContext = createContext({
  login: '',
  setLogin: () => {},
  id: '',
  setID: () => {},
  level: '',
  setLevel: () => {},
  xp: 0,
  setXP: () => {},
});

export default UserContext;
