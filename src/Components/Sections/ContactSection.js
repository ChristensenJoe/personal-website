import { useState, useEffect, useRef } from 'react'

import {
    Box,
    useTheme,
    useMediaQuery
} from '@mui/material'

import { useTrail, config } from 'react-spring'

import AnimatedScroll from '../AnimatedComponents/AnimatedScroll'
import AnimatedText from '../AnimatedComponents/AnimatedText'

function ContactSection() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.only("xs"))
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

    const [isTransition, setIsTransition] = useState(false)


    const headerTrail = useTrail(data.length, {
        config: config.molasses,
        from: isTransition ? { opacity: 0, x: 60, height: 0 } : { opacity: 0 },
        to: isTransition ? { opacity: 1, x: 0, height: 10 } : null
    })

    useEffect(() => {

        const onScroll = (e) => {
            let scrollHeight = 800
            let propHeight = contactRef.current.getBoundingClientRect().y
            console.log("Highlight: ", propHeight)
            if (propHeight < scrollHeight) {
                setIsTransition(true)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const contactRef = useRef();

    return (
        <Box
            sx={{
                marginTop: '300px',
                
            }}
            ref={contactRef}
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
                    headerTrail.map(({ ...style }, index) => (
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