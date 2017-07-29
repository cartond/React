import React, { Component } from 'react';

//functional component
/*const SearchBar = () => {
	return <input />;
};*/

//changed to class to give the input functionality.
class SearchBar extends Component {
	render() {
		return <input onChange={event=>console.log(event.target.value)} />;
	}
}

export default SearchBar;