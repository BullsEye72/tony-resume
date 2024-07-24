"use server";

/**
 * Server action : Formats the period between two dates into a string representation.
 * @param start_date - The start date of the period.
 * @param end_date - The end date of the period.
 * @returns A string representation of the period.
 */
export async function formatPeriod(start_date: Date, end_date: Date): Promise<string> {
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

  const startYear = start_date?.getFullYear();
  const endYear = end_date?.getFullYear();

  const startMonth = start_date?.getMonth();
  const endMonth = end_date?.getMonth();

  const startDay = start_date?.getDate();
  const endDay = end_date?.getDate();

  if (end_date === null) {
    //ex: Depuis Janv. 2015
    return `Depuis ${frenchMonthsAbrv[startMonth]} ${startYear}`;
  }

  if (start_date === null) {
    //ex: 2015
    return `${endYear}`;
  }

  if (endMonth == startMonth && endDay == startDay) {
    //ex: 2015-2020
    return `${startYear}-${endYear}`;
  }

  //ex: Janv. 2015 à Fév. 2020
  return `${frenchMonthsAbrv[startMonth]} ${startYear} à ${frenchMonthsAbrv[endMonth]} ${endYear}`;
}
