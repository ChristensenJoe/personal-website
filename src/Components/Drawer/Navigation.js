import {
    Drawer,
    List,
    useTheme,
    useMediaQuery
} from '@mui/material'

import DrawerHomeButton from '../Buttons/DrawerHomeButton'
import DrawerDivider from '../Dividers/DrawerDivider'
import DrawerItem from './DrawerItem'

function Navigation() {
    const theme = useTheme();
    const isMedium = useMediaQuery(theme.breakpoints.up('md'))
    return (
        <>
        {
            isMedium && <Drawer
            sx={{
                width: '140px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '140px',
                    boxSizing: 'border-box',
                }
            }}
            variant="permanent"
            anchor="left"
        >
            <DrawerHomeButton />
            <List
            sx={{
                marginTop: '200px'
            }}
            >
                <DrawerDivider />
                {
                    ['About', 'Skills', 'Portfolio', 'Contact'].map((text, index) => (
                        <DrawerItem key={index} text={text} />
                    ))
                }
            </List>
        </Drawer>
        }
        </>
    )
}

export default Navigation