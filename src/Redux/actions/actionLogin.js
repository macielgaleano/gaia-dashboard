export const actionLogin = (data) => {
  return {
    type: "LOGIN",
    payload: { data: data },
  };
};
