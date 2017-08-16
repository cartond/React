//2-32
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js';

const API_KEY = 'AIzaSyCLKwgr81wdxAHnq0SF00MD5vXWu0zZ87E';

class App extends Component {
	constructor(props){
		super(props);

		this.state = { videos: [], selectedVideo: null };

		this.videoSearch('Jay-Z');
	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo:videos[0]
			});
			//same as this.setState({videos: videos});
		});
	}

	render(){
		return	(
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

ReactDom.render(<App />, document.querySelector('.container'));
// ReactDom.render(<SearchBar />, document.querySelector('.container'));