// React has diverged into two seperate libraries
import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCSn2OhAV4kiz6-HaygJRoksRTaymSSMKs'

// for multiline JS6 must use ()
// if Const App is a functional Component because it does not have any concept of state and is not a class
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
      // the same as this.setState({videos: videos}), only when params is equal to key
    })
  }

  render(){
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)
    // videos={} is called "passing props"
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}


// render <App /> instead of App because an instance of App must be created
ReactDOM.render(<App />, document.querySelector('.container'))
