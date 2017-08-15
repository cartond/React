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
			<div>
				<input 
					value={this.state.term}
					onChange={event=>this.setState({ term: event.target.value })} 
				/>
			</div>
		)
	}
}

export default SearchBar;