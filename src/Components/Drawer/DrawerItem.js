import { useState } from 'react'

import {
    ListItemButton,
    ListItemText,
    Box,
    Typography,
} from '@mui/material'

import {animated, useSpring} from 'react-spring'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import DrawerDivider from '../Dividers/DrawerDivider'

function DrawerItem({ text }) {
    const [isHover, setIsHover] = useState(false)

    const { x } = useSpring({
        from: {x: 0},
        x: isHover ? 1 : 0,
    })
    
    const AnimatedTypography = animated(Typography)

    return (
        <Box
            key={text}
            sx={{
                display: 'content'
            }}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <ListItemButton
                disableTouchRipple
                sx={{
                    '&:hover': { 
                        backgroundColor: "transparent" 
                    }
                }}
            >
                <ListItemText
                    sx={{
                        textAlign: 'center',
                    }}
                    primary={
                        <Box
                        sx={{
                            whiteSpace: 'nowrap',
                            textAlign: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                        >
                        {
                            isHover && <ChevronLeftIcon />
                        }
                        <AnimatedTypography
                            sx={{
                                fontWeight: '300',
                                display: 'inline-block'
                            }}
                            style={{
                                fontSize: x.to({
                                    range: [0,  1],
                                    output: ['1.4rem', '1.7rem']
                                })
                            }}
                        >
                            {text}
                        </AnimatedTypography>
                        {
                            isHover && <ChevronRightIcon />
                        }
                        </Box>
                    } />
            </ListItemButton>
            <DrawerDivider />
        </Box>
    )
}

export default DrawerItem;