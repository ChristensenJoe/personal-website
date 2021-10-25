import {
    Box
} from '@mui/material'

import AboutSection from '../Components/Sections/AboutSection'
import Canvas from '../Components/Canvas/Canvas.tsx'


function HomePage() {

    return (
        <Box
            sx={{
                paddingLeft: {
                    xs: '0px',
                    md: '140px'
                },
                height: '2000px'
            }}
        >
            <Box
            >
                <Canvas/>
            </Box>
            <AboutSection
            />

        </Box>
    )
}

export default HomePage