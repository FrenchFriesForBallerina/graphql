import axios from 'axios';
import { URL } from '../App';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import queryUserLevel from '../queries/queryUserLevel';

export const GET_USER_LEVEL = async () => {
  const { login, setLogin, id, setID, level, setLevel } =
    useContext(UserContext);

  const query = queryUserLevel(id);
  const res = await axios.post(
    URL,
    JSON.stringify({
      query,
    })
  );
  console.log('hi from level.js');
  console.log('level is:', res.data.data?.transaction[0]?.amount);
  return <>res.data.data?.transaction[0]?.amount</>;
};
