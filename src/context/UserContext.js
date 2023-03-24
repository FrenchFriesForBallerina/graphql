import { createContext } from 'react';

const UserContext = createContext({
  login: 'hey',
  setLogin: () => {},
  id: '0',
  setID: () => {},
  level: '',
  setLevel: () => {},
  /*xp: '',
  setXP: () => {}, */
});

export default UserContext;
