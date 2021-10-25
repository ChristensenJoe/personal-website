
import { useState } from 'react'

import {
    Box,
    Typography
} from '@mui/material'

import AnimatedLetter from './AnimatedLetter'

function AnimatedText({ sx, text, sameLine=false }) {


    return (
        <Box
            sx={{
                display: sameLine ? 'inline-block' : null 
            }}
        >
            {
                text.split(/(\w|\s+)/).map((letter) => (
                    <AnimatedLetter
                        sx={sx}
                        text={letter}
                    />
                ))
            }
        </Box>
    )
}

export default AnimatedText;