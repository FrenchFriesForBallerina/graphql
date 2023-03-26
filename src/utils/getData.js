import { URL } from '../App';

const getData = async (query) => {
  const res = await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: query,
    }),
  });
  const json = res.json();
  return json;
};
export default getData;
