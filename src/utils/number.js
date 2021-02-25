// Sometime we need to convert some format strings into number as string
// So we replace all other chars: space, _, -, (, )
// We do not use parseInt because some numbers will have 0 at the beginning char
// So we will other params of function to use parseInt if we need and we make sure first char is not 0
const parseStringToNumber = (str, isUseParseInt) => {
  if (str) {
    const newStr = str
      .replace(/ /g, '')
      .replace(/_/g, '')
      .replace(/\(/g, '')
      .replace(/\)/g, '')
      .replace(/-/g, '');
    return isUseParseInt ? parseInt(newStr, 10) : newStr;
  }
  return '';
};

export { parseStringToNumber };
