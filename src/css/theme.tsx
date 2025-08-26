import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: `'IBM Plex Mono', monospace`,
        h1: {
            fontSize: '3rem',
            fontWeight: 700,
            margin: '1rem 0',
            color: '#bebebeff',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            margin: '0.5rem 0',
            color: '#bebebeff',
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#ffffffcc',
        },
        h5: {
            fontSize: '1rem',
            fontWeight: 400,
            color: '#ffffffcc',
        },  
        body1: {
            fontSize: '1rem',
            color: '#ffffffcc',
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#003660',

        },
        secondary: {
            main: '#09847A',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#ffffffcc',
            secondary: '#bbbbbbcc',
        },
    },
})

export default theme;