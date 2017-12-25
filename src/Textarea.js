import React from 'react';

export class Textarea extends React.Component{
	render(){
		return <textarea id="markdown" onChange={this.props.onchange} value={this.props.value}></textarea>
	}
}

