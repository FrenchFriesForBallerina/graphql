import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';

import XP from './XP';

let offset = 0;
let step = 50;

const Result = () => {
  const { id, xp, setXP } = useContext(UserContext);

  if (id) {
    let result = XP(id, offset).then((result) => {
      console.log('results:', result);
      let sum = result.reduce((acc, current) => acc + current, 0);
      let length = result.length;
      console.log('length', length);
      console.log('sum', sum);
    });
  }
  return (
    <>
      {id && (
        <div className="result">
          {id}: {xp}
        </div>
      )}
    </>
  );
};

export default Result;
