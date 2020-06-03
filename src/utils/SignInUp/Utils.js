export const ValidationEmail = (str) => {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(str) && str.includes(".com") ? true : false;
};

export const ValidationPassword = (str) => {
  var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
  return !reg_pwd.test(str) ? false : true;
};
