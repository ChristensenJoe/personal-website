import {useState} from 'react'

import {
    NavLink
} from 'react-router-dom'

import {
    Box,
    Typography
} from '@mui/material'

import logo from '../../Assets/DrawerAssets/logo.png'
import logoGif from '../../Assets/DrawerAssets/logo-gif-noloop.gif'
import logoGifReversed from '../../Assets/DrawerAssets/logo-gif-reversed-noloop.gif'

import DrawerDivider from '../Dividers/DrawerDivider'


function DrawerHomeButton() {
    const [displayedImg, setDisplayedImg] = useState(logo)

    return (
        <>
        <Box
            component={NavLink}
            to="/"
            sx={{
                width: '90%',
                alignSelf: 'center',
                height: 'auto',
                textAlign: 'center',
                marginBottom: '10px'
            }}
            onMouseEnter={() => setDisplayedImg(logoGif)}
            onMouseLeave={() => setDisplayedImg(logoGifReversed)}
        >
            <img 
                src={{
                    objectFit: 'cover'
                }}
                width="100%"
                alt="logo"
                src={displayedImg}
            />
        </Box>
            <Typography
            textAlign="center"
            sx={{
                fontSize: '1rem',
                color: (theme) => theme.palette.secondary.light,
                marginBottom: '5px'
            }}
            >
                Web Developer
            </Typography>
            <DrawerDivider />
        </>
    )
}

export default DrawerHomeButton;