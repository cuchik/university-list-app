const getWWWUrl = wwwUrl => {
  if (wwwUrl) {
    return wwwUrl.indexOf('www.') === 0 ? wwwUrl : `www.${wwwUrl}`;
  }
  return wwwUrl;
};
const getCorrectWebUrl = webUrl => {
  if (webUrl) {
    if (
      webUrl.indexOf('http://') === 0 ||
      webUrl.indexOf('https://') === 0 ||
      webUrl.indexOf('www.') === 0
    ) {
      if (webUrl.indexOf('http://') === 0) {
        return `http://${getWWWUrl(webUrl.replace('http://', ''))}`;
      }
      if (webUrl.indexOf('https://') === 0) {
        return `http://${getWWWUrl(webUrl.replace('https://', ''))}`;
      }
      return `http://${webUrl}`;
    }
    return `http://${getWWWUrl(webUrl)}`;
  }
  return webUrl;
};

export { getCorrectWebUrl };
