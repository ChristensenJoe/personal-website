import {
    Box
} from '@mui/material'

import IntroSection from '../Components/Sections/IntroSection'
import AboutSection from '../Components/Sections/AboutSection'
import HighlightedProjectsSection from '../Components/Sections/HighlightedProjectsSection'
import ContactSection from '../Components/Sections/ContactSection'
import Canvas from '../Components/Canvas/Canvas.tsx'


function HomePage() {

    return (
        <Box
            sx={{
                marginLeft: {
                    xs: '0px',
                    md: '140px'
                }
            }}
        >
            <Box
            >
                <Canvas/>
            </Box>
            <IntroSection />
            <AboutSection />
            <HighlightedProjectsSection />
            <ContactSection />
        </Box>
    )
}

export default HomePage