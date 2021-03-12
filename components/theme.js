import { createMuiTheme } from '@material-ui/core/styles';
import { PlayCircleFilledWhite } from '@material-ui/icons';
// import { red } from '@material-ui/core/colors';

// Create a theme instance.
const siteTheme = createMuiTheme({
  palette: {
    primary: { main: '#09043d', },
    contrastText: "#fff" //button text white instead of black
  },
  typography: {
    fontSize: 17,
    button: {
      textTransform: "none",
    }
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.      
  },
  // palette: {
  //   primary: {
  //     main: '#556cd6',
  //   },
  //   secondary: {
  //     main: '#19857b',
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  //   background: {
  //     default: '#fff',
  //   },
  // },
});

export default siteTheme;
