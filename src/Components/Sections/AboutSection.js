import { useEffect, useRef, useState } from 'react'

import {
    Box,
    useTheme,
    Typography,
    useMediaQuery
} from '@mui/material'

import { useTrail, animated, useChain, useSpringRef, useSpring, config } from 'react-spring'

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

    const headerTrailRef = useSpringRef();
    const headerTrail = useTrail(data.length, {
        ref: headerTrailRef,
        config: config.molasses,
        from: isTransition ? { opacity: 0, x: 60, height: 0 } : { opacity: 0 },
        to: isTransition ? { opacity: 1, x: 0, height: 10 } : null
    })

    const firstTextSpringRef = useSpringRef();
    const firstTextSpring = useSpring({
        ref: firstTextSpringRef,
        config: config.gentle,
        from: isTransition ? { opacity: 0, x: 60 } : { opacity: 0 },
        to: isTransition ? { opacity: 1, x: 0 } : null
    })

    const secondTextSpringRef = useSpringRef();
    const secondTextSpring = useSpring({
        ref: secondTextSpringRef,
        config: config.gentle,
        from: isTransition ? { opacity: 0, x: -60 } : { opacity: 0 },
        to: isTransition ? { opacity: 1, x: 0 } : null
    })

    const thirdTextSpringRef = useSpringRef();
    const thirdTextSpring = useSpring({
        ref: thirdTextSpringRef,
        config: config.gentle,
        from: isTransition ? { opacity: 0, x: 60 } : { opacity: 0 },
        to: isTransition ? { opacity: 1, x: 0 } : null
    })

    useChain([headerTrailRef, firstTextSpringRef, secondTextSpringRef, thirdTextSpringRef], [0, 0.5, 0.7, 0.9])

    const texts = [
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nunc consectetur nisl, eget consectetur nisl nunc eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur,nisl nunc consectetur nisl, eget consectetur nisl nunc eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            sx: {

            },
            spring: firstTextSpring
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nunc consectetur nisl, eget consectetur nisl nunc eget nisl.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu cons",
            sx: {
                marginTop: '50px'
            },
            spring: secondTextSpring
        },
        {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nunc consectetur nisl, eget cons",
            sx: {
                marginTop: '50px'
            },
            spring: thirdTextSpring
        }
    ]

    useEffect(() => {

        const onScroll = (e) => {
            let scrollHeight = e.path[1].scrollY
            let propHeight = aboutRef.current.offsetHeight / 2

            if (scrollHeight > propHeight) {
                setIsTransition(true)
            }
        }

        window.addEventListener('scroll', onScroll)

        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    const aboutRef = useRef();

    const AnimatedBox = animated(Box)

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
                    headerTrail.map((styles, index) => (
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
                    {
                        texts.map((item) => (
                            <AnimatedBox
                                style={item.spring}
                            >
                                <Typography
                                    variant="h5"
                                    sx={item.sx}
                                >
                                    {item.text}
                                </Typography>
                            </AnimatedBox>
                        ))
                    }
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
        </Box >
    )
}

export default AboutSection;