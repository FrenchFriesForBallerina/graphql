import './SearchForm.css';
import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import queryUser from '../queries/queryUser.js';
import { URL } from '../App';
import BasicUserInfo from './BasicUserInfo';
import Level from '../httpRequests/Level';

function SearchForm() {
  const [input, setInput] = useState('');
  const { login, setLogin, id, setID, level, setLevel } =
    useContext(UserContext);
  console.log('usercontext id:', id);
  const [feedback, setFeedback] = useState('');
  const requestUserIdLogin = queryUser(input);

  const getUserIdLogin = (e) => {
    e.preventDefault();

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: requestUserIdLogin,
      }),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (data.data.user[0]) {
            setLogin(data.data.user[0].login);
            setID(data.data.user[0].id);
            setFeedback('');
          } else {
            setLogin('');
            setID('');
            setFeedback('Username not found... Try another one?');
          }
        })
        .catch(() => console.log('User credentials invalid'))
        .finally(() => {
          setInput('');
        });
    });

    /*     requestUserLevel
      ? console.log('have level beginning')
      : console.log('not yet'); */
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
        {login && <BasicUserInfo login={login} id={id} />}
      </div>
    </div>
  );
}

export default SearchForm;
