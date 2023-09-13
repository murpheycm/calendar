const url = "https://date.nager.at";

async function specificCountry() => {
  const tail = "/api/v3/CountryInfo/{countryCode}";
  let apiURL = url + tail;
  const response = await fetch(apiURL);
  const myJson = await response.json();
  console.log(myJSON);
}

async function allCountries() => {
  const tail = "/api/v3/AvailableCountries";
  let apiURL = url + tail;
  const response = await fetch(apiURL);
  const myJson = await response.json();
  console.log(myJSON);
}

async function longWeekend() => {
  const tail = "/api/v3/LongWeekend/{year}/{countryCode}";
  let apiURL = url + tail;
  const response = await fetch(apiURL);
  const myJson = await response.json();
  console.log(myJSON);
}

async function publicHoliday() => {
  const tail = "/api/v3/PublicHolidays/{year}/{countryCode}";
  let apiURL = url + tail;
  const response = await fetch(apiURL);
  const myJson = await response.json();
  console.log(myJSON);
}

async function nextSevenDays() => {
  const tail = "/api/v3/NextPublicHolidaysWorldwide";
  let apiURL = url + tail;
  const response = await fetch(apiURL);
  const myJson = await response.json();
  console.log(myJSON);
}
