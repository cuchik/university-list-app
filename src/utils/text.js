const getInvitedUserCopyString = user => {
  return `Name: ${user.name}\nURL: ${user.url || ''}\nUsername: ${
    user.username
  }\nPassword: ${user.password}`;
};
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
const getRandomString = (charset, length) => {
  let returnChar = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0, n = charset.length; i < length; i++) {
    returnChar += charset.charAt(Math.floor(Math.random() * n));
  }
  return returnChar;
};
const generatePassword = () => {
  const upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChar = 'abcdefghijklmnopqrstuvwxyz';
  const numberChar = '0123456789';
  const specialChar = '!@#$%&';
  return `${getRandomString(upperChar, 1)}${getRandomString(
    lowerChar,
    5
  )}${getRandomString(numberChar, 1)}${getRandomString(specialChar, 1)}`;
};

const getStandardNameFromObj = obj => {
  const { first_name, last_name, middle_name } = obj;
  return `${first_name ? `${first_name} ` : ''}${
    middle_name ? `${middle_name} ` : ''
  }${last_name ? `${last_name}` : ''}`;
};

export {
  copyToClipboard,
  getInvitedUserCopyString,
  generatePassword,
  getStandardNameFromObj,
};
