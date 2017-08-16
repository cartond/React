import React, { Component } from 'react';

//functional component
/*const SearchBar = () => {
	return <input />;
};*/

//changed to class to give the input functionality.
class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		)
	}

	onInputChange(term){
		this.setState({ term });
		this.props.onSearchTermChange(term);
	}
}

export default SearchBar;