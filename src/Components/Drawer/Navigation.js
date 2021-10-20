import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    Typography,
} from '@mui/material'

import DrawerHomeButton from '../Buttons/DrawerHomeButton'
import DrawerDivider from '../Dividers/DrawerDivider'

function Navigation() {

    return (
        <Drawer
            sx={{
                width: '140px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '140px',
                    boxSizing: 'border-box',
                },
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
                    ['About', 'Skills', 'Portfolio', 'Contact'].map(text => (
                        <Box
                        key={text}
                        sx={{
                            display: 'content'
                        }}
                        >
                        <ListItem
                            button
                        >
                            <ListItemText 
                            sx={{
                                textAlign: 'center',
                            }}
                            primary={
                                <Typography
                                    sx={{
                                        fontSize: '1.8rem',
                                        fontWeight: '300'
                                    }}
                                >
                                    {text}
                                </Typography>
                            } />
                        </ListItem>
                        <DrawerDivider />
                        </Box>
                    ))
                }
            </List>
        </Drawer>
    )
}

export default Navigation