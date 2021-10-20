import { createTheme } from '@mui/material'

const darkmode = createTheme({
    typography: {
        fontFamily: "'Josefin Sans', sans-serif"
    },
    palette: {
        mode: "dark",
        primary: {
            main: "#80838A",
            light: "#ABA4AD",
            dark: "#6F757D",
        },
        secondary: {
            main: "#7D979E",
            light: "#F1F1EC",
            dark: "#313131"
        }
    }
})

export default darkmode;