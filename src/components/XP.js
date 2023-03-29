import queryXP from '../queries/queryXP';
import getData from '../utils/getData';

let allResults = [];

//var newArray = array1.concat(array2);

const XP = async (id, offset) => {
  let result = [];

  return getData(queryXP(id, offset)).then((data) => {
    console.log(data);
    /*     data.data.transaction.map((i) => {
      console.log('i', i.object);
      result.push(i.amount);
    });
    console.log('result length is', result.length);
    allResults.push(result);
    console.log('all', allResults); */
    return result;
  });
};

export default XP;
