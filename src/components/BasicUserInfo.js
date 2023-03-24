import { useContext } from 'react';
import UserContext from '../context/UserContext';
import './BasicUserInfo.css';

function BasicUserInfo() {
  const { login, id } = useContext(UserContext);

  return (
    <div className="info">
      <h1>Basic User Info</h1>
      <h3>login: {login}</h3>
      <h3>id: {id}</h3>
    </div>
  );
}

export default BasicUserInfo;
