import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        secondary: {
            light: '#263238',
            main: '#212121',
            contrastText: '#000',
        },
    },
});

export default DarkTheme;
