import { createTheme } from '@mui/material/styles';
import { lightBlue } from '@mui/material/colors';

const PrimaryTheme = createTheme({
    palette: {
        primary: {
            main: lightBlue["700"],
            light: "#000"
        },
        secondary: {
            light: '#f5f5f5',
            main: '#eceff1',
            contrastText: '#000',
        },
    },
});

export default PrimaryTheme;
