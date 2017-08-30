export default dateFormat = (date) => {
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yyyy = date.getFullYear();
  return (`${mm}/${dd}/${yyyy}`);
};
