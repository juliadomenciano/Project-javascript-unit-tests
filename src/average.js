const average = (arr) => {
  if (arr.length === 0) {
    return undefined;
  } 
  let soma = 0;
  let media = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === 'string') {
      return undefined;
    } 
    soma += arr[i];
  }
  media = Math.round(soma / arr.length);
  return media;
};

module.exports = average;
