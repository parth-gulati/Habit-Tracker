import { createTheme } from "@mui/material";

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const pitchBlack = '#000001';

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange : `${arcOrange}`
        },
        primary: {
            main: `${pitchBlack}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        },
        h4: {
            fontWeight: 300
        }
    }
})