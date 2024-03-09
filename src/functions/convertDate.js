export const convertDate = (number) => {
  let myDate = new Date(number);
  return myDate.getDate() + "/" + (myDate.getMonth() + 1);
};
