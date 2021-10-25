import { useState } from 'react'

import {
    Box,
    useTheme
} from "@mui/material"

import { useTrail, useSpring, animated } from 'react-spring'

import CustomStyledButton from '../Buttons/CustomStyledButton'
import AnimatedScroll from '../AnimatedComponents/AnimatedScroll'

import AnimatedText from '../AnimatedComponents/AnimatedText'

function AboutSection() {
    const theme = useTheme();
    const data = [{
        text: 'Hi,',
        sameLine: false,
        color: '#FFF'
    },
    {
        text: "I'm ",
        sameLine: true,
        color: '#FFF'
    },
    {
        text: 'Joe',
        sameLine: true,
        color: theme.palette.primary.dark
    },
    {
        text: 'Web Developer',
        sameLine: false,
        color: '#FFF'
    }]

    const trail = useTrail(data.length, {
        from: { opacity: 0, x: 60, height: 0 },
        to: { opacity: 1, x: 0, height: 110 }
    })

    const spring = useSpring({
        from: { opacity: 0, y: 60 },
        to: {opacity: 1, y: 0},
        config: { duration: 1000 }
    })

    const AnimatedBox = animated(Box)

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
                        marginBottom: '100px',
                        height: '400px'
                    }}
                >
                    {
                        trail.map(({ ...style }, index) => (
                            <AnimatedText
                                text={data[index].text}
                                key={index}
                                sameLine={data[index].sameLine}
                                sx={{
                                    fontWeight: 600,
                                    color: data[index].color
                                }}
                                style={style}
                            />
                        ))
                    }
                </Box>
                <AnimatedBox
                    sx={{
                        width: '232px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                    style={spring}
                >
                    <CustomStyledButton
                        text="Contact Me!"
                    />
                </AnimatedBox>
            </Box>
            <Box
                sx={{
                    marginTop: '100px'
                }}
            >
                <AnimatedScroll
                    sx={{
                        marginTop: '100px',
                        marginRight: '10px',
                        float: 'right',
                    }}
                />
                <AnimatedScroll
                    sx={{
                        marginTop: '100px',
                        float: 'left',
                    }}
                />
            </ Box>
        </Box>
    )
}

export default AboutSection;