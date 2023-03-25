import { URL } from '../App';

const getData = (query) =>
  new Promise((resolve, reject) =>
    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: query,
      }),
    })
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((error) => reject(error))
  );

export default getData;
