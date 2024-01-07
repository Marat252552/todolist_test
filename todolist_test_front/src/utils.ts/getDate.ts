import dayjs from "dayjs";
import("dayjs/locale/ru");

const formatDate = (date: Date, format: string) => {
  return dayjs(date).locale("ru").format(format);
};

export const getDate = (date: Date) => formatDate(date, "DD.MM.YYYY");
