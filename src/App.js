import './App.css';

import { useState } from 'react';
import UserContext from './context/UserContext';

import SearchForm from './components/SearchForm';
import XP from './components/XP';

export const URL = 'https://01.kood.tech/api/graphql-engine/v1/graphql';

const App = () => {
  const [login, setLogin] = useState('');
  const [id, setID] = useState('');
  const [level, setLevel] = useState('');
  const [xp, setXP] = useState([]);

  return (
    <UserContext.Provider
      value={{ login, setLogin, id, setID, level, setLevel, xp, setXP }}
    >
      <div>
        <SearchForm />
        <XP />
      </div>
    </UserContext.Provider>
  );
};

export default App;
