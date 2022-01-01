import { createTheme } from "@mui/material";

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const primaryColor = '#DF1F2D';
const pitchBlack = `#000000`

export default createTheme({
    palette: {
        common: {
            arcBlue: `${arcBlue}`,
            arcOrange : `${arcOrange}`
        },
        primary: {
            main: `${primaryColor}`,
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h3: {
            fontWeight: 300
        },
        h6: {
            fontWeight: 300
        }
    }
})