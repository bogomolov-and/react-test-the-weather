const MontserratRegularLatin = require('assets/fonts/montserrat_regular_latin.woff2');

export default {
  '@font-face': [
    {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '400',
      src: `local('Montserrat Regular'), local('Montserrat-Regular'), url(${MontserratRegularLatin} format('woff2')`,
      unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
};
