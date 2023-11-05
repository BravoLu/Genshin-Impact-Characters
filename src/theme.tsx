import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    primary: {
      50: '#F7F7F7',
      100: '#E4E4E4',
      200: '#C1C1C1',
      // ... add more shades as needed
    },
    secondary: {
      50: '#F1E9FF',
      100: '#D4BFFF',
      200: '#B18EFF',
      // ... add more shades as needed
    },
    Electro: "#8B5FB2",
    Geo: "#91673C",
    Pyro: "#DF5B43",
    Cryo: "#BBFDFE",
    Hydro: "#70A0CC",
    Anemo: "#80E6BF",
    None: "#BEBEBE",
    Star: "#F7CE55",
    Background: "#141414"
    // ... define other color palettes
  },
  // ... other theme customizations
});

export default theme;
