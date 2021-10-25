import { useState } from 'react'
import {
    styled,
    Button,
    Typography,
    Box,
    alpha,
    useTheme
} from '@mui/material'

import { useSpring, animated, config } from 'react-spring'


function CustomStyledButton({ text }) {
    const theme = useTheme()
    const [state, toggle] = useState(false)
    const { x } = useSpring({
        x: state ? 1 : 0,
        config: { duration: 250 }
    })

    const StyledButton = styled(Button)(({ theme }) => (
        `
    
        `,
        {
            height: '50px',
            width: '250px',
            marginLeft: 'auto',
            marginRight: 'auto',
            '&:hover': {
                backgroundColor: 'transparent'
            }
        }));

    const AnimatedBox = animated(Box)
    const AnimatedStyledButton = animated(StyledButton)
    const AnimatedTypography = animated(Typography)

    return (
        <Box
            onMouseEnter={() => toggle(true)}
            onMouseLeave={() => toggle(false)}
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '250px',
            }}
        >
            <AnimatedBox
                sx={{
                    position: 'absolute',
                    height: '50px',
                }}
                style={{
                    width: x.to({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: ['0%', '25%', '35%', '45%', '55%', '65%', '75%', '90%']
                    }),
                    borderTop: x.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                    .to(x => `solid ${x}px ${theme.palette.secondary.main}`),
                    borderBottom: x.to({
                        range: [0, 1],
                        output: [0, 1]
                    })
                    .to(x => `solid ${x}px ${theme.palette.secondary.main}`)
                }}
            >
            </AnimatedBox>
            <AnimatedStyledButton
                disableFocusRipple
                sx={{
                    position: 'absolute'
                }}
                style={{
                    border: x.to({
                        range: [0, 0.1, 1],
                        output: [1, 0, 0]
                    })
                    .to(x => `solid ${x}px ${theme.palette.secondary.main}`)
                }}
            >
                <AnimatedTypography
                    sx={{
                        fontSize: '1rem'
                    }}
                    style={{
                        letterSpacing: x.to({
                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: ['1px', '2px', '3px', '4px', '5px', '6px', '6px', '6px']
                        })
                    }}
                >
                    {text}
                </AnimatedTypography>
            </AnimatedStyledButton>
        </Box>
    )
}

export default CustomStyledButton;