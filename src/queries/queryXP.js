function queryXP(id, offset) {
  return `
  {
    progress(where: {userId: {_eq: ${id}}, isDone: {_eq: true} , path: {_regex: "/johvi/div-01", _niregex: "/piscine-js|/piscine-js-2|/rust"}}
    offset: ${offset}) {
      path
    }
  }
  `;
}

export default queryXP;
