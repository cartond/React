//1-15
import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar.js';

const API_KEY = 'AIzaSyCLKwgr81wdxAHnq0SF00MD5vXWu0zZ87E';

 // create a new comonenet that produces some html
const App = () => {
	return	(
		<div>
			<SearchBar />
		</div>
	);
}

 // take this component's generated html and
 // put it on the page

ReactDom.render(<App />, document.querySelector('.container'));
ReactDom.render(<SearchBar />, document.querySelector('.container'));