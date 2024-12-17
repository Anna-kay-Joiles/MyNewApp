import { format, parseISO, isToday, isTomorrow, differenceInDays } from 'date-fns';

export const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'MMM dd, yyyy');
};

export const formatTime = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'h:mm a');
};

export const isDateToday = (date: Date | string): boolean => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return isToday(parsedDate);
};

export const isDateTomorrow = (date: Date | string): boolean => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return isTomorrow(parsedDate);
};

export const getDaysDifference = (startDate: Date, endDate: Date): number => {
  return differenceInDays(endDate, startDate);
};

export const formatCalendarDate = (date: Date): string => {
  return format(date, 'yyyy-MM-dd');
};
