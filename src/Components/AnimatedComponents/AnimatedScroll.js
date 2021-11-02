
import {
    Box,
    Typography
} from "@mui/material"

import { animated, useTrail } from 'react-spring'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function AnimatedScroll({sx}) {

    const data = ["S", "C", "R", "O", "L", "L"]

    const trail = useTrail(data.length, {
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        reset: true,
        delay: 500,
        config: { duration: 1500 },
        loop: { reverse: true}
    })

    const AnimatedTypography = animated(Typography)

    return (
        <Box
            sx={{
                textOrientation: 'mixed',
                writingMode: 'vertical-rl',
                ...sx
            }}
        >
            {
                trail.map(({...style }, index) => (
                    <AnimatedTypography
                        key={index}
                        style={style}
                        sx={{
                            display: 'inline-block',
                            fontSize: '1.2rem',
                            color: "#FFF",
                            letterSpacing: '4px'
                        }}
                    >
                        {data[index]}
                    </AnimatedTypography>
                ))
            }
            <KeyboardArrowDownIcon
                sx={{
                    fontSize: '1.6rem',
                    marginLeft: '5px',
                    color: '#FFF'
                }}
            />
        </Box>
    )
}

export default AnimatedScroll