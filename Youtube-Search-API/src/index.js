import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY= 'AIzaSyAi3AHKvr1vm5U4wEhpYh6TvXoEmmU0mZM';



class App extends Component{
  constructor(props) {
    super(props);
    this.state = {videos: []};
    YTSearch({key: API_KEY, term: 'surfboards'}, (videos)=> {
      this.setState({ videos });
    });
  }
  render() {
                  return (
                    <div>
                      <SearchBar />
                      <VideoDetail video = {this.stat.videos[0]} />
                      <VideoList videos = {this.state.videos} />
                    </div>
                  )
}
}

ReactDOM.render(<App />, document.querySelector('.container'))