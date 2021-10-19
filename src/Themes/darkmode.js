import { createTheme } from '@mui/material'

export default darkmode = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#ABA4AD",
            light: "#80838A",
            dark: "#6F757D",
        },
        secondary: {
            main: "#7D979E",
            light: "#F1F1EC",
            dark: "#313131"
        }
    }
})