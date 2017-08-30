import moment from 'moment';

export const epochToHuman = epoch => moment.unix(epoch).format('MMMM Do, YYYY');

export const monthDayYearSlashed = timestamp => moment(timestamp).format('MM/DD/YYYY');
