import datejs from 'dayjs';

export const formatDateWithDay = (date: string | Date) => {
  return datejs(date).format('DD MMMM YYYY');
};

export const formatDate = (date: string | Date) => {
  return datejs(date).format('MMMM YYYY');
};
