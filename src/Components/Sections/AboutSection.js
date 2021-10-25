import {
    Box,
    Typography,
    useTheme
} from "@mui/material"

import CustomStyledButton from '../Buttons/CustomStyledButton'
import AnimatedScroll from '../AnimatedComponents/AnimatedScroll'

import AnimatedText from '../AnimatedComponents/AnimatedText'

function AboutSection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                textAlign: 'left',
                paddingTop: '250px'
            }}
        >
            <Box
                sx={{
                    marginLeft: '100px'
                }}
            >
                <Box
                    sx={{
                        marginBottom: '100px'
                    }}
                >
                    <AnimatedText
                        text="Hi,"
                        sx={{
                            fontWeight: 600,
                            color: '#FFF'
                        }}
                    >
                    </AnimatedText>

                    <AnimatedText
                        text="I'm "
                        sameLine
                        sx={{
                            fontWeight: 600,
                            color: '#FFF'
                        }}
                    >
                    </AnimatedText>
                    <AnimatedText
                        text="Joe"
                        sameLine
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.primary.dark
                        }}
                    />

                    <AnimatedText
                        text="Web Developer"
                        sx={{
                            fontWeight: 600,
                            color: '#FFF'
                        }}
                    />
                </Box>
                <CustomStyledButton
                    text="Contact Me!"
                />
            </Box>
            <Box
                sx={{
                    marginTop: '100px',
                    marginRight: '10px',
                    float: 'right',
                }}
            >
                <AnimatedScroll />
            </ Box>
            <Box
                sx={{
                    marginTop: '100px',
                    float: 'left',
                }}
            >
                <AnimatedScroll />
            </ Box>
        </Box>
    )
}

export default AboutSection;