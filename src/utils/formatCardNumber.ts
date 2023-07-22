export default function formatCardNumber(number: string) {
  const formatted = number.replace(/\s/g, "").match(/.{1,4}/g);
  return formatted ? formatted.join(" ") : "";
}
