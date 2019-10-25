import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// TODO: import DesignKnowledge, CoinPrice, Uova, UnsplashSearch, Figure, Instafeed, PitchforkScraper, MinimalTwitter

import HomePage from './Pages/HomePage'
import IceBox from './Pages/IceBox'

function App() {
  return (
    <Router>
      <Switch>
        {/* Route to Home Page */}
        <Route exact path='/' component={HomePage} />

        {/* Route to Ice Box */}
        <Route path='/icebox' component={IceBox} />

        {/* Route to Design Knowledge */}
        {/* Route to Coin Price */}
        {/* Route to Uova */}
        {/* Route to Unsplash Search */}
        {/* Route to Figure */}
        {/* Route to Instafeed */}
        {/* Route to Pitchfork Scraper*/}
        {/* Route to Minimal Twitter */}
      </Switch>
    </Router>
  )
}

export default App
