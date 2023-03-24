import queryUser from '../queries/queryUser';

const getUserLoginAndID = (input) => {
  const request = queryUser(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: request,
      }),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (data.data.user[0]) {
            return [data.data.user[0].login, data.data.user[0].id];
          }
        })
        .catch(() => console.log('User credentials invalid'));
    });
  };
  handleSubmit();
};

export default getUserLoginAndID;
