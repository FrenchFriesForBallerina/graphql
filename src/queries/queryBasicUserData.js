function queryBasicUserData(login) {
  return `
  {
    transaction(
      where: {
        user: { login: { _eq: ${login} } }
        type: { _eq: "level" }
      }
      limit: 1
      order_by: { amount: desc }
    ) {
      userId
      amount
    }
  }
    `;
}

export default queryBasicUserData;
