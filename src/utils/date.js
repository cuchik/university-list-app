import moment from 'moment';
import { DATE_TIME_FORMAT } from 'helper/const';

const getBEDate = val => {
  if (!val) return '';
  return moment(new Date(val))
    .utcOffset(0)
    .format(DATE_TIME_FORMAT.BE_DATE);
};
const getFEDate = val => {
  if (!val) return '';
  return moment(new Date(val))
    .utcOffset(0)
    .format(DATE_TIME_FORMAT.FE_DATE);
};

export { getBEDate, getFEDate };
