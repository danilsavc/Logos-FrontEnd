export const truncateTitle = (str) => {
  if (str.length > 15) {
    return str.substring(0, 15) + " ...";
  }
  return str;
};

export const truncateText = (str) => {
  if (str.length > 70) {
    return str.substring(0, 70) + " ...";
  }
  return str;
};
