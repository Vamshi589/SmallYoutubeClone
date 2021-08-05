import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";

const API_KEY = "AIzaSyCPlt9lHvB26Kz94bt838y5ZLrEYqJM1D0";

// Create a new component. This component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null,
		};
		this.videoSearch("reactjs");
	}

	videoSearch(term) {
		YTSearch({ key: API_KEY, term: term }, (videos) => {
			this.setState({ videos: videos, selectedVideo: videos[0] });
		});
	}
	render() {
		const videoSearch = _.debounce((term) => {
			this.videoSearch(term);
		}, 500);
		return (
			<div>
				<SearchBar
					onSearchTermChange={(term) => this.videoSearch(term)}
				/>
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList
					onVideoSelect={(selectedVideo) =>
						this.setState({ selectedVideo })
					}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

// Take this component's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector(".container"));
