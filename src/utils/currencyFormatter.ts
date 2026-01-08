export const currencyFormatter = (
  curr: "Euros" | "Dollars" | "Pounds" | "Yen",
  value: number
) => {
  let enCurr = undefined;
  let actualCurr = undefined;
  if (curr == "Dollars") {
    enCurr = "en-US";
    actualCurr = "USD";
  } else if (curr == "Euros") {
    enCurr = "en-DE";
    actualCurr = "EUR";
  } else if (curr == "Yen") {
    enCurr = "ja-JP";
    actualCurr = "JPY";
  } else if (curr == "Pounds") {
    enCurr = "en-GB";
    actualCurr = "GBP";
  }

  const format = new Intl.NumberFormat(enCurr, {
    style: "currency",
    currency: actualCurr,
  }).format(value);

  return format;
};
