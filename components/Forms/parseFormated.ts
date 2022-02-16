/**
 * Parse a localized number to a float.
 * @param {string} stringNumber - the localized number
 * @param {string} locale - [optional] the locale that the number is represented in. Omit this parameter to use the current locale.
 */
function parseLocaleNumber(stringNumber: string, formatter: Intl.NumberFormat) {
  const thousandSeparator = formatter.formatToParts(11111)[1].value;
  const decimalSeparator = formatter.formatToParts(1.1)[1].value;

  return parseFloat(
    stringNumber
      .replace(new RegExp("\\" + thousandSeparator, "g"), "")
      .replace(new RegExp("\\" + decimalSeparator), ".")
  );
}

export default function localNumber(
  locales: string | string[] | undefined = "en-US",
  formatOptions: Intl.NumberFormatOptions
) {
  const formatter = new Intl.NumberFormat(locales, formatOptions);

  return {
    formatNumber: formatter.format,
    parseNumber: (stringNumber: string) =>
      parseLocaleNumber(stringNumber, formatter),
  };
}
