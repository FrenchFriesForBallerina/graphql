import queryXP from '../queries/queryXP';
import getData from '../utils/getData';

let sum = 0;
let length = 0;

const XP = async (id, offset) => {
  let result = [];

  return getData(queryXP(id, offset)).then((data) => {
    data.data.transaction.map((i) => {
      console.log('i', i.object);
      result.push(i.amount);
      return result;
    });
    return result;
  });
};

export default XP;
