

import {
    Box
} from '@mui/material'

import { animated } from 'react-spring'

import AnimatedLetter from './AnimatedLetter'

function AnimatedText({ sx, text, sameLine=false, style, variant="h1" }) {

    const AnimatedBox = animated(Box)
    return (
        <AnimatedBox
            sx={{
                display: sameLine ? 'inline-block' : null,
            }}
            style={{
                ...style
            }}
        >
            {
                text.split(/(\w|\s+)/).map((letter, index) => (
                    <AnimatedLetter
                        sx={sx}
                        text={letter}
                        variant={variant}
                        key={index}
                    />
                ))
            }
        </AnimatedBox>
    )
}

export default AnimatedText;