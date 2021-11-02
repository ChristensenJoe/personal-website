import {useEffect, useRef, useState} from 'react'

import {
    Box,
    useTheme,
    Typography,
    useMediaQuery
} from '@mui/material'

import { useTrail } from 'react-spring'

import AnimatedScroll from '../AnimatedComponents/AnimatedScroll'
import AnimatedText from '../AnimatedComponents/AnimatedText'

function AboutSection() {
    const theme = useTheme();
    const isXS = useMediaQuery(theme.breakpoints.only("xs"))
    const data = [{
        text: 'All',
        sameLine: true,
        color: theme.palette.secondary.main
    },
    {
        text: " About",
        sameLine: true,
        color: theme.palette.secondary.main
    },
    {
        text: ' Me',
        sameLine: true,
        color: theme.palette.secondary.main
    }]

    const [isTransition, setIsTransition] = useState(false)

    const trail = useTrail(data.length, {
        from: isTransition ? { opacity: 0, x: 60, height: 0 } : {opacity: 0},
        to: isTransition ? { opacity: 1, x: 0, height: 10 } : null
    })
    
    useEffect(() => {

        const onScroll = (e) => {
            let scrollHeight = e.path[1].scrollY
            let propHeight = aboutRef.current.offsetHeight/2

            if (scrollHeight > propHeight) {
                setIsTransition(true)
            }
            else {
                
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const aboutRef = useRef();

    return (
        <Box
            sx={{
                marginTop: '300px',
            }}
            ref={aboutRef}
        >
            <Box
                sx={{
                    marginLeft: {
                        xs: '30px',
                        sm: '100px'
                    }
                }}
            >
                {
                    trail.map((styles, index) => (
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
                            style={styles}
                        />
                    ))
                }
                <Box
                    sx={{
                        marginTop: '100px',
                        width: {
                            xs: '95%',
                            md: '60%'
                        },
                        color: (theme) => theme.palette.primary.light,
                    }}
                >
                    <Typography
                        variant="h5"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu consectetur consectetur,
                        nisl nunc consectetur nisl, eget consectetur nisl nunc
                        eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu consectetur consectetur,
                        nisl nunc consectetur nisl, eget consectetur nisl nunc
                        eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: '50px'
                        }}
                        variant="h5"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu consectetur consectetur,
                        nisl nunc consectetur nisl, eget consectetur nisl nunc
                        eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu cons
                    </Typography>
                    <Typography
                        sx={{
                            marginTop: '50px'
                        }}
                        variant="h5"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, nisi eu consectetur consectetur,
                        nisl nunc consectetur nisl, eget cons
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: '20px'
                }}
            >
                <AnimatedScroll
                    sx={{
                        marginTop: '30px',
                        marginRight: '10px',
                        float: 'right',
                    }}
                />
                <AnimatedScroll
                    sx={{
                        marginTop: '30px',
                        float: 'left',
                    }}
                />
            </ Box>
        </Box>
    )
}

export default AboutSection;