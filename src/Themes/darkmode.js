import { createTheme, responsiveFontSizes } from '@mui/material'

const colors = {
    primary: {
        main: "#80838A",
        light: "#ABA4AD",
        dark: "#6F757D",
    },
    secondary: {
        main: "#71B8CB",
        light: "#F1F1EC",
        dark: "#313131"
    }
}

const theme = createTheme({
    typography: {
        fontFamily: "'Josefin Sans', sans-serif"
    },
    palette: {
        mode: "dark",
        ...colors
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 1,
                    color: colors.secondary.light,
                    '&:after': {
                        backgroundColor: 'transparent'
                    }
                }
            }
        },
        MuiButtonBase: {
            disableRipple: true
        }
    }
})

const darkmode = responsiveFontSizes(theme, {
    disableAlign: true
});

export default darkmode;