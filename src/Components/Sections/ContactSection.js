import {
    Box,
    useTheme,
    useMediaQuery
} from '@mui/material'

import { useTrail, useSpring, animated } from 'react-spring'

import AnimatedText from '../AnimatedComponents/AnimatedText'

function ContactSection() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.only("xs"))
    console.log(isXS)
    const data = [{
        text: 'Contact',
        sameLine: true,
        color: theme.palette.secondary.main
    },
    {
        text: ' Me',
        sameLine: true,
        color: theme.palette.secondary.main
    }]

    const trail = useTrail(data.length, {
        from: { opacity: 0, x: 60, height: 0 },
        to: { opacity: 1, x: 0, height: 10 }
    })

    return (
        <Box
            sx={{
                marginTop: '300px'
            }}
        >
            <Box
                sx={{
                    height: '400px',
                    marginLeft: {
                        xs: '30px',
                        sm: '100px'
                    }
                }}
            >
                {
                    trail.map(({ ...style }, index) => (
                        <AnimatedText
                            text={data[index].text}
                            key={index}
                            sameLine={data[index].sameLine}
                            variant="h2"
                            sx={{
                                fontWeight: 600,
                                color: data[index].color,
                                position: 'relative'
                            }}
                            style={style}
                        />
                    ))
                }
            </Box>
        </Box>
    )
}

export default ContactSection;