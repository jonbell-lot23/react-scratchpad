let Songlists = [
  {
    id: "182",
    date: "2021-01-10",
    location: "New York, USA",
    quality: "0",
    setlist: [
      {
        id: "104",
        name: "Song One, set 1",
        name_phish: "Rift",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "Optimistic",
        standard_duration: "100",
        weighting: "100",
      },
      {
        id: "103",
        name: "Song Two, set 1",
        name_phish: "Round Room",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "Staircase",
        standard_duration: "300",
        weighting: "100",
      },
      {
        id: "102",
        name: "Song Three, set 1",
        name_phish: "Undermind",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "House of Cards",
        standard_duration: "300",
        weighting: "100",
      },
    ],
    id: "182",
    date: "2021-01-10",
    location: "New York, USA",
    quality: "0",
    setlist: [
      {
        id: "104",
        name: "Song One, set 2",
        name_phish: "Rift",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "Optimistic",
        standard_duration: "100",
        weighting: "100",
      },
      {
        id: "103",
        name: "Song Two, set 2",
        name_phish: "Round Room",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "Staircase",
        standard_duration: "300",
        weighting: "100",
      },
      {
        id: "102",
        name: "Song Three, set 2",
        name_phish: "Undermind",
        name_taylorswift: "x",
        name_gratefuldead: "x",
        name_pearljam: "x",
        name_radiohead: "House of Cards",
        standard_duration: "300",
        weighting: "100",
      },
    ],
  },
];

export function getSonglists() {
  return Songlists;
}

export function getSonglist(id) {
  return Songlists.find((Songlist) => Songlist.id === id);
}
