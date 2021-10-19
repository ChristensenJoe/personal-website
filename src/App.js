import {
  useState
} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  createTheme,
  ThemeProvider
} from '@mui/material'

import lightmode from './Themes/lightmode'
import darkmode from './Themes/darkmode'

function App() {
  const [isDarkmode, setIsDarkmode] = useState(true)


  return (
    <ThemeProvider theme={isDarkmode ? darkmode : lightmode}>
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
