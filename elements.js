const elements = {
  "H": {
    "name": "Hydrogen"
  },
  "HE": {
    "name": "Helium"
  },
  "LI": {
    "name": "Lithium"
  },
  "BE": {
    "name": "Beryllium"
  },
  "B": {
    "name": "Boron"
  },
  "C": {
    "name": "Carbon"
  },
  "N": {
    "name": "Nitrogen"
  },
  "O": {
    "name": "Oxygen"
  },
  "F": {
    "name": "Fluorine"
  },
  "NE": {
    "name": "Neon"
  },
  "NA": {
    "name": "Sodium"
  },
  "MG": {
    "name": "Magnesium"
  },
  "AL": {
    "name": "Aluminium"
  },
  "SI": {
    "name": "Silicon"
  },
  "P": {
    "name": "Phosphorus"
  },
  "S": {
    "name": "Sulfur"
  },
  "CL": {
    "name": "Chlorine"
  },
  "AR": {
    "name": "Argon"
  },
  "K": {
    "name": "Potassium"
  },
  "CA": {
    "name": "Calcium"
  },
  "SC": {
    "name": "Scandium"
  },
  "TI": {
    "name": "Titanium"
  },
  "V": {
    "name": "Vanadium"
  },
  "CR": {
    "name": "Chromium"
  },
  "MN": {
    "name": "Manganese"
  },
  "FE": {
    "name": "Iron"
  },
  "CO": {
    "name": "Cobalt"
  },
  "NI": {
    "name": "Nickel"
  },
  "CU": {
    "name": "Copper"
  },
  "ZN": {
    "name": "Zinc"
  },
  "GA": {
    "name": "Gallium"
  },
  "GE": {
    "name": "Germanium"
  },
  "AS": {
    "name": "Arsenic"
  },
  "SE": {
    "name": "Selenium"
  },
  "BR": {
    "name": "Bromine"
  },
  "KR": {
    "name": "Krypton"
  },
  "RB": {
    "name": "Rubidium"
  },
  "SR": {
    "name": "Strontium"
  },
  "Y": {
    "name": "Yttrium"
  },
  "ZR": {
    "name": "Zirconium"
  },
  "NB": {
    "name": "Niobium"
  },
  "MO": {
    "name": "Molybdenum"
  },
  "TC": {
    "name": "Technetium"
  },
  "RU": {
    "name": "Ruthenium"
  },
  "RH": {
    "name": "Rhodium"
  },
  "PD": {
    "name": "Palladium"
  },
  "AG": {
    "name": "Silver"
  },
  "CD": {
    "name": "Cadmium"
  },
  "IN": {
    "name": "Indium"
  },
  "SN": {
    "name": "Tin"
  },
  "SB": {
    "name": "Antimony"
  },
  "TE": {
    "name": "Tellurium"
  },
  "I": {
    "name": "Iodine"
  },
  "XE": {
    "name": "Xenon"
  },
  "CS": {
    "name": "Cesium"
  },
  "BA": {
    "name": "Barium"
  },
  "LA": {
    "name": "Lanthanum"
  },
  "CE": {
    "name": "Cerium"
  },
  "PR": {
    "name": "Praseodymium"
  },
  "ND": {
    "name": "Neodymium"
  },
  "PM": {
    "name": "Promethium"
  },
  "SM": {
    "name": "Samarium"
  },
  "EU": {
    "name": "Europium"
  },
  "GD": {
    "name": "Gadolinium"
  },
  "TB": {
    "name": "Terbium"
  },
  "DY": {
    "name": "Dysprosium"
  },
  "HO": {
    "name": "Holmium"
  },
  "ER": {
    "name": "Erbium"
  },
  "TM": {
    "name": "Thulium"
  },
  "YB": {
    "name": "Ytterbium"
  },
  "LU": {
    "name": "Lutetium"
  },
  "HF": {
    "name": "Hafnium"
  },
  "TA": {
    "name": "Tantalum"
  },
  "W": {
    "name": "Tungsten"
  },
  "RE": {
    "name": "Rhenium"
  },
  "OS": {
    "name": "Osmium"
  },
  "IR": {
    "name": "Iridium"
  },
  "PT": {
    "name": "Platinum"
  },
  "AU": {
    "name": "Gold"
  },
  "HG": {
    "name": "Mercury"
  },
  "TL": {
    "name": "Thallium"
  },
  "PB": {
    "name": "Lead"
  },
  "BI": {
    "name": "Bismuth"
  },
  "PO": {
    "name": "Polonium"
  },
  "AT": {
    "name": "Astatine"
  },
  "RN": {
    "name": "Radon"
  },
  "FR": {
    "name": "Francium"
  },
  "RA": {
    "name": "Radium"
  },
  "AC": {
    "name": "Actinium"
  },
  "TH": {
    "name": "Thorium"
  },
  "PA": {
    "name": "Protactinium"
  },
  "U": {
    "name": "Uranium"
  },
  "NP": {
    "name": "Neptunium"
  },
  "PU": {
    "name": "Plutonium"
  },
  "AM": {
    "name": "Americium"
  },
  "CM": {
    "name": "Curium"
  },
  "BK": {
    "name": "Berkelium"
  },
  "CF": {
    "name": "Californium"
  },
  "ES": {
    "name": "Einsteinium"
  },
  "FM": {
    "name": "Fermium"
  },
  "MD": {
    "name": "Mendelevium"
  },
  "NO": {
    "name": "Nobelium"
  },
  "LR": {
    "name": "Lawrencium"
  },
  "RF": {
    "name": "Rutherfordium"
  },
  "DB": {
    "name": "Dubnium"
  },
  "SG": {
    "name": "Seaborgium"
  },
  "BH": {
    "name": "Bohrium"
  },
  "HS": {
    "name": "Hassium"
  },
  "MT": {
    "name": "Meitnerium"
  },
  "DS": {
    "name": "Darmstadtium"
  },
  "RG": {
    "name": "Roentgenium"
  },
  "CN": {
    "name": "Copernicium"
  },
  "NH": {
    "name": "Nihonium"
  },
  "FL": {
    "name": "Flerovium"
  },
  "MC": {
    "name": "Moscovium"
  },
  "LV": {
    "name": "Livermorium"
  },
  "TS": {
    "name": "Tennessine"
  },
  "OG": {
    "name": "Oganesson"
  },
  "UUE": {
    "name": "Ununennium"
  }
};