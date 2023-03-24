function queryBasicUserData(username) {
  return `
  {
    transaction(
      where: {
        user: { login: { _eq: ${username} } }
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
