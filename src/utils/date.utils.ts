export function getDate(): string {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const year = currentDate.getFullYear().toString().slice(-2);

  return `${month}/${day}/${year}`;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}
