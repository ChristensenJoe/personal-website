import { useState } from 'react'

import {
    Box,
    Typography
} from '@mui/material'

import { useSpring, animated } from 'react-spring'


function AnimatedLetter({ text, sx }) {
    const [isHover, setIsHover] = useState(false)

    if(text === " ") {
        text = '\u00A0'
    }

    const { x } = useSpring({
        from: { x: 0 },
        x: isHover ? 1 : 0,
        config: { duration: 1000 }
    })


    const AnimatedTypography = animated(Typography)

    return (
        <Box
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setTimeout(() => setIsHover(false), 1500)}
            sx={{
                display: 'inline-block',
            }}
        >
            <AnimatedTypography
                variant="h1"
                align="center"
                sx={{
                    ...sx,
                    display: 'inline-block',
                    color: (theme) => isHover ? theme.palette.secondary.main : sx.color || '#FFF',
                }}
                style={{
                    scale: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.93, 0.87, 1.15, 0.93, 1.15, 0.9, 1]
                    }),
                    // transform: x.to({
                    //     range: [0, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                    //     output: [0, 45, 90, 135, 180, 225, 270, 315, 360]
                    // })
                    //     .to(x => `rotate(${x}deg)`),
                }}
            >
                {text}
            </AnimatedTypography>
        </Box>
    )
}

export default AnimatedLetter;