// React has diverged into two seperate libraries
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyCSn2OhAV4kiz6-HaygJRoksRTaymSSMKs'

YTSearch({key:API_KEY,term:'surfboards'}, function(data){
  console.log(data);
})

// for multiline JS6 must use ()
// if Const App is a functional Component because it does not have any concept of state and is not a class
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// render <App /> instead of App because an instance of App must be created
ReactDOM.render(<App />, document.querySelector('.container'))
