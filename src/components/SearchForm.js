import './SearchForm.css';
import { useContext, useState } from 'react';

import UserContext from '../context/UserContext';
import { URL } from '../App';
import BasicUserInfo from './BasicUserInfo';
import queryBasicUserData from '../queries/queryBasicUserData';

function SearchForm() {
  const [input, setInput] = useState('');
  const { login, setLogin, id, setID, level, setLevel } =
    useContext(UserContext);
  const [feedback, setFeedback] = useState('');

  const requestUserIdLoginLevel = queryBasicUserData(input.toString());

  const processBasicUserData = (data) => {
    if (data) {
      setLogin(input);
      setID(data.data.transaction[0].userId);
      setLevel(data.data.transaction[0].amount);
      setFeedback('');
    } else {
      setFeedback('Username not found... Try another one?');
    }
  };

  const getUserIdLogin = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: requestUserIdLoginLevel,
      }),
    }).then((res) => {
      res
        .json()
        .then((data) => processBasicUserData(data))
        .catch(() => {
          console.log('User credentials invalid');
          setID('');
          setLevel('');
          setLogin('');
        })
        .finally(() => {
          setInput('');
        });
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
                if (login) {
                  setLogin('');
                }
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
