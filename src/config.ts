export class Config {
  static appNodeId = '#app'
  static apiUrl = (zip: string) =>
    `https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5d8313d25c2d2fc9255aab7ef61d0d74&zip=${zip}`
}
