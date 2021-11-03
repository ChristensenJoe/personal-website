// import {
//   useRef
// } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  ThemeProvider,
  Box
} from '@mui/material'

import lightmode from './Themes/lightmode'
import darkmode from './Themes/darkmode'


import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SkillsPage from './Pages/SkillsPage'
import PortfolioPage from './Pages/PortfolioPage'
import ContactPage from './Pages/ContactPage'

import Navigation from './Components/Drawer/Navigation'

function App() {
  // const [isDarkmode, setIsDarkmode] = useState(true)
  const isDarkmode = true;

  return (
    <ThemeProvider theme={isDarkmode ? darkmode : lightmode}>
      <Router>
        <Box
        sx={{
          width: '100vw',
          backgroundColor: (theme) => theme.palette.secondary.dark,
        }}
        >
          <Navigation />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/skills">
            <SkillsPage />
          </Route>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
