// React has diverged into two seperate libraries
import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCSn2OhAV4kiz6-HaygJRoksRTaymSSMKsx'

// for multiline JS6 must use ()
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// render <App /> instead of App because an instance of App must be created
ReactDOM.render(<App />, document.querySelector('.container'))
