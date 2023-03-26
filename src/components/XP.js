import { useContext, useState } from 'react';

import queryXP from '../queries/queryXP';
import getData from '../utils/getData';
import UserContext from '../context/UserContext';

const Result = (props) => {
  return <>{props.sum}</>;
};

let sum = 0;

const XP = () => {
  const { id, xp, setXP } = useContext(UserContext);
  let result = [];

  if (id) {
    getData(queryXP(id)).then((data) => {
      data.data.transaction.map((i) => {
        result.push(i.amount);
      });
      console.log('result', result);
      console.log(
        'result total:',
        (sum = result.reduce((acc, current) => acc + current, 0))
      );
    });
    console.log(sum);
  }

  return <>{id && <Result sum={sum} />}</>;
};

export default XP;
