function queryUser(username) {
  return `
    {
        user(where: { login: { _eq: ${username}}}) {
          id
          login
        }
    }
    `;
}

export default queryUser;
