export const LOCAL_STORAGE_KEYS = {
  INACTIVITY_TIME: 'inactivity_time',
};

export const removeLocalStorageItem = key => {
  localStorage.removeItem(key);
};

export const setLocalStorageItem = (key, value) => {
  const enc = JSON.stringify(value);
  localStorage.setItem(key, window.btoa(unescape(encodeURIComponent(enc))));
};

export const getLocalStorageItem = key => {
  if (localStorage.getItem(key)) {
    const dec = decodeURIComponent(
      escape(window.atob(localStorage.getItem(key)))
    );
    return JSON.parse(dec);
  }
  return null;
};

export const getLocalStorageValue = val => {
  if (val) {
    const escapeString = escape(window.atob(val));
    try {
      const dec = decodeURIComponent(escapeString);
      return JSON.parse(dec);
    } catch (error) {
      return null;
    }
  }
  return null;
};
