import {
    Box
} from '@mui/material'

import AboutSection from '../Components/Sections/AboutSection'


function HomePage() {
    
    return (
        <Box
            sx={{
                paddingLeft: {
                    xs: '0px',
                    md: '140px'
                }
            }}
        >
            <AboutSection />

        </Box>
    )
}

export default HomePage