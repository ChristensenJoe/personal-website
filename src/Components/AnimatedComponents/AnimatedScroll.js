
import {
    Box,
    Typography
} from "@mui/material"

import { useSpring, animated  } from 'react-spring'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function AnimatedScroll() {

    const spring = useSpring({
        from: {
          letterSpacing: '2px' 
        },
        to: {
          letterSpacing: '5px'
        },
        loop: { reverse: true },
        config: {
            duration: 800
        }
      })
  
      const AnimatedTypography = animated(Typography)

    return (
        <Box
                sx={{
                    textOrientation: 'mixed',
                    writingMode: 'vertical-rl'
                }}
            >
                <AnimatedTypography
                    sx={{
                        display: 'inline-block',
                        fontSize: '1.2rem',
                        color: "#FFF",
                        letterSpacing: '4px'
                    }}
                    style={spring}
                >
                    SCROLL
                </AnimatedTypography>
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