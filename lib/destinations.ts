// Generated from the approved design (Figma export, 1440px artboard).
// Positions are percentages of the destinations artwork box, so the layout
// scales identically on every laptop / desktop width.

export type DestinationTile = {
  name: string;
  image: string;
  left: number;
  top: number;
  width: number;
  height: number;
  /** "deal-in" animation: start offset (in % of the tile) and rotation */
  dx: number;
  dy: number;
  r: number;
  /** animation delay in ms and idle float distance in px */
  delay: number;
  bob: number;
};

export type GreyCard = { left: number; top: number; width: number; height: number; delay?: number; bob?: number };

export type MobileSlot = Omit<DestinationTile, "name" | "image"> & {
  countries: { name: string; image: string }[];
};

/** Aspect ratio of the desktop artwork box (width / height). */
export const DESKTOP_ASPECT = "1229.2 / 566.4";
export const desktopHeading = {
  "left": 31.02,
  "top": -1.871,
  "width": 41.124
};
export const desktopTiles: DestinationTile[] = [
  {
    "name": "Canada",
    "image": "/images/destinations/canada.webp",
    "left": 0.0,
    "top": 0.0,
    "width": 10.324,
    "height": 25.459,
    "dx": 449.6,
    "dy": -18.3,
    "r": -15.2,
    "delay": 280,
    "bob": -7
  },
  {
    "name": "Ireland",
    "image": "/images/destinations/ireland.webp",
    "left": 0.0,
    "top": 27.401,
    "width": 10.324,
    "height": 25.459,
    "dx": 449.6,
    "dy": -125.9,
    "r": -15.2,
    "delay": 390,
    "bob": -7
  },
  {
    "name": "Cyprus",
    "image": "/images/destinations/cyprus.webp",
    "left": 11.211,
    "top": 10.858,
    "width": 10.324,
    "height": 25.459,
    "dx": 341.0,
    "dy": -61.0,
    "r": -11.5,
    "delay": 210,
    "bob": 7
  },
  {
    "name": "Turkey",
    "image": "/images/destinations/turkey.webp",
    "left": 11.211,
    "top": 38.242,
    "width": 10.324,
    "height": 25.459,
    "dx": 341.0,
    "dy": -168.5,
    "r": -11.5,
    "delay": 320,
    "bob": 7
  },
  {
    "name": "USA",
    "image": "/images/destinations/usa.webp",
    "left": 22.421,
    "top": 32.415,
    "width": 10.324,
    "height": 25.459,
    "dx": 232.4,
    "dy": -145.6,
    "r": -7.9,
    "delay": 140,
    "bob": -7
  },
  {
    "name": "Malaysia",
    "image": "/images/destinations/malaysia.webp",
    "left": 22.421,
    "top": 59.657,
    "width": 10.324,
    "height": 25.459,
    "dx": 232.4,
    "dy": -252.6,
    "r": -7.9,
    "delay": 250,
    "bob": -7
  },
  {
    "name": "Finland",
    "image": "/images/destinations/finland.webp",
    "left": 33.632,
    "top": 43.256,
    "width": 10.324,
    "height": 25.459,
    "dx": 123.8,
    "dy": -188.2,
    "r": -4.2,
    "delay": 70,
    "bob": 7
  },
  {
    "name": "Sweden",
    "image": "/images/destinations/sweden.webp",
    "left": 33.632,
    "top": 70.498,
    "width": 10.324,
    "height": 25.459,
    "dx": 123.8,
    "dy": -295.2,
    "r": -4.2,
    "delay": 180,
    "bob": 7
  },
  {
    "name": "UK",
    "image": "/images/destinations/uk.webp",
    "left": 44.842,
    "top": 32.415,
    "width": 10.324,
    "height": 25.459,
    "dx": 15.2,
    "dy": -145.6,
    "r": -0.5,
    "delay": 0,
    "bob": -7
  },
  {
    "name": "Malta",
    "image": "/images/destinations/malta.webp",
    "left": 44.842,
    "top": 59.852,
    "width": 10.324,
    "height": 25.459,
    "dx": 15.2,
    "dy": -253.4,
    "r": -0.5,
    "delay": 110,
    "bob": -7
  },
  {
    "name": "Germany",
    "image": "/images/destinations/germany.webp",
    "left": 56.053,
    "top": 43.256,
    "width": 10.324,
    "height": 25.459,
    "dx": -93.3,
    "dy": -188.2,
    "r": 3.2,
    "delay": 70,
    "bob": 7
  },
  {
    "name": "France",
    "image": "/images/destinations/france.webp",
    "left": 56.053,
    "top": 70.692,
    "width": 10.324,
    "height": 25.459,
    "dx": -93.3,
    "dy": -296.0,
    "r": 3.2,
    "delay": 180,
    "bob": 7
  },
  {
    "name": "Australia",
    "image": "/images/destinations/australia.webp",
    "left": 67.263,
    "top": 32.415,
    "width": 10.324,
    "height": 25.459,
    "dx": -201.9,
    "dy": -145.6,
    "r": 6.8,
    "delay": 140,
    "bob": -7
  },
  {
    "name": "UAE",
    "image": "/images/destinations/uae.webp",
    "left": 67.263,
    "top": 59.852,
    "width": 10.324,
    "height": 25.459,
    "dx": -201.9,
    "dy": -253.4,
    "r": 6.8,
    "delay": 250,
    "bob": -7
  },
  {
    "name": "Spain",
    "image": "/images/destinations/spain.webp",
    "left": 78.474,
    "top": 10.858,
    "width": 10.324,
    "height": 25.459,
    "dx": -310.5,
    "dy": -61.0,
    "r": 10.5,
    "delay": 210,
    "bob": 7
  },
  {
    "name": "Poland",
    "image": "/images/destinations/poland.webp",
    "left": 78.474,
    "top": 38.242,
    "width": 10.324,
    "height": 25.459,
    "dx": -310.5,
    "dy": -168.5,
    "r": 10.5,
    "delay": 320,
    "bob": 7
  },
  {
    "name": "New Zealand",
    "image": "/images/destinations/newzealand.webp",
    "left": 89.676,
    "top": 0.0,
    "width": 10.324,
    "height": 25.459,
    "dx": -419.0,
    "dy": -18.3,
    "r": 14.2,
    "delay": 280,
    "bob": -7
  },
  {
    "name": "Hungary",
    "image": "/images/destinations/hungary.webp",
    "left": 89.676,
    "top": 27.401,
    "width": 10.324,
    "height": 25.459,
    "dx": -419.0,
    "dy": -125.9,
    "r": 14.2,
    "delay": 390,
    "bob": -7
  }
];
export const desktopGreys: GreyCard[] = [
  {
    "left": 0.0,
    "top": 54.643,
    "width": 10.324,
    "height": 45.374,
    "delay": 980,
    "bob": -7
  },
  {
    "left": 11.211,
    "top": 65.484,
    "width": 10.324,
    "height": 34.516,
    "delay": 910,
    "bob": 7
  },
  {
    "left": 22.421,
    "top": 86.9,
    "width": 10.324,
    "height": 13.118,
    "delay": 840,
    "bob": -7
  },
  {
    "left": 44.842,
    "top": 87.27,
    "width": 10.324,
    "height": 12.73,
    "delay": 700,
    "bob": -7
  },
  {
    "left": 67.263,
    "top": 87.27,
    "width": 10.324,
    "height": 12.73,
    "delay": 840,
    "bob": -7
  },
  {
    "left": 78.474,
    "top": 65.678,
    "width": 10.324,
    "height": 34.34,
    "delay": 910,
    "bob": 7
  },
  {
    "left": 89.676,
    "top": 54.82,
    "width": 10.324,
    "height": 45.18,
    "delay": 980,
    "bob": -7
  }
];

/** Phone: 4 staggered columns; each slot cycles through its countries. */
export const MOBILE_ASPECT = "100 / 64.407";
export const mobileSlots: MobileSlot[] = [
  {
    "countries": [
      {
        "name": "Canada",
        "image": "/images/destinations/canada.webp"
      },
      {
        "name": "Spain",
        "image": "/images/destinations/spain.webp"
      },
      {
        "name": "Cyprus",
        "image": "/images/destinations/cyprus.webp"
      }
    ],
    "left": 0,
    "top": 0.0,
    "width": 23.5,
    "height": 41.461,
    "dx": 162.8,
    "dy": -72.5,
    "r": -9.2,
    "delay": 135,
    "bob": -5
  },
  {
    "countries": [
      {
        "name": "Ireland",
        "image": "/images/destinations/ireland.webp"
      },
      {
        "name": "Poland",
        "image": "/images/destinations/poland.webp"
      }
    ],
    "left": 0,
    "top": 44.566,
    "width": 23.5,
    "height": 41.461,
    "dx": 162.8,
    "dy": -180.0,
    "r": -9.2,
    "delay": 245,
    "bob": -5
  },
  {
    "countries": [
      {
        "name": "USA",
        "image": "/images/destinations/usa.webp"
      },
      {
        "name": "Turkey",
        "image": "/images/destinations/turkey.webp"
      },
      {
        "name": "Malaysia",
        "image": "/images/destinations/malaysia.webp"
      }
    ],
    "left": 25.5,
    "top": 13.974,
    "width": 23.5,
    "height": 41.461,
    "dx": 54.3,
    "dy": -106.2,
    "r": -3.1,
    "delay": 45,
    "bob": 5
  },
  {
    "countries": [
      {
        "name": "UK",
        "image": "/images/destinations/uk.webp"
      },
      {
        "name": "Malta",
        "image": "/images/destinations/malta.webp"
      }
    ],
    "left": 25.5,
    "top": 58.539,
    "width": 23.5,
    "height": 41.461,
    "dx": 54.3,
    "dy": -213.7,
    "r": -3.1,
    "delay": 155,
    "bob": 5
  },
  {
    "countries": [
      {
        "name": "Australia",
        "image": "/images/destinations/australia.webp"
      },
      {
        "name": "UAE",
        "image": "/images/destinations/uae.webp"
      }
    ],
    "left": 51,
    "top": 13.974,
    "width": 23.5,
    "height": 41.461,
    "dx": -54.3,
    "dy": -106.2,
    "r": 3.1,
    "delay": 45,
    "bob": -5
  },
  {
    "countries": [
      {
        "name": "Germany",
        "image": "/images/destinations/germany.webp"
      },
      {
        "name": "Finland",
        "image": "/images/destinations/finland.webp"
      }
    ],
    "left": 51,
    "top": 58.539,
    "width": 23.5,
    "height": 41.461,
    "dx": -54.3,
    "dy": -213.7,
    "r": 3.1,
    "delay": 155,
    "bob": -5
  },
  {
    "countries": [
      {
        "name": "New Zealand",
        "image": "/images/destinations/newzealand.webp"
      },
      {
        "name": "Hungary",
        "image": "/images/destinations/hungary.webp"
      }
    ],
    "left": 76.5,
    "top": 0.0,
    "width": 23.5,
    "height": 41.461,
    "dx": -162.8,
    "dy": -72.5,
    "r": 9.2,
    "delay": 135,
    "bob": 5
  },
  {
    "countries": [
      {
        "name": "France",
        "image": "/images/destinations/france.webp"
      },
      {
        "name": "Sweden",
        "image": "/images/destinations/sweden.webp"
      }
    ],
    "left": 76.5,
    "top": 44.566,
    "width": 23.5,
    "height": 41.461,
    "dx": -162.8,
    "dy": -180.0,
    "r": 9.2,
    "delay": 245,
    "bob": 5
  }
];
export const mobileGreys: GreyCard[] = [
  {
    "left": 0,
    "top": 89.132,
    "width": 23.5,
    "height": 10.868
  },
  {
    "left": 76.5,
    "top": 89.132,
    "width": 23.5,
    "height": 10.868
  }
];
