export function getIconUrl(countryCode: string): string {
  return `https://s3-api.guavapay.com/public-icons/countries/1x1/${countryCode.toLowerCase()}.svg`;
}