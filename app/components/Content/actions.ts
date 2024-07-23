"use server";

export async function formatPeriod(start_date: Date, end_date: Date): string {
  const frenchMonthsAbrv = [
    "Janv.",
    "Fév.",
    "Mars",
    "Avr.",
    "Mai",
    "Juin",
    "Juil.",
    "Août",
    "Sept.",
    "Oct.",
    "Nov.",
    "Déc.",
  ];
  let periodString = "";

  const startYear = start_date.getFullYear();
  const endYear = end_date?.getFullYear();

  const startMonth = start_date.getMonth();
  const endMonth = end_date?.getMonth();

  const startDay = start_date.getDate();
  const endDay = end_date?.getDate();

  if (end_date === null) {
    return `Depuis ${startMonth}-${startYear}`;
  }

  if (endMonth == startMonth && endDay == startDay) {
    return `${startYear}-${endYear}`;
  }

  return `${startMonth}-${startYear} à ${endMonth}-${endYear}`;
}
