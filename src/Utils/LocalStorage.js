export const getUser = () => {
  const userData = localStorage.getItem("user");
  if (userData !== null) {
    return JSON.parse(userData);
    // console.log(JSON.parse(userData));
  }
  return null;
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  if (token !== null) {
    return token;
  }
  return null;
};

export const userId = () => {
  const userId = localStorage.getItem("userId");
  if (userId !== null) {
    return userId;
  }
  return null;
};

export const setUserCredentials = (user) => {
  const token = user.jwt_token ? user.jwt_token : "";
  const UserId = user.uid ? user.uid : "";
  localStorage.setItem("token", token);
  localStorage.setItem("userId", UserId);
  localStorage.setItem("user", user ? JSON.stringify(user) : null);
};

export const removeUserCredentials = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("userId")
  // localStorage.clear();
};
