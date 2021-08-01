export function getDateToString(date: Date) {
  return date.toISOString().slice(0, 10);
}

export function checkDate(now: Date, dateSelect: string) {
  const pass = now.toISOString().slice(0, 10);

  if (pass > dateSelect) {
    return false;
  } else {
    return true;
  }
}
