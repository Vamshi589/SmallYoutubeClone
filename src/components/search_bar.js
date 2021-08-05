import React, { Component } from "react";

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: "",
		};
	}
	render() {
		return (
			<div className="search-bar">
				<input
					placeholder="Search"
					value={this.state.term}
					onChange={(event) => this.onInputChange(event.target.value)}
				/>
			</div>
		);
	}

	onInputChange(event) {
		this.setState({ event });
		this.props.onSearchTermChange(event);
	}
}

export default SearchBar;
