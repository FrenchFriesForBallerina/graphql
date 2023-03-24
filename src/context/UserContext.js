import { createContext } from 'react';

const UserContext = createContext({
  login: '',
  setLogin: () => {},
  id: '',
  setID: () => {},
  level: '',
  setLevel: () => {},
  /*xp: '',
  setXP: () => {}, */
});

export default UserContext;
