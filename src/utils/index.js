import debounce from 'lodash/debounce';

const applySearch = debounce((val, cb) => {
  cb(val);
}, 300);

export { applySearch };
