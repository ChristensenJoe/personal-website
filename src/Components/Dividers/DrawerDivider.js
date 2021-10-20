import {
    Box
} from '@mui/material'

function DrawerDivider() {

    return (
        <Box 
            sx={{
                width: '100%',
                height: '3px',
                bgcolor: 'primary.main'
            }}
        />
    )
}

export default DrawerDivider;