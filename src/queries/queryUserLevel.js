function queryUserLevel(userID) {
  return `
    {
      transaction(
        where: {userId: {_eq: ${userID}}, type: {_eq: "level"}}
        limit: 1
        order_by: {amount: desc}
      ) {
        amount
      }
    }
      `;
}

export default queryUserLevel;
