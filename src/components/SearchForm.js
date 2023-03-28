import './SearchForm.css';
import { useContext, useState } from 'react';

import UserContext from '../context/UserContext';
import BasicUserInfo from './BasicUserInfo';
import queryBasicUserData from '../queries/queryBasicUserData';
import getData from '../utils/getData';

function SearchForm() {
  const [input, setInput] = useState('');
  const { login, setLogin, id, setID, level, setLevel, xp, setXP } =
    useContext(UserContext);
  const [feedback, setFeedback] = useState('');

  const requestUserIdLoginLevel = queryBasicUserData(input);

  const processBasicUserData = (data) => {
    if (data) {
      setLogin(input);
      setID(data.data.transaction[0].userId);
      setLevel(data.data.transaction[0].amount);
      setFeedback('');
    }
  };

  const getUserIdLogin = (e) => {
    e.preventDefault();
    getData(requestUserIdLoginLevel)
      .then((data) => processBasicUserData(data))
      .catch(() => {
        console.log('User credentials invalid');
        setID('');
        setLevel('');
        setLogin('');
        setFeedback('Username not found... Try another one?');
      })
      .finally(() => {
        setInput('');
      });
  };

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="App">
      <div className="search">
        <form onSubmit={getUserIdLogin}>
          <label>
            <input
              className="inputfield"
              required
              type="text"
              value={input}
              placeholder="Type in a username"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </label>
          <button type="submit" className="searchButton">
            SEARCH
          </button>
        </form>
      </div>
      <div>
        <div>{feedback}</div>
        {login && <BasicUserInfo login={login} id={id} level={level} />}
      </div>
    </div>
  );
}

export default SearchForm;
