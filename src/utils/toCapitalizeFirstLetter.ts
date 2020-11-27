function toCapitalizeFirstLetter(str: any) {
  if (typeof str !== 'string') return null;
  if (str.length == 0) return str;
  const strArr = str.split('');
  return `${(strArr.shift() as String).toUpperCase()}${strArr.join('').toLowerCase()}`;
}

export default toCapitalizeFirstLetter;
