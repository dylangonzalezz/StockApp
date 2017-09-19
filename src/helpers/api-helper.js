var getStockData = (data) => {
  var resp = JSON.parse(data.bodyText);
  var TIME_SERIES_DAILY = Object.keys(resp)[1];
  var newestEntry = Object.keys(resp[TIME_SERIES_DAILY])[0];
  var stockValue = Object.keys(resp[TIME_SERIES_DAILY][newestEntry])[3];
  return resp[TIME_SERIES_DAILY][newestEntry][stockValue];
}

export {
  getStockData
}
