function authHeader() {
  const {token} = JSON.parse(localStorage.getItem("user"));

  if (token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

export default authHeader;
