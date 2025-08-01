import { months } from "./constants";

export const getMonthName = (index: number) => {
  return months[index];
};
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();

  return `${day} ${month}. ${year} y.`;
};
