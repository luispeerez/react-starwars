import React from 'react';
import ReactDOM from 'react-dom'

console.log(React);

class Empire extends React.Component{
	render(){
		return(
			<h1>Empire</h1>
		);
	}
}

ReactDOM.render(
	<Empire/>,
	document.getElementById('root')
);