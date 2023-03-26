function queryXP(id) {
  return `
  {
    transaction (
      where: {path: {_regex: "/johvi/div-01"}, type: {_eq: "up"}, object: {type: {_regex: "project"}}, userId: {_eq: ${id}}}
      order_by: {createdAt: desc}
    )  {
      createdAt
      amount
      object {
        name
        type
      }
    }
  }
  `;
}

export default queryXP;
