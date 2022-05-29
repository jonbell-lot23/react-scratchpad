let shows = [
  { id: "182", date: "2021-01-10", location: "New York, USA", quality: "0" },
  { id: "181", date: "2021-01-09", location: "New York, USA", quality: "0" },
  { id: "180", date: "2021-01-08", location: "New York, USA", quality: "0" },
  { id: "179", date: "2021-01-07", location: "New York, USA", quality: "0" },
  { id: "178", date: "2021-01-08", location: "Boston, USA", quality: "0" },
  { id: "177", date: "2021-01-07", location: "Boston, USA", quality: "0" },
  { id: "176", date: "2021-01-05", location: "Chicago, USA", quality: "0" },
  { id: "175", date: "2021-01-04", location: "Chicago, USA", quality: "0" },
  { id: "174", date: "2021-12-31", location: "Los Angeles, USA", quality: "0" },
  { id: "173", date: "2021-12-30", location: "Los Angeles, USA", quality: "0" },
  { id: "172", date: "2021-12-29", location: "Los Angeles, USA", quality: "0" },
  {
    id: "171",
    date: "2021-12-26",
    location: "Auckland, New Zealand",
    quality: "0",
  },
  {
    id: "170",
    date: "2021-12-25",
    location: "Auckland, New Zealand",
    quality: "0",
  },
  {
    id: "169",
    date: "2021-12-24",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "168",
    date: "2021-12-23",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "167",
    date: "2021-12-05",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "166",
    date: "2021-12-04",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  { id: "165", date: "2021-07-31", location: "Joberg", quality: "0" },
  { id: "164", date: "2021-07-30", location: "Joberg", quality: "0" },
  { id: "163", date: "2021-07-29", location: "Joberg", quality: "0" },
  { id: "162", date: "2021-07-28", location: "Joberg", quality: "0" },
  { id: "161", date: "2021-07-26", location: "Cape Town", quality: "0" },
  { id: "160", date: "2021-07-25", location: "Cape Town", quality: "0" },
  { id: "159", date: "2021-07-24", location: "Cape Town", quality: "0" },
  { id: "158", date: "2021-07-22", location: "Luanda", quality: "0" },
  { id: "157", date: "2021-07-21", location: "Luanda", quality: "0" },
  { id: "156", date: "2021-07-18", location: "Kinshasha", quality: "0" },
  { id: "155", date: "2021-07-17", location: "Kinshasha", quality: "0" },
  {
    id: "154",
    date: "2021-07-14",
    location: "Abidjan, Ivory Coast",
    quality: "0",
  },
  {
    id: "153",
    date: "2021-07-13",
    location: "Abidjan, Ivory Coast",
    quality: "0",
  },
  { id: "152", date: "2021-07-11", location: "Lagos, Nigeria", quality: "0" },
  { id: "151", date: "2021-07-10", location: "Lagos, Nigeria", quality: "0" },
  {
    id: "150",
    date: "2021-07-04",
    location: "Mississauga, Canda",
    quality: "0",
  },
  {
    id: "149",
    date: "2021-07-01",
    location: "Mexico City, Mexico",
    quality: "0",
  },
  {
    id: "148",
    date: "2021-06-23",
    location: "Rio De Janeiro, Brazil",
    quality: "0",
  },
  {
    id: "147",
    date: "2021-06-22",
    location: "Rio De Janeiro, Brazil",
    quality: "0",
  },
  {
    id: "146",
    date: "2021-06-21",
    location: "Sao Paolo, Brazil",
    quality: "0",
  },
  {
    id: "145",
    date: "2021-06-20",
    location: "Sao Paolo, Brazil",
    quality: "0",
  },
  {
    id: "144",
    date: "2021-06-18",
    location: "Resistencia, Argentina",
    quality: "0",
  },
  {
    id: "143",
    date: "2021-06-16",
    location: "C\u00f3rdoba, Argentina",
    quality: "0",
  },
  {
    id: "142",
    date: "2021-06-15",
    location: "Buenos Aires, Argentina",
    quality: "0",
  },
  {
    id: "141",
    date: "2021-06-14",
    location: "Buenos Aires, Argentina",
    quality: "0",
  },
  { id: "140", date: "2021-06-10", location: "Toronto, Canada", quality: "0" },
  { id: "139", date: "2021-06-09", location: "Toronto, Canada", quality: "0" },
  { id: "138", date: "2021-06-08", location: "Toronto, Canada", quality: "0" },
  { id: "137", date: "2021-06-07", location: "Toronto, Canada", quality: "0" },
  { id: "136", date: "2021-06-06", location: "Montreal, Canada", quality: "0" },
  {
    id: "135",
    date: "2021-06-05",
    location: "Quebec City, Canada",
    quality: "0",
  },
  { id: "134", date: "2021-06-04", location: "Portland, US", quality: "0" },
  { id: "133", date: "2021-06-03", location: "Bangor, US", quality: "0" },
  { id: "132", date: "2021-05-14", location: "Boston, US", quality: "0" },
  { id: "131", date: "2021-05-07", location: "New York, US", quality: "0" },
  { id: "130", date: "2021-04-23", location: "Pittsburgh, US", quality: "0" },
  { id: "129", date: "2021-04-20", location: "Philadelphia, US", quality: "0" },
  {
    id: "128",
    date: "2021-04-17",
    location: "Washington, DC, US",
    quality: "0",
  },
  {
    id: "127",
    date: "2021-04-16",
    location: "Washington, DC, US",
    quality: "0",
  },
  {
    id: "126",
    date: "2021-04-15",
    location: "Washington, DC, US",
    quality: "0",
  },
  { id: "125", date: "2021-04-14", location: "Richmond, US", quality: "0" },
  {
    id: "124",
    date: "2021-04-13",
    location: "Virginia Beach, US",
    quality: "0",
  },
  { id: "123", date: "2021-04-11", location: "Winston-Salem", quality: "0" },
  { id: "122", date: "2021-04-10", location: "Winston-Salem", quality: "0" },
  { id: "121", date: "2021-04-09", location: "Greensboro, US", quality: "0" },
  { id: "120", date: "2021-04-07", location: "Raleigh, US", quality: "0" },
  { id: "119", date: "2021-04-05", location: "Miami, US", quality: "0" },
  { id: "118", date: "2021-04-04", location: "Miami, US", quality: "0" },
  { id: "117", date: "2021-04-02", location: "Atlanta, US", quality: "0" },
  { id: "116", date: "2021-04-01", location: "Atlanta, US", quality: "0" },
  { id: "115", date: "2021-03-31", location: "Atlanta, US", quality: "0" },
  { id: "114", date: "2021-03-29", location: "Nashville, US", quality: "0" },
  { id: "113", date: "2021-03-28", location: "Nashville, US", quality: "0" },
  { id: "112", date: "2021-03-27", location: "Memphis, US", quality: "0" },
  { id: "111", date: "2021-03-26", location: "Jackson, US", quality: "0" },
  { id: "110", date: "2021-03-25", location: "Baton Rogue, US", quality: "0" },
  { id: "109", date: "2021-03-23", location: "Houston, US", quality: "0" },
  { id: "108", date: "2021-03-22", location: "Houston, US", quality: "0" },
  { id: "107", date: "2021-03-21", location: "San Antonio, US", quality: "0" },
  { id: "106", date: "2021-03-20", location: "Austin, US", quality: "0" },
  { id: "105", date: "2021-03-19", location: "Dallas, US", quality: "0" },
  { id: "104", date: "2021-03-18", location: "Dallas, US", quality: "0" },
  { id: "103", date: "2021-03-16", location: "Albuquerque, US", quality: "0" },
  { id: "102", date: "2021-03-14", location: "El Paso, US", quality: "0" },
  { id: "101", date: "2021-03-12", location: "Tuscon, US", quality: "0" },
  { id: "100", date: "2021-03-10", location: "Phoenix, US", quality: "0" },
  { id: "99", date: "2021-03-09", location: "Phoenix, US", quality: "0" },
  { id: "98", date: "2021-03-08", location: "Las Vegas, US", quality: "0" },
  { id: "97", date: "2021-03-07", location: "Las Vegas, US", quality: "0" },
  { id: "96", date: "2021-03-05", location: "San Diego, US", quality: "0" },
  { id: "95", date: "2021-03-03", location: "Los Angeles, US", quality: "0" },
  { id: "94", date: "2021-03-02", location: "Los Angeles, US", quality: "0" },
  { id: "93", date: "2021-03-01", location: "Honolulu, US", quality: "0" },
  { id: "92", date: "2021-02-28", location: "Honolulu, US", quality: "0" },
  {
    id: "91",
    date: "2021-02-23",
    location: "Auckland, New Zealand",
    quality: "0",
  },
  {
    id: "90",
    date: "2021-02-22",
    location: "Auckland, New Zealand",
    quality: "0",
  },
  {
    id: "89",
    date: "2021-02-21",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "88",
    date: "2021-02-20",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "87",
    date: "2021-02-19",
    location: "Wellington, New Zealand",
    quality: "0",
  },
  {
    id: "86",
    date: "2021-02-18",
    location: "Picton, New Zealand",
    quality: "0",
  },
  {
    id: "85",
    date: "2021-02-17",
    location: "Nelson, New Zealand",
    quality: "0",
  },
  {
    id: "84",
    date: "2021-02-15",
    location: "Christchurch, New Zealand",
    quality: "0",
  },
  {
    id: "83",
    date: "2021-02-14",
    location: "Queenstown, New Zealand",
    quality: "0",
  },
  {
    id: "82",
    date: "2021-02-12",
    location: "Dunedin, New Zealand",
    quality: "0",
  },
  {
    id: "81",
    date: "2021-02-11",
    location: "Invercargill, New Zealand",
    quality: "0",
  },
  {
    id: "80",
    date: "2021-02-09",
    location: "Brisbane, Australia",
    quality: "0",
  },
  { id: "79", date: "2021-02-07", location: "Sydney, Australia", quality: "0" },
  { id: "78", date: "2021-02-06", location: "Sydney, Australia", quality: "0" },
  {
    id: "77",
    date: "2021-02-05",
    location: "Melbourne, Australia",
    quality: "0",
  },
  {
    id: "76",
    date: "2021-02-03",
    location: "Adelaide, Australia",
    quality: "0",
  },
  { id: "75", date: "2021-02-01", location: "Darwin, Australia", quality: "0" },
  { id: "74", date: "2021-01-30", location: "Perth, Australia", quality: "0" },
  {
    id: "73",
    date: "2021-01-27",
    location: "Singapore, Singapore",
    quality: "0",
  },
  {
    id: "72",
    date: "2021-01-26",
    location: "Singapore, Singapore",
    quality: "0",
  },
  {
    id: "71",
    date: "2021-01-25",
    location: "Singapore, Singapore",
    quality: "0",
  },
  { id: "70", date: "2021-01-23", location: "Bangkok, Thailand", quality: "0" },
  {
    id: "69",
    date: "2021-01-21",
    location: "Battambang, Cambodia",
    quality: "0",
  },
  {
    id: "68",
    date: "2021-01-20",
    location: "Phnom Penh, Cambodia",
    quality: "0",
  },
  { id: "67", date: "2021-01-18", location: "Can Tho, Vietnam", quality: "0" },
  {
    id: "66",
    date: "2021-01-17",
    location: "Ho Chi Minh City, Vietnam",
    quality: "0",
  },
  {
    id: "65",
    date: "2021-01-16",
    location: "Jakarta, Indonesia",
    quality: "0",
  },
  {
    id: "64",
    date: "2021-01-15",
    location: "Manila, Philippines",
    quality: "0",
  },
  { id: "63", date: "2021-01-12", location: "Taipei, Taiwan", quality: "0" },
  { id: "62", date: "2021-01-09", location: "Sapporo, Japan", quality: "0" },
  { id: "61", date: "2021-01-08", location: "Sendai, Japan", quality: "0" },
  { id: "60", date: "2021-01-03", location: "Tokyo, Japan", quality: "0" },
  { id: "59", date: "2021-01-02", location: "Osaka, Japan", quality: "0" },
  { id: "58", date: "2020-12-31", location: "Kyoto, Japan", quality: "0" },
  { id: "57", date: "2020-12-28", location: "Gaza, Israel", quality: "0" },
  { id: "56", date: "2020-12-27", location: "Hebron, Israel", quality: "0" },
  { id: "55", date: "2020-12-24", location: "Jerusalem, Israel", quality: "0" },
  { id: "54", date: "2020-12-22", location: "Tel-Aviv, Israel", quality: "0" },
  { id: "53", date: "2020-12-17", location: "Cairo, Egypt", quality: "0" },
  { id: "52", date: "2020-12-15", location: "Athens, Greece", quality: "0" },
  { id: "51", date: "2020-12-13", location: "Istanbul, Turkey", quality: "0" },
  { id: "50", date: "2020-12-12", location: "Ankara, Turkey", quality: "0" },
  { id: "49", date: "2020-12-11", location: "Minsk, Belarus", quality: "0" },
  { id: "48", date: "2020-12-09", location: "Kiev, Ukraine", quality: "0" },
  { id: "47", date: "2020-12-06", location: "Moscow, Russia", quality: "0" },
  {
    id: "46",
    date: "2020-12-05",
    location: "Saint Petersburg, Russia",
    quality: "0",
  },
  { id: "45", date: "2020-12-04", location: "Helsinki, Finland", quality: "0" },
  { id: "44", date: "2020-12-03", location: "Turku, Finland", quality: "0" },
  { id: "43", date: "2020-11-29", location: "Stockholm, Sweden", quality: "0" },
  { id: "42", date: "2020-11-28", location: "Trondheim, Norway", quality: "0" },
  { id: "41", date: "2020-11-27", location: "Oslo, Norway", quality: "0" },
  { id: "40", date: "2020-11-23", location: "Malmo, Sweden", quality: "0" },
  {
    id: "39",
    date: "2020-11-22",
    location: "Copengagen, Denmark",
    quality: "0",
  },
  {
    id: "38",
    date: "2020-11-21",
    location: "Amsterdam, Netherlands",
    quality: "0",
  },
  {
    id: "37",
    date: "2020-11-20",
    location: "Rotterdam, Netherlands",
    quality: "0",
  },
  { id: "36", date: "2020-11-18", location: "Antwerp, Belgium", quality: "0" },
  { id: "35", date: "2020-11-17", location: "Brussels, Belgium", quality: "0" },
  { id: "34", date: "2020-11-16", location: "Bruges, Belgium", quality: "0" },
  { id: "33", date: "2020-05-22", location: "Paris, France", quality: "0" },
  { id: "32", date: "2020-05-21", location: "Dijon, France", quality: "0" },
  {
    id: "31",
    date: "2020-05-20",
    location: "Zurich, Switzerland",
    quality: "0",
  },
  {
    id: "30",
    date: "2020-05-18",
    location: "Geneva, Switzerland",
    quality: "0",
  },
  { id: "29", date: "2020-05-17", location: "Madrid, Spain", quality: "0" },
  { id: "28", date: "2020-05-16", location: "Lisbon, Portugal", quality: "0" },
  { id: "27", date: "2020-05-12", location: "Halifax, Canada", quality: "0" },
  { id: "26", date: "2020-05-11", location: "Toronto, Canada", quality: "0" },
  {
    id: "25",
    date: "2020-05-10",
    location: "Quebec City, Canada",
    quality: "0",
  },
  { id: "24", date: "2020-05-09", location: "Montreal, Canada", quality: "0" },
  { id: "23", date: "2020-05-07", location: "Ottawa, Canada", quality: "0" },
  { id: "22", date: "2020-05-06", location: "Winnipeg, Canada", quality: "0" },
  { id: "21", date: "2020-05-05", location: "Regina, Canada", quality: "0" },
  { id: "20", date: "2020-05-04", location: "Saskatoon, Canada", quality: "0" },
  { id: "19", date: "2020-05-03", location: "Edmonton, Canada", quality: "0" },
  { id: "18", date: "2020-05-02", location: "Calgary, Canada", quality: "0" },
  {
    id: "17",
    date: "2020-04-30",
    location: "Victoria BC, Canada",
    quality: "0",
  },
  { id: "16", date: "2020-04-29", location: "Vancouver, Canada", quality: "0" },
  { id: "15", date: "2020-04-27", location: "Missoula, USA", quality: "0" },
  { id: "14", date: "2020-04-26", location: "Seattle, USA", quality: "0" },
  { id: "13", date: "2020-04-25", location: "Portland, USA", quality: "0" },
  {
    id: "12",
    date: "2020-04-24",
    location: "San Francisco, USA",
    quality: "0",
  },
  { id: "11", date: "2020-04-23", location: "Los Angeles, USA", quality: "64" },
  { id: "10", date: "2020-04-22", location: "Honolulu, USA", quality: "55" },
  {
    id: "9",
    date: "2020-04-21",
    location: "Tauranga, New Zealand",
    quality: "50",
  },
  {
    id: "8",
    date: "2020-01-26",
    location: "Hamilton, New Zealand",
    quality: "62",
  },
  {
    id: "7",
    date: "2020-01-22",
    location: "Auckland, New Zealand",
    quality: "59",
  },
  {
    id: "6",
    date: "2020-01-21",
    location: "Invercargill, New Zealand",
    quality: "58",
  },
  {
    id: "5",
    date: "2020-01-20",
    location: "Dunedin, New Zealand",
    quality: "55",
  },
  {
    id: "4",
    date: "2020-01-19",
    location: "Christchurch, New Zealand",
    quality: "61",
  },
  {
    id: "3",
    date: "2020-01-17",
    location: "Nelson, New Zealand",
    quality: "45",
  },
  {
    id: "2",
    date: "2020-01-15",
    location: "Upper Hutt, New Zealand",
    quality: "45",
  },
  {
    id: "1",
    date: "2020-01-14",
    location: "Wellington, New Zealand",
    quality: "38",
  },
];
export function getShows() {
  return shows;
}

export function getShow(id) {
  return shows.find((show) => show.id === id);
}
